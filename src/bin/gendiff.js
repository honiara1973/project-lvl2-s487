#!/usr/bin/env node

import genDiff from '..';

//const before = './before';
//const after = './after';

const program = require('commander');

program
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstconfig> <secondconfig>');
  //.action((first, second) => console.log(genDiff(first, second)));

program.parse(process.argv);

genDiff();
