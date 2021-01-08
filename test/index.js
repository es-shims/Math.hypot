'use strict';

var hypot = require('../');
var test = require('tape');
var runTests = require('./tests');

test('as a function', function (t) {
	runTests(hypot, t);

	t.end();
});
