/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(m) {
  var newArr = m.map(function(movie) {
    if (movie.duration.includes(" ")) {
      var splitDuration = movie.duration.split(" ");
      var durationHours = splitDuration[0].replace("h", "") * 60;
      movie.duration =
        parseInt(splitDuration[1].replace("min", "")) + durationHours;
    } else if (movie.duration.includes("h")) {
      movie.duration = movie.duration.replace("h", "") * 60;
    } else {
      movie.duration = parseInt(movie.duration.replace("min", ""));
    }
    parseInt(movie.duration);
    return movie;
  });
  return newArr;
}

function ratesAverage(movies) {
  var sumRating = movies.reduce(function(acc, movie) {
    if (movie.rate == "") {
      return acc + 0;
    }
    return acc + parseFloat(movie.rate);
  }, 0);
  var avgRating = Math.round((sumRating / movies.length) * 100) / 100;

  return avgRating;
}

function dramaMoviesRate(movies) {
  var newArr = movies.filter(function(movie) {
    return movie.genre.includes("Drama");
  });
  if (newArr.length === 0) {
    return newArr[0];
  }
  return ratesAverage(newArr);
}

function orderByDuration(movies) {
  var moviesNew = turnHoursToMinutes(movies);
  var sortedArr = moviesNew.sort(function(a, b) {
    if (a.duration < b.duration) {
      return -1;
    } else if (a.duration > b.duration) {
      return 1;
    } else {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    }
  });
  return sortedArr;
}
function howManyMovies(movies) {
  if (movies.length === 0) {
    return movies[0];
  }
  var newArr = movies.filter(function(movie) {
    return (
      movie.director == "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return "Steven Spielberg directed " + newArr.length + " drama movies!";
}

function orderAlphabetically(movies) {
  movies.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });

  var max = 20;
  if (movies.length < max) {
    max = movies.length;
  }

  var newMovies = movies.slice(0, max);

  var arrNames = [];
  console.log(newMovies);
  newMovies.forEach(function(movie) {
    arrNames.push(movie.title);
  });
  return arrNames;
}

function bestYearAvg(movies) {
  if (movies.length === 0) {
    return movies[0];
  }
  var years = [];
  var avgRatings;
  for (var movie of movies) {
    if (!years.includes(movie.year)) {
      years.push(movie.year);
    }
  }
  var bestYear = ["", 0];
  years.forEach(function(year) {
    var moviesInYear = movies.filter(function(movie) {
      return movie.year === year;
    });
    var avgRatesPerYear = ratesAverage(moviesInYear);
    if (avgRatesPerYear > bestYear[1]) {
      bestYear[0] = year;
      bestYear[1] = avgRatesPerYear;
    } else if (avgRatesPerYear == bestYear[1]) {
      if (bestYear[0] > year) {
        bestYear[0] = year;
        bestYear[1] = avgRatesPerYear;
      }
    }
  });
  return (
    "The best year was " +
    bestYear[0] +
    " with an average rate of " +
    bestYear[1]
  );
}
