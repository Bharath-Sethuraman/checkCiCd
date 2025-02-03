import {describe, expect, test} from '@jest/globals';
import checkFunction from '.';

describe('sum module', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(checkFunction(1, 2)).toBe(3);
  });
});