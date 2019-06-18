import fs from 'fs';
// import path from 'path';
import getDiffArray from './diff';
import render from './formatters';
import getParser from './parser';

const readFile = file => fs.readFileSync(file, 'utf-8');
// const getExtension = file => path.extname(file);

const genDiff = (file1, file2, format) => {
  // const fileExtension = getExtension(file1);

  const obj1 = getParser(readFile, file1);
  const obj2 = getParser(readFile, file2);
  const diffArray = getDiffArray(obj1, obj2);

  return render(diffArray, format);
};

export default genDiff;
