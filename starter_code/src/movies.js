/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let copyOfmovies = Object.assign({}, movies);

  let newMovies = movies.map(element => {
    let numbersOnlyPattern = /\d+/g;
    element.duration = element.duration.match(numbersOnlyPattern);
    element.duration =
      parseInt(element.duration[0] * 60) + parseInt(element.duration[1]);
    return element.duration;
  });

  return copyOfmovies;
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals
let ratesAverage = movies => {
  let sum = movies.reduce((accumulator, current) => {
    if (current.rate === "") {
      current.rate = 0;
    }
    let rate = current.rate * 1;
    accumulator = accumulator + rate;
    return accumulator;
  }, 0);

  let average = sum / movies.length;
  return average;
};
console.log(parseFloat(ratesAverage(movies)).toFixed(2));

// Get the average of Drama Movies
let dramaMoviesRate = movies => {
  let onlyDrama = movies.filter(entrada => {
    if (entrada === "") {
      return 0;
    }

    let hasDrama = entrada.genre.find(contiene => {
      return contiene === "Drama";
    }); //fin de callback hasDrama
    return hasDrama;
  }); //fin de callback onlyDrama

  return onlyDrama;
}; //function dramaMoviesRate
parseFloat(ratesAverage(dramaMoviesRate(movies)).toFixed(2)); //primero la funcion que evalua dentro la evaluada
dramaMoviesRate(movies);

// Order by time duration, in growing order
function orderByDuration(longest) {
  if (longest.length == 1) {
    return longest;
  }

  longest.sort(function(a, b) {
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.duration < b.duration) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }

    return 0;
  });
  return longest;
}
orderByDuration(movies);
console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG
let howManyMovies = movies => {
  if (movies.length === 0) {
    return undefined;
  }

  let dramaMoviesSpielberg = movies.filter(function(movie) {
    let drama = movie.genre.find(function(word) {
      return word == "Drama";
    });

    let Spielberg = movie.director;

    return drama === "Drama" && Spielberg == "Steven Spielberg";
  });

  if (dramaMoviesSpielberg === []) {
    return undefined;
  } else {
    howMany = dramaMoviesSpielberg.length;
    return "Steven Spielberg directed " + howMany + " drama movies!";
  }
};

howManyMovies(movies);

// Order by title and print the first 20 titles

// Best yearly rate average
