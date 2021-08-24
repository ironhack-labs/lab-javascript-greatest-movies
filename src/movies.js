// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.filter(movie => movie.director).map(movie=>movie.director);
  return [...new Set(directors)];
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const dramaSteven = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes ("Drama"))
  return dramaSteven.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length === 0){
    return 0
  }
  const scores = movies.map((movie) =>  { 
    if (!movie.score){
      return 0 
    }   
    return  movie.score 
  })

const sumScores = scores.reduce( function (accu, score){ 
  return accu + score
})

const avScore = sumScores / movies.length;

const roundedAv = (Math.round( (avScore) * 100) / 100) 

return roundedAv

}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'))
  const totalScore = dramaMovies.reduce((acc, curr) => {
    return acc + curr.score;
  }, 0)
  return parseFloat((totalScore / dramaMovies.length).toFixed(2))
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const movieYear = movies.sort((a, b) => {
    return a.year - b.year
  })
  return movieYear
}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const movieTitle = movies.sort(a, b) => {
    return a.title.localeCompare(b.title)
  }
  return movieTitle.slice(0,20)
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
