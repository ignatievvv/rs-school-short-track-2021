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
  const array = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      counter++;
    } else if (counter === 1) {
      array.push(str[i]);
      counter = 1;
    } else {
      array.push(`${counter}${str[i]}`);
      counter = 1;
    }
  }
  return array.join('');
}

module.exports = encodeLine;
