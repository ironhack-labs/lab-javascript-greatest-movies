const movies = require('../src/data');
const { bestYearAvg } = require('../src/movies');

describe('BONUS - Iteration 8: Best yearly score average', () => {
  test('should be implemented by a function named bestYearAvg()', () => {
    expect(typeof bestYearAvg).toBe('function');
  });
});
