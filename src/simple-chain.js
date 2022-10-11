const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value = ' ') {
    this.result.push(`( ${String(value)} )`);
    return this;
  },
  removeLink(position) {
    if ((position <= 0) || typeof position !== 'number' || (!Number.isInteger(position)) || this.result[Number(position)] === undefined) {
      this.result.length = 0;
      throw Error('You can\'t remove incorrect link!');
    } else {
      this.result.splice(position - 1, 1);
      return this;
    }

  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let string = this.result.join('~~');
    this.result.length = 0;
    return string;
  }
};


module.exports = {
  chainMaker
};
