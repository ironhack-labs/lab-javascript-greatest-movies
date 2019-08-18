/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieList) {
  let sum = movieList.reduce(function(acc, value) {
    return acc + parseFloat(value.rate);
  }, 0);
  return parseFloat(sum / movieList.length);
}

// console.log(ratesAverage);

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieList) {
  let dramaSum = movieList.reduce(function(acc, value) {
    if (value.genre.includes("Drama")) {
      return acc + parseFloat(value.rate);
    } else {
      return 0;
    }
  }, 0);
  return parseFloat((dramaSum / movieList.length).toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(movieList) {
  let sorted = movieList.slice().sort(function(a, b) {
    if (a.duration === b.duration) {
      //if duration same, order alpahbetically by title
      return a.title.localeCompare(b.title);
    } else {
      return a.duration - b.duration; //ascending order
    }
  });
  return sorted;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movieList) {
  let howMany = 0;
  movieList.filter(function(drama) {
    if (
      drama.director === "Steven Spielberg" &&
      drama.genre.includes("Drama")
    ) {
      return howMany++;
    } else if (drama.director !== "Steven Spielberg") {
      return 0;
    } else {
      return 0;
    }
  });
  return howMany;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieList) {
  let ordered = movieList.sort(function(a, b) {
    return a.title.localeCompare(b.title);
  });
  ordered = ordered.map(function(movie) {
    return movie.title;
  });
  return ordered.slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {
  let duration = 
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
