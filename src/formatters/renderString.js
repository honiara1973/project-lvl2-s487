const indent = ' ';

const valueToString = (data, currentIndent) => {
  if (data instanceof Object) {
    return `{\n${Object.entries(data)
      .map(([key, value]) => `${indent.repeat(currentIndent + 4)}${key}: ${value}`).join('\n')}\n${indent.repeat(currentIndent)}}`;
  }

  return data.toString();
};

const renderString = (ast, level = 1) => {
  const currentIndent = level * 4;

  return `{\n${ast.map((it) => {
    const {
      key, type, valueBefore, valueAfter, children = [],
    } = it;

    switch (type) {
      case 'deleted':
        return `${indent.repeat(currentIndent - 2)}- ${key}: ${valueToString(valueBefore, currentIndent)}`;
      case 'added':
        return `${indent.repeat(currentIndent - 2)}+ ${key}: ${valueToString(valueAfter, currentIndent)}`;
      case 'nested':
        return `${indent.repeat(currentIndent)}${key}: ${renderString(children, level + 1)}`;
      case 'sameValue':
        return `${indent.repeat(currentIndent)}${key}: ${valueToString(valueBefore, currentIndent)}`;
      case 'changedValue':
        return `${indent.repeat(currentIndent - 2)}- ${key}: ${valueToString(valueBefore, currentIndent)}\n${indent.repeat(currentIndent - 2)}+ ${key}: ${valueToString(valueAfter, currentIndent)}`;
      default:
        return '';
    }
  }).join('\n')}\n${indent.repeat(currentIndent - 4)}}`;
};

export default renderString;
