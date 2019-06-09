import _ from 'lodash';
import fs from 'fs';
// import yaml from 'js-yaml';
// import path from 'path';
import CompareFunction from './utils';
import getParser from './parser';

const readFile = file => fs.readFileSync(file, 'utf-8');
// const getExtension = file => path.extname(file);

const genDiff = (file1, file2) => {
  // const obj1 = JSON.parse(readFile(file1));
  // const obj2 = JSON.parse(readFile(file2));

  // const obj1 = yaml.safeLoad(readFile(file1));
  // const obj2 = yaml.safeLoad(readFile(file2));
  // const fileExtension = getExtension(file1);

  const obj1 = getParser(readFile, file1);
  const obj2 = getParser(readFile, file2);

  return `{
${CompareFunction.getIdenticalValues(obj1, obj2)}
${CompareFunction.getDifferentValues(obj1, obj2)}
${CompareFunction.getDeletedKeys(obj1, obj2)}
${CompareFunction.getAddedKeys(obj1, obj2)}
}`;
};

// const genDiff = () => console.log(getExtension(before));
// const genDiff = () => console.log(process.cwd());
export default genDiff;
