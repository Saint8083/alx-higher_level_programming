#!/usr/bin/node
const Rectangle = require('./4-rectangle');
//  a class Square that defines a square and inherits from Rectangle of 4-rectangle.js
class Square extends Rectangle {
  constructor (size) {
    super(size, size);
  }
}

module.exports = Square;
