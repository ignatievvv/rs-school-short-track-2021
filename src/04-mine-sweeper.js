/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const matrixNew = [];
  for (let i = 0; i < matrix.length; i++) {
    matrixNew.push([]);
    for (let k = 0; k < matrix[0].length; k++) {
      matrixNew[i].push(0);
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      if (k - 1 > -1) {
        if (matrix[i][k - 1] === true) {
          matrixNew[i][k]++;
        }
      }
      if (k + 1 < matrix[i].length) {
        if (matrix[i][k + 1] === true) {
          matrixNew[i][k]++;
        }
      }
      if (i + 1 < matrix.length && k - 1 > -1) {
        if (matrix[i + 1][k - 1] === true) {
          matrixNew[i][k]++;
        }
      }
      if (i + 1 < matrix.length && k + 1 < matrix[i].length) {
        if (matrix[i + 1][k + 1] === true) {
          matrixNew[i][k]++;
        }
      }
      if (i - 1 > -1 && k - 1 > -1) {
        if (matrix[i - 1][k - 1] === true) {
          matrixNew[i][k]++;
        }
      }
      if (i - 1 > -1 && k + 1 < matrix[i].length) {
        if (matrix[i - 1][k + 1] === true) {
          matrixNew[i][k]++;
        }
      }
      if (i + 1 < matrix.length) {
        if (matrix[i + 1][k] === true) {
          matrixNew[i][k]++;
        }
      }
      if (i - 1 > -1) {
        if (matrix[i - 1][k] === true) {
          matrixNew[i][k]++;
        }
      }
    }
  }
  return matrixNew;
}

module.exports = minesweeper;
