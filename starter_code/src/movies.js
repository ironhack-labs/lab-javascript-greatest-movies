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

function bestYearAvg(arr) {
  /*Obtener un array con los años sin repetir para saber la longitud del array*/
  let years = arr.map(x => x.year);
  let unique = [...new Set(years)];

  /*obtener la longitud del array*/
  let long = unique.length;
  console.log(long);

  /*obtener array de rates sumatorios igual longitud a unique pero con todos valores 0*/
  let rates = [];
  for (let i = 0; i < long; i++) {
    rates.push(0);
  };
  console.log(rates);
  /*obtener array de medias igual longitud a unique pero con todos valores 0*/

  let averages = [];
  for (let x = 0; x < long; x++) {
    averages.push(0);
  };
  console.log(averages);

  /*comparacion y asignacion de valores*/

  for (let z = 0; z < arr.length; z++) {
    /*entra en bucle comparación de objetos peliculas en array movies*/
    for (let y = 0; y < unique.length; y++) {
      /*Entra en bucle array unique*/
      if (arr[z].year == unique[y]) {
        /*compara el año de la peli si es igual que el de unique*/
        rates[y] += Number(arr[z].rate); /*suma a rates, el rate de la pelicula*/
        if (averages[y] == 0) {
          /*si las medias es 0*/
          averages[y] += Number(arr[z].rate); /*suma el rate de la pelicula*/
        } else {
          /*sino, significa que ya ha puesto datos antes*/
          averages[y] += Number(arr[z].rate) / 2; /*suma a averages el rate de la pelicula y divide por dos para calcular la media*/
        };
      };
    };
  };
  console.log(rates);
  console.log(averages);

  let i = averages.indexOf(Math.max(...averages));
  console.log(i);
  console.log(unique[i]);
  return (unique[i]);
};