const movies = require('../src/data');
const { bestYearAvg } = require('../src/movies');

describe('BONUS - Iteration 8: Best yearly score average', () => {
  test('should be implemented by a function named bestYearAvg()', () => {
    expect(typeof bestYearAvg).toBe('function');
  });

  test('should return a string', () => {
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
    expect(typeof bestYearAvg(input)).toBe('string');
  });

  test('should return string containing The best year was <YEAR> with an average score of <RATE> ', () => {
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
    expect(bestYearAvg(input)).toContain('The best year was');
    expect(bestYearAvg(input)).toContain('with an average score of');
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

  test('should return "The best year was 1998 with an average score of 8.6" when input two movie array one of 1998 and score 8.6 and another lower score from 1984', () => {
    const input = [
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6
      },
      {
        title: 'Once Upon a Time in America',
        year: 1984,
        director: 'Sergio Leone',
        duration: '3h 49min',
        genre: ['Crime', 'Drama'],
        score: 8.4
      }
    ];
    expect(bestYearAvg(input)).toBe(
      'The best year was 1998 with an average score of 8.6'
    );
  });

  test('should return "The best year was 1998 with an average score of 8.6" when input two movie array one of 1998 and score 8.6 and another movie without score from 1984', () => {
    const input = [
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6
      },
      {
        title: 'Once Upon a Time in America',
        year: 1984,
        director: 'Sergio Leone',
        duration: '3h 49min',
        genre: ['Crime', 'Drama']
      }
    ];
    expect(bestYearAvg(input)).toBe(
      'The best year was 1998 with an average score of 8.6'
    );
  });

  test('should return "The best year was 1998 with an average score of 8.6" when input two movie array one of 1998 and score 8.6 and another two movies from 1984 with a high score but lower mean', () => {
    const input = [
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6
      },
      {
        title: 'Raiders of the Lost Ark',
        year: 1981,
        director: 'Steven Spielberg',
        duration: '1h 55min',
        genre: ['Action', 'Adventure'],
        score: 9
      },
      {
        title: 'Das Boot',
        year: 1981,
        director: 'Wolfgang Petersen',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 5
      }
    ];
    expect(bestYearAvg(input)).toBe(
      'The best year was 1998 with an average score of 8.6'
    );
  });
});
