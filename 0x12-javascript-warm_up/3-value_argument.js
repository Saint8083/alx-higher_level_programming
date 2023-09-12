#!/usr/bin/node
// a script that prints the first argument passed to it.

const [arg] = process.argv.slice(2);

// using an if...else statement to check if arg exists
if (!arg) {
  console.log('No argument');

//  Otherwise, we print arg using console.log(...)
} else {
  console.log(arg);
}
