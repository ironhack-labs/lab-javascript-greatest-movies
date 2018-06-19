/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  var moviesWithCorrectTimeFormat = [];
  var eachMovieHours, eachMovieMinutes, totalMinutes, singleMovieWithCorrectTimeFormat;
  moviesArray.map(function(eachMovie) {
    eachMovieHours = 0;
    eachMovieMinutes = 0;
    totalMinutes = 0;
    if (eachMovie.duration.indexOf("h") !== -1) {
      eachMovieHours = eachMovie.duration.slice(0, eachMovie.duration.indexOf("h"));
    } else {
      eachMovieHours = 0;
    }
    eachMovieMinutes = eachMovie.duration.slice(eachMovie.duration.indexOf("h") + 1, eachMovie.duration.indexOf("m"));
    totalMinutes = (60 * eachMovieHours) + (1* eachMovieMinutes);
    singleMovieWithCorrectTimeFormat = Object.assign({},eachMovie);
    singleMovieWithCorrectTimeFormat.duration = totalMinutes;
    moviesWithCorrectTimeFormat.push(singleMovieWithCorrectTimeFormat);
  });
  return moviesWithCorrectTimeFormat;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
  var result = moviesArray.reduce(function(totalOfAllRatings, currentMovieRating){
    return totalOfAllRatings + Number(currentMovieRating.rate);
  }, 0);

  if(result.length === 0 ) {
    return 0;
  }
  return Number(result / moviesArray.length);
}

// Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {
  var result =0;
  var dramaMoviesArray = moviesArray.filter(function(eachMovie){
    return eachMovie.genre.includes("Drama");
  });
  if (dramaMoviesArray.length === 0) {
    return undefined;
  }
  result = Math.round(ratesAverage(dramaMoviesArray) * 100) / 100;
  return result;
}

// Order by time duration, in growing order

function orderByDuration(moviesArray) {
  if(moviesArray.length === 1 ){
    return moviesArray;
  }
  moviesArray.sort(function(a, b){
    if(a.duration < b.duration) {
      return -1;
    } else if (b.duration < a.duration) {
      return 1;
    } else {
      if(a.title < b.title) {
        return -1;
      } else if(b.title < a.title){
        return 1;
      }
    }
  });
  return moviesArray;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesArray) {
  if(moviesArray.length === 0) {
    return undefined;
  }
  var dramaMoviesArray = moviesArray.filter(function(eachMovie){
    return eachMovie.genre.includes("Drama");
  });
  var dramaMoviesBySSArray = dramaMoviesArray.filter(function(eachMovie){
    return eachMovie.director.includes("Steven Spielberg");
  });
  return "Steven Spielberg directed " + dramaMoviesBySSArray.length + " drama movies!";
}


// Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  var resultArray = [];
  var moviesToReturn = moviesArray.length < 20 ? moviesArray.length : 20;

  moviesArray.sort(function(a, b){
    if (a.title < b.title) {
      return -1
    } else {
      return 1
    }
  });
  for(var i = 0; i < moviesToReturn; i++) {
    resultArray.push(moviesArray[i].title);
  }
  return resultArray;
}

// Best yearly rate average
 
function bestYearAvg(moviesArray) {
  var result = "";
  if(moviesArray.length === 0) {
    return undefined;
  } else if (moviesArray.length === 1) {
    result = "The best year was " + moviesArray[0].year + " with an average rate of " + moviesArray[0].rate;
  }

  var allYears = [];

  moviesArray.map(function(eachMovie){
    if(allYears.indexOf(eachMovie.year) === -1) {
      allYears.push(eachMovie.year);
    } 
  });

  allYears.sort(function(a, b){
    return a - b;
  });

  var getYearRatingsFunction = function(year) {
    var matchingYearMovies = moviesArray.filter(function(eachMovie){
      return eachMovie.year === year;
    });
    var yearAverage = ratesAverage(matchingYearMovies);
    return yearAverage % 1 === 0 ? yearAverage : yearAverage.toFixed(1);
  }

  for(var i = 0; i < allYears.length; i++) {
    allYears[i] = {year: allYears[i], averageRating: getYearRatingsFunction(allYears[i])};
  }

  var bestYear = 0, bestAverage = 0;

  for(var i = 0; i < allYears.length; i++) {
    if(allYears[i].averageRating > bestAverage) {
      bestYear = allYears[i].year;
      bestAverage = allYears[i].averageRating;
    }
  }
  result = "The best year was " + bestYear + " with an average rate of " + bestAverage;
  return result;
}