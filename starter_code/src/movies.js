/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let rates = movies.reduce((accumulator, currentValue) => {
    return accumulator + parseInt(currentValue.rate);
  }, 0);
  console.log(parseFloat((rates / movies.length).toFixed(2)));
  return parseFloat((rates / movies.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => {
    if (movie.genre.includes("Drama")) {
      if (movie.rate) {
        return movie;
      } else {
        movie.rate = 0;
        return movie;
      }
    }
  });

  if (dramaMovies.length) {
    return ratesAverage(dramaMovies);
  } else {
    return 0;
  }
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function sortByTitle(a, b) {
  if (a.title < b.title) {
    return -1;
  } else if (a.title > b.title) {
    return 1;
  }
}

function sortByDuration(a, b) {
  if (a.duration < b.duration) {
    return -1;
  } else if (a.duration > b.duration) {
    return 1;
  }
}

function orderByDuration(movies) {
  let titleSort = movies.sort(sortByTitle);
  return titleSort.sort(sortByDuration);
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  let dramaMovies = movies.filter(movie => {
    if (
      movie.genre.includes("Drama") &&
      movie.director.includes("Steven Spielberg")
    ) {
      return movie;
    }
  });
  return dramaMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  let titleSort = movies.sort(sortByTitle);
  let firstTwenty = titleSort.slice(0, 20);
  let names = [];
  firstTwenty.forEach(element => {
    names.push(element.title);
  });
  return names;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  let correctedDuration = [];
  movies.forEach(movieIn => {
    let movie = {};
    for (let p in movieIn)
      movie[p] = movieIn[p];
    let duration = movie.duration;
    let h = duration.indexOf("h");
    let hours = 0;
    if (h >= 0) {
      hours = parseInt(duration);
      duration = duration.substr(h + 1).trim();
    }
    let minutes = parseInt(duration);
    if (isNaN(minutes))
      minutes = 0;

    movie.duration = (hours * 60) + minutes;

    correctedDuration.push(movie);
  });
  return correctedDuration;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
