#!/usr/bin/node
// A script that prints the addition of 2 

function add (a, b) {
  const c = a + b;
  console.log(c);
}

add(Number(process.argv[2]), Number(process.argv[3]));
