import fs from 'fs';
import genDiff from '../src';

const beforeJson = './__tests__/__fixtures__/plain/before.json';
const afterJson = './__tests__/__fixtures__/plain/after.json';

const beforeYaml = './__tests__/__fixtures__/plain/before.yml';
const afterYaml = './__tests__/__fixtures__/plain/after.yml';

const beforeIni = './__tests__/__fixtures__/plain/before.ini';
const afterIni = './__tests__/__fixtures__/plain/after.ini';

const beforeJsonNested = './__tests__/__fixtures__/nested/before.json';
const afterJsonNested = './__tests__/__fixtures__/nested/after.json';

const beforeYamlNested = './__tests__/__fixtures__/nested/before.yml';
const afterYamlNested = './__tests__/__fixtures__/nested/after.yml';

const beforeIniNested = './__tests__/__fixtures__/nested/before.ini';
const afterIniNested = './__tests__/__fixtures__/nested/after.ini';

test('compare JSON', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultString.txt', 'utf-8');
  expect(genDiff(beforeJson, afterJson, 'string')).toBe(result);
});

test('compare Yaml', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultString.txt', 'utf-8');
  expect(genDiff(beforeYaml, afterYaml, 'string')).toBe(result);
});

test('compare Ini', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultString.txt', 'utf-8');
  expect(genDiff(beforeIni, afterIni, 'string')).toBe(result);
});

test('compare nestedJSON', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultString.txt', 'utf-8');
  expect(genDiff(beforeJsonNested, afterJsonNested, 'string')).toBe(result);
});

test('compare nestedYaml', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultString.txt', 'utf-8');
  expect(genDiff(beforeYamlNested, afterYamlNested, 'string')).toBe(result);
});

test('compare nestedIni', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultString.txt', 'utf-8');
  expect(genDiff(beforeIniNested, afterIniNested, 'string')).toBe(result);
});

test('compare JSON plain', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultPlain.txt', 'utf-8');
  expect(genDiff(beforeJson, afterJson, 'plain')).toBe(result);
});

test('compare Yaml plain', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultPlain.txt', 'utf-8');
  expect(genDiff(beforeYaml, afterYaml, 'plain')).toBe(result);
});

test('compare Ini plain', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultPlainIni.txt', 'utf-8');
  expect(genDiff(beforeIni, afterIni, 'plain')).toBe(result);
});

test('compare nestedJSON plain', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultPlain.txt', 'utf-8');
  expect(genDiff(beforeJsonNested, afterJsonNested, 'plain')).toBe(result);
});

test('compare nestedYaml plain', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultPlain.txt', 'utf-8');
  expect(genDiff(beforeYamlNested, afterYamlNested, 'plain')).toBe(result);
});

test('compare nestedIni plain', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultPlain.txt', 'utf-8');
  expect(genDiff(beforeIniNested, afterIniNested, 'plain')).toBe(result);
});

test('compare JSON json', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultJson.txt', 'utf-8');
  expect(genDiff(beforeJson, afterJson, 'json')).toBe(result);
});

test('compare Yaml json', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultJson.txt', 'utf-8');
  expect(genDiff(beforeYaml, afterYaml, 'json')).toBe(result);
});

test('compare Ini json', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultJsonIni.txt', 'utf-8');
  expect(genDiff(beforeIni, afterIni, 'json')).toBe(result);
});

test('compare nestedJSON json', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultJson.txt', 'utf-8');
  expect(genDiff(beforeJsonNested, afterJsonNested, 'json')).toBe(result);
});

test('compare nestedYaml json', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultJson.txt', 'utf-8');
  expect(genDiff(beforeYamlNested, afterYamlNested, 'json')).toBe(result);
});

test('compare nestedIni json', () => {
  const result = fs.readFileSync('./__tests__/__fixtures__/nested/resultJson.txt', 'utf-8');
  expect(genDiff(beforeIniNested, afterIniNested, 'json')).toBe(result);
});
