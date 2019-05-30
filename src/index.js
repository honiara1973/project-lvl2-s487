import fs from 'fs';
import path from 'path';

// const before = './src/before.json';
// const after = './src/after.json';

const readFile = file => fs.readFileSync(file, 'utf-8');
const getExtension = file => path.extname(file);

const genDiff = (file1, file2) => {
  const obj1 = JSON.parse(readFile(file1));
  const obj2 = JSON.parse(readFile(file2));
  // const fileExtension = getExtension(file1);

  console.log(Object.entries(obj1));
  console.log(Object.entries(obj2));
};


// const genDiff = () => console.log(fs.readFileSync(before, 'utf-8'));
// const genDiff = file => console.log(fs.readFileSync(file, 'utf-8'));
// const genDiff = file => console.log(JSON.parse(fs.readFileSync(file, 'utf-8')));

// const genDiff = () => console.log(getExtension(before));
// const genDiff = () => console.log(process.cwd());
export default genDiff;
