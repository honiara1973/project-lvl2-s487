import yaml from 'js-yaml';
import ini from 'ini';
import path from 'path';

const parseJson = data => JSON.parse(data);
const parseYaml = data => yaml.safeLoad(data);
const parseIni = data => ini.parse(data);

const parser = {
  json: parseJson,
  yml: parseYaml,
  ini: parseIni,
};

export default (fn, data) => parser[path.extname(data).slice(1)](fn(data));
