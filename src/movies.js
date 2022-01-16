// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
let directors = [] 
  const mappedMovies = movies.map(function(movie){
    directors.push(movie.director)
})
  return directors
  }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const dramaticSteven = movies.filter(function(movie){
    if (movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1) {
      return true
    }
  })
  const dramaticStevenMovies = dramaticSteven.length;
  return dramaticStevenMovies
  }
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0} else 
    {
    const sumScore = movies.reduce(function(sum, movie){ 
    if (movie.score){
      return sum + movie.score}
      return sum + 0;
  }, 0)
 return parseFloat((sumScore / movies.length).toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  dramaMoviesCounter = 0;
  const averageDramaScore = movies.reduce(function(sum, movie){
   if (movie.genre.indexOf('Drama') !== -1){
    dramaMoviesCounter += 1;
    return sum + movie.score
  }  else if (movie.genre.indexOf('Drama') === -1){
    return sum + 0
  }
}, 0)
if (averageDramaScore > 0){
return parseFloat((averageDramaScore / dramaMoviesCounter).toFixed(2))} else {
 return 0}
  }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

  let copyMovies = movies.splice(0, movies.length)
  
  let moviesSortedByYear = copyMovies.sort(function(a, b){
    if (a.year != b.year){
   return a.year - b.year
    } else if (a.year === b.year){
    return a.title.localeCompare(b.title)
    }
  })
    return moviesSortedByYear
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  
  let firstTwentyTitles = [];
  
  let movieTitles = movies.map(function(movie){
      return movie.title})
    
  let alphabeticTitles = movieTitles.sort(function(a, b){
      return a.localeCompare(b)
    })
  
  for (let i = 0; i < 20; i++){
  if (alphabeticTitles[i]){
  firstTwentyTitles.push(alphabeticTitles[i])
  }
  }
    return firstTwentyTitles
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let moviesMinutes = [];
  
    movies.map(function(movie){
      const durations = movie.duration
      if(movie.duration.length < 3){
        const h = parseFloat(durations.slice(0, 1))
      const durationMinutes = h*60
      movie.duration = durationMinutes
      moviesMinutes.push(movie)
      } else{
      const min = parseFloat(durations.slice(3, 5))
      const h = parseFloat(durations.slice(0, 1))
      const durationMinutes = (h*60) + min
      movie.duration = durationMinutes
      moviesMinutes.push(movie)
    }
      })
  return moviesMinutes
  }


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}



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
