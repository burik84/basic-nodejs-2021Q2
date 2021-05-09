const { cipherCaeser } = require('./cipherCaeser');
const { Transform } = require('stream');

class Transformer extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = shift;
  }

  _transform(chunk, encoding, callback) {
    const string = chunk.toString('utf8');
    const cipherString = cipherCaeser(
      string,
      this.action === 'encode' ? this.shift : -this.shift
    );
    this.push(cipherString);
    callback();
  }
}
module.exports = {
  Transformer,
};
