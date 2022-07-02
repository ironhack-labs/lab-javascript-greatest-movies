const movies = require('../src/data');
const { turnHoursToMinutes } = require('../src/movies');

describe('BONUS - Iteration 7: Time format', () => {
  test('should be implemented by a function named turnHoursToMinutes()', () => {
    expect(typeof turnHoursToMinutes).toBe('function');
  });

  test('should return an array', () => {
    expect(Array.isArray(turnHoursToMinutes())).toBe(true);
  });

  test('should return an empty array if an empty array is passed as parameter', () => {
    expect(turnHoursToMinutes([])).toStrictEqual([]);
  });
});
