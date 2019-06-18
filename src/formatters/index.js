import renderPlain from './renderPlain';
import renderString from './renderString';
import renderJson from './renderJson';

const chooseFormat = {
  plain: renderPlain,
  string: renderString,
  json: renderJson,
};

export default (diffArray, format) => chooseFormat[format](diffArray);
