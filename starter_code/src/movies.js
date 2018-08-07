/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(object) {
  var newArray = object.map(function(movie) {
    if (movie.duration.includes(" ")) {
      var splitTime = movie.duration.split(" ");
      var horas = parseInt(splitTime[0].replace("h", "")) * 60;
      var minutos = parseInt(splitTime[1].replace("min", ""));

      movie.duration = horas + minutos;
    } else {
      if (movie.duration.includes("h")) {
        movie.duration = parseInt(movie.duration.replace("h", "")) * 60;
      } else {
        movie.duration = parseInt(movie.duration.replace("min", ""));
      }
    }
    return movie;
  });

  return newArray;
}

// Get the average of all rates with 2 decimals

function ratesAverage(object) {
  var newArray = object.map(function(movie) {
    //console.log(movie.rate);
    return parseFloat(movie.rate);
  });

  var rate = newArray
    .reduce(function(acum, n) {
      return acum + n;
    })
    .toFixed(2);

  return rate / newArray.length;
}

// Get the average of Drama Movies

function dramaMoviesRate(object) {
  var arrayDrama = [];
  object.map(function(movie) {
    if (movie.genre.indexOf("Drama") >= 0) {
      arrayDrama.push(movie.rate);
    }
  });

  if (arrayDrama.length <= 0 || arrayDrama === undefined) {
    return undefined;
  }

  var rate = arrayDrama.reduce(function(acum, n) {
    return acum + n;
  });

  rate = rate / arrayDrama.length;

  return rate;
}

// Order by time duration, in growing order

function orderByDuration(object) {
  var newArray = object.map(function(movie) {
    return movie;
  });

  newArray.sort(function(a, b) {
    if (a.duration === b.duration) {
      var nameA = a.title.toLowerCase();
      var nameB = b.title.toLowerCase();
      if (nameA < nameB) {
        return a.duration;
      }

      if (nameA > nameB) {
        return b.duration;
      }
    }
    return a.duration - b.duration;
  });

  return newArray;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(object) {
  if (object <= 0) {
    return undefined;
  }

  var spielbergArray = [];
  object.map(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.indexOf("Drama") >= 0
    ) {
      spielbergArray.push(movie);
    }
  });

  return (
    "Steven Spielberg directed " + spielbergArray.length + " drama movies!"
  );
}

// Order by title and print the first 20 titles

function orderAlphabetically(object) {
  var orderAlphabeticallyArray = [];
  var objectOrdered = object.sort(function(a, b) {
    var nameA = a.title.toLowerCase();
    var nameB = b.title.toLowerCase();

    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  objectOrdered.map(function(movie) {
    if (orderAlphabeticallyArray.length < 20) {
      orderAlphabeticallyArray.push(movie.title);
    }
  });

  return orderAlphabeticallyArray;
}

// Best yearly rate average

function bestYearAvg(object) {
  var yearsAvg = [];
  object.forEach(function(movie) {
    if (yearsAvg.indexOf(movie.year) === -1) {
      yearsAvg.push(movie.year);
    }
  });

  var movieReduce = [];
  yearsAvg.forEach(function(year) {
    object.map(function(movie) {
      if (year === movie.year) {
        movieReduce.push(movie);
      }
    });
  });

  console.log(movieReduce);
  //console.log(yearsAvg);
}
