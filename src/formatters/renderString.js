const SPACE = ' ';
const GAP = 4;
const SHIFT = 2;

const valueToString = (data, gap) => {
  if (data instanceof Object) {
    return `{\n${Object.entries(data)
      .map(([key, value]) => `${SPACE.repeat(gap + GAP)}${key}: ${value}`).join('\n')}\n${SPACE.repeat(gap)}}`;
  }

  return data.toString();
};

const renderString = (diff, level = 1) => {
  const currentGap = level * GAP;

  return `{\n${diff.map((it) => {
    const {
      key, type, valueBefore, valueAfter, children = [],
    } = it;

    switch (type) {
      case 'deleted':
        return `${SPACE.repeat(currentGap - SHIFT)}- ${key}: ${valueToString(valueBefore, currentGap)}`;
      case 'added':
        return `${SPACE.repeat(currentGap - SHIFT)}+ ${key}: ${valueToString(valueAfter, currentGap)}`;
      case 'nested':
        return `${SPACE.repeat(currentGap)}${key}: ${renderString(children, level + 1)}`;
      case 'sameValue':
        return `${SPACE.repeat(currentGap)}${key}: ${valueToString(valueBefore, currentGap)}`;
      case 'changedValue':
        return `${SPACE.repeat(currentGap - SHIFT)}- ${key}: ${valueToString(valueBefore, currentGap)}\n${SPACE.repeat(currentGap - SHIFT)}+ ${key}: ${valueToString(valueAfter, currentGap)}`;
      default:
        return '';
    }
  }).join('\n')}\n${SPACE.repeat(currentGap - GAP)}}`;
};

export default renderString;
