const movies = require('../src/data');
const { orderByYear } = require('../src/movies');

describe('Iteration 5: Order by year', () => {
  test('should be implemented by a function named orderByYear()', () => {
    expect(typeof orderByYear).toBe('function');
  });
});
