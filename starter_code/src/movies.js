/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  var newMoviesArray = arr.map(movie => {
    var movieHours = Number(movie.duration[0]) * 60;
    if (movie.duration.length === 8) {
      var movieMinutes = Number(movie.duration.substr(3, 2));
    } else if (movie.duration.length === 7) {
      movieMinutes = Number(movie.duration.substr(3, 1));
    } else if (movie.duration.length === 5) {
      movieMinutes = Number(movie.duration.substr(0, 2));
      movieHours = 0;
    } else if (movie.duration.length === 2) {
      movieMinutes = 0;
    } else if (!isNaN(movie.duration)) {
      movieHours = 0;
      movieMinutes = movie.duration;
    }
    movie.duration = movieHours + movieMinutes;

    return movie;

  });
  return newMoviesArray;
}

// Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  var numberOfMovies = 0;
  var sum = 0;
  arr.forEach(function(movie) {
    sum += Number(movie.rate);
    numberOfMovies += 1;
  });
  var averageRate = Number((sum / numberOfMovies).toFixed(2));
  return averageRate;
}

// Get the average of Drama Movies

function dramaMoviesRate(arr) {
  var sum, counter, averageRateDrama;
  sum = 0;
  counter = 0;

  arr.forEach(function(movie) {
    var allDrama = movie.genre.includes("Drama");
    if (allDrama) {
      sum += Number(movie.rate);
      counter += 1;
    };
  });
  if (sum === 0){
    return undefined;
  } else {
    averageRateDrama = Number((sum / counter).toFixed(2));
    return averageRateDrama;
  }
  
}

// Order by time duration, in growing order

function orderByDuration(arr) {
  var arrayFilter = turnHoursToMinutes(arr);
  arrayFilter.sort(function(a, b) {
    if (a.duration > b.duration){
      return 1
    } else if (a.duration < b.duration){
      return -1
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return arrayFilter;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr){
  var isSpielberg = arr.filter (movie => movie.director == 'Steven Spielberg' && movie.genre.includes("Drama"));
    if (arr.length===0) {
      return undefined;
    } else if (isSpielberg.length===0){
      return "Steven Spielberg directed 0 drama movies!";
    } else if (isSpielberg.length===1){
      return "Steven Spielberg directed 1 drama movies!";
    } else if (isSpielberg.length===2){
      return "Steven Spielberg directed 2 drama movies!";
    } else if (isSpielberg.length===4){
      return "Steven Spielberg directed 4 drama movies!";
    } else {
      return isSpielberg.length.toString();
    }
}

// Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  var sortedArray = arr.sort((a,b) => a.title.localeCompare(b.title));
  sortedArray.splice(20, sortedArray.length);
  var newArray = sortedArray.map(movie => movie.title.toString());
  return newArray;
};

// Best yearly rate average

function bestYearAvg (){
  
};

