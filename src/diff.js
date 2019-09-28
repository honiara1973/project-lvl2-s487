import _ from 'lodash';

const processData = (key, type, valueBefore, valueAfter, children = []) => {
  const entry = {
    key,
    type,
    valueBefore,
    valueAfter,
    children,
  };

  return entry;
};

const cases = [
  {
    check: (key, obj1, obj2) => obj1[key] instanceof Object && obj2[key] instanceof Object,
    process: (key, obj1, obj2, fn) => processData(key, 'nested', '', '', fn(obj1[key], obj2[key])),
  },
  {
    check: (key, obj1, obj2) => obj1[key] === obj2[key],
    process: (key, obj1) => processData(key, 'sameValue', obj1[key], ''),
  },
  {
    check: (key, obj1, obj2) => _.has(obj1, key) && _.has(obj2, key),
    process: (key, obj1, obj2) => processData(key, 'changedValue', obj1[key], obj2[key]),
  },
  {
    check: (key, obj1, obj2) => !_.has(obj1, key) && _.has(obj2, key),
    process: (key, obj1, obj2) => processData(key, 'added', '', obj2[key]),
  },
  {
    check: (key, obj1, obj2) => _.has(obj1, key) && !_.has(obj2, key),
    process: (key, obj1) => processData(key, 'deleted', obj1[key], ''),
  },
];

const getDifferences = (obj1, obj2) => {
  const allKeys = _.union(_.keys(obj1), _.keys(obj2));

  const differences = (allKeys.map(it => (cases
    .find(({ check }) => check(it, obj1, obj2))
    .process(it, obj1, obj2, getDifferences)
  )));

  return differences;
};

export default getDifferences;
