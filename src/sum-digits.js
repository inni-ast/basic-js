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
function getSumOfDigits(/*n*/) {
	let result = 0;
	let str = String(n);
	let numbers = [];
	for (let i = 0; i < str.length - 1; i++) {
		numbers.push(+str[i]);
	};
	console.log(numbers);

	do {
		let res = numbers.reduce(function (a, b) {
			return a + b;
		}, 0);
		result = res;
		str = String(res);
		numbers.length = 0;

		console.log(str);
		for (let i = 0; i < str.length - 1; i++) {
			numbers.push(+str[i]);
			console.log(numbers);
		};

	} while (result.length == 1)

	return result;
}
// npm test test/sum-digits*
module.exports = {
	getSumOfDigits
};

// console.log(getSumOfDigits(91));
