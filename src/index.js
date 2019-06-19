import fs from 'fs';

import getDiffArray from './diff';
import render from './formatters';
import getParser from './parser';

const readFile = file => fs.readFileSync(file, 'utf-8');

const genDiff = (file1, file2, format) => {
  const obj1 = getParser(readFile, file1);
  const obj2 = getParser(readFile, file2);
  const diffArray = getDiffArray(obj1, obj2);

  return render(diffArray, format);
};

export default genDiff;
