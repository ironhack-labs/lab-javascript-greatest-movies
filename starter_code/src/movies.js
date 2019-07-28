/* eslint no-restricted-globals: 'off' */
console.log(movies);
// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let reduced = movies.reduce((total, currentValue) => {
    if (currentValue.rate == "") {
      currentValue.rate = 0;
    }
    return (total += parseInt(currentValue.rate));
  }, 0);
  return Math.round((reduced / movies.length) * 100) / 100;
}
// console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (dramaMovies == 0) {
    return 0;
  } else {
    return ratesAverage(dramaMovies);
  }
}
// console.log(dramaMoviesRate(movies));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
  let durationArr = [];
  let minutes = [];
  let hours = [];
  movies.forEach((movie, index) => {
    durationArr[index] = movie.duration;

    minutes[index] = parseInt(
      durationArr[index].substring(
        durationArr[index].indexOf("m") - 2,
        durationArr[index].indexOf("m")
      )
    );
    hours[index] = parseInt(
      durationArr[index].substring(
        durationArr[index].indexOf("h") - 1,
        durationArr[index].indexOf("h")
      )
    );
  });

  // horas a minutos
  let totalMinutes = hours.map(function(element, index) {
    return element * 60 + minutes[index];
  });

  //asocia el indice actual al arreglo de minutos
  for (let i = 0; i < totalMinutes.length; i++) {
    totalMinutes[i] = [totalMinutes[i], i];
  }

  // realiza ordenamiento de totalMinutes
  totalMinutes.sort(function(a, b) {
    return a[0] - b[0];
  });

  //obtencion del arreglo de los indices derivados de aplicar ordenamiento
  let indexSorted = [];
  for (let i = 0; i < totalMinutes.length; i++) {
    indexSorted[i] = totalMinutes[i][1];
  }

  // aplica los indices de ordenamiento a todo movies
  let moviesSorted = indexSorted.map(function(element) {
    return movies[element];
  });
  return moviesSorted;
}

console.log(orderByDuration(movies));

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
