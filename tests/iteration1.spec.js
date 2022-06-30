const movies = require('../src/data');
const { getAllDirectors } = require('../src/movies');

// Iteration 1
describe('All Directors', () => {
  test('should be implemented by a function called getAllDirectors()', () => {
    expect(typeof getAllDirectors).toBe('function');
  });

  test('should return an array', () => {
    expect(Array.isArray(getAllDirectors())).toBe(true);
  });

  test('should not modify the input array', () => {
    expect(getAllDirectors(movies)).not.toBe(movies);
  });

  test('array of only one movie should return an array with the director', () => {
    expect(
      getAllDirectors([
        {
          anotherProperty: 'this is not the director',
          director: 'the actual director'
        }
      ])
    ).toStrictEqual(['the actual director']);
  });
});
