// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  let directors = movies.map((movie) => movie.director);
  return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergDramas = movies.filter(
    (movie) =>
      movie.director === 'Steven Spielberg' &&
      movie.genre.indexOf('Drama') !== -1
  ); 
  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(someMovies) {
  if (someMovies.length === 0) {
    return 0;
  }
  const totalScore = someMovies.reduce(function (acc, movie) {
    if (typeof movie.score === 'number') {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  const averageTotalScore = Number((totalScore / someMovies.length).toFixed(2));
  return averageTotalScore;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(someMovies) {
  let totalDramamovies = 0;
  const totalScoreDrama = someMovies.reduce(function (acc, movie) {
    if (movie.genre.indexOf('Drama') !== -1) {
      (totalDramamovies = totalDramamovies + 1);
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  if(totalDramamovies === 0){
    return 0;
  }
  const averageTotalDrama = Number(
    (totalScoreDrama / totalDramamovies).toFixed(2)
  );
  return averageTotalDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(someArray) {
  let sortMovies = someArray.map((movie)=>movie);
  sortMovies.sort(function compare(movieA,movieB) {
    if (movieA.year < movieB.year) return -1; 
    if (movieA.year > movieB.year) return 1;
    if (movieA.year === movieB.year){
       return movieA.title.localeCompare(movieB.title);
      } 
  });
  return sortMovies; 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArray) {
  let sortMovies = someArray.map((movie)=>movie.title);
  sortMovies.sort();
  if(sortMovies.length < 20){
    return sortMovies;}else{
      sortMovies = sortMovies.slice(0, 20);

    }
  return sortMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let cloneMovies = movies.map((movie)=>movie);
  return cloneMovies.map((movie) => {
    if (!movie.duration){
      return movie;
    }
    movie.duration = movie.duration.replace("h", "");
    movie.duration = movie.duration.replace("min", "");
    movie.duration = movie.duration.split(" ");
    movie.duration = movie.duration.reduce((acc, item, index) => {
        item = Number(item);
      if (index === 0) {
        return acc + item * 60;
      }
      return acc +item;
    }, 0);
    return movie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

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
    bestYearAvg
  };
}
