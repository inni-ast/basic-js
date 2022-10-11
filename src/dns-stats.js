const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const allDomains = {};
  for (let element of domains) {
    const array = element.split('.').reverse();
    console.log(array)
    let domain = '';
    for (let element of array) {
      domain += `.${element}`;
      console.log(domain);
      if (allDomains.hasOwnProperty(domain)) {
        allDomains[domain]++;
      } else {
        allDomains[domain] = 1;
      }
    }
  }
  return allDomains;
}

module.exports = {
  getDNSStats
};
