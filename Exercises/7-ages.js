'use strict';

const ages = persons => {
  const obj ={}

  for (const key in persons) {
    const person =persons[key]
    obj[key] = person.died - person.born
  }
  return obj
};
module.exports = { ages };
