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
  let allRate = 0;
  a.forEach(movie => {
    if (movie.rate == '') {
      movie.rate = null;
    } else {
      return (allRate += parseFloat(movie.rate));
    }
  });
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
    return a.duration === b.duration ?
      a.title > b.title ?
      1 :
      -1 :
      a.duration > b.duration ?
      1 :
      -1;

    // if (a.duration < b.duration) return -1;
    // if (a.duration > b.duration) return 1;
    // if (a.duration === b.duration) {
    //   if (a.title < b.title) return -1;
    //   if (a.title > b.title) return 1;
    // }
    // return 0;
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
function bestYearAvg(arr) {}
bestYearAvg(movies);

function averageBy(arr) {
  const {
    total,
    count
  } = arr.reduce(
    (a, b) => {
      if (b.gender === 'female') {
        a.total += b.age;
        a.count++;
      }
      return a;
    }, {
      total: 0,
      count: 0
    }
  );

  return total / count;
}

//RETURNING THE BEST YEAR

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
  console.log(globalArr);

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