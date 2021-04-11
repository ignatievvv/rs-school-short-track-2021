/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let half = Math.floor(array.length / 2);
  let currentItem = array[half];
  while (currentItem !== value) {
    if (value > currentItem) {
      half += Math.floor((array.length - half) / 2);
      currentItem = array[half];
    } else {
      half = Math.floor(half / 2);
      currentItem = array[half];
    }
  }
  return half;
}

module.exports = findIndex;
