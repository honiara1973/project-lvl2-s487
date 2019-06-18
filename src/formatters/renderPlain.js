const getValueTemplate = (value) => {
  if (value instanceof Object) {
    return '[complex Value]';
  }

  if (typeof value === 'string') {
    return `'${value}'`;
  }

  return value;
};

const renderPlain = (diff, path = '') => diff.map((it) => {
  const {
    key, type, valueBefore, valueAfter, children = [],
  } = it;

  const currentPath = path.length > 0 ? `${path}.${key}` : `${key}`;

  switch (type) {
    case 'deleted':
      return `Property '${currentPath}' was removed`;
    case 'added':
      return `Property '${currentPath}' was added with value: ${getValueTemplate(valueAfter)}`;
    case 'nested':
      return renderPlain(children, currentPath);
    case 'changedValue':
      return `Property '${currentPath}' was updated. From ${getValueTemplate(valueBefore)} to ${getValueTemplate(valueAfter)}`;
    default:
      return '';
  }
})
  .filter(it => it.length > 0)
  .join('\n');

export default renderPlain;
