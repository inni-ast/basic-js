const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr, num = 1) {
    this.num = num;
    if (arr.some(el => Array.isArray(el))) {
      this.num++;
      arr = arr.flat();
      this.calculateDepth(arr, this.num)
    }
    return this.num;
  }
}


module.exports = {
  DepthCalculator
};
