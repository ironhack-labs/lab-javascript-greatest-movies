/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  var newMovies = [...movies];
  newMovies.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    else {
      if (b.title > a.title) return -1;
      else if (a.title > b.title) return 1;
      else return 0;
    }
  });
  console.log(newMovies);
  return newMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  var stevensMovies = movies.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return stevensMovies.length;
}
/*return movies.filter(
    movie =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}*/

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  var copyMovies = [...movies];
  const returnMovieTitles = copyMovies
    .sort(function(movie1, movie2) {
      if (movie1.title < movie2.title) return -1;
      if (movie1.title > movie2.title) return 1;
      return 0;
    })
    .map(function(movie) {
      return movie.title;
    });
  if (returnMovieTitles.length > 20) return returnMovieTitles.splice(0, 20);
  else return returnMovieTitles;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) return 0;
  var sum = movies.reduce(function(total, movie) {
    if (movie.rate === "" || movie.rate === undefined) return total + 0;
    return total + movie.rate;
  }, 0);
  return parseFloat((sum / movies.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  const returnValue = ratesAverage(
    movies.filter(function(movie) {
      return movie.genre.includes("Drama");
    })
  );
  return returnValue;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  const returnValue = movies.map(function(movie) {
    var hours = 0;
    var minutes = 0;
    if (movie.duration.indexOf("h") !== -1)
      hours = movie.duration.substr(0, movie.duration.indexOf("h"));
    if (movie.duration.indexOf("m") !== -1)
      minutes = movie.duration.substr(movie.duration.indexOf(" ") + 1, 2);
    return { duration: parseFloat(hours) * 60 + parseFloat(minutes) };
  });
  return returnValue;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
  var returnValue;
  if (movies.length == 0) return null;
  returnValue = movies.map(function(movie) {
    return `The best year was ${movie.year} with an average rate of ${movie.rate}`;
  });

  return returnValue[0];
}
