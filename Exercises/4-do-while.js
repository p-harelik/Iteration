'use strict';

const sum = (...args) => {
  if (!args.length) return 0
  let acc = 0
  let i = 0
  do {
      acc += args[i]
      i++
  } while (i <args.length)
  return acc
};

module.exports = { sum };
