/* eslint no-restricted-globals: 'off' */
var movies = require("./data.js");
// Turn duration of the movies from hours to minutes
function convertHoursToMinutes(hours){
  var minutesFromHours = hours.split("h");
  return minutesFromHours[0]*60;
}

function convertMinutesToMinutes(minutes){
  var minutesFromMinutes = minutes.split("min");
  return Number(minutesFromMinutes[0]);
}

function doTheMath(duration){
  var timePieces = duration.split(" ");

  var minutes = duration.reduce(function(sum, piece){
    if(piece.includes("h")){
      return sum + convertHoursToMinutes(piece)
    }
    return sum + convertMinutesToMinutes(piece)
  },0);
  return minutes;
}

function turnHoursToMinutes(movies){
  var newMoviesArray = movies.map(function(movie){
    var newMovie = {};
    newMovie.title = movie.title;
    newMovie.year = movie.year;
    newMovie.director = movie.director;
    newMovie.duration = doTheMath(movie.duration);
    newMovie.genre = movie.genre;
    newMovie.rate = movie.rate;
    return newMovie;
  })

  return newMoviesArray;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  var theSum = movies.reduce(function(sum, movie){
    return sum + Number(movie.rate);
  },0);
  var rateAvg = theSum / movies.length;
  return Math.round(rate.avg*100) / 100;
}


// Get the average of Drama Movies

function dramasOnly(movies){
  var dramas = movies.filter(function(movie){
      return movie.genre,includes("Drama")
  })
  return dramas;
}

function dramaMovieRate(movies){
  var dramas = dramasOnly(movies);
  If (dramas.length === 0){
    return;
  }
  var dramaRate = ratesAverage(dramas);
  return dramaRate;
    
}

// Order by time duration, in growing order

function orderByDuration(movies){
  movies.sort(function(movieA, movieB){
    var result = movieA.duration - localeCompare(movieB.duration);
    if (result !== 0){
      return result
    }
    if(movieA.title < movieB.title){
      return -1;
    }
    if(movieA.title > movieB.title){
      return 1;
    }
    return 0;
  })
  return movies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  if (movies.length === 0){
    return;
  }
  var stevesMovies = movies.filter(function(movie){
    return movie.director === "Steven Spielberg";
  })
  var stevesDramas = dramasOnly(stevesMovies);
  return "Steven Spielberg directed " + stevesDramas.length + " drama movies!";

}

// Order by title and print the first 20 titles


// Best yearly rate average
