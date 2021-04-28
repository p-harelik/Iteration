'use strict';

const max = matrix => {
  let maxItem = matrix[0][0]
  for (const i in matrix) {
    const row = matrix[i]
    for (const j in row) {
      const col = row[j]
      if (col > maxItem){
        maxItem = col
      }
    }
  }
  return maxItem
};
module.exports = { max };
