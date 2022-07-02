const movies = require('../src/data');
const { orderAlphabetically } = require('../src/movies');

describe('Iteration 6: Alphabetic order', () => {
  test('should be implemented by a function named orderAlphabetically()', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  test('should return an array', () => {
    expect(Array.isArray(orderAlphabetically())).toBe(true);
  });

  test('should return an empty array if an empty array is passed as parameter', () => {
    expect(orderAlphabetically([])).toStrictEqual([]);
  }); 
});
