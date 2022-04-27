const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
/* matrix */
function countCats(array) {
	let result = 0;
	if (Array.isArray(array)) {
		for (let i = 0; i < array.length; i++) {
			for (let j = 0; j < array[i].length; j++) {
				if (array[i][j] === '^^') {
					result++;
				}
			}
		}
	}
	return result;
}

module.exports = {
	countCats
};

console.log(countCats([
	[0, 1, '^^'],
	[0, '^^', 2],
	['^^', 1, 2]
]));
