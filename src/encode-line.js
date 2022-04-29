const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let array = [];
	let num = 0;
	let i = 0;
	while (i < str.length) {
		let letter = str[i];
		num = 1;
		while (i < str.length - 1 && letter == str[i + 1]) {
			i++;
			num++;
		};
		if (num == 1) {
			num = '';
		}
		array.push(num + '' + letter);
		i++;
	}
	return array.join('');
}

module.exports = {
	encodeLine
};
