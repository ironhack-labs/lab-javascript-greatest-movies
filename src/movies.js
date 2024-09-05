// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors =[]
  moviesArray.forEach((movie) => {
    if (!directors.includes(movie.director)){
      directors.push(movie.director)
    }
  });
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenFilms = moviesArray.filter((movie) => movie.director==="Steven Spielberg" && movie.genre.includes("Drama"))
  return stevenFilms.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(moviesArray) {
  if (moviesArray.length===0){
    return 0
  }
  const hasScore = moviesArray.filter((movie)=>movie.score);
  let scores = hasScore.reduce((acc,movie) => acc + movie.score,0)
  let finalScores = scores / moviesArray.length
  return (Math.round(finalScores*100))/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama") && movie.score)
  if (dramaMovies.length===0){
    return 0
  }
  let scores = dramaMovies.reduce((acc,movie) => acc + movie.score,0)
  let finalScores = scores / dramaMovies.length
  return (Math.round(finalScores*100))/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesByYear = []
  moviesArray.forEach((movies) => moviesByYear.push(movies))
  moviesByYear.sort((movie1,movie2) => {
    if (movie1.year > movie2.year){
      return 1
    }
    else if (movie1.year < movie2.year){
      return -1
    }
    else{
      if (movie1.title > movie2.title){
        return 1
      }
      else if (movie1.title < movie2.title){
        return -1
      }
    }
  })
  return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesAlphabetically = []
  moviesArray.forEach((movies,index) => {
    // if (index<20){
    // }
    moviesAlphabetically.push(movies.title)
  })
  moviesAlphabetically.sort((movie1,movie2)=> {
    if (movie1 > movie2){
      return 1;
    }
    else if (movie1 < movie2){
      return -1;
    }
    else{
      return 0
    }
  })
  const ans = moviesAlphabetically.slice(0,20)
  return ans
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
