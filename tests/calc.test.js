// Example unit tests for a utility function.

const { add } = require('../src/utils/calc');

describe('calc.add', () => {
  test('adds positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative and positive', () => {
    expect(add(-1, 1)).toBe(0);
  });

  test('throws on invalid args', () => {
    expect(() => add('a', 1)).toThrow('Invalid args');
  });
});
