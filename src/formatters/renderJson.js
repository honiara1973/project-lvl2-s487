const renderJson = ast => ast.map((it) => {
  const {
    key, type, valueBefore, valueAfter, children = [],
  } = it;
  const value = valueBefore;

  switch (type) {
    case 'deleted':
      return { key, type, valueBefore };
    case 'added':
      return { key, type, valueAfter };
    case 'nested':
      return { key, type, children: renderJson(children) };
    case 'sameValue':
      return { key, type, value };
    case 'changedValue':
      return {
        key, type, valueBefore, valueAfter,
      };
    default:
      return '';
  }
});

export default ast => JSON.stringify(renderJson(ast), ' ', 2);
