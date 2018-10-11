/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  if (moviesArray.length === 0) return undefined;
  var minutesConverted = moviesArray.map(movie => {
    var newMovieObject = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: convertToMinutes(movie.duration),      
      genre: movie.genre,
      rate: movie.rate
    };
    return newMovieObject;
  });
  return minutesConverted;
}

function turnHoursToMinutesArray(moviesArray) {
  if (moviesArray.length === 0) return undefined;
  var minutesConverted = moviesArray.map(movie => {
    var newMovieObject = {
      title: movie.title,
      year: movie.year,
      director: movie.director,
      duration: [convertToMinutes(movie.duration)],      
      genre: movie.genre,
      rate: movie.rate
    };
    return newMovieObject;
  });
  return minutesConverted;
}

function convertToMinutes(stringDuration) {
  var minutes = 0;
  var hours = 0;
  if (stringDuration.includes ("h")) {
    hours = parseInt(stringDuration[0]);
  }
  if (stringDuration.includes("min")) {
    minutes = parseInt(stringDuration.substring(
          stringDuration.length - 5,
          stringDuration.length - 3
        ),
        10
      )};
  return (hours * 60) + minutes;
}
// Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
  var totalRate = moviesArray.reduce((acc, el) => {
    if (!el.rate) {
      el.rate = 0;
    }
    return acc + parseInt(el.rate);
  }, 0);
  var average = totalRate / moviesArray.length;
  return Math.round(average * 100) / 100;
}
// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  if (moviesArray.length === 0) return undefined;
  var dramaMovies = moviesArray.filter(el => {
    return el.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return undefined;
  } else {
    return ratesAverage(dramaMovies);
  }
}
// Order by time duration, in growing order
function orderByDuration(moviesArray) {
  if (moviesArray.length === 0) return undefined;
  var minutesConverted = turnHoursToMinutes(moviesArray);
  var sortedMoviesArray = minutesConverted.sort((a, b) => {
    if (a.duration === b.duration) {
      return b.title < a.title;
    } else {
      return a.duration - b.duration;
    }
  });

  return sortedMoviesArray;
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) return undefined;
  var dramaMoviesSteven = moviesArray
    .filter(el => {
      return el.genre.includes("Drama");
    })
    .filter(el => {
      return el.director === "Steven Spielberg";
    });
  return (
    "Steven Spielberg directed " + dramaMoviesSteven.length + " drama movies!"
  );
}
// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .sort((a, b) => {
      return a.title > b.title;
    })
    .splice(0, 20)
    .map(el => {
      return el.title;
    });
}
// Best yearly rate average


function bestYearAvg(moviesArray) {
  var bestYear = 0
  var maxRate = 0;
  var totalOfTheYear;
  var numberOfFilms;
  var avgOfTheYear;

  if (moviesArray.length === 0) return undefined;

  for (let year = 1900; year < 2019; year++) {
    numberOfFilms = 0;
    totalOfTheYear = 0;
    avgOfTheYear = 0;

    moviesArray.forEach(element => {
      if (parseInt(element.year) === year) {
        totalOfTheYear += element.rate;
        numberOfFilms++;
      }      
    });
    avgOfTheYear = (totalOfTheYear / numberOfFilms);

    if (avgOfTheYear > maxRate) {
      maxRate = avgOfTheYear;
      bestYear = year
  }
}
return "The best year was " + bestYear + " with an average rate of " + maxRate;
}