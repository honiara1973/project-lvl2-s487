import fs from 'fs';
import path from 'path';

const before = './before';
const after = './bin/after';

//const readFile = file => fs.readFileSync(file, 'utf-8');
//const getExtension = file => path.extname(file);


/*const genDiff = (file1, file2) => {
  const jsonData1 = readFile(file1);
  const jsonData2 = readFile(file2);

  // return jsonData1;

  console.log(jsonData1);
  console.log(jsonData2);
};*/

const genDiff = () => console.log(fs.readFileSync(before, 'utf-8'));

export default genDiff;
