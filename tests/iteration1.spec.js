const movies = require('../src/data');
const { getAllDirectors } = require('../src/movies');

// Iteration 1
describe('All Directors', () => {
  test('should be implemented by a function called getAllDirectors()', () => {
    expect(typeof getAllDirectors).toBe('function');
  });
});
