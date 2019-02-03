/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function hoursToMinutes (duration) {
  var minDuration = 0, hours = 0, mins = 0;
  var geth = duration.indexOf("h");
  var getmin = duration.indexOf("min");
  
  if (geth != -1 && getmin != -1 && duration[getmin-2] !== " ") {
    hours = parseInt(duration[geth-1]);
    mins = parseInt(duration[getmin-1]) + parseInt(duration[getmin-2]) * 10;
  }
  else if (geth != -1 && getmin != -1 && duration[getmin-2] === " ") {
    hours = parseInt(duration[geth-1]);
    mins = parseInt(duration[getmin-1]);
  }
  else if (geth == -1 && getmin != -1 && duration[getmin-2] === " ") {
    mins = parseInt(duration[getmin-1]);
  }
  else if (geth == -1 && getmin != -1 && duration[getmin-2] !== " ") {
    mins = parseInt(duration[getmin-1]) + parseInt(duration[getmin-2]) * 10;
  }
  else if (geth != -1 && getmin == -1) {
    hours = parseInt(duration[geth-1]);
  }
  
  minDuration = hours * 60 + mins;
  return minDuration;
}

function turnHoursToMinutes (mov) {
  const minutesMovies = mov.map( movie => {
    const minduration = hoursToMinutes (movie.duration);
    return {
      director: movie.director,
      duration: minduration,
      genre: movie.genre,
      rate: movie.rate,
      title: movie.title,
      year: movie.year
    }
  })
  return minutesMovies;
}

// Get the average of all rates with 2 decimals 

function ratesAverage (mov) {
  var total = mov.reduce((sum, movie) => {
    if (movie.rate == undefined) {
      movie.rate = '0.0';
    }
    return sum + parseFloat(movie.rate);
  }, 0);
  var avg =Math.round( (total/mov.length) * 100 ) / 100;
  return avg;
}

// Get the average of Drama Movies

function rateOK (rate) {
  var newRate;
  if (rate === '') { newRate = '0.0'; }
  else { newRate = rate; }
  return newRate;
}

function dramaMoviesRateOK (mov) {
    const ratedOKMovies = mov.map( movie => {
    const definedRate = rateOK (movie.rate);
    return {
      director: movie.director,
      duration: movie.duration,
      genre: movie.genre,
      rate: definedRate,
      title: movie.title,
      year: movie.year
    }
  })
  return ratedOKMovies;
}

function dramaMoviesRate (mov) {
  var dramaMovies = mov.filter(movie => movie.genre.toString().indexOf('Drama') !== -1);
  var avg = ratesAverage ( dramaMoviesRateOK (dramaMovies) );
  if ( isNaN(avg) ) { avg = undefined; }
  return avg;
}

// Order by time duration, in growing order

var byMinutesMovies = turnHoursToMinutes (movies);

function orderByDuration (mov) {
  const sortedMinutesMovies = mov.sort(function(a, b) {
  if ( a.duration === b.duration ) {
    var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
    if (nameA < nameB) //sort string ascending
        return -1 
    if (nameA > nameB)
        return 1
    return 0 //default return value (no sorting)
  }
  return a.duration - b.duration;
});  
  return sortedMinutesMovies;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies () {

}

// Order by title and print the first 20 titles

function orderAlphabetically () {

}

// Best yearly rate average

function bestYearAvg () {

}
