import fs from 'fs';
import path from 'path';

import getDifferences from './diff';
import render from './formatters';
import parseContent from './parser';

const genDiff = (firstFilePath, secondFilePath, format) => {
  const firstFileContent = fs.readFileSync(firstFilePath, 'utf-8');
  const secondFileContent = fs.readFileSync(secondFilePath, 'utf-8');

  const firstFileExtName = path.extname(firstFilePath).slice(1);
  const secondFileExtName = path.extname(secondFilePath).slice(1);

  const obj1 = parseContent(firstFileContent, firstFileExtName);
  const obj2 = parseContent(secondFileContent, secondFileExtName);
  const differences = getDifferences(obj1, obj2);

  return render(differences, format);
};

export default genDiff;
