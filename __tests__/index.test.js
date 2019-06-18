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

const resultString = fs.readFileSync('./__tests__/__fixtures__/plain/resultString.txt', 'utf-8');
const resultNestedString = fs.readFileSync('./__tests__/__fixtures__/nested/resultString.txt', 'utf-8');
const resultPlain = fs.readFileSync('./__tests__/__fixtures__/plain/resultPlain.txt', 'utf-8');
const resultPlainIni = fs.readFileSync('./__tests__/__fixtures__/plain/resultPlainIni.txt', 'utf-8');
const resultNestedPlain = fs.readFileSync('./__tests__/__fixtures__/nested/resultPlain.txt', 'utf-8');
const resultJson = fs.readFileSync('./__tests__/__fixtures__/plain/resultJson.txt', 'utf-8');
const resultJsonIni = fs.readFileSync('./__tests__/__fixtures__/plain/resultJsonIni.txt', 'utf-8');
const resultNestedJson = fs.readFileSync('./__tests__/__fixtures__/nested/resultJson.txt', 'utf-8');

test('compare JSON', () => {
  expect(genDiff(beforeJson, afterJson, 'string')).toBe(resultString);
});

test('compare Yaml', () => {
  expect(genDiff(beforeYaml, afterYaml, 'string')).toBe(resultString);
});

test('compare Ini', () => {
  expect(genDiff(beforeIni, afterIni, 'string')).toBe(resultString);
});

test('compare nestedJSON', () => {
  expect(genDiff(beforeJsonNested, afterJsonNested, 'string')).toBe(resultNestedString);
});

test('compare nestedYaml', () => {
  expect(genDiff(beforeYamlNested, afterYamlNested, 'string')).toBe(resultNestedString);
});

test('compare nestedIni', () => {
  expect(genDiff(beforeIniNested, afterIniNested, 'string')).toBe(resultNestedString);
});

test('compare JSON plain', () => {
  expect(genDiff(beforeJson, afterJson, 'plain')).toBe(resultPlain);
});

test('compare Yaml plain', () => {
  expect(genDiff(beforeYaml, afterYaml, 'plain')).toBe(resultPlain);
});

test('compare Ini plain', () => {
  expect(genDiff(beforeIni, afterIni, 'plain')).toBe(resultPlainIni);
});

test('compare nestedJSON plain', () => {
  expect(genDiff(beforeJsonNested, afterJsonNested, 'plain')).toBe(resultNestedPlain);
});

test('compare nestedYaml plain', () => {
  expect(genDiff(beforeYamlNested, afterYamlNested, 'plain')).toBe(resultNestedPlain);
});

test('compare nestedIni plain', () => {
  expect(genDiff(beforeIniNested, afterIniNested, 'plain')).toBe(resultNestedPlain);
});

test('compare JSON json', () => {
  expect(genDiff(beforeJson, afterJson, 'json')).toBe(resultJson);
});

test('compare Yaml json', () => {
  expect(genDiff(beforeYaml, afterYaml, 'json')).toBe(resultJson);
});

test('compare Ini json', () => {
  expect(genDiff(beforeIni, afterIni, 'json')).toBe(resultJsonIni);
});

test('compare nestedJSON json', () => {
  expect(genDiff(beforeJsonNested, afterJsonNested, 'json')).toBe(resultNestedJson);
});

test('compare nestedYaml json', () => {
  expect(genDiff(beforeYamlNested, afterYamlNested, 'json')).toBe(resultNestedJson);
});

test('compare nestedIni json', () => {
  expect(genDiff(beforeIniNested, afterIniNested, 'json')).toBe(resultNestedJson);
});
