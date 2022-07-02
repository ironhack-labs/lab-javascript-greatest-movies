const movies = require('../src/data');
const { orderAlphabetically } = require('../src/movies');

describe('Iteration 6: Alphabetic order', () => {
  test('should be implemented by a function named orderAlphabetically()', () => {
    expect(typeof orderAlphabetically).toBe('function');
  });

  test('should return an array', () => {
    expect(Array.isArray(orderAlphabetically())).toBe(true);
  });

  test('should return an empty array if an empty array is passed as parameter', () => {
    expect(orderAlphabetically([])).toStrictEqual([]);
  });

  test('should return an array with the same length when there is only one movie in the array', () => {
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
    expect(orderAlphabetically(input).length).toBe(1);
  });

  test('should return the first title "Once Upon a Time Ameria" when input movies array is "Saving Private Ryan", and " Once Upon a Time America" ', () => {
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
    expect(orderAlphabetically(input).length).toBe(2);
    expect(orderAlphabetically(input)[0]).toBe('Once Upon a Time in America');
    expect(orderAlphabetically(input)[1]).toBe('Saving Private Ryan');
  });

  test('should no modify the input array when function is executed multiple times', () => {
    const result = orderAlphabetically(movies);
    movies.pop(1);
    expect(result).not.toBe(movies);
  });

  test('should return an array "Das Boot" as first element, and "Raiders of the Lost Ark" when input array is "Saving Private Ryan", "Raiders of the Lost Ark" and "Das Boot" ', () => {
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
      },
      {
        title: 'Das Boot',
        year: 1981,
        director: 'Wolfgang Petersen',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      }
    ];
    expect(orderAlphabetically(input)[0]).toBe('Das Boot');
    expect(orderAlphabetically(input)[1]).toBe('Raiders of the Lost Ark');
  });

  test('should return 20 elements at max when input array is bigger than more than 20 movies', () => {
    const moviesArr = [...movies];

    expect(moviesArr.length).toBeGreaterThanOrEqual(20);
    expect(orderAlphabetically(moviesArr)).toHaveLength(20);
  });

  test('should return an ordered array when input array is bigger than 20 elements and alphabetically first element is the last one in input array', () => {
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
      },
      {
        title: 'Das Boot',
        year: 1981,
        director: 'Wolfgang Petersen',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8
      },
      {
        title: 'OOO',
        year: 1981,
        director: 'OOO',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'NNN',
        year: 1981,
        director: 'NNN',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'MMM',
        year: 1981,
        director: 'MMM',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'LLL',
        year: 1981,
        director: 'LLL',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'KKK',
        year: 1981,
        director: 'KKK',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'JJJ',
        year: 1981,
        director: 'JJJ',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'III',
        year: 1981,
        director: 'III',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'HHH',
        year: 1981,
        director: 'HHH',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'GGG',
        year: 1981,
        director: 'GGG',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'FFF',
        year: 1981,
        director: 'FFF',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'EEE',
        year: 1981,
        director: 'EEE',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'DDD',
        year: 1981,
        director: 'DDD',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'CCC',
        year: 1981,
        director: 'CCC',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'BBB',
        year: 1981,
        director: 'BBB',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      },
      {
        title: 'AAA',
        year: 1981,
        director: 'AAA',
        duration: '2h 29min',
        genre: ['Adventure', 'Drama', 'Thriller', 'War'],
        score: 8.4
      }
    ];
    expect(orderAlphabetically(input)[0]).toBe('AAA');
    expect(orderAlphabetically(input)[1]).toBe('BBB');
  });
});
