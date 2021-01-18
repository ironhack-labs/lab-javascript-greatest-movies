


// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
  const mapped = arr.map(dirs => {return dirs.director})
  return [...mapped];
}
getAllDirectors(movies)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    const filtered = arr.filter((dir) => {
      if (dir.director.includes("Steven Spielberg") && dir.genre.includes("Drama")){return true}
      else{return 0}
    })
    return filtered.length
  }
  howManyMovies(movies);
  

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  if(!arr.length){return 0}
  else if(!arr.rate){
    const ratesAvg = arr.reduce(function (acc, val) {
      return acc + val.rate
      },0) / arr.length
      return Number(ratesAvg.toFixed(2));
    }
}
ratesAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(arr) {
  const dramaGenre = arr.filter((dir) => {
    if (!dir.genre.includes("Drama")){
      return 0}
    else if(dir.genre.includes("Drama")){
      return dir.rate
    }
  }).reduce(function (acc,val){
      return acc + val.rate
    },0)  / arr.length
  return Number(dramaGenre.toFixed(2));
}

dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr){
  const movieByYear = arr.slice(0).sort(function (a, b){
    if(a.year > b.year){return 1}
 })
 return movieByYear;
}
orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
  const order = arr.slice(0).sort(function (a, b){
    if(a.title > b.title){return -1}
 }).filter
 return order;
}
orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
