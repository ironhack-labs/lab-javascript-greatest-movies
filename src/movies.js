// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayMovies) {
  const allDirectors = arrayMovies.map((movies) => movies.director); // New array with all the directors mapped from argument
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayMovies) {
  const filteredDirector = arrayMovies.filter((movies) => (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama')));
  return filteredDirector.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arrayMovies) {
  // Check if arrayMovies is empty
  if(arrayMovies.length === 0) return 0;

  const reduceScores = arrayMovies.reduce((totalScore, movie) => {
    if(!movie.score) return totalScore; // Prevent an undefined when a movie does not have score
    return totalScore + movie.score;
  }, 0);
  const averageScore = Math.round((reduceScores/arrayMovies.length)*100)/100; // Round average to 2 decimals

  return averageScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arrayMovies) {
  // Filter movies with genre = Drama 
  const filteredGenreDrama = arrayMovies.filter((movies) => (movies.genre.includes('Drama')));;
  // Reuse method scoresAverage
  return scoresAverage(filteredGenreDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayMovies) {
  // Check if arrayMovies is empty
  if(arrayMovies.length === 0) return [];
  // Create a new array and sort it by ascendent year
  // Use map to prevent mutate the original array
  const moviesSorted = arrayMovies.map((item) => {
    return item;
  });
  moviesSorted.sort((a, b) => {
    if(a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else if (a.year === b.year) { // If years are the same, sort it alphabetical
      if(a.title < b.title) {
        return -1;
      } else {
        return 1;
      }
    };
  });

  return moviesSorted;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayMovies) {// Check if arrayMovies is empty
  if(arrayMovies.length === 0) return [];
  // Create a new array with the titles and sort it by ascendent alphabetical order
  // Use map to prevent mutate the original array
  const moviesSorted = arrayMovies.map((movie) => {
    return movie.title;
  });
  moviesSorted.sort((a, b) => {
    if(a < b) {
      return -1;
    } else {
      return 1;
    };
  });
  // Filter the top 20
  const firstTwentyTitles = moviesSorted.filter((movie, index) => {
    return index < 20;
  });
  return firstTwentyTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayMovies) {
   // Check if arrayMovies is empty
   if(arrayMovies.length === 0) return [];
   // Create a new array 
   // Use map to prevent mutate the original array and the original object
   const newArrayMovies = arrayMovies.map((movie) => {
     return Object.assign({}, movie);
   });
   // Replaces the duration of the movies
   const newDurationArray = newArrayMovies.map((movie) => {
    let newDuration = 0;
    let oldDuration = '' + movie.duration;
    if(oldDuration.includes('h')) {
      newDuration += 60 * oldDuration.slice(0, oldDuration.indexOf('h')); // Transform hours in minutes
    }
    if(oldDuration.includes('min')) {
      newDuration += 1 * oldDuration.slice(oldDuration.indexOf(' ') + 1, oldDuration.indexOf('m')); // Transform string to number
    }
    movie.duration = newDuration;
    return movie;
  });

   return newDurationArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arrayMovies) {
  let bestYear = 0;
  let bestAverage = 0;
  // Check if arrayMovies is empty
  if(arrayMovies.length === 0) return null;
  // Loop arrayMovies and calculates average score for each year
  // Maybe it is not the most efficiency way of doing it but it works
  arrayMovies.forEach((movie) => {
    const moviesInYear =  arrayMovies.filter((movieYear) => {
      return movie.year === movieYear.year;
    })
    // Updates bestAverage and bestYear
    if(scoresAverage(moviesInYear) > bestAverage) {
      bestAverage = scoresAverage(moviesInYear);
      bestYear = movie.year;
    } else if (scoresAverage(moviesInYear) === bestAverage  && bestYear > movie.year){
      bestYear = movie.year; // If there is a tie, choose old films
    }
  })
  return `The best year was ${bestYear} with an average score of ${bestAverage}`
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
