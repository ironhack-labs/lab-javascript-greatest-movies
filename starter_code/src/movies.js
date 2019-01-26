/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movie) {
  let newMoviesDuration = [];
  for(let i = 0; i < movie.length; i++) {
    let hours = movie[i].duration.split('h')[0];
      if(isNaN(hours)) {
      hours = 0;
      }
    let min = Number(movie[i].duration.split(' ').pop().split('m')[0]);
      if(isNaN(min)) {
        min = 0;
      }
    let minutes = hours*60 + min;
    newMoviesDuration.push({
      title: movie[i].title,
      year: movie[i].year,
      director: movie[i].director,
      duration: minutes,
      genre: movie[i].genre,
      rate: movie[i].rate
    });
  }
  return newMoviesDuration
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movie) {
  var ratings = [];
  for(let i = 0; i < movie.length; i++) {
    ratings.push(Number(movie[i].rate));
  }
  var sum = ratings.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
  return Number(parseFloat(sum/movie.length).toFixed(2));
}



// Get the average of Drama Movies

function dramaMoviesRate(movie) {
  var dramaMovies = [];
  for(let i = 0; i < movie.length; i++) {
    for(let j = 0; j < movie[i].genre.length; j++) {
      if (movie[i].genre[j] == 'Drama') {
        dramaMovies.push(movie[i]);
      }
    }
  }
  if (isNaN(ratesAverage(dramaMovies))) {
    return undefined;
  } else {
    return ratesAverage(dramaMovies);
  }
}

// Order by time duration, in growing order

function orderByDuration (movie) {
  movie.sort(function (a, b) {
    var result = a.duration - b.duration;
    if (result !== 0) {
      return result;
    }

    if (a.title < b.title) {
      return -1;
    }

    if (a.title > b.title) {
      return 1;
    }

    return 0;
  });

  return movie;
}

// Spielberg movies
  
function howManyMovies(movie) {

  var spielbergMovies = [];
  var spielbergDrama = [];

  for(let i = 0; i < movie.length; i++) {
    if (movie[i].director == 'Steven Spielberg') {
      spielbergMovies.push(movie[i]);
    }
  }
  if (movie.length == 0) {
    return undefined
  }

  if (spielbergMovies.length == 0) {
    return 'Steven Spielberg directed 0 drama movies!';

  } else {
    for(var j = 0; j < spielbergMovies.length; j++) {
      for(var k = 0; k < spielbergMovies[j].genre.length; k++) {
        if (spielbergMovies[j].genre[k] == 'Drama') {
          spielbergDrama.push(spielbergMovies[j]);
        }
      }
    }
  
    if(spielbergDrama.length == 0) {
      return undefined;
    } else {
      return 'Steven Spielberg directed ' + spielbergDrama.length + ' drama movies!';
    }
  }
}


// Order by title and print the first 20 titles

function orderAlphabetically(movie) {
  var alphaOrder = movie;
  var titles = [];

  alphaOrder.sort(function(a, b) {
    var x = a.title.toLowerCase();
    var y = b.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });
  for(var i = 0; i < alphaOrder.length; i++) {
    titles.push(alphaOrder[i].title);
  }
  if (titles.length > 20) {
    return titles.slice(0, 20);
  } else {
    return titles
  }
}


// Best yearly rate average
