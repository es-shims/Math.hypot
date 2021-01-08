'use strict';

var define = require('define-properties');
var getPolyfill = require('./polyfill');

module.exports = function shimMathHypot() {
	var polyfill = getPolyfill();
	define(
		Math,
		{ hypot: polyfill },
		{ hypot: function () { return Math.hypot !== polyfill; } }
	);
	return polyfill;
};
