/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (typeof names[0] === 'undefined') {
    return [];
  }
  const ARRAYNEW = [names[0]];
  for (let i = 1; i < names.length; i++) {
    let counter = 0;
    for (let k = 0; k < i; k++) {
      if (names[i] === names[k]) {
        counter++;
      }
    }
    if (counter === 0) {
      ARRAYNEW.push(names[i]);
    } else {
      ARRAYNEW.push(`${names[i]}(${counter})`);
    }
    for (let l = 0; l < i; l++) {
      if (ARRAYNEW[l] === ARRAYNEW[i]) {
        ARRAYNEW[i] = `${ARRAYNEW[i]}(1)`;
      }
    }
  }
  return ARRAYNEW;
}

module.exports = renameFiles;
