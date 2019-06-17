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

const result = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;

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

test('compare JSON', () => {
  expect(genDiff(beforeJson, afterJson)).toBe(result);
});

test('compare Yaml', () => {
  expect(genDiff(beforeYaml, afterYaml)).toBe(result);
});

test('compare Ini', () => {
  expect(genDiff(beforeIni, afterIni)).toBe(result);
});

test('compare nestedJSON', () => {
  expect(genDiff(beforeJsonNested, afterJsonNested)).toBe(resultNested);
});

test('compare nestedYaml', () => {
  expect(genDiff(beforeYamlNested, afterYamlNested)).toBe(resultNested);
});

test('compare nestedIni', () => {
  expect(genDiff(beforeIniNested, afterIniNested)).toBe(resultNested);
});
