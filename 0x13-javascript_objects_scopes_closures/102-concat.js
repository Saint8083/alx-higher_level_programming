#!/usr/bin/node
const fs = require('fs');
//  script that imports a dictionary of occurrences by user id and computes a dictionary of user ids by occurrence.

const a = fs.readFileSync(process.argv[2], 'utf-8');
const b = fs.readFileSync(process.argv[3], 'utf-8');
fs.writeFileSync(process.argv[4], a + b);
