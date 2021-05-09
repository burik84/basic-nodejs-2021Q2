const { validateFile } = require('./validateFile');

const validate = ({ shift, input, output, action }) => {
  console.log(shift, input, output, action);

  let error = false;
  if (isNaN(shift)) {
    error = true;
    console.error(
      'Option "shift" is required option and type Number! Please try to enter the correct data'
    );
  }
  if (action === undefined) {
    error = true;
    console.error(
      'Option "action" is required option! Please try to enter the correct data'
    );
  }
  if (action !== 'encode' && action !== 'decode') {
    error = true;
    console.error(
      'Option "action" maybe only: "encode/decode"!  Please try to enter the correct data'
    );
  }
  if (input) {
    error = !validateFile(input);
  }

  if (output) {
    error = !validateFile(output);
  }
  if (error === true) {
    process.exit(1);
  }
  return error;
};

module.exports = {
  validate,
};
