const { getArgumentsCLI } = require('./src/getArgsCLI');
const { validate } = require('./src/validate');
const { runStream } = require('./src/runStream');

const argsCLI = getArgumentsCLI();
const isValid = validate(argsCLI);
isValid ? null : runStream(argsCLI);
