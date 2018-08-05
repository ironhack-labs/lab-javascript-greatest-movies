/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (elem) {
    var hours = 0;
    var minutes = 0;
    if (elem.duration.indexOf('h') !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf('min') !== -1) {
      minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}

// Get the average of all rates with 2 decimals 
function ratesAverage(b) {
  return Number(b.reduce(function(acc, c){
    var avg = acc + parseFloat(c.rate) / b.length;
    return avg;
  },0).toFixed(2));
  }

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
  var dramaOnly =  arr.filter( d => d.genre.includes('Drama'));
  dramaOnly = dramaOnly.filter(n => n.rate !== '');
  if (dramaOnly.length === 0){return undefined};
  return ratesAverage(dramaOnly);
}
// Order by time duration, in growing order
function orderByDuration(arrDur){
  return arrDur.sort((a,b) => {return a.duration - b.duration 
    || (a.duration === b.duration && a.title > b.title) });
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(stevens) {
  if (stevens === []){return undefined};
  var steven = stevens.filter(e => e.director.includes('Spielberg'));
  var steven =  steven.filter( d => d.genre.includes('Drama'));
  var output =  "Steven Spielberg directed "+steven.length+" drama movies!";
  return output;
}

// Order by title and print the first 20 titles
function orderAlphabetically(alpha){
  return alpha
  .map(a => {return a.title})
  .sort((a,b) => {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
  })
  .slice(0,20);
}
// Best yearly rate average
//function bestYearAvg(yrRateArr){
//  var workingArr = yrRateArr.map(function(movie){
//    return{
//      year: movie.year,
//      rate: movie.rate
//    }})
//}