const GAP = 2;

const renderJson = diff => diff.map((it) => {
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

export default diff => JSON.stringify(renderJson(diff), ' ', GAP);
