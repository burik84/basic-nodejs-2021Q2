const { existsSync, accessSync, constants } = require('fs');

const validateFile = (pathFile) => {
  if (existsSync(pathFile)) {
    try {
      accessSync(pathFile, constants.R_OK | constants.W_OK);
      console.log('can read/write');
    } catch (err) {
      console.error(
        `You cannot access file "${pathFile}"! Please try to enter the correct data`
      );
      return false;
    }
  } else {
    console.error(
      `Your file "${pathFile}" doesn't found! Please try to enter the correct data`
    );
    return false;
  }
  return true;
};

module.exports = {
  validateFile,
};
