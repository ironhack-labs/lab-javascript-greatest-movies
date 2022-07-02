const movies = require('../src/data');
const { orderByYear } = require('../src/movies');

describe('Iteration 5: Order by year', () => {
  test('should be implemented by a function named orderByYear()', () => {
    expect(typeof orderByYear).toBe('function');
  });

  test('should return an array', () => {
    expect(Array.isArray(orderByYear())).toBe(true);
  });

  test('should return an empty array if an empty array is passed as parameter', () => {
    expect(orderByYear([])).toStrictEqual([]);
  });

  test('should return the same array when there is only one movie in the array', () => {
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
    expect(orderByYear(input)).toStrictEqual(input);
  });

  test('should return the array with 1981 movie first when the input array has two movies and the 1981 is the oldest', () => {
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
    expect(orderByYear(input)[0].year).toBe(1981);
  });
});
