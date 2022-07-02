const movies = require('../src/data');
const { turnHoursToMinutes } = require('../src/movies');

describe('BONUS - Iteration 7: Time format', () => {
  test('should be implemented by a function named turnHoursToMinutes()', () => {
    expect(typeof turnHoursToMinutes).toBe('function');
  });
  test('should return an array', () => {
    expect(Array.isArray(turnHoursToMinutes())).toBe(true);
  });

  test('should return an empty array if an empty array is passed as parameter', () => {
    expect(turnHoursToMinutes([])).toStrictEqual([]);
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
    expect(turnHoursToMinutes(input).length).toBe(1);
  });

  test('should no modify the input array when function is executed', () => {
    let result = turnHoursToMinutes(movies);
    movies.pop(1);
    movies.pop(1);
    expect(result).not.toBe(movies);
  });

  test('should return an array with the modified date', () => {
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
    expect(turnHoursToMinutes(input)[0].duration).not.toBe('2h 49min');
    expect(turnHoursToMinutes(input)[0].duration).toBe(169);
  });
});
