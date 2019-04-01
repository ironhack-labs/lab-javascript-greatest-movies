/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function movieHoursToMinutes(movie){
  let durationArray = movie.duration.split('h');
  let newDuration
  let minutes
  if (durationArray[1] === '') {
    newDuration = parseInt(durationArray[0])*60
  } else {
      if (durationArray.length < 2) {
         minutes = parseInt(durationArray[0]);
         newDuration = minutes;
      } else {
        minutes = parseInt(durationArray[1]);
        newDuration = parseInt(durationArray[0])*60 + minutes;
      }
    }
  let result = newDuration;
  let newMovie = Object.assign({}, movie);
  newMovie.duration = result;
  return newMovie;
}
function turnHoursToMinutes(array){

  let newMovies = array.map(movieHoursToMinutes);
  return newMovies;
}

function ratesAverage(array) {
  if ( array.length === 0) {
    return undefined;
  }
  let sum = array.reduce(function(acc,movie){
    let rate;
    if (movie.rate === ''){
      rate = 0;
    } else {
      rate = parseFloat(movie.rate);
    }
    return acc + rate;
  },0);
  let avg = sum / array.length;
  return parseFloat(avg.toFixed(2));
};

function dramaMoviesRate(array) {
  let dramaMovies = array.filter(function(movie){
    return movie.genre.indexOf('Drama') >= 0;
  });
  let rateDrama = ratesAverage(dramaMovies);
  return rateDrama;
};

function orderByDuration(array){
  return array.sort(function(movie1, movie2){
    if (movie1.duration > movie2.duration) {
      return 1;
    }if ( movie1.duration < movie2.duration) {
      return -1;
    }
    return movie1.title.localeCompare(movie2.title);
  })
}

function howManyMovies(array) {
  if (array.length === 0) {
    return undefined;
  }
  let spielbergDramaMovies = array.filter(function(movie) {
     return  movie.genre.indexOf('Drama') >= 0 && movie.director === 'Steven Spielberg';
  });
    // return spielbergDramaMovies

    return `Steven Spielberg directed ${spielbergDramaMovies.length} drama movies!`;
}

function orderAlphabetically(array) {
  let orderApha = array.sort(function(movie1,movie2) {
    return movie1.title.localeCompare(movie2.title);

  })
  let newOrder = orderApha.slice(0,20);
  return newOrder.map(function(movie){
    return movie.title;
  })
}

function yearAverageRate(array, year){
  let rateYear = array.filter(function(movie){
    return movie.year === year;
  })
  return ratesAverage(rateYear);
}

function ratesVersusYear(array) {
  let rates = []
  let years = array.map(function(movie){
    return movie.year;
  }).filter(function(year, index, self){
    return self.indexOf(year) === index;
  });

  for (let index = 0; index < years.length; index++) {
    const year = years[index];
    rates.push([ year, yearAverageRate(array, year) ]);
  }
  return rates;
}

function bestYear(rates) {
  let sorted = rates.sort(function(ratea, rateb){
    if (ratea[1] === rateb[1]) {
      return ratea[0].localeCompare(rateb[0]);
    } else {
      return -(ratea[1] - rateb[1]);
    }
  })

  let topMovie = sorted[0];

  return `The best year was ${topMovie[0]} with an average rate of ${topMovie[1]}`;
}

function bestYearAvg(array){
  if (array.length === 0) {
    return undefined;
  }
  return bestYear(ratesVersusYear(array));
}


// Get the average of all rates with 2 decimals


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
