// Example unit tests for a user helper.

const { displayName } = require('../src/utils/user');

describe('displayName', () => {
  test('returns first + last name', () => {
    expect(displayName({ first: 'Ayesha', last: 'Khan' })).toBe('Ayesha Khan');
  });

  test('returns Unknown for incomplete user', () => {
    expect(displayName({ first: 'Ali' })).toBe('Unknown');
  });

  test('returns Unknown for null input', () => {
    expect(displayName(null)).toBe('Unknown');
  });
});
