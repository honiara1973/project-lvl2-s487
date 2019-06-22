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
  const allKeys = Object.keys({ ...obj1, ...obj2 });

  const differences = allKeys.reduce((acc, it) => {
    if (Object.keys(obj1).includes(it) && Object.keys(obj2).includes(it)) {
      if (obj1[it] instanceof Object && obj2[it] instanceof Object) {
        return [...acc, processData(it, 'nested', '', '', getDifferences(obj1[it], obj2[it]))];
      }

      return obj1[it] === obj2[it] ? [...acc, processData(it, 'sameValue', obj1[it], '')]
        : [...acc, processData(it, 'changedValue', obj1[it], obj2[it])];
    }

    if (!Object.keys(obj1).includes(it) && Object.keys(obj2).includes(it)) {
      return [...acc, processData(it, 'added', '', obj2[it])];
    }

    return [...acc, processData(it, 'deleted', obj1[it], '')];
  }, []);

  return differences;
};

export default getDifferences;
