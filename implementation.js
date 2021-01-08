'use strict';

var $Number = Number;
var abs = Math.abs;
var sqrt = Math.sqrt;

// eslint-disable-next-line no-unused-vars
module.exports = function hypot(_x, _y) {
	var result = 0;
	var largest = 0;
	for (var i = 0; i < arguments.length; ++i) {
		var value = abs($Number(arguments[i]));
		if (largest < value) {
			result *= (largest / value) * (largest / value);
			result += 1;
			largest = value;
		} else {
			result += value > 0 ? (value / largest) * (value / largest) : value;
		}
	}
	return largest === Infinity ? Infinity : largest * sqrt(result);
};
