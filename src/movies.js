// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director);
    return directors;
  }
  const directors = getAllDirectors(movies);
console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filteredMov = movies.filter(movie => {
      return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    return filteredMov.length;
  }
  const numMovies = howManyMovies(movies);
console.log(numMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
      return 0;
    }
    const scores = movies.reduce((accumulator, movie) => {
      if (movie.score) {
        return accumulator + movie.score;
      } else {
        return accumulator;
      }
    }, 0);
    const averageScore = Math.round((scores / movies.length) * 100) / 100;
    return averageScore;
  }
  const averageScore = scoresAverage(movies);
console.log(averageScore)

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMov = movies.filter(movie => movie.genre.includes('Drama'));
    if (dramaMov.length === 0) {
      return 0;
    }
    const scores = dramaMov.reduce((accumulator, movie) => {
      if (movie.score) {
        return accumulator + movie.score;
      } else {
        return accumulator;
      }
    }, 0);
    const averageScore = Math.round((scores / dramaMov.length) * 100) / 100;
    return averageScore;
  }
  
    

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMov = moviesArray.slice().sort((first, second) => {
      if (first.year !== second.year) {
        return first.year - second.year;
      } else {
        if (first.title < second.title) {
          return -1;
        } else if (first.title > second.title) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    return sortedMov;
  }
  
  

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMov = moviesArray.slice().sort((first, second) => {
      if (first.title < second.title) {
        return -1;
      } else if (first.title > second.title) {
        return 1;
      } else {
        return 0;
      }
    });
    const movieTitles = sortedMov.map(movie => movie.title);
    return movieTitles.slice(0, 20);
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
