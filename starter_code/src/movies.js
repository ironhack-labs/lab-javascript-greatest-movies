/* eslint no-restricted-globals: 'off' */
function test() {
  console.log(movies);
};
// Turn duration of the movies from hours to minutes 
/*
var newMovies = movies.map(function() {
  return newMovies;
});
*/
const newMovies = movies.map(movie => {
  let hours = movie.duration.substring(0, movie.duration.indexOf('h'));
  let minutes = movie.duration.substring(movie.duration.indexOf('h') + 2, movie.duration.indexOf('m'));
  //let totalMinutes = (parseInt(hours) * 60) + parseInt(minutes);
  return {
    title: movie.title,
    year: movie.year,
    director: movie.director,
    duration: (parseInt(hours) * 60) + parseInt(minutes),
    genre: movie.genre,
    rate: movie.rate
  }
})
//console.log(newMovies);
console.log(newMovies)

// Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
  let totalAverage = arr.reduce((acc, movie) => acc + parseFloat(movie.rate),0);
  totalAverage = Math.round((totalAverage/arr.length) * 100) / 100;
  console.log(totalAverage);
};
// Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
  let dramas = arr.filter(movie => movie.genre.includes('Drama'));
  ratesAverage(dramas);
};

// Order by time duration, in growing order
const orderByDuration = (arr) => {
  let durationArray = arr.sort((a,b) => (a.duration > b.duration) ? 1 : ((b.duration > a.duration) ? -1 : 0));
  console.log(durationArray);
};

// How many movies did STEVEN SPIELBERG
const howManyMovies = (arr) => {
  let dramas = arr.filter(movie => movie.genre.includes('Drama'));
  let spielbergMovies = dramas.filter(movie => movie.director === 'Steven Spielberg');
  console.log(`A total of ${spielbergMovies.length} drama movies on the array where made by Steven Spielberg`);
};

// Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
  let sortedArray = arr.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  sortedArray = sortedArray.slice(0, 20);
  console.log(sortedArray);
};

// Best yearly rate average
const bestYearlyRate = (arr) => {
  let bestArray = arr.sort((a,b) => (a.rate > b.rate) ? 1 : ((b.rate > a.rate) ? -1 : 0));
  console.log(bestArray.reverse());
};
