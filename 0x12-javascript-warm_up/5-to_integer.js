#!/usr/bin/node
// using the isNaN() function to check if the first argument (arg) can be converted to an integer.

const arg = process.argv[2];

if (!isNaN(parseInt(arg))) {
  console.log(`My number: ${parseInt(arg)}`);
} else {
  console.log('Not a number');
}
