import _ from 'lodash';

const GAP = 4;
const SHIFT = 2;
const space = ' ';

const valueToString = (data, gap) => {
  if (!(data instanceof Object)) {
    return data;
  }

  return `{\n${Object.entries(data)
    .map(([key, value]) => `${space.repeat(gap + GAP)}${key}: ${value}`).join('\n')}\n${space.repeat(gap)}}`;
};

const renderString = (diff, level = 1) => {
  const currentGap = level * GAP;

  const differences = diff.map((it) => {
    const {
      key, type, valueBefore, valueAfter, children = [],
    } = it;

    switch (type) {
      case 'deleted':
        return `${space.repeat(currentGap - SHIFT)}- ${key}: ${valueToString(valueBefore, currentGap)}`;
      case 'added':
        return `${space.repeat(currentGap - SHIFT)}+ ${key}: ${valueToString(valueAfter, currentGap)}`;
      case 'nested':
        return `${space.repeat(currentGap)}${key}: ${renderString(children, level + 1)}`;
      case 'sameValue':
        return `${space.repeat(currentGap)}${key}: ${valueToString(valueBefore, currentGap)}`;
      case 'changedValue':
        return [`${space.repeat(currentGap - SHIFT)}- ${key}: ${valueToString(valueBefore, currentGap)}`,
          `${space.repeat(currentGap - SHIFT)}+ ${key}: ${valueToString(valueAfter, currentGap)}`];
      default:
        return 'Unknown key type';
    }
  });

  return `{\n${_.flatten(differences).join('\n')}\n${space.repeat(currentGap - GAP)}}`;
};

export default renderString;
