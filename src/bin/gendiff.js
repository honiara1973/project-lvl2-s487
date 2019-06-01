#!/usr/bin/env node

import program from 'commander';
import genDiff from '..';

// const before = './src/before.json';
// const after = './src/after.json';

program
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<firstconfig> <secondconfig>')
  .action((first, second) => console.log(genDiff(first, second)));

program.parse(process.argv);

// genDiff();
