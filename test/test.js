import assert from 'node:assert';
import { add, multiply } from '../index.js';

console.log('Testing add function...');
assert.strictEqual(add(2, 3), 5);
assert.strictEqual(add(-1, 1), 0);

console.log('Testing multiply function...');
assert.strictEqual(multiply(2, 3), 6);
assert.strictEqual(multiply(1, 5), 0);

console.log('All tests passed! ✅');