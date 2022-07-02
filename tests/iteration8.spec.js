const movies = require('../src/data');
const { bestYearAvg } = require('../src/movies');

describe('BONUS - Iteration 8: Best yearly score average', () => {
  test('should be implemented by a function named bestYearAvg()', () => {
    expect(typeof bestYearAvg).toBe('function');
  });

  test('should return a string', () => {
    expect(typeof bestYearAvg()).toBe('string');
  });

  test('should return string containing The best year was <YEAR> with an average score of <RATE> ', () => {
    expect(bestYearAvg()).toContain('The best year was');
    expect(bestYearAvg()).toContain('with an average score of');
  });
});
