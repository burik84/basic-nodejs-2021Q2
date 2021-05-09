const { pipeline } = require('stream');
const fs = require('fs');
const { Transformer } = require('./Transformer');

const runStream = ({ input, output, shift, action }) => {
  pipeline(
    input ? fs.createReadStream(input) : process.stdin,
    new Transformer(action, shift),
    output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
    (error) => {
      if (error) {
        console.error('Pipeline failed.', error);
        process.exit(1);
      }
    }
  );
};
module.exports = {
  runStream,
};
