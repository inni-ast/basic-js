const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(...args) {
    if (args.length !== 2 || typeof args[0] !== "string" || typeof args[1] !== "string") throw new Error("Incorrect arguments!");
    let message = args[0].toUpperCase();
    let key = args[1].toUpperCase();
    let result = "";
    while (message.length > key.length) {
      key += key;
    }
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let char = this.alphabet.slice(this.alphabet.indexOf(key[j])) + this.alphabet;
        result += char[this.alphabet.indexOf(message[i])];
      } else {
        result += message[i];
        j--;
      }
      j++;
    }
    if (this.type) {
      return result;
    } else {
      return result.split('').reverse().join("");
    }
  }
  decrypt(...args) {
    if (args.length !== 2 || typeof args[0] !== "string" || typeof args[1] !== "string") throw new Error("Incorrect arguments!");
    let message = args[0].toUpperCase();
    let key = args[1].toUpperCase();
    let result = "";
    while (message.length > key.length) {
      key += key;
    }
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let char = this.alphabet.slice(this.alphabet.indexOf(key[j])) + this.alphabet;
        result += this.alphabet[char.indexOf(message[i])];
      } else {
        result += message[i];
        j--;
      }
      j++;
    }
    if (this.type) {
      return result;
    } else {
      return result.split('').reverse().join("");
    }

  }
}


module.exports = {
  VigenereCipheringMachine
};
