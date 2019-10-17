// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(elem => {
    let hours = 0;
    let minutes = 0;
    if (elem.duration.indexOf("h") !== -1) {
      hours = parseInt(elem.duration[0], 10) * 60;
    }
    if (elem.duration.indexOf("min") !== -1) {
      minutes = parseInt(
        elem.duration.substring(
          elem.duration.length - 5,
          elem.duration.length - 3
        ),
        10
      );
    }
    return Object.assign({}, elem, { duration: hours + minutes });
  });
}

turnHoursToMinutes(movies);
console.log(movies);

// Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
  let sum = moviesArray.reduce((acc, value) => {
    return acc + Number(value.rate);
  }, 0);
  let average = sum / moviesArray.length;

  return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  let dramaFilter = moviesArray.filter(movie => {
    return movie.genre.includes("Drama");
  });
  if (isNaN(ratesAverage(dramaFilter))) {
    return undefined;
  }
  let average = ratesAverage(dramaFilter).toFixed(2);
  return Number(average);
}

// Order by time duration, in growing order
function orderByDuration(moviesArray) {
  let sorted = moviesArray.sort((a, b) => {
    if (a.duration < b.duration) {
      return -1;
    }
    if (a.duration === b.duration && a.title < b.title) {
      return -1;
    }
    return 1;
  });
  return sorted;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movieArray) {
  if (movieArray.length === 0) {
    return undefined;
  }
  let nameFilter = movieArray.filter(movie => {
    return (
      movie.director.includes("Steven Spielberg") &&
      movie.genre.indexOf("Drama") !== -1
    );
  });
  return `Steven Spielberg directed ${nameFilter.length} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  movieArray.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    return 1;
  });
  var topTwenty = [];
  var limit = 20;
  if (movieArray.length < 20) {
    limit = movieArray.length;
  }
  for (var i = 0; i < limit; i++) {
    topTwenty.push(movieArray[i].title);
  }
  return topTwenty;
}

// Best yearly rate average

function bestYearAvg(filmArray) {
  if (filmArray.length === 0) return undefined;
  const years = filmArray.map(film => film.year);
  let best = 0;
  let result = 0;

  years.forEach(element => {
    const avg = ratesAverage(filmArray.filter(e => e.year == element));
    if (avg >= best) {
      best = avg;
      result = element;
    }
  });

  return "The best year was " + result + " with an average rate of " + best;
}
