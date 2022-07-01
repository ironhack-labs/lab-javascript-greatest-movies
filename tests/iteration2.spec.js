const movies = require('../src/data');
const { howManyMovies } = require('../src/movies');

// Iteration 2
describe('Iteration 2: Steven Spielberg. The best?', () => {
  test('should be implemented by a function named howManyMovies()', () => {
    expect(typeof howManyMovies).toBe('function');
  });

  test('should return a number', () => {
    expect(typeof howManyMovies([])).toBe('number');
  });

//   test('should return only drama movies when there are only one movies and is a drama', () => {
//     const input = [
//       {
//         title: 'Saving Private Ryan',
//         year: 1998,
//         director: 'Steven Spielberg',
//         duration: '2h 49min',
//         genre: ['Drama', 'War'],
//         score: 8.6
//       }
//     ];
//     expect(howManyMovies(input)).toStrictEqual(input);
//   });

//   test('should return only drama movies when only one movie is drama', () => {
//     const input = [
//       {
//         title: 'Saving Private Ryan',
//         year: 1998,
//         director: 'Steven Spielberg',
//         duration: '2h 49min',
//         genre: ['Drama', 'War'],
//         score: 8.6
//       },
//       {
//         title: 'Raiders of the Lost Ark',
//         year: 1981,
//         director: 'Steven Spielberg',
//         duration: '1h 55min',
//         genre: ['Action', 'Adventure'],
//         score: 8.5
//       }
//     ];
//     expect(howManyMovies(input).length).toBe(1);
//   });

//   test('should return the all drama movies when all movies are dramas', () => {
//     const input = [
//       {
//         title: 'Indiana Jones and the Last Crusade',
//         year: 1989,
//         director: 'Steven Spielberg',
//         duration: '2h 7min',
//         genre: ['Action', 'Adventure', 'Drama'],
//         score: 8.3
//       },
//       {
//         title: 'Raiders of the Lost Ark',
//         year: 1981,
//         director: 'Steven Spielberg',
//         duration: '1h 55min',
//         genre: ['Action', 'Drama'],
//         score: 8.5
//       },
//       {
//         title: 'Saving Private Ryan',
//         year: 1998,
//         director: 'Steven Spielberg',
//         duration: '2h 49min',
//         genre: ['Drama', 'War'],
//         score: 8.6
//       },
//       {
//         title: 'Schindler"s List',
//         year: 1993,
//         director: 'Steven Spielberg',
//         duration: '3h 15min',
//         genre: ['Biography', 'Drama', 'History'],
//         score: 8.9
//       }
//     ];
//     expect(howManyMovies(input).length).toBe(4);
//   });

//   test('should no modify the input movies array', () => {
//     const input = [
//       {
//         title: 'Indiana Jones and the Last Crusade',
//         year: 1989,
//         director: 'Steven Spielberg',
//         duration: '2h 7min',
//         genre: ['Action', 'Adventure', 'Fantasy'],
//         score: 8.3
//       },
//       {
//         title: 'Raiders of the Lost Ark',
//         year: 1981,
//         director: 'Steven Spielberg',
//         duration: '1h 55min',
//         genre: ['Action', 'Adventure'],
//         score: 8.5
//       },
//       {
//         title: 'Saving Private Ryan',
//         year: 1998,
//         director: 'Steven Spielberg',
//         duration: '2h 49min',
//         genre: ['Drama', 'War'],
//         score: 8.6
//       },
//       {
//         title: 'Schindler"s List',
//         year: 1993,
//         director: 'Steven Spielberg',
//         duration: '3h 15min',
//         genre: ['Biography', 'Drama', 'History'],
//         score: 8.9
//       }
//     ];
//     const filteredMovies = howManyMovies(input);
//     input.pop();

//     expect(filteredMovies.length).not.toBe(input.length);
//   });

//   test('should return only Spilberg movies when there are only one movies and is a Spielberg drama movie', () => {
//     const input = [
//       {
//         title: 'Schindler"s List',
//         year: 1993,
//         director: 'Steven Spielberg',
//         duration: '3h 15min',
//         genre: ['Biography', 'Drama', 'History'],
//         score: 8.9
//       }
//     ];
//     expect(howManyMovies(input)).toStrictEqual(input);
//   });

//   test('should return a empty array when only one movie is drama but is not directed by Spielberg', () => {
//     const input = [
//       {
//         title: 'The Shawshank Redemption',
//         year: 1994,
//         director: 'Frank Darabont',
//         duration: '2h 22min',
//         genre: ['Crime', 'Drama'],
//         score: 9.3
//       },
//       {
//         title: 'Raiders of the Lost Ark',
//         year: 1981,
//         director: 'Steven Spielberg',
//         duration: '1h 55min',
//         genre: ['Action', 'Adventure'],
//         score: 8.5
//       }
//     ];
//     expect(howManyMovies(input).length).toBe(0);
//   });
});
