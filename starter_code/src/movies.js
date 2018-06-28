/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies) {
  var moviesWithMinutes = movies.map(function(movie) {
    var newMovie = Object.assign({}, movie);
    var timeArray = newMovie.duration.split(' ');
    var weHaveHours = false;
    var weHaveMinutes = false;

    timeArray.forEach(function(duration, i) {
      if (timeArray[i].indexOf('h') > -1) {
        weHaveHours = true;
      }

      if (timeArray[i].indexOf('min') > -1) {
        weHaveMinutes = true;
      }

      timeArray[i] = timeArray[i].replace('h', '');
      timeArray[i] = timeArray[i].replace('min', '');
    });

    var hours = 0;
    var minutes = 0;

    if (weHaveHours) {
      hours = parseInt(timeArray[0]) * 60
    }

    if (weHaveHours && weHaveMinutes) {
      minutes = timeArray[1];
    } else if (!weHaveHours && weHaveMinutes) {
      minutes = timeArray[0];
    }

    newMovie.duration = hours + parseInt(minutes);
    
    return newMovie;
  });

  //console.log(moviesWithMinutes);
  return moviesWithMinutes;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
  var rate;
  var result = movies.reduce(function(acum, movie, index, movies) {
    rate = movie.rate !== '' ? movie.rate : 0; 
    return acum + parseFloat(rate);
  }, 0);
  
  return Math.round(result / movies.length * 100) / 100;
}

// Get the average of Drama Movies
function dramaMoviesArray(movies) {
  var dramaMovies = movies.filter(function(movie){
    return movie.genre.indexOf('Drama') > -1;
  });
  return dramaMovies;
}

function dramaMoviesRate(movies){
  var dramaMovies = dramaMoviesArray(movies);
  return dramaMovies.length ? ratesAverage(dramaMovies) : undefined;
}

// Order by time duration, in growing order
function orderByDuration(movies){
  movies.sort(function(a,b){
    if (a.duration === b.duration) {
      return a.title > b.title ? 1 : -1;
    }
    return a.duration - b.duration;
  });
  console.log(movies);
  return movies;
}

// How many movies did STEVEN SPIELBERG
function directorMoviesArray(movies, director) {
  var directorMovies = movies.filter(function(movie){
    return movie.director.indexOf(director) > -1;
  });
  return directorMovies;
}

function howManyMovies(movies) {
  if (movies.length) {
    var dramaMovies = dramaMoviesArray(movies),
    spielbergMovies = directorMoviesArray(dramaMovies, 'Steven Spielberg'),
    resultString = `Steven Spielberg directed ${spielbergMovies.length} drama movies!`;

    return resultString;
  }
  return undefined
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var movieTitles = [];
  movies.forEach(function(movie){
    movieTitles.push(movie.title);
  });
  movieTitles.sort();
  while(movieTitles.length > 20){
    movieTitles.pop();
  }
  return movieTitles;
}

// Best yearly rate average
