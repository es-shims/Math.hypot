'use strict';

require('../auto');

require('../'); // to ensure no side effects

var test = require('tape');
var keys = require('reflect.ownkeys');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;
var functionsHaveNames = require('functions-have-names')();

var runTests = require('./tests');

test('shimmed', function (t) {
	t.equal(Math.hypot.length, 2, 'Math.hypot has a length of 2');

	t.test('Function name', { skip: !functionsHaveNames }, function (st) {
		st.equal(Math.hypot.name, 'hypot', 'Math.hypot has name "hypot"');
		st.end();
	});

	t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
		et.equal(false, isEnumerable.call(Math, 'hypot'), 'Math.hypot is not enumerable');
		et.end();
	});

	t.match(keys(Math.hypot).sort().join('|'), /^(arguments\|caller\|)?length|name(\|prototype)?$/, 'has no unexpected own keys');

	runTests(Math.hypot, t);

	t.end();
});
