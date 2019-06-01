const CompareFunction = {

  getIdenticalKeys: (obj1, obj2) => Object.entries(obj1)
    .filter(([key]) => Object.keys(obj2).includes(key)),


  getIdenticalValues: (obj1, obj2) => {
    const filtered = CompareFunction.getIdenticalKeys(obj1, obj2);

    const identicalValues = filtered.filter(([key, value]) => value === obj2[key]);

    return identicalValues
      .map(([key, value]) => `  ${key}: ${value}`).join('\n');
  },

  getDifferentValues: (obj1, obj2) => {
    const filtered = CompareFunction.getIdenticalKeys(obj1, obj2);

    const differentValues = filtered.filter(([key, value]) => value !== obj2[key])
      .map(([key, value]) => [key, value].concat(obj2[key]));

    return differentValues
      .map(([key, value1, value2]) => `- ${key}: ${value1}\n+ ${key}: ${value2}`).join('\n');
  },

  getDeletedKeys: (obj1, obj2) => {
    const deletedKeys = Object.entries(obj1)
      .filter(([key]) => !Object.keys(obj2).includes(key));

    return deletedKeys.map(([key, value]) => `- ${key}: ${value}`).join('\n');
  },

  getAddedKeys: (obj1, obj2) => {
    const addedKeys = Object.entries(obj2)
      .filter(([key]) => !Object.keys(obj1).includes(key));

    return addedKeys.map(([key, value]) => `+ ${key}: ${value}`).join('\n');
  },

};

export default CompareFunction;
