/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  const ratingsSum = arr.reduce(function(a, b) {
    return a + (parseFloat(b.rate) || 0); // Or !! => true = 1 and false = 0
  }, 0);
  return Math.round((ratingsSum / arr.length) * 100) / 100;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  const dramaMovies = arr.filter(movie => movie.genre.includes("Drama"));
  if (!dramaMovies.length) {
    return 0;
  }
  return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arr) {
  return arr.sort(function(a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  const dramaSpilbergMovies = arr.filter(movie => {
    if (
      movie.genre.includes("Drama") &&
      movie.director.includes("Steven Spielberg")
    ) {
      return true;
    }
  });
  if (!dramaSpilbergMovies.length) {
    return 0;
  }
  return dramaSpilbergMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  const titlesArr = arr.map(movie => movie.title);
  return titlesArr.sort().slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  const minutesMovies = JSON.parse(JSON.stringify(arr));
  minutesMovies.map(function(movie) {
    if (movie.duration.includes("h") && movie.duration.includes("min")) {
      movie.duration = movie.duration.split(" ");
      movie.duration =
        parseFloat(movie.duration[0]) * 60 + parseFloat(movie.duration[1]);
    } else if (movie.duration.includes("h")) {
      movie.duration = parseFloat(movie.duration) * 60;
    } else {
      movie.duration = parseFloat(movie.duration);
    }
    return movie;
  });
  return minutesMovies;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr) {
  if (!arr.length) {
    return null;
  }
  let cronoMovies = arr.reduce(function(acc, movie) {
    if (!acc[movie.year]) {
      acc[movie.year] = [];
    }
    acc[movie.year].push(movie);
    return acc;
  }, {});
  for (let year in cronoMovies) {
    cronoMovies[year] = ratesAverage(cronoMovies[year]);
  }
  const rates = Object.values(cronoMovies);
  const years = Object.keys(cronoMovies);

  return `The best year was ${
    years[rates.indexOf(Math.max(...rates))]
  } with an average rate of ${Math.max(...rates)}`;
}
