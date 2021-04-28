'use strict';

let count = 0;
const arr = [7, 10];
const sum = (acc, val) => (count++, acc + val);
const res = arr.reduce(sum, 0);
console.log({ res, count });
debugger
const reduce = (fn, acc, [cur, ...rest]) => (
  cur === undefined ? acc : reduce(fn, fn(acc, cur), rest)
);

const res2 = reduce(sum, 0, arr);
console.log({ res2 });
