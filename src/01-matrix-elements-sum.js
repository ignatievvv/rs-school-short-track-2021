/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix[0].forEach((item) => {
    sum += item;
  });
  for (let i = 1; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (matrix[i - 1][k] !== 0) {
        sum += matrix[i][k];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
