// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const onlyDirectors = movies.map(function(whatever) {
  })
  return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const filteredMovies = movies.filter(function(stevies) {
  if (movies.length === 0){
    return 0
  } if (stevies.director === 'Steven Spielberg' && stevies.genre.includes('Drama')) {
    return true
  }})
  return filteredMovies.length
} 


  // filtering only Drama movies by Steve -- genre is an array with strings -- count occurency of specific string -- turn it to a 
// function filteredMovies(){}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const scores = movies.reduce(function(acc, val) {
  return acc + val.score / movies.length || 2
  }, 0)
  // average and floatingpoint
  return Math.round (scores*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(movies) {
  let dramas = movies.filter(function(genres) {
    return genres.genre.includes("Drama")
  }) 
  let dramaScores = dramas.map(function(DramaScore) {
    if (DramaScore.score === "" || DramaScore.score === undefined) {
      return 0 };
      return DramaScore.score
  })
    dramaScoreAvg = dramaScores.reduce(function(acc, val) {
    return acc + val / dramaScores.length;
    return dramaScoresAvg;
  }, 0)
    return Math.round (dramaScoreAvg*100)/100;
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(sorted) {
  const onlyYears = sorted.map(function(whatever) {
    return sorted.years
  })
  return onlyYears
}
/*
const sortedReviews = sorted.sort(function (a, b) {
  if (a.year === b.year) {
    return a.score - b.score
  }
  return a.rate - b.rate
})
 */ 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const onlyDirectors = movies.map(function(whatever) {
    return whatever.title
  })
  const sorted = title.sorted(function(a, b){
    return a.localCompare(b);
  })
  const res = sorted.slice(0,20);
  return res;
}

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
