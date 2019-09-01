/* eslint no-restricted-globals: 'off' */
// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  let avg =
    movies.reduce((total, movie) => (total += parseFloat(movie.rate || 0)), 0) /
    movies.length;
  avg = avg.toFixed(2);
  return parseFloat(avg);
}

//   let rateAvg = 0;
//   for (let i = 0; i < movies.length; i++) {
//     rateAvg +=  parseFloat(movies[i].rate);
//   }
//   return rateAvg / movies.length;
// }
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let dramaMovies = movies.filter(movie => {
    // Any movie whose genre property includes "Drama"
    return movie.genre.includes("Drama");
  });
  let rates = ratesAverage(dramaMovies);
  // (if dramaMovies is empty), return 0, otherwise return our computed average
  if (dramaMovies.length) {
    return rates;
  } else {
    return 0;
  }
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByDuration = movies => {
  let sortedMovies = movies.sort((a, b) => {
    // return b.duration - a.duration
    if (a.duration < b.duration) {
      return -1;
    }
    if (a.duration > b.duration) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
  });
  return sortedMovies;
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }
  let steven = movies.filter(movie => {
    return (
      movie.director.includes("Spielberg") && movie.genre.includes("Drama")
    );
  });
  return steven.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
  return moviesArr
    .sort((m1, m2) => m1.title.localeCompare(m2.title))
    .slice(0, 20)
    .filter(e => e)
    .map(e => e.title);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesDurations) {
  const movieMap = movieDuration => {
    const newMovie = Object.assign({}, movieDuration);
    const durations = newMovie.duration.split(" ");
    let totalTime = 0;
    durations.forEach(element => {
      if (element.includes("h")) {
        totalTime += parseFloat(element.replace(/\D/g, "")) * 60;
      } else {
        totalTime += parseFloat(element.replace(/\D/g, ""));
      }
    });
    newMovie.duration = totalTime;
    return newMovie;
  };
  console.log(moviesDurations.map(movieMap));
  return moviesDurations.map(movieMap);
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
