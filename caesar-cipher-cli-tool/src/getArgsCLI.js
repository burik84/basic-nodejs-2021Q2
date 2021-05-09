const { program } = require('commander');

const getArgumentsCLI = () => {
  program
    .option('-s --shift <shift>', 'a shift')
    .option('-i --input <input>', 'an input file')
    .option('-o --output <output>', 'an output file')
    .option('-a --action <action>', 'an action encode/decode')
    .parse(process.argv);

  const options = program.opts();
  const shift = parseInt(options.shift, 10);
  const input = options.input;
  const output = options.output;
  const action = options.action;

  return {
    shift,
    input,
    output,
    action,
  };
};

module.exports = {
  getArgumentsCLI,
};
