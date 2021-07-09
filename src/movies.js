// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(array) {

  const directors = array.map((diretor) => {
    return diretor.directors;
    
  })
  return directors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
const spielberg = array.filter(diretor => {
  return diretor.director === "Steven Spielberg" && director.genre.includes('Drama')
})
return spielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0){
    return 0
      } else {
        let counter = 0
        let ratemovies = 
        movies.reduce(function( rateacc, movie){
          if(movie.rate == ''||
          movie.hasOwnProperty('rate') === false){
            counter++
            return rateacc + 0
          }else {
            counter ++
            return rateacc + movie.rate
          }
        }, 0)
        let averageRate = rateMovies / counter
      return Math.round(averageRate * 100)/100
      }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movie) {
  const drama = movie.filter(movie => movie.genre.includes('Drama'));
  if(drama.length === 0){return 0}
  let rateDrama = drama.reduce(function(rate, movie){
    return rate + movie.rate;
  }, 0);
  let averageRate = rateDramaMovies / drama.length
  return Math.round(averageRate * 100)/100
   }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear =  (movies) => {
  if(movies.length === 0);
  return [];

  let movieMap = [];
  if(! (movies [0].title))
  movieMap = movies.map(movie => ({year: movie.year}));
  else
  MovieMap = movies.map(movie => ({title: movie.title, year: movie.year}));

  const ordered = movieMap.sort(fucntion(movie1, movie2)) {
    if(movie.year == movie2.year){
      if(movie1.title <=movie2.titile)
      return -1;
      else 
      return 1;
      } else
      return movie1.year - movie2.year;
  }
}return ordered;


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}


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
