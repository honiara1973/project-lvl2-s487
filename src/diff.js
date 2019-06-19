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

const getDiffArray = (obj1, obj2) => {
  // const keys1 = Object.keys(obj1);
  // const keys2 = Object.keys(obj2);

  const allKeys = Object.keys(obj1).concat(Object.keys(obj2))
    .reduce((acc, it) => (acc.includes(it) ? acc : acc.concat(it)), []);

  /*
  const allKeys = keys1.concat(keys2)
    .reduce((acc, it) => (acc.includes(it) ? acc : acc.concat(it)), []);
*/

  const diffArray = allKeys.reduce((acc, it) => {
    if (obj1[it] instanceof Object && obj2[it] instanceof Object) {
      return [...acc, processData(it, 'nested', '', '', getDiffArray(obj1[it], obj2[it]))];
    }

    if (Object.keys(obj1).includes(it) && Object.keys(obj2).includes(it)) {
      return obj1[it] === obj2[it] ? [...acc, processData(it, 'sameValue', obj1[it], '')]
        : [...acc, processData(it, 'changedValue', obj1[it], obj2[it])];
    }

    if (!Object.keys(obj1).includes(it) && Object.keys(obj2).includes(it)) {
      return [...acc, processData(it, 'added', '', obj2[it])];
    }

    if (Object.keys(obj1).includes(it) && !Object.keys(obj2).includes(it)) {
      return [...acc, processData(it, 'deleted', obj1[it], '')];
    }

    return [...acc];
  }, []);

  return diffArray;
};

export default getDiffArray;
