const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.hasOwnProperty('repeatTimes')) options.repeatTimes = 1;
  if (!options.hasOwnProperty('separator')) options.separator = '+';
  if (!options.hasOwnProperty('addition')) options.addition = '';
  if (!options.hasOwnProperty('additionRepeatTimes')) options.additionRepeatTimes = 1;
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = '|';

  const addition = (String(options.addition) + options.additionSeparator).repeat(options.additionRepeatTimes);
  let additionRepeat = '';
  if (addition.endsWith(options.additionSeparator)) {
    additionRepeat = addition.slice(0, addition.length - options.additionSeparator.length);
  } else {
    additionRepeat = addition;
  }

  const pudString = String(str) + additionRepeat + options.separator;
  let result = pudString.repeat(options.repeatTimes);
  if (result.endsWith(options.separator)) {
    return result.slice(0, result.length - options.separator.length);
  } else {
    return result;
  }
}

module.exports = {
  repeater
};
