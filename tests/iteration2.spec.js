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
    expect(howManyMovies(input)).toBe(input);
  });
});
