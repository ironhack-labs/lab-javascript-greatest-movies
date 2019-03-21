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
const ratesAverage = (arr) => arr.reduce((acc, next) => acc + Number(next.rate), 0)/arr.length;

// Get the average of Drama Movies
function dramaMoviesRate(arr){
  var dramaMovies = arr.filter(movie => movie.genre.includes('Drama'));
  return dramaMovies.reduce((acc, movie) => {
    if(isNaN(Number(movie.rate))){return acc;}
    return Math.round(Number(acc + Number(movie.rate)/dramaMovies.length)*100)/100}, 0) || undefined;
  };

// Order by time duration, in growing order
const orderByDuration = (arr) => arr.length !== 1 ? 
  [...arr].sort((a, b) => a.duration === b.duration ? a.title.localeCompare(b.title) : a.duration - b.duration) 
    : arr;

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
  var dramaMovies = arr.filter(movie => movie.genre.includes('Drama'));
  var spielbergMovies = dramaMovies.filter(movie => movie.director === 'Steven Spielberg');
  
  return dramaMovies.length > 0 ? `Steven Spielberg directed ${spielbergMovies.length} drama movies!`: undefined;
}

// Order by title and print the first 20 titles
const orderAlphabetically = 
  (arr) => [...arr]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map(movie => movie.title);

// Best yearly rate average
function bestYearAvg(arr){
  if(arr.length === 0){return;}
  var years = {};
  arr.forEach(movie => {
    if(!years[movie.year]){
      years[movie.year] = [{...movie}];
    }else{
      years[movie.year].push(movie);
    }
  });
  var avgRatesByYear = Object.keys(years).map(year => [year, ratesAverage(years[year])]);
  var bestYear = 0;
  var bestRate = 0;

  avgRatesByYear.sort((a, b) => a[0]-b[0])
    .forEach(year => {
      if(year[1] > bestRate){
        bestYear = year[0];
        bestRate = year[1];
      }
  });
  return `The best year was ${bestYear} with an average rate of ${bestRate}`;
}