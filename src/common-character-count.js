const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	const one = [...s1];
	const two = [...s2];
	console.log(one);
	console.log(two);
	let result = 0;
	for (let i = 0; i < one.length; i++) {
		let item = two.indexOf(one[i]);
		if (item !== -1) {
			two.splice(item, 1);
			result++;
		}
	}
	return result;

}

module.exports = {
	getCommonCharacterCount
};
