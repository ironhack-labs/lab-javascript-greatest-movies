/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let moviesFormated = JSON.parse(JSON.stringify(movies));
  for (let movie of moviesFormated) {
    movie.duration = formatHours(movie.duration);
  }
  return moviesFormated;

  function formatHours(duration) {
    let hours = 0;
    let mins = 0;
    let tab = [];
    if (duration.includes('h') && duration.includes('min')) {
      tab = duration.split(' ');
      hours = parseInt(tab[0]);
      mins = parseInt(tab[1]);
      return hours * 60 + mins;
    }
    if (duration.includes('h')) {
      tab = duration.split(' ');
      hours = parseInt(tab[0]);
      return hours * 60;
    }
    if (duration.includes('min')) {
      return parseInt(duration);
    }
  }
}

// Get the average of all rates with 2 decimals

function ratesAverage(a) {
  for (let i in a) {
    if (i.rate === undefined) {
      i.rate = 0;
    }
  }

  let allRate = 0;
  a.forEach(movie => (allRate += parseFloat(movie.rate)));
  return parseFloat((allRate / a.length).toFixed(2));
}

var x = console.log();

// Get the average of Drama Movies

function dramaMoviesRate(a) {
  const dramas = a.filter(movie => movie.genre.includes('Drama'));
  if (!dramas.length) return undefined;
  return ratesAverage(dramas);
}

// Order by time duration, in growing order
function orderByDuration(m) {
  function order(a, b) {
    if (a.duration < b.duration) return -1;
    if (a.duration > b.duration) return 1;
    if (a.duration === b.duration) {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
    }
    return 0;
  }
  return m.sort(order);
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(a) {
  const $PIELBERG = a.filter(
    x => x.director === 'Steven Spielberg' && x.genre.includes('Drama')
  );
  const drama = a.filter(x => x.genre.includes('Drama'));
  if (!drama.length) return undefined;
  let amount = $PIELBERG.length;
  return `Steven Spielberg directed ${amount} drama movies!`;
}
// Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let titles = arr.map(x => x.title);
  return titles.sort().slice(0, 20);
}
// Best yearly rate average
function bestYearAvg(arr) {
  arr.forEach(e => {
    e.rate.sort();
  });
}
