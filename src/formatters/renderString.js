import _ from 'lodash';

const indent = 4;
const shift = 2;
const space = ' ';
const tab = num => space.repeat(num);

const valueToString = (data, gap) => {
  if (!(data instanceof Object)) {
    return data;
  }

  const entries = Object.entries(data);

  return `{\n${entries
    .map(([key, value]) => `${tab(gap + indent)}${key}: ${value}`)
    .join('\n')}\n${tab(gap)}}`;

  /*
    return `{\n${Object.entries(data)
    .map(([key, value]) => `${space.repeat(gap + indent)}${key}: ${value}`).join('\n')}\n${space.repeat(gap)}}`;
    */
};

const renderString = (diff, level = 1) => {
  const currentGap = level * indent;

  const differences = diff.map((it) => {
    const {
      key, type, valueBefore, valueAfter, children = [],
    } = it;

    /*
    const cases = {
      deleted: `${tab(currentGap - shift)}- ${key}: ${valueToString(valueBefore, currentGap)}`,
      added: `${tab(currentGap - shift)}+ ${key}: ${valueToString(valueAfter, currentGap)}`,
      nested: `${tab(currentGap)}${key}: ${renderString(children, level + 1)}`,
      sameValue: `${tab(currentGap)}${key}: ${valueToString(valueBefore, currentGap)}`,
      changedValue: [`${tab(currentGap - shift)}- ${key}: ${valueToString(valueBefore, currentGap)}`,
        `${tab(currentGap - shift)}+ ${key}: ${valueToString(valueAfter, currentGap)}`],
    };
*/

    switch (type) {
      case 'deleted':
        return `${tab(currentGap - shift)}- ${key}: ${valueToString(valueBefore, currentGap)}`;
      case 'added':
        return `${tab(currentGap - shift)}+ ${key}: ${valueToString(valueAfter, currentGap)}`;
      case 'nested':
        return `${tab(currentGap)}${key}: ${renderString(children, level + 1)}`;
      case 'sameValue':
        return `${tab(currentGap)}${key}: ${valueToString(valueBefore, currentGap)}`;
      case 'changedValue':
        return [`${tab(currentGap - shift)}- ${key}: ${valueToString(valueBefore, currentGap)}`,
          `${tab(currentGap - shift)}+ ${key}: ${valueToString(valueAfter, currentGap)}`];
      default:
        return 'Unknown key type';
    }
  });

  return `{\n${_.flatten(differences).join('\n')}\n${tab(currentGap - indent)}}`;
};

export default renderString;
