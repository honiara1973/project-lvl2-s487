import renderPlain from './renderPlain';
import renderString from './renderString';

const chooseFormat = {
  plain: renderPlain,
  string: renderString,
};

export default (diffArray, format) => chooseFormat[format](diffArray);
