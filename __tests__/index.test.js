import fs from 'fs';
import genDiff from '../src';

const testCases = [
  ['json', 'string'],
  ['yml', 'string'],
  ['ini', 'string'],
  ['json', 'plain'],
  ['yml', 'plain'],
  ['ini', 'plain'],
  ['json', 'json'],
  ['yml', 'json'],
  ['ini', 'json'],
];

test.each(testCases)('%s files compare, outputformat: %s', (fileFormat, outputFormat) => {
  const resultFiles = {
    string: './__tests__/__fixtures__/resultString.txt',
    plain: './__tests__/__fixtures__/resultPlain.txt',
    json: './__tests__/__fixtures__/resultJson.txt',
  };

  const firstFilePath = `./__tests__/__fixtures__/before.${fileFormat}`;
  const secondFilePath = `./__tests__/__fixtures__/after.${fileFormat}`;

  const result = fs.readFileSync(resultFiles[outputFormat], 'utf-8');

  expect(genDiff(firstFilePath, secondFilePath, `${outputFormat}`)).toBe(result);
});
