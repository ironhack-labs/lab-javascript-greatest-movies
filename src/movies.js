// The `movies` array from the file `src/data.js`.
// console.log('movies: ', src/data.js/movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
  // let argsArray = Array.from(array);
  // argsArray.forEach(a => console.log(a));
  let directAll = array.map(element => element.director);
  return directAll; 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  let stevenDrama = array.filter(element => (element.director === 'Steven Spielberg') && element.genre.includes('Drama'));
  return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
  if (array.length < 1){
    return 0;
  }
    let total = array.reduce((a, b) => {
      if (!b.score){
        return a;
      }
      return a + b.score;}, 0);
    let average = Math.round((total/array.length)*100)/100;
    return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  let dramas = array.filter(array => array.genre.includes('Drama'));
  let total = dramas.reduce((a,b) => a + b.score, 0)/dramas.length;
  let average = Math.round(total*100)/100;
  if(!average){
    return 0;
  }
  return average;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  let array2 = array.slice()
  let sort = array2.sort((a, b) => {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.year === b.year){
      return a.title.localeCompare(b.title);}
  })
  return sort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  let array2 = array.slice();
  let sort = array2.sort((a, b) => a.title.localeCompare(b.title));
  sort = sort.slice(0, 20);
  return sort.map(element => element.title);
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
