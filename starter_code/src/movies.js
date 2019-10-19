/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  return arr.reduce((a, v) => a + parseFloat(v.rate), 0) / arr.length;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let onlyDrama = arr.filter(movie => movie.genre.includes("Drama"));
  let dramaRate = onlyDrama.reduce((a, v) => a + v.rate, 0);

  return onlyDrama.length !== 0
    ? Number((dramaRate / onlyDrama.length).toFixed(2))
    : 0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arr) {
  return arr.sort((a, b) =>
    a.year < b.year ? -1 : a.title < b.title ? -1 : 1
  );
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  return arr
    .filter(movie => movie.genre.includes("Drama"))
    .filter(movie => movie.director.includes("Steven Spielberg")).length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let order = arr.sort((a, b) => {
    return a.title < b.title ? -1 : 1;
  });
  return order.map(m => m.title).slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  const result = JSON.parse(JSON.stringify(arr)).filter(movie => {
    let min;
    let hour;
    if (movie.duration[1] === "h" && movie.duration[7] === "n") {
      hour = movie.duration.split("h ")[0];
      min = movie.duration
        .split("h ")[1]
        .split("min")
        .shift();

      movie.duration = Number(hour) * 60 + Number(min);
      return movies;
    } else if (movie.duration[1] === "h" && !movie.duration[7]) {
      hour = movie.duration.split("h")[0];
      movie.duration = Number(hour) * 60;
      return movies;
    } else {
      min = movie.duration.split("min").shift();
      movie.duration = Number(min);
      return movies;
    }
  });

  return result;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
  let years = [];
  let filtedMovies = [];
  arr.forEach((movie, i) => {
    if (years.indexOf(movie.year) === -1) {
      years.push(movie.year);
      filtedMovies[i] = [movie.year];
    }
  });
  filtedMovies.forEach(y => {
    y.push(
      arr.filter(movie => {
        if (y == movie.year) {
          return movie;
        }
      })
    );
  });

  filtedMovies.forEach((elem, index) => {
    elem.push(elem[1].length);
  });

  let yearRate = [];
  filtedMovies.forEach(item => {
    item[1].forEach(movie => {
      item[3] = item[1].reduce((a, v) => a + Number(v.rate), 0);
    });
    item.push(Number(item[3]) / Number(item[2]));

    if (item[4]) {
      yearRate.push([item[0], item[4]]);
    } else {
      yearRate.push(null);
    }
  });

  yearRate
    .sort((a, v) => {
      if (a[1] < v[1]) {
        return -1;
      } else if (a[1] === v[1]) {
        if (a[0] > v[0]) {
          return -1;
        } else {
          return 1;
        }
      }
    })
    .reverse();

  if (arr.length === 0) {
    return null;
  }
  return `The best year was ${yearRate[0][0]} with an average rate of ${
    yearRate[0][1]
  }`;
}
