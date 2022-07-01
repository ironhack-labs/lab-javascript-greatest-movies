const movies = require('../src/data');
const { howManyMovies } = require('../src/movies');

// Iteration 2
describe('Iteration 2: Steven Spielberg. The best?', () => {
  test('should be implemented by a function named howManyMovies()', () => {
    expect(typeof howManyMovies).toBe('function');
  });

  test('should return an array', () => {
    expect(Array.isArray(howManyMovies())).toBe(true);
  });

  test('should return only drama movies when all movies are drama movies', () => {
    const input = [
      {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
      }
    ];
    expect(howManyMovies(input)).toStrictEqual(input);
  });

  test('should return only drama movies when only one movie is drama', () => {
    const input = [
      {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        score: 9.3
      },
      {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime'],
        score: 9.2
      }
    ];
    expect(howManyMovies(input).length).toBe(1);
  });
});
