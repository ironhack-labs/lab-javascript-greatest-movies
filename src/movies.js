// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// const movies = [
//     {
//       title: 'The Shawshank Redemption',
//       year: 1994,
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       score: 9.3
//     },
//     {
//       title: 'The Godfather',
//       year: 1972,
//       director: 'Francis Ford Coppola',
//       duration: '2h 55min',
//       genre: ['Crime', 'Drama'],
//       score: 9.2
//     },
// {
//     title: 'The Godfather: Part II',
//     year: 1974,
//     director: 'Francis Ford Coppola',
//     duration: '3h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9
//   },
//   {
//     title: 'The Dark Knight',
//     year: 2008,
//     director: 'Christopher Nolan',
//     duration: '2h 32min',
//     genre: ['Action', 'Crime', 'Drama', 'Thriller'],
//     score: 9
//   },
//   {
//     title: '12 Angry Men',
//     year: 1957,
//     director: 'Sidney Lumet',
//     duration: '1h 36min',
//     genre: ['Crime', 'Drama'],
//     score: 8.9
//   },
//   {
//     title: 'Schindler"s List',
//     year: 1993,
//     director: 'Steven Spielberg',
//     duration: '3h 15min',
//     genre: ['Biography', 'Drama', 'History'],
//     score: 8.9
//   },
//   {
//     title: 'Pulp Fiction',
//     year: 1994,
//     director: 'Quentin Tarantino',
//     duration: '2h 34min',
//     genre: ['Crime', 'Drama'],
//     score: 8.9
//   },
//   {
//     title: 'The Lord of the Rings: The Return of the King',
//     year: 2003,
//     director: 'Peter Jackson',
//     duration: '3h 21min',
//     genre: ['Adventure', 'Drama', 'Fantasy'],
//     score: 8.9
//   }]

function getAllDirectors(moviesArray) {
  const mapped = moviesArray.map(function (movies) {
    return movies.director;
  });
  return mapped;
}

const directors = getAllDirectors(movies);
console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let counter = 0;
  moviesArray.filter(function (movies) {
    if (
      movies.director === "Steven Spielberg" &&
      movies.genre.includes("Drama")
    ) {
      counter++;
    }
  });
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let reduce = moviesArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.score;
  }, 0);
  return Math.round((reduce / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  if (dramaMovies.length === 0) {
    return 0;
  }
  let reduce = dramaMovies.reduce(function (accumulator, movie) {
    return accumulator + movie.score;
  }, 0);
  return Math.round((reduce / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const copy = [...moviesArray];
function orderByYear(moviesArray) {
  let movieByYear = [...moviesArray].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return movieByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
