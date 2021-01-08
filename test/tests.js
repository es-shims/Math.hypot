'use strict';

var almostEqual = function (actual, expected) {
	return actual - expected < 1e-6 && expected - actual < 1e-6;
};

module.exports = function (hypot, t) {
	t.test('should be correct', function (st) {
		st.equal(hypot(Infinity), Infinity, 'hypot(Infinity)');
		st.equal(hypot(-Infinity), Infinity, 'hypot(-Infinity)');
		st.equal(hypot(Infinity, NaN), Infinity, 'hypot(Infinity, NaN)');
		st.equal(hypot(NaN, Infinity), Infinity, 'hypot(NaN, Infinity)');
		st.equal(hypot(-Infinity, 'Hello'), Infinity, "hypot(-Infinity, 'Hello')");
		st.equal(hypot(1, 2, Infinity), Infinity, 'hypot(1, 2, Infinity)');
		st.equal(hypot(NaN, 1), NaN, 'hypot(NaN, 1)');
		st.equal(hypot(), +0, 'hypot()');
		st.equal(hypot(0, 0, 0), +0, 'hypot(0, 0, 0)');
		st.equal(hypot(0, -0, 0), +0, 'hypot(0, -0, 0)');
		st.equal(hypot(-0, -0, -0), +0, 'hypot(-0, -0, -0)');
		st.ok(almostEqual(hypot(66, 66), 93.33809511662427), 'hypot(66, 66)');
		st.ok(almostEqual(hypot(0.1, 100), 100.0000499999875), 'hypot(0.1, 100)');
		st.end();
	});

	t.test('should coerce to a number', function (st) {
		st.equal(hypot('Infinity', 0), Infinity, "hypot('Infinity', 0)");
		st.equal(hypot('3', '3', '3', '3'), 6, "hypot('3', '3', '3', '3')");
		st.end();
	});

	t.test('should take more than 3 arguments', function (st) {
		st.ok(almostEqual(hypot(66, 66, 66), 114.3153532995459), 'hypot(66, 66, 66)');
		st.equal(hypot(66, 66, 66, 66), 132, 'hypot(66, 66, 66, 66)');
		st.end();
	});

	t.test('works for very large or small numbers', function (st) {
		st.ok(almostEqual(hypot(1e+300, 1e+300), 1.4142135623730952e+300), 'hypot(1e+300, 1e+300)');
		st.ok(almostEqual(hypot(1e-300, 1e-300), 1.4142135623730952e-300), 'hypot(1e-300, 1e-300)');
		st.ok(almostEqual(hypot(1e+300, 1e+300, 2, 3), 1.4142135623730952e+300), 'hypot(1e+300, 1e+300, 2, 3)');
		st.end();
	});
};
