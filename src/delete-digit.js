const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = [];
  const string = String(n);
  for (let i = 0; i < string.length; i++) {
    numbers.push(+string.replace(string[i], ''));
  }
  return Math.max(...numbers);
}




module.exports = {
  deleteDigit
};
