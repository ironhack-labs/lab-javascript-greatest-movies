/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
  return arr.map(movie => {
    var hours, minutes;

    var rawHours = movie.duration.match(/[\d]+h/g);

    hours = rawHours ? rawHours.map(hour => hour.replace(/[A-Za-z]+/g, ''))
      .reduce((acum, next) => acum + next, 0) : 0;

    var rawMinutes = movie.duration.match(/[\d]+min/g);

    minutes = rawMinutes ? rawMinutes.map(minute => minute.replace(/[A-Za-z]+/g, ''))
      .reduce((acum, next) => acum + next, 0) : 0;

    return Object.assign({}, movie, {duration: parseInt(hours)*60 + parseInt(minutes)});
  });
}

// Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => arr.reduce((acc, next) => acc + parseFloat(next.rate), 0)/arr.length;

// Get the average of Drama Movies
function dramaMoviesRate(arr){
  var dramaMovies = arr.filter(movie => movie.genre.includes('Drama'));
  return dramaMovies.reduce((acc, movie) => {
    if(isNaN(Number(movie.rate))){return acc;}
    return Number(acc + Number(movie.rate)/dramaMovies.length)}, 0) || undefined;
  };

// Order by time duration, in growing order
const orderByDuration = (arr) => arr.length !== 1 ? [...arr].sort((a, b) => a.duration === b.duration ? a.title.localeCompare(b.title) : a.duration - b.duration) : arr;

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
  return arr.filter(movie => movie.genre === 'Drama' && movie.director === 'Steven Spielberg') || undefined;
}

// Order by title and print the first 20 titles


// Best yearly rate average
