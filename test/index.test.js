import { test, expect } from 'vitest';
import { add, multiply } from '../index.js';

test('add function', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(-1, 1)).toBe(0);
  expect(add(0, 10)).toBe(0);
});

test('multiply function', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(0, 5)).toBe(0);
});