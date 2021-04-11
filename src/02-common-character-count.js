/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const S1ARRAY = s1.split('');
  const S2ARRAY = s2.split('');
  let sum = 0;
  for (let i = 0; i < S1ARRAY.length; i++) {
    for (let k = 0; k < S2ARRAY.length; k++) {
      if (S1ARRAY[i] === S2ARRAY[k]) {
        S2ARRAY.splice(k, 1);
        sum += 1;
        break;
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
