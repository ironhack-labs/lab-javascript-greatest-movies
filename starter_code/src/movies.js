/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  var filmsMinute = movies.map(function(film) {
    var newMovie = {};
    // var hoursToMinutes;
    // hoursToMinutes =  parseInt(film.duration) * 60 + parseInt(film.duration.substr(2));
    var hoursToMinutes;
    if (film.duration.length <= 2 && film.duration.length > 0 ) {
        hoursToMinutes = parseInt(film.duration) * 60;
    } else if (film.duration.length > 2 && film.duration.length <= 5) {
        hoursToMinutes = parseInt(film.duration);
    } else {
        hoursToMinutes = parseInt(film.duration) * 60 + parseInt(film.duration.substr(2));
    }

      (newMovie.title = film.title);
      (newMovie.year = film.year);
      (newMovie.director = film.director);
      (newMovie.duration = hoursToMinutes);
      (newMovie.genre = film.genre);
      (newMovie.rate = film.rate);

    return newMovie;
  });
  return  filmsMinute;
}
// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var average = movies.reduce(function(total, movie) {
    return total + parseFloat(movie.rate||0  ) / movies.length;
  }, 0);
  return parseFloat(average.toFixed(2));
}
// Get the average of Drama Movies
//
function onlyDrama(movies){
  return movies.filter(function(movie){
    return movie.genre.includes("Drama")===true;
  });
}

  function dramaMoviesRate(movies){
if (ratesAverage(onlyDrama(movies))===0){
  return undefined;
} else {return ratesAverage(onlyDrama(movies));}

  }

// Order by time duration, in growing order
function orderByDuration(movies){
  return movies.sort(function(a,b){
    if (a.duration===b.duration){
      if (a.title>b.title){
          return 1;
      }
    } else {
      return a.duration - b.duration;
    }
  });
}
// How many movies did STEVEN SPIELBERG
function onlySpielbergMovies(movies){
  return movies.filter(function(movie){
    return movie.director==="Steven Spielberg";
  });
}

function howManyMovies(movies){
if (movies.length===0){
  return undefined;
} else {
  return "Steven Spielberg directed "+ onlySpielbergMovies(onlyDrama(movies)).length +" drama movies!";
}
}
// Order by title and print the first 20 titles
function orderAlphabetically(movies){
 movies.sort(function(a,b){
    return a.title < b.title ? -1 : 1;
    });
    var first20=[];
    var limit = 20;
    if (movies.length<20){
      limit= movies.length;
    }
    for (var i = 0; i<limit; i++){
      first20.push(movies[i].title);
    }
    return first20;
}
// Best yearly rate average

function yearMovie(year){
  return movies.filter(function(movie){
    return movie.year===year;
  });
}
function yearAverageRate(year){
  return ratesAverage(yearMovie(year));
}

function bestYearAvg(movies){
  // for (var i=0; i<2020; i){
  //   if (yearAverageRate(i))
}
