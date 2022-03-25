// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const dirList = arr.map(movie => movie.director)
  const dirListNoDuplicates=Array.from(new Set(dirList))

  return dirListNoDuplicates
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const newArr = arr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
  return newArr.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const sum = arr.reduce(function(acc, movie) {
    return acc += movie.score
  },0)
  return Math.round(sum/arr.length*100)/100
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter(movie => movie.genre.includes('Drama'))
  return scoresAverage(dramaMovies)
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const newArr = [...arr]
  newArr.sort(function (a,b){
    if (a.year === b.year){
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1; 
      if (a === 0) return 0;
    }
    return a.year - b.year
  })

  return newArr
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const newArr = [...arr]
  newArr.sort(function(a,b){
    if (a.title < b.title) return -1; // a is less than b
    if (a.title > b.title) return 1; // a is greater than b
    if (a.title === b.title) return 0; // a equals b
  })

  if (newArr.length < 20){
    movieList = [...newArr]
  }  else {
    movieList = newArr.slice(0,20)
  }

  return movieList.map(movie => movie.title)
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  //const newArr = [...arr];
  const newArr = JSON.parse(JSON.stringify(arr));

  const hToMin = str => {
    let h = str.split("h")
    let min = h[1].split("min")
    h=h.shift()
    min = min.shift()
    let min2 = (Number(h)*60)+Number(min)
    return min2
  }
    
  const movieMin = newArr.map(movie => {
    let newTime = hToMin(movie.duration)
    movie.duration = newTime
    return movie
  })
  
  return movieMin
}
console.log(turnHoursToMinutes(movies))


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
