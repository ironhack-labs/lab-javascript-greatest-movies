const movies = require('../src/data');
const { scoresAverage } = require('../src/movies');

describe('Iteration 3: All scores average', () => {
  test('should be implemented by a function named scoresAverage()', () => {
    expect(typeof scoresAverage).toBe('function');
  });

  test('should return a number', () => {
    expect(typeof scoresAverage()).toBe('number');
  });

  test('should return 8.6 when there is only one movie with a score of 8.6', () => {
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

    expect(scoresAverage(input)).toBe(8.6);
  });

  test('should return 8.55 when there are two movies with scores of 8.6 and 8.5', () => {
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
    expect(scoresAverage(input)).toBe(8.55);
  });

  test('should be rounded to 2 decimals places', () => {
    const input = [
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

    expect(scoresAverage(input)).toBe(8.67);
  });

  test('should return average even if one of the movies does not have score', () => {
    const input = [
      {
        title: 'Raiders of the Lost Ark',
        year: 1981,
        director: 'Steven Spielberg',
        duration: '1h 55min',
        genre: ['Action', 'Adventure']
      },
      {
        title: 'Saving Private Ryan',
        year: 1998,
        director: 'Steven Spielberg',
        duration: '2h 49min',
        genre: ['Drama', 'War'],
        score: ''
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
    expect(scoresAverage(input)).toBe(2.97);
  });
});
