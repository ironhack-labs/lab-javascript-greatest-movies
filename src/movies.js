// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(allMovies) {
  
  const allDirectors = allMovies.map(movie => movie.director);
  const uniqueDirectors = allDirectors.filter((element, index, array) => array.indexOf(element) === index)
  
  return uniqueDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(allMovies) {

  const spielbergMovies = allMovies.filter(movie => movie.director == 'Steven Spielberg' && movie.genre.includes('Drama'));
  
  return spielbergMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(allMovies) {

  if (allMovies.length == 0) return 0;

  const sumOfScores = allMovies.reduce((value, movie) => value + movie.score, 0);
  const avgScore = Math.round(sumOfScores * 100 / allMovies.length) / 100;

  return avgScore;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(allMovies) {

  const dramas = allMovies.filter(movie => movie.genre.includes('Drama'));

  return scoresAverage(dramas);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(allMovies) {

  const arrayCopy = allMovies.slice();

  arrayCopy.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

  return arrayCopy;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(allMovies) {

  const arrayCopy = allMovies.slice();

  arrayCopy.sort((a, b) => a.title.localeCompare(b.title));
  
  const onlyTitles = arrayCopy.map(movie => movie.title);

  if (onlyTitles.length > 20) {
    return onlyTitles.splice(0, 20);
  } else {
    return onlyTitles;
  }
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(allMovies) {

  if (allMovies.length == 0) return null;

  allYears = allMovies.map(el => el.year);
  uniqueYears = allYears.filter((el, index, array) => array.indexOf(el) == index);

  function getAvgScoreForYear(completeArray, year) {
    
    const filteredArray = completeArray.filter(el => el.year === year);

    const result = {
      year: year,
      avg_score: scoresAverage(filteredArray)
    }

    return result;
  }
  
  // better: sort and pick first one!

  const avgScoresByYear = uniqueYears.map(el => getAvgScoreForYear(allMovies, el));

  const maxScore = avgScoresByYear.reduce((acc, cv) => Math.max(acc, cv.avg_score), 0);

  let bestYear = avgScoresByYear.filter(el => el.avg_score === maxScore);
  console.log(bestYear)

  if (bestYear.length > 1) {
    bestYear = bestYear.filter(el => el.year == bestYear.reduce((acc, cv) => Math.min(acc, cv.year), 3000));
  } 
  
  return `The best year was ${bestYear[0].year} with an average score of ${bestYear[0].avg_score}`
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
