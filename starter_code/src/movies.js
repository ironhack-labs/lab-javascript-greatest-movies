/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

//Ho he intentat fer amb el map i no m'ha sortit. Jasmine
//no ho pilla bé però faig proves i em surt bé el resultat

function turnHoursToMinutes(movies) {
  var moviesToMinutes = [...movies]; //create new array
  moviesToMinutes.forEach(function(movie) {
    var sumMinutes = 0;
    var convertedTime = [];
    //If the time has hours (and, or not, minutes)
    if (movie.duration.includes("h")) {
      var hours = movie.duration.split("h");
      convertedTime.push(Number.parseInt(hours[0]) * 60);
      if (hours[1].includes("min")) {
        var minutes = hours[1].split("min");
        convertedTime.push(Number.parseInt(minutes[0]));
      }
      sumMinutes = convertedTime.reduce(function(acc, val) {
        return acc + val;
      });
      movie.duration = sumMinutes;
      //If the time is only minutes
    } else if (movie.duration.includes("min")) {
      let minutes = movie.duration.split("min");
      movie.duration = Number.parseInt(minutes[0]);
    }
  });
  return moviesToMinutes;
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var movieRate = [];
  movies.forEach(function(element) {
    movieRate.push(Number.parseFloat(element.rate));
  });
  var sumRate = movieRate.reduce(function(acc, val) {
    return acc + val;
  });
  return sumRate / movieRate.length;
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaMoviesRate = [];
  var avgDramaRate = 0;

  var dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  dramaMovies.map(function(element) {
    dramaMoviesRate.push(Number.parseFloat(element.rate).toFixed(2) * 1);
  });
  if (dramaMovies.length === 0) {
    return undefined;
  } else if (dramaMovies.length === 1) {
    var result = Number.parseFloat(dramaMovies[0].rate).toFixed(2); //al fer el fixed to torna a string
    return Number.parseFloat(result);
  } else if (dramaMovies.length > 1) {
    avgDramaRate = dramaMoviesRate.reduce(function(acc, val) {
      return acc + val;
    });
  }
  var finalRate = (avgDramaRate / dramaMovies.length).toFixed(2);
  return Number.parseFloat(finalRate);
}

// Order by time duration, in growing order
// També fent les proves em surt bé, no sé com millorar-ho perquè no trobo l'error
function orderByDuration(movies) {
  var moviesByDuration = [...movies];
  turnHoursToMinutes(moviesByDuration); //call function to have number duration instead of string
  moviesByDuration.sort(function(a, b) {
    //sort by time
    return a.duration - b.duration;
  });
  console.log(moviesByDuration);
  return moviesByDuration;
}

// How many movies did STEVEN SPIELBERG
//Tampoc sé perquè no agafa l'últim

function howManyMovies(movies) {
  let dramaMovies = [];
  let dramaMoviesBySpielberg = [];
  if (movies.length === 0) {
    return undefined;
  }
  for (i = 0; i < movies.length; i++) {
    if (movies[i].genre.includes("Drama")) {
      dramaMovies.push(movies[i]);
    }
  }
  for (i = 0; i < dramaMovies.length; i++) {
    if (dramaMovies[i].director.includes("Steven Spielberg")) {
      dramaMoviesBySpielberg.push(dramaMovies[i]);
    }
  }
  return `Steven Spielberg directed ${
    dramaMoviesBySpielberg.length
  } drama movies!`;
}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  movieTitles = [];
  for (let i = 0; i < movies.length; i++) {
    movieTitles.push(movies[i].title);
  }
  var sortedTitles = movieTitles.sort(function(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
  var longSortedTitles = [];
  if (sortedTitles.length <= 20) {
    return sortedTitles;
  } else if (sortedTitles.length > 20) {
    for (let i = 0; i < 20; i++) {
      longSortedTitles.push(sortedTitles[i]);
    }
    return longSortedTitles;
  }
}

// Best yearly rate average

function bestYearAvg(movies) {
  if (movies.length === 0) {
    return undefined;
  } else if (movies.length === 1) {
    return movies[0].year;
  } else if (movies.length > 1) {
    return orderByBestYear(movies);
  }
}
