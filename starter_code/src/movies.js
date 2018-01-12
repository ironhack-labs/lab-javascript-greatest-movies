/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    var newMovie = {};
    var moviesContainer = [];
    //Function to transform the time, all other variables are just copied
    var transformedMovies = movies.map(function(movie){
        //timeString, split at " " and cleaned out of commas
        var timeStr =  movie.duration.replace(",","").split(" ");
        var minutes = 0;
        for (var i = 0; i < timeStr.length ; i++) {
          if (timeStr[i].includes("h")) {
            minutes += parseInt(timeStr[i])*60;
          }
          if (timeStr[i].includes("min")) {
            minutes += parseInt(timeStr[i]);
          }
        }
        newMovie = {
          duration: minutes,
          title: movie.title,
          year: movie.year,
          director: movie.director,
          genre: movie.genre,
          rate: movie.rate,
          };
        moviesContainer.push(newMovie);
    });
  return moviesContainer;
}

// Get the average of all rates with 2 decimals
function ratesAverage (movies) {
    var totalRates = movies.reduce(function(sum, movie){
      //console.log("sum = "+sum);
      if (movies.length === 0) {
        return undefined;
      }
      return sum + parseFloat(movie.rate);
    },0);
    console.log(totalRates);
    return totalRates / movies.length;
  }


  // Get the average of Drama Movies
    function dramaMoviesRate(movies) {
      var totalRates = movies.reduce(function(sum, movie){
        if (movies.length === 0) {
              return undefined;
        }
        for (var i=0; i < movie.genre.length ; i++) {
          console.log("loop " + i);
          //If for checking if movie is NOT drama
          if (movie.genre[i].toLowerCase().indexOf("drama") === -1) {
            sum =  (sum/(i+1))*(i+2);
          }
          //If for checking if movie is drama
          if (movie.genre[i].toLowerCase().indexOf("drama") !== -1 ) {
            if (isNaN(parseFloat(movie.rate)) === true ){
              sum = sum + 0;
            } else {
              sum = sum + parseFloat(movie.rate);
            }
          }

        }
        return sum;
      },0);

      var totalRatesNum = totalRates / movies.length;
      return totalRatesNum.toFixed(2)/1;
    }

// Order by time duration, in growing order
function orderByDuration(movies) {
  var moviesContainer = [];
  var newMovie = {};
  var orderedMovies = movies.sort(function(movie1,movie2){
    if (movie1.duration === movie2.duration) {
      if (movie1.title > movie2.title) {
        return 1;
      }
    }
    return movie1.duration - movie2.duration;
  });
  return movies;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  if (movies.length === 0) {
        return undefined;
  }
  var filteredMovies = movies.filter(function(movie){
    return (movie.director === "Steven Spielberg" && movie.genre.indexOf("Drama") !== -1);
  });
  return ("Steven Spielberg directed " + filteredMovies.length + " drama movies!");
}


function orderAlphabetically(movies){
  var movieTitlesContainer = [];
  var newMovie = {};
  var orderedMovies = movies.sort(function(movie1,movie2){
    if(movie1.title > movie2.title){
      return 1;
    } else if (movie2.title > movie1.title) {
      return -1;
    }
  });
  for (var i =0; i < movies.length ; i++) {
    movieTitlesContainer.push(orderedMovies[i].title);
  }
  if (movieTitlesContainer.length > 20) {
    var movieTitlesContainer20 = [];
    for (i=0; i< 20; i++) {
      movieTitlesContainer20[i] = movieTitlesContainer[i];
    }
    return movieTitlesContainer20;
  }
  return movieTitlesContainer;
}


// Best yearly rate average

function bestYearAvg(movies) {
  var yearPlaceHolder = [];
  var yearOccurences = movies.map(function(movie){
    //check if year is already in container, if not add it
    if (yearPlaceHolder.indexOf(parseInt(movie.year))=== -1) {
      yearPlaceHolder.push(parseInt(movie.year));
    }
    });
  //yearPlaceHolder has all the single year occurences now
  //Iterate through year list. Each iteration filters the year in the filter and returns the number of ocurrences
  var resultsObject =[];
  for (var i=0; i < yearPlaceHolder.length ; i++) {
    var filterByYear = movies.filter(function(movie){
      return (parseInt(movie.year) === yearPlaceHolder[i]);
    });
    resultsObject.push([yearPlaceHolder[i], filterByYear.length]);
    };
  //resultsObject is an array that contains arrays with [year, ocurrences] available now
  for (i=0; i < resultsObject.length ; i++) {

  }
  //console.log(resultsObject);
  }
