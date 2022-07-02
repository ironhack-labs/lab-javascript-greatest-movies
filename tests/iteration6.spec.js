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


  it('If there are more than 20 elements, return only 20 of them.', () => {
    const moviesArr = [...movies];
    
    expect(moviesArr.length).toBeGreaterThanOrEqual(20);
    expect(orderAlphabetically(moviesArr)).toHaveLength(20);
  });
});
