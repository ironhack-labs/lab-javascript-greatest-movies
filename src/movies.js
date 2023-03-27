// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map(movie => movie.director)
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredMovies = moviesArray.filter(function(movie){
    return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  })
  return filteredMovies.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(moviesArray.length === 0) return 0
  let totalScore = moviesArray.reduce(function(acc, movie){
    if(movie.score === undefined){
      return acc
    }
    return acc + movie.score
  }, 0)
  let average = totalScore / moviesArray.length
  return parseFloat(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if(moviesArray.length === 0) return 0
  let dramaMovies = moviesArray.filter(function(movie){
    return movie.genre.includes("Drama")
  })
  if(dramaMovies.length === 0) return 0
  let dramaScore = dramaMovies.reduce(function(acc, movie){
    if(movie.score === undefined){
      return acc
    }
    return acc + movie.score
  }, 0)
  let average = dramaScore / dramaMovies.length
  return parseFloat(average.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let sortedArray = [...moviesArray]
  sortedArray = sortedArray.sort(function(a, b){
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let alphabeticArray = [...moviesArray]
  alphabeticArray.sort(function(a, b){
    return a.title.localeCompare(b.title)
  })
  let titlesArray = []
  if(alphabeticArray.length >= 20){
    for(let i = 0; i < 20; i++){
      titlesArray.push(alphabeticArray[i].title)
    }
    return titlesArray
  }
  for(let i = 0; i < alphabeticArray.length; i++){
    titlesArray.push(alphabeticArray[i].title)
  }
  return titlesArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let array = [...moviesArray]
  array.map(function(movie){
    movie.duration = `${movie.duration[0]*60}${movie.duration[3]}${movie.duration[4]})`
  })
  return array
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
