import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('counts zero', () => {
  assert.equal(api.countBits(0), 0);
});
test('counts set bits', () => {
  assert.equal(api.countBits(23), 4);
});
test('counts one bit', () => {
  assert.equal(api.countBits(8), 1);
});
test('handles large safe value', () => {
  assert.equal(api.countBits(Number.MAX_SAFE_INTEGER), 53);
});
test('handles power of two', () => {
  assert.equal(api.countBits(1024), 1);
});
test('rejects negative values', () => {
  assert.throws(() => api.countBits(-1), RangeError);
});
