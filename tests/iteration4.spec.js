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

  test('should return a result rounded to two decimals of 8.58 when all 4 movies are dramas, and their scores are [8.3] [8.5] [8.6] [8.9]', () => {
    const input = [
      {
        title: 'Indiana Jones and the Last Crusade',
        year: 1989,
        director: 'Steven Spielberg',
        duration: '2h 7min',
        genre: ['Action', 'Adventure', 'Drama'],
        score: 8.3
      },
      {
        title: 'Raiders of the Lost Ark',
        year: 1981,
        director: 'Steven Spielberg',
        duration: '1h 55min',
        genre: ['Action', 'Drama'],
        score: 8.5
      },
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6
      },
      {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        score: 8.9
      }
    ];
    expect(dramaMoviesScore(input)).toBe(8.58);
  });

  test('should no modify the input movies array when function is executed multiple times', () => {
    const input = [
      {
        title: 'Indiana Jones and the Last Crusade',
        year: 1989,
        director: 'Steven Spielberg',
        duration: '2h 7min',
        genre: ['Action', 'Adventure', 'Fantasy'],
        score: 8.3
      },
      {
        title: 'Raiders of the Lost Ark',
        year: 1981,
        director: 'Steven Spielberg',
        duration: '1h 55min',
        genre: ['Action', 'Adventure'],
        score: 8.5
      },
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: 8.6
      },
      {
        title: 'Schindler"s List',
        year: 1993,
        director: 'Steven Spielberg',
        duration: '3h 15min',
        genre: ['Biography', 'Drama', 'History'],
        score: 8.9
      }
    ];

    dramaMoviesScore(input);
    dramaMoviesScore(input);
    dramaMoviesScore(input);

    expect(input).toStrictEqual(input);
  });
});
