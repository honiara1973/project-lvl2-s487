#!/usr/bin/env node

const program = require('commander');

program
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'Output format');

program
  .description('Compares two configuration files and shows a difference.');

program
  .arguments('<firstconfig> <secondconfig>');

program.parse(process.argv);
