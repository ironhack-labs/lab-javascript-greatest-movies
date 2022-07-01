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
});
