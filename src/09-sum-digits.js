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
function getSumOfDigits(n) {
  let numberNew = n;
  while (numberNew > 9) {
    const arrayDigits = numberNew.toString().split('');
    for (let i = 0; i < arrayDigits.length; i++) {
      arrayDigits[i] = Number(arrayDigits[i]);
    }
    let sum = 0;
    arrayDigits.forEach((elem) => {
      sum += elem;
    });
    numberNew = sum;
  }
  return numberNew;
}

module.exports = getSumOfDigits;
