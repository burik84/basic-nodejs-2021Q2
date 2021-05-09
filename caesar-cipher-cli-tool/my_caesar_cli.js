const { getArgumentsCLI } = require('./src/getArgsCLI');
const { validate } = require('./src/validate');

const argsCLI = getArgumentsCLI();
validate(argsCLI);
