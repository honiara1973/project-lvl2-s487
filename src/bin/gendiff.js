#!/usr/bin/env node

import program from 'commander';
import genDiff from '..';
import { version } from '../../package.json';

program
  .version(version)
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'Choose output format: string, plain, json', 'string')
  .arguments('<firstconfig> <secondconfig>')
  .action((first, second) => console.log(genDiff(first, second, program.format)));

program.parse(process.argv);
