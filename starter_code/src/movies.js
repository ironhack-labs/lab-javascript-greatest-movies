/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const moviesCopy = array.map(function(movie) {
    if (movie.duration.indexOf("h") === 1) {
      const time = movie.duration.split(" ");
      if (parseInt(time[0]) === 0) {
        // if the movie is 0 hours and some minutes
        movie.duration = parseInt(time[1]);
      } else {
        const time = movie.duration.split(" ");
        if (time[1] === undefined) {
          // if there are only hours provided
          movie.duration = parseInt(time[0]) * 60;
        } else {
          // hours and minutes provided
          const time = movie.duration.split(" ");
          movie.duration = parseInt(time[0]) * 60 + parseInt(time[1]);
        }
      }
    } else if (movie.duration.indexOf("h") === -1) {
      // no hours only minutes
      movie.duration = parseInt(movie.duration);
    }
    return movie;
  });
  return moviesCopy;
}
turnHoursToMinutes(movies);
// // Get the average of all rates with 2 decimals
function ratesAverage(array) {
  const ratesTotal = array.reduce(function(previous, current) {
    return previous + parseFloat(current.rate);
  }, 0);
  console.log(ratesTotal / array.length);
  return ratesTotal / array.length;
  // console.log(ratesTotal / array.length).toFixed(2)));
}
ratesAverage(movies);
// Get the average of Drama Movies
function dramaMoviesRate(array) {
  let sum = 0;
  let currentRate = 0;
  let dramaCount = 0;

  array.forEach(function(movies) {
    movies.genre.forEach(function(genre) {
      if (genre === "Drama" && parseFloat(movies.rate) > 0) {
        currentRate += parseFloat(movies.rate);
        dramaCount++;
      } else if (genre === "Drama" && !parseFloat(movies.rate)) {
        dramaCount++;
      }
    });
  });
  if (dramaCount === 0) {
    return undefined;
  } else {
    return parseFloat((currentRate / dramaCount).toFixed(2));
  }
}
dramaMoviesRate(movies);
// Order by time duration, in growing order
function orderByDuration(array) {
  var currMovies = turnHoursToMinutes(array);
  currMovies.sort(function(a, b) {
    return a.duration - b.duration;
  });
  return currMovies;
}

// // How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
  let spielBool = false;
  let spielCount = 0;

  if (array.length === 0) {
    return undefined;
  }

  array.forEach(function(movie) {
    let currMovie = "";
    if (movie.director === "Steven Spielberg") {
      spielBool = true;
      movie.genre.forEach(function(genre) {
        if (genre === "Drama") {
          spielCount++;
          currMovie = movie;
        }
      });
    }
    return currMovie;
  });
  return spielBool
    ? `Steven Spielberg directed ${spielCount} drama movies!`
    : `Steven Spielberg directed 0 drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  const movieTitles = [];

  array.forEach(function(movie, index) {
    if (index < 20) {
      movieTitles.push(movie.title);
    }
  });

  movieTitles.sort(function(a, b) {
    return a.localeCompare(b);
  });
  console.log(movieTitles);
  return movieTitles;
}

orderAlphabetically(movies);
// Best yearly rate average

function bestYearAvg(array) {
  const movieByYears = {};
  const averageArray = [];
  let maxAvg = 0;
  let bestYear = "";

  if (array.length === 0) {
    return undefined;
  }
  let years = array.map(function(movie) {
    return parseInt(movie.year);
  });
  years.forEach(function(year, index) {
    movieByYears[year] = {
      moviesByYear: [],
    };
  });
  array.forEach(function(movie) {
    for (let prop in movieByYears) {
      if (prop === movie.year) {
        movieByYears[prop].moviesByYear.push(movie);
      }
    }
  });
  for (let prop in movieByYears) {
    let yearRateSum = 0;
    movieByYears[prop].moviesByYear.forEach(function(movies, index, array) {
      yearRateSum += parseFloat(movies.rate);
      let yearlyAvg = (yearRateSum / (index + 1)).toFixed(2); // this returns the average per year
      if (index === array.length - 1) {
        averageArray.push({
          ["year"]: movies.year,
          ["avgRate"]: parseFloat(yearlyAvg),
        });
      }
    });
    averageArray.forEach(function(el) {
      if (el.avgRate > maxAvg) {
        bestYear = el.year;
        maxAvg = el.avgRate;
      }
    });
  }
  return `The best year was ${bestYear} with an average rate of ${maxAvg}`;
}

bestYearAvg(movies);
