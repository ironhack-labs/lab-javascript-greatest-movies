/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let moviesFormated = JSON.parse(JSON.stringify(movies));
  for (let movie of moviesFormated) {
    movie.duration = formatHours(movie.duration);
  }
  return moviesFormated;
}

function formatHours(duration) {
  let hours = 0;
  let mins = 0;
  let tab = [];
  if (duration.includes("h") && duration.includes("min")) {
    tab = duration.split(" ");
    hours = parseInt(tab[0]);
    mins = parseInt(tab[1]);
    return hours * 60 + mins;
  }
  if (duration.includes("h")) {
    tab = duration.split(" ");
    hours = parseInt(tab[0]);
    return hours * 60;
  }
  if (duration.includes("min")) {
    return parseInt(duration);
  }
}

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let avgRate = 0;
  for (let movie of movies) {
    if (movie.rate === "") avgRate += 0;
    else avgRate += parseInt(movie.rate);
  }
  return Number((avgRate / movies.length).toFixed(2));
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = [];
  dramaMovies = sortByGenre(movies, "Drama");
  if (dramaMovies.length === 0) return undefined;
  return ratesAverage(dramaMovies);
}

function sortByGenre(movies, genre) {
  let filter = [];
  for (let i = 0; i < movies.length; i++) {
    for (let j = 0; j < movies[i].genre.length; j++) {
      if (movies[i].genre[j] === genre) {
        filter.push(movies[i]);
      }
    }
  }
  return filter;
}
// Order by time duration, in growing order

function orderByDuration(movies) {
  return movies.reverse().sort((a, b) => a.duration - b.duration);
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {
  let filteredMovies = movies.filter(
    movie => movie.director === "Steven Spielberg"
  );
  filteredMovies = sortByGenre(filteredMovies, "Drama");
  if (movies.length === 0) return undefined;
  return `Steven Spielberg directed ${filteredMovies.length} drama movies!`;
}
// Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let titleArray = movies.sort((a, b) => {
    var titleA = a.title.toUpperCase();
    var titleB = b.title.toUpperCase();
    return titleA < titleB ? -1 : 1;
    return 0;
  });

  titleArray = titleArray.map(x => x.title);
  return titleArray.length > 20 ? titleArray.slice(0, 20) : titleArray;
}

// Best yearly rate average

function bestYearAvg(movies) {
  if (!movies.length) return undefined;
  if (movies.length === 1)
    return `The best year was ${
      movies[0].year
    } with an average rate of ${+movies[0].rate}`;

  let globalArr = [];
  for (let i = 0; i < movies.length; i++) {
    globalArr.push(
      movies.filter(movie => {
        return movie.year === movies[i].year;
      })
    );
  }
  globalArr = globalArr.sort((a, b) => {
    if (a[0].year < b[0].year) return -1;
    if (a[0].year > b[0].year) return 1;
    return 0;
  });

  let bestYear = null;
  let bestYearAverage = 0;
  for (let i = 0; i < globalArr.length; i++) {
    let currentYearAverage = globalArr[i].reduce(
      (acc, current) => (acc += +current.rate),
      0
    );
    if (
      +(currentYearAverage / globalArr[i].length).toFixed(2) > bestYearAverage
    ) {
      bestYearAverage = +(currentYearAverage / globalArr[i].length).toFixed(2);
      bestYear = globalArr[i][0].year;
    }
  }
  return `The best year was ${bestYear} with an average rate of ${bestYearAverage}`;
}
