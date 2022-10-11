const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      if (i === 0) { // first line
        if (j === 0) {
          result[0][0] = matrix[0][1] + matrix[1][1] + matrix[1][0];
        } else if (j === matrix[0].length - 1) {
          result[0][j] = matrix[0][j - 1] + matrix[1][j - 1] + matrix[1][j];
          console.log(matrix[0][j - 1])
          console.log(matrix[1][j - 1])
          console.log(matrix[1][j])
        } else {
          result[0][j] = matrix[0][j - 1] + matrix[0][j + 1] + matrix[1][j - 1] + matrix[1][j] + matrix[1][j + 1];
        }
      }
      else if (i === matrix.length - 1) {
        if (j === 0) {
          result[i][0] = matrix[i][1] + matrix[i - 1][0] + matrix[i - 1][1];
        } else if (j === matrix[i].length - 1) {// last line
          result[i][j] = matrix[i][j - 1] + matrix[i - 1][j - 1] + matrix[i - 1][j];
        } else {
          result[i][j] = matrix[i][j - 1] + matrix[i][j + 1] + matrix[i - 1][j - 1] + matrix[i - 1][j] + matrix[i - 1][j + 1];
        }

      }
      else {
        if (j === 0) {
          result[i][0] = matrix[i][1] + matrix[i - 1][0] + matrix[i - 1][1] + matrix[i + 1][0] + matrix[i + 1][1];
        } else if (j === matrix[i].length - 1) {// last line
          result[i][j] = matrix[i][j - 1] + matrix[i - 1][j - 1] + matrix[i - 1][j] + matrix[i + 1][j - 1] + matrix[i + 1][j]
        } else {
          result[i][j] = matrix[i][j - 1] + matrix[i][j + 1] + matrix[i - 1][j - 1] + matrix[i - 1][j] + matrix[i - 1][j + 1] + matrix[i + 1][j - 1] + matrix[i + 1][j] + matrix[i + 1][j + 1];
        }
      }
    }
  }
  return result;
}

module.exports = {
  minesweeper
};
