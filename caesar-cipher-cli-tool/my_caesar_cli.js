const { Command } = require('commander');
const program = new Command();

program
  .option('-s, --shift', 'shift')
  .option('-i, --input', 'input file')
  .option('-o, --output', 'output file')
  .option('-a, --action', 'action encode/decode');

program.parse(process.argv);

const options = program.opts();

console.log(options);
