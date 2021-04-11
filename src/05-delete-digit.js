/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbers = [];
  let number = n.toString().split('');
  for (let i = 0; i < number.length; i++) {
    number.splice(i, 1);
    numbers.push(number);
    number = n.toString().split('');
  }
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = Number(numbers[i].join(''));
  }
  numbers.sort((a, b) => b - a);
  return numbers[0];
}

module.exports = deleteDigit;
