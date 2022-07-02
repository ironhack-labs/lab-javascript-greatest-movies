const movies = require('../src/data');
const { orderAlphabetically } = require('../src/movies');

describe('Iteration 6: Alphabetic order', () => {
  test('should be implemented by a function named orderAlphabetically()', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });
});
