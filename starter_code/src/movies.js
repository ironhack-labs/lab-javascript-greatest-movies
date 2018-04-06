var movies = require("./data.js")
/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// map through duration, split the string, parseInt() * 60 on hours + minutes

function turnHoursToMinutes(collection){ 
  var newFormat = collection.map(function(movie){
    var newMovie = Object.assign({}, movie);
    var movieTime = newMovie.duration;
    var tempMovieTime = "";
    if (movieTime.includes("h") && movieTime.includes("m")){
      tempMovieTime = movieTime.toString().split(" ");
      tempMovieTime = parseInt(tempMovieTime[0]) * 60 + parseInt(tempMovieTime[1]);
    }else if (movieTime.includes("h")){
      tempMovieTime = parseInt(movieTime);
      tempMovieTime  *= 60;
    }else if (movieTime.includes("m")){
      tempMovieTime = parseInt(movieTime);
    }
    var hoursInMinutes = tempMovieTime;
    newMovie.duration = hoursInMinutes;
    return newMovie;
  });
        return newFormat;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(collection){
  var allRatings = collection.map(function(movie){
    var ratingsArr = parseFloat(movie.rate);
    return ratingsArr
  });
  var moviesSum = allRatings.reduce(function(rate,movie){
    return (rate + movie);  
  },0);
  var moviesAvg = parseFloat(moviesSum) / allRatings.length;
  return  parseFloat(moviesAvg.toFixed(2));
}

// Get the average of Drama Movies
function dramaMoviesRate(collection){
  var dramaMovies = collection.filter(function(movie){
    if (movie.rate == ''){
      movie.rate = 0;
    }
    return (movie.genre.includes("Drama"));
  });
  if (ratesAverage(dramaMovies) > 0){
    return ratesAverage(dramaMovies);
  }
}

// Order by time duration, in growing order
function orderByDuration(collection) {
  sortByDurationTitle = collection.sort(function(movieA,movieB){
    if (movieA.duration === movieB.duration){
      var comparison = movieA.title.localeCompare(movieB.title);
      if (comparison < 0){
        return movieA.duration;
      }
      else{
        return movieB.duration;
      }
    }
    else{
        return movieA.duration - movieB.duration
    } 
  });
  return sortByDurationTitle;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(collection){
  var filterMovies;
  if(collection === undefined || collection.length === 0){
    return undefined;
  }
  else{
    filterMovies = collection.filter(function(movie){
    return (movie.genre.includes("Drama") && movie.director.includes("Steven Spielberg"));
  });
  var numberOfMovies;
  if (filterMovies.length === 0){
    numberOfMovies = 0;
  }
  else{
    numberOfMovies = filterMovies.length;
  }
  var msg = "Steven Spielberg directed "+ numberOfMovies +" drama movies!"
  return msg;
  }
}


// Order by title and print the first 20 titles

function orderAlphabetically(collection){
  var arrayTitleSort = collection.sort(function(movieA,movieB){
    var movieAupper  = movieA.title.toUpperCase();
    var movieBupper = movieB.title.toUpperCase();
      if (movieAupper < movieBupper){
        return -1;
      }
      if (movieAupper > movieBupper){
        return 1;
      }
  });
  var titlesArray = [];
  arrayTitleSort.forEach(function(movie,index) {
    if (index < 20)
    {
      titlesArray[index] = movie.title;
    }
  });
  return titlesArray;
}

// Best yearly rate average
