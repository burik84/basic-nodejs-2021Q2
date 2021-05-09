const { program } = require('commander');

const getArgumentsCLI = () => {
  let shift, input, output, action;

  program
    .option('-s, --shift <shift>', 'a shift')
    .option('-i, --input <input>', 'an input file')
    .option('-o, --output <output>', 'an output file')
    .option('-a, --action <action>', 'an action encode/decode');

  program.parse(process.argv);

  const options = program.opts();
  program.action((options) => {
    shift = options.shift;
    input = options.input;
    output = options.output;
    action = options.action;
  });

  console.log(options);

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
