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

  test('should return only drama movies when there are only one movies and is a drama', () => {
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

  test('should return the all drama movies when all movies are dramas', () => {
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
        genre: ['Crime', 'Drama'],
        score: 9.2
      },
      {
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        score: 9
      },
      {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genre: ['Action', 'Crime', 'Drama', 'Thriller'],
        score: 9
      }
    ];
    expect(howManyMovies(input).length).toBe(4);
  });

  test('should no modify the input movies array', () => {
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
        genre: ['Crime', 'Drama'],
        score: 9.2
      },
      {
        title: 'The Godfather: Part II',
        year: 1974,
        director: 'Francis Ford Coppola',
        duration: '3h 22min',
        genre: ['Crime', 'Drama'],
        score: 9
      },
      {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan',
        duration: '2h 32min',
        genre: ['Action', 'Crime', 'Drama', 'Thriller'],
        score: 9
      }
    ];
    const filteredMovies = howManyMovies(input);
    input.pop();

    expect(filteredMovies.length).not.toBe(input.length);
  });
});
