const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = [...String(n)];
  while (str.length !== 1) {
    str = [...str].map(el => Number(el));
    str = String(str.reduce((a, b) => a + b));
  }
  return +str;
}
// npm test test/sum-digits*
module.exports = {
  getSumOfDigits
};

// console.log(getSumOfDigits(91));
