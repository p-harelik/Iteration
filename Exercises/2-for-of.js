'use strict';

const sum = (...args) => {
  let acc = 0
  for (const value of args){
    acc += value
  }
  return acc
};

module.exports = { sum };
