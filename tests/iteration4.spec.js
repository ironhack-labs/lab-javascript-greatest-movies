const movies = require('../src/data');
const { dramaMoviesScore } = require('../src/movies');

describe('Iteration 4: Drama movies', () => {
  test('should be implemented by a function named dramaMoviesScore()', () => {
    expect(typeof dramaMoviesScore).toBe('function');
  });

  test('should return a number', () => {
    expect(typeof dramaMoviesScore()).toBe('number');
  });

  it('should return 0 if an empty array is passed', () => {
    expect(dramaMoviesScore([])).toBe(0);
  });

  test('should return 8.6 when there is only one movie and is a drama and its score is 8.6', () => {
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
    expect(dramaMoviesScore(input)).toBe(8.6);
  });

  test('should return 8.6 when there is only one drama movie and its score is 8.6', () => {
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
        score: 8.5
      }
    ];
    expect(dramaMoviesScore(input)).toBe(8.6);
  });


});
