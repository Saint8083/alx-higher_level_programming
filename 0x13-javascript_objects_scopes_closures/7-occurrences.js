#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let nOccurrences = 0;
 //  a function that returns the number of occurrences in a list
  for (let i = 0; i < list.length; i++) {
    if (searchElement === list[i]) {
      nOccurrences++;
    }
  }
  return nOccurrences;
};
