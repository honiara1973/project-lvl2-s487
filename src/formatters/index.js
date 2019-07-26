import renderPlain from './renderPlain';
import renderString from './renderString';
import renderJson from './renderJson';

const chooseFormat = {
  plain: renderPlain,
  string: renderString,
  json: renderJson,
};

export default (differences, format) => chooseFormat[format](differences);
