const movies = require('../src/data');
const { dramaMoviesScore } = require('../src/movies');

describe('Iteration 4: Drama movies', () => {
  test('should be implemented by a function named dramaMoviesScore()', () => {
    expect(typeof dramaMoviesScore).toBe('function');
  });
});
