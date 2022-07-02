const movies = require('../src/data');
const { orderByYear } = require('../src/movies');

describe('Iteration 5: Order by year', () => {
  test('should be implemented by a function named orderByYear()', () => {
    expect(typeof orderByYear).toBe('function');
  });

  test('should return an array', () => {
    expect(Array.isArray(orderByYear())).toBe(true);
  });

  it('should return an empty array if an empty array is passed as parameter', () => {
    expect(orderByYear([])).toStrictEqual([]);
  });

});
