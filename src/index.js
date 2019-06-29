import fs from 'fs';
import path from 'path';

import getDifferences from './diff';
import render from './formatters';
import parseContent from './parser';

const genDiff = (firstFilePath, secondFilePath, format) => {
  const firstFileContent = fs.readFileSync(firstFilePath, 'utf-8');
  const secondFileContent = fs.readFileSync(secondFilePath, 'utf-8');

  const firstFileType = path.extname(firstFilePath).slice(1);
  const secondFileType = path.extname(secondFilePath).slice(1);

  const obj1 = parseContent(firstFileContent, firstFileType);
  const obj2 = parseContent(secondFileContent, secondFileType);
  const differences = getDifferences(obj1, obj2);

  return render(differences, format);
};

export default genDiff;
