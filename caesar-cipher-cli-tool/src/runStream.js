const { pipeline } = require('stream');

const runStream = ({ input, output, shift, action }) => {
  pipeline((err) => {
    if (err) {
      console.error('Pipeline failed.', err);
      process.exit(1);
    } else {
    }
  });
};
module.exports = {
  runStream,
};
