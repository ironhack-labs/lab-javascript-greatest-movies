// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesSelection) {
  const allDirectors = moviesSelection.map(nameOfDirector => nameOfDirector.director)
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesSelection) {
  const number0fDrama = moviesSelection.filter(function(eachMovie){
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama')
  })
		return number0fDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesSelection) {
  if(moviesSelection.length === 0) {return 0;}
  
  const scores = moviesSelection.reduce(function(firstScore, allMovies){
    if(!allMovies.score){allMovies.score = 0};
		return firstScore + allMovies.score;
	}, 0);
  let averageScores = scores/moviesSelection.length
	return Math.round((averageScores + Number.EPSILON) * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(dramaMoviesArray) {
  const totalDramaScoreArr = dramaMoviesArray.filter(function(drama){
    return drama.genre.includes('Drama')
  });
  return scoresAverage(totalDramaScoreArr);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesReferences) {
  const moviesOrdered = moviesReferences.sort(function(a, b){
    if(a.year === b.year){
      return a.title.localeCompare(b.title);
      } else {
        return a.year - b.year;
     }
  })
  return moviesOrderedCopy = moviesOrdered.map((x) => x);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

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
    bestYearAvg,
  };
}
