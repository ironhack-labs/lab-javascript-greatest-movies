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
  turnHoursToMinutes(movies);
  

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
    var sumaRates = moviesArray.reduce(function (accumulator, movie) {
      return accumulator + Number(movie.rate);
    }, 0);
    return Number((sumaRates/ moviesArray.length).toFixed(2));
  }

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
    var dramaMovie = moviesArray.filter(function (pelicula) {
      return pelicula.genre.indexOf('Drama') !== -1;
    });
    if (dramaMovie.length===0) {
        return ;
    }
    return (ratesAverage(dramaMovie));
  }


// Order by time duration, in growing order

function orderByDuration(moviesArray) {
    moviesArray.sort(function (e, r) {
      if (e.duration === r.duration) {
        if (e.title > r.title) {
          return 1;
        }
      }
      return e.duration - r.duration;
    });
    return moviesArray;
  }


// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
      return undefined;
    }
    var directorSpiel = moviesArray.filter(function (elemento) {
      return elemento.director === 'Steven Spielberg' && elemento.genre.indexOf('Drama') !=-1;
    });
    return 'Steven Spielberg directed ' + directorSpiel.length + ' drama movies!';
  }


// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    moviesArray.sort(function (i, j) {
      return i.title < j.title
    });
    var top20Movies = [];
    var limit = 20;
    if (moviesArray.length < 20) {
      limit = moviesArray.length;
    }
    for (var i = 0; i < limit; i++) {
      top20Movies.push(moviesArray[i].title);
    }
    return top20Movies;
  }

// Best yearly rate average