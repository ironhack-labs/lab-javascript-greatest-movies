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

  test('should return "The best year was 1998 with an average score of 8.6" when input is a only one movie array of year 1998 and score 8.6', () => {
    const input = [
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6
      }
    ];
    expect(bestYearAvg(input)).toBe(
      'The best year was 1998 with an average score of 8.6'
    );
  });
});
