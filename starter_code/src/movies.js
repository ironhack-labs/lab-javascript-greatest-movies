/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  var result =
    movies
      .map(function(movie) {
        return Number(movie.rate);
      })
      .reduce((acc, curr) => {
        return (acc += curr);
      }, 0) / movies.length;

  return result;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  console.log(movies);
  var drama = movies.filter(movie => movie.genre.includes("Drama"));
  if (drama.length === 0) {
    return 0;
  }
  return Number(ratesAverage(drama).toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
  let moviesYears = movies.sort(function(movieA, movieB) {
    if (movieA.year > movieB.year) return 1;
    else if (movieA.year === movieB.year) {
      if (movieA.title < movieB.title) return -1;
      else return 1;
    } else return -1;
  });
  return moviesYears;
}

console.log(orderByYear(movies));

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  var compteur = 0;
  var Spielberg = movies.filter(
    movie =>
      movie.genre.includes("Drama") && movie.director.includes("Spielberg")
  );
  return Spielberg.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  var sort = movies.sort(function(movieA, movieB) {
    if (movieA.title > movieB.title) return 1;
    else return -1;
  });
  var Title = sort.map(movie => {
    return movie.title;
  });
  return Title.slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  var Time = movies.map(function(movie) {
    var shorth = movie.duration.includes("h");
    var shortmin = movie.duration.includes("min");
    var hour = movie.duration.split("h")[0] * 60;
    var min = parseFloat(movie.duration.split("min")[0].slice(3));
    let newTime = Object.assign({}, movie);
    if (shorth && shortmin) {
      var duree = hour + min;
      newTime.duration = duree;
      return newTime;
    } else if (shortmin == false) {
      var duree = hour;
      newTime.duration = duree;
      return newTime;
    } else shorth === false;
    var duree = parseFloat(movie.duration.split("min")[0].slice(0));
    newTime.duration = duree;
    return newTime;
  });
  return Time;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
