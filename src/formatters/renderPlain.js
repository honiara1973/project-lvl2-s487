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

  const cases = {
    deleted: `Property '${currentPath}' was removed`,
    added: `Property '${currentPath}' was added with value: ${getValueTemplate(valueAfter)}`,
    nested: renderPlain(children, currentPath),
    sameValue: '',
    changedValue: `Property '${currentPath}' was updated. From ${getValueTemplate(valueBefore)} to ${getValueTemplate(valueAfter)}`,
  };

  return cases[type];
})
  .filter(it => it.length > 0)
  .join('\n');

export default renderPlain;
