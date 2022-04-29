const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	const newArrayTwo = [];
	const newArrayThree = [];
	for (let i = 0; i < matrix[0].length; i++) {
		if (matrix[0][i] !== 0) newArrayTwo.push(matrix[1][i]);
		console.log(newArrayTwo);
	};
	if (matrix.length > 1) {
		for (let i = 0; i < matrix[1].length; i++) {
			if (matrix[1][i] !== 0) newArrayThree.push(matrix[2][i]);
			console.log(newArrayThree);
		}
	}

	const result = [...matrix[0], ...newArrayThree, ...newArrayTwo];

	const res = result.reduce(function (sum, elem) {
		return sum + elem;
	}, 0);
	return res;
}

module.exports = {
	getMatrixElementsSum
};

// getMatrixElementsSum();
