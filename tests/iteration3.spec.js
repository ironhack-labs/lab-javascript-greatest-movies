const movies = require('../src/data');
const { scoresAverage } = require('../src/movies');

describe('Iteration 3: All scores average', () => {
  test('should be implemented by a function named scoresAverage()', () => {
    expect(typeof scoresAverage).toBe('function');
  });

  test('should return a number', () => {
    expect(typeof scoresAverage()).toBe('number');
  });
});
