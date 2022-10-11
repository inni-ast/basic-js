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
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  let newArray = [...arr];

  const discNext = '--discard-next',
    discPrev = '--discard-prev',
    doubleNext = '--double-next',
    doublePrev = '--double-prev';
  for (let i = 0; i < newArray.length; i++) {
    if ((newArray[i] === discPrev) && (i !== 0) && (newArray[i - 1] !== undefined)) {
      newArray[i - 1] = undefined;
    }
    else if ((newArray[i] === discNext) && (newArray[i + 1] !== undefined) && (typeof newArray[i + 1] !== 'string')) {
      newArray[i + 1] = undefined;
    }
    else if ((newArray[i] === doubleNext) && (newArray[i + 1] !== undefined) && (typeof newArray[i + 1] !== 'string')) {
      let newEl = newArray[i + 1];
      console.log(newEl)
      newArray.splice(i + 1, 0, newEl);
    }
    else if ((newArray[i] === doublePrev) && (newArray[i - 1] !== undefined) && (typeof newArray[i - 1] !== 'string') && (i !== 0)) {
      let newEl = newArray[i - 1];
      console.log(newEl)
      newArray.splice(i, 1, newEl);
    }
  }
  return newArray.filter(el => (el !== undefined) && (el !== discNext) && (el !== discPrev) && (el !== doubleNext) && (el !== doublePrev))

}


module.exports = {
  transform
};
