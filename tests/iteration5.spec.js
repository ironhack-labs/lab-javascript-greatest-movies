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
});
