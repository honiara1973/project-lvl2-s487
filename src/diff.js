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

const getDifferences = (obj1, obj2) => {
  const allKeys = _.union(_.keys(obj1), _.keys(obj2));

  const differences = allKeys.map((it) => {
    if (_.has(obj1, it) && _.has(obj2, it)) {
      if (obj1[it] instanceof Object && obj2[it] instanceof Object) {
        return processData(it, 'nested', '', '', getDifferences(obj1[it], obj2[it]));
      }

      return obj1[it] === obj2[it] ? processData(it, 'sameValue', obj1[it], '')
        : processData(it, 'changedValue', obj1[it], obj2[it]);
    }

    if (!_.has(obj1, it) && _.has(obj2, it)) {
      return processData(it, 'added', '', obj2[it]);
    }

    return processData(it, 'deleted', obj1[it], '');
  });

  return differences;
};

export default getDifferences;
