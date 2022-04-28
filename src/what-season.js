const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(time) {
	if (time === '' || typeof time === "undefined") return 'Unable to determine the time of year!';
	if (isNaN(Date.parse(time)) == true) throw new Error('Invalid date!');
	if (Object.prototype.toString.call(time) !== '[object Date]') return 'Invalid date!';

	if ((time instanceof Date === false || Object.getOwnPropertyNames(time).length > 0) && arguments.length > 0) {
		throw new Error('Invalid date!');
	};

	const season = ['winter', 'spring', 'summer', ' autumn'];

	let result = '';
	const month = time.getMonth();
	console.log(month)
	if (month === 0 || month === 1 || month === 11) {
		result += season[0];
	} else if (month === 2 || month === 3 || month === 4) {
		result += season[1];
	} else if (month === 5 || month === 6 || month === 7) {
		result += season[2];
	} else if (month === 8 || month === 9 || month === 10) {
		result += season[3];
	}
	else {
		result += 'Invalid date!';
	}
	return result;


}

module.exports = {
	getSeason
};
console.log(getSeason(new Date(2020, 02, 31)))
