import genDiff from '../src';

const beforeJson = './__tests__/__fixtures__/before.json';
const afterJson = './__tests__/__fixtures__/after.json';

const result = `{
  host: hexlet.io
- timeout: 50
+ timeout: 20
- proxy: 123.234.53.22
- follow: false
+ verbose: true
}`;

test('compare JSON', () => {
  expect(genDiff(beforeJson, afterJson)).toBe(result);
});
