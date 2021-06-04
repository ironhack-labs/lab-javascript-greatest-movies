// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map(function(movie){
    return{
      director: movie.director
    }
  })

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
  function spielbergDramaMovies(movie){
    if (movie.director == "Steven Spielberg"){
      if (movie.genre.includes('Drama')){
        return movie
    }}
  }
  let stevenMovies = movies.filter(spielbergDramaMovies);
  let count = stevenMovies.length;
  console.log(stevenMovies);
  return count;}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  average = movies.reduce(function (accumulator, currentVal) {
    return accumulator + currentVal.score;
}, 0) / movies.length;
  console.log(average)
  return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  function dramaMovies(movie){
    if (movie.genre.includes('Drama')){
        return movie
}}
  let dramaMoviesOnly = movies.filter(dramaMovies);
  average = dramaMoviesOnly.reduce(function (accumulator, currentVal) {
    return accumulator + currentVal.score;
  }, 0) / movies.length;
  console.log(average)
  return average;
  }




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesByYear = movies.sort(function(a,b){
    if(a.year < b.year){ return -1;}
      if(a.year > b.year){ return 1;}
      return 0;
  })
  console.log(moviesByYear)
  return moviesByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let moviesByName = movies.sort(function(a,b){
    if(a.title < b.title){ return -1;}
    if(a.title > b.title){ return 1;}
    return 0;
  })
  let moviesByName20 = moviesByName.slice(0, 20);
  console.log(moviesByName20);
  return moviesByName20
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  
  function hourstominutes(hours){
    let hour = hours[0] * 60;
    let minutes = hours.slice(3,5)*1;
    let time = hour+minutes + "min"
    return time
  }
  movies.forEach( movie => movie.duration = hourstominutes(movie.duration));
  return movies;
}

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
