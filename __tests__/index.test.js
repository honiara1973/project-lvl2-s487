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

const result = fs.readFileSync('./__tests__/__fixtures__/plain/resultString.txt', 'utf-8');
const resultNested = fs.readFileSync('./__tests__/__fixtures__/nested/resultString.txt', 'utf-8');
const resultPlain = fs.readFileSync('./__tests__/__fixtures__/plain/resultPlain.txt', 'utf-8');
const resultNestedPlain = fs.readFileSync('./__tests__/__fixtures__/nested/resultPlain.txt', 'utf-8');
const resultJson = fs.readFileSync('./__tests__/__fixtures__/plain/resultJson.txt', 'utf-8');
const resultNestedJson = fs.readFileSync('./__tests__/__fixtures__/nested/resultJson.txt', 'utf-8');




/*
const result = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;
*/
/*
const resultNested = `{
    common: {
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: {
            key: value
        }
        setting6: {
            key: value
          + ops: vops
        }
      + follow: false
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
    }
  + group3: {
        fee: 100500
    }
}`;
*/

test('compare JSON', () => {
  expect(genDiff(beforeJson, afterJson, 'string')).toBe(result);
});

test('compare Yaml', () => {
  expect(genDiff(beforeYaml, afterYaml, 'string')).toBe(result);
});

test('compare Ini', () => {
  expect(genDiff(beforeIni, afterIni, 'string')).toBe(result);
});

test('compare nestedJSON', () => {
  expect(genDiff(beforeJsonNested, afterJsonNested, 'string')).toBe(resultNested);
});

test('compare nestedYaml', () => {
  expect(genDiff(beforeYamlNested, afterYamlNested, 'string')).toBe(resultNested);
});

test('compare nestedIni', () => {
  expect(genDiff(beforeIniNested, afterIniNested, 'string')).toBe(resultNested);
});

test('compare JSON plain', () => {
  expect(genDiff(beforeJson, afterJson, 'plain')).toBe(resultPlain);
});

test('compare Yaml plain', () => {
  expect(genDiff(beforeYaml, afterYaml, 'plain')).toBe(resultPlain);
});

test('compare Ini plain', () => {
  expect(genDiff(beforeIni, afterIni, 'plain')).toBe(resultPlain);
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
  expect(genDiff(beforeIni, afterIni, 'json')).toBe(resultJson);
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
