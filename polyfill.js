'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	var native = Math.hypot;
	if (!native
		// // node v12.11 - v12.15 report NaN
		|| native(Infinity, NaN) !== Infinity
	) {
		return implementation;
	}
	return native;
};
