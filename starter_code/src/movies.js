/* eslint no-restricted-globals: 'off' */

function ratesAverage(movies) {
  averageRating = Number((movies.reduce((sum, movie) => sum += Number(movie.rate), 0) / movies.length).toFixed(2));

  return isNaN(averageRating) ? 0 : averageRating;
}

function dramaMoviesRate(movies) {
  return ratesAverage(movies.filter((movie) => movie.genre.includes("Drama")));
}

function sortByDurationHelper(movie1, movie2) {
  const durationDifference = Number(movie1.duration) - Number(movie2.duration);
  if (durationDifference != 0) {
    return durationDifference;
  }

  return movie1.title.localeCompare(movie2.title);
}

function orderByDuration(movies) {
  return movies.sort(sortByDurationHelper);
}

function howManyMovies(movies) {
  return movies.filter((movie) => movie.director == "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

function sortByTitleHelper(movie1, movie2) {
  return movie1.title.localeCompare(movie2.title);
}

function orderAlphabetically(movies) {
  return movies.sort(sortByTitleHelper).filter((movie, index) => index < 20).map((movie) => movie.title);
}

function turnHoursToMinutes(moviesArr) {
  return moviesArr.map((movie) => {
    movie = Object.assign({}, movie);
    let hour = String(movie.duration).match(/\d+h/g);
    let min = String(movie.duration).match(/\d+min/g);

    hour = hour != null ? Number(hour[0].match(/\d+/g)[0]) : 0;
    min = min != null ? Number(min[0].match(/\d+/g)[0]) : 0;

    movie.duration = hour * 60 + min;

    return movie;
  })
}

function average(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

function bestYearAvg(movies) {
  const years = [];
  movies.forEach((movie) => {
    if(!years.includes(movie.year)){
      years.push(movie.year);
    }
  })

  years.sort();
  const yearlyAverages = years.map((year) => {
    return ratesAverage(movies.filter((movie) => movie.year == year));
  })

  const maxRating = Math.max(...yearlyAverages);
  const maxIndex = yearlyAverages.indexOf(maxRating);

  return maxIndex == -1 ? null : `The best year was ${years[maxIndex]} with an average rate of ${maxRating}`;
}

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
console.log(ratesAverage(movies));

// Iteration 2: Drama movies - Get the average of Drama Movies
console.log(dramaMoviesRate(movies));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
console.log(orderByDuration(movies));

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
console.log(howManyMovies(movies));

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
console.log(orderAlphabetically(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
console.log(bestYearAvg(movies));