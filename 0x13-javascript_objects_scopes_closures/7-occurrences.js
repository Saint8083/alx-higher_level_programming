#!/usr/bin/node
// unction that returns the number of occurrences in a list:

exports.nbOccurences = function (list, searchElement) {
  let count = 0;
  for (let i = 0; list[i]; i++) {
    if (list[i] === searchElement) {
      count++;
    }
  }
  return count;
};
