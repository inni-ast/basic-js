const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/*arr*/) {
	// if (!Array.isArray(arr)) throw new Error('arr' parameter must be an instance of the Array!);
	// const result = [];
	// for (let i = 0; i < arr.length; i++) {
	// 	if ((arr.indexOf('--double-next', 0) !== -1) && (arr[arr.length - 1] === '--double-next')) {
	// 		result(...arr);
	// 	};

	// if (arr[i] === '--discard-next') {


	// }
	// if (arr[i] === '--discard-prev') {

	// }
	// if (arr[i] === '--double-next') {

	// }
	// if (arr[i] === '--double-prev') {

}


module.exports = {
	transform
};
