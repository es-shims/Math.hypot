import hypot, * as hypotModule from 'math.hypot';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(hypot, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(hypotModule).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = hypotModule;
	t.equal(await import('math.hypot/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('math.hypot/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('math.hypot/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
