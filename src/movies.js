// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map(movie => {
      return movie.director
  })
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

/*function howManyMovies(arrayMovies) {

  if (arrayMovies.length===0) return 0;

  let dramaMovies = arrayMovies.filter(function(movie){
          movie.genre.includes("Drama")  
          }
  let spielbergDrama = dramaMovies.filter(function(movie) {
      movie.director === "Steven Spielberg"
          }
      )
  return spielbergDrama.length
}
*/

function howManyMovies(movies) {
  if (movies.length == 0) {return 0;}
  let spielbergMovies = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
  return spielbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayMovies) {
  if (arrayMovies.length === 0){
      return 0;
  }
  let sumRate = arrayMovies.reduce(
      function(sum, movie){
         if (!movie.rate) {return sum;}
          return sum + movie.rate;
      }, 0
  )

  //Return average + limit to 2 decimal digits
  let averageRate = sumRate/arrayMovies.length;
 
  return Math.round(averageRate*100)/100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

/*function dramaMoviesScore(arrayMovies) {
  //filter Dramas
  if (arrayMovies.length == 0) {return 0;}
  let dramaMovies = arrayMovies.filter(movie => movie.genre.includes('Drama'));
  return ratesAverage(dramaMovies);
}
*/

function dramaMoviesRate(movies) {
  if (movies.length == 0) {return 0;}
  let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
  return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

//try3
/*
function orderByYear(array) {
  let newArray = array.slice();
   newArray = newArray.sort(
      function (a, b) {a.year - b.year})

//If two movies have the same year, order them alphabetically by their title
      if 
      (a.year === b.year && a.name.charAt(0)> b.name.charAt(0))
          {newArray.sort (a, b => a.name - b.name)};
      if 
      (a.year === b.year && a.name.charAt(0)< b.name.charAt(0))
          {newArray.sort (a, b => b.name - a.name)}

  return newArray;
}
*/

//try4
function orderByYear(array) {
  let newArray = array.slice();
   newArray = newArray.sort(
      function (a, b) {
          if (a.year < b.year) return -1;
          if (a.year > b.year) return 1;
          if (a.year === b.year && a.name.charAt(0) > b.name.charAt(0)) return 1;
          if (a.year === b.year && a.name.charAt(0) < b.name.charAt(0)) return -1;
      }
  )
  return newArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//Only return the title of the movies! Each element should be a string
//If there are less than 20 elements, return all of them.
//If there are more than 20 elements, return only 20 of them.

function orderAlphabetically(array) {
let orderedByYearNew = array.slice();
    orderedByYearNew = orderedByYearNew.sort().reverse(
       //(a, b) => a.name - b.name
       )
       //if (orderedByYearNew.length > 20;){

       //}
        
  return orderedByYearNew
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average




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
