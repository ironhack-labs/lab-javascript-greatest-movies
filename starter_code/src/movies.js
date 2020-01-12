/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieList) {
  let sortedMovies = movieList.slice().sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movieList) {
  let filteredMovies = movieList.filter(function(movie) {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      return true;
    }
  });
  return filteredMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieList) {
  let top20 = movieList
    .map(function(movie) {
      return movie.title;
    })
    .slice()
    .sort()
    .filter(function(movie, index) {
      if (index < 20) {
        return true;
      }
    });
  return top20;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieList) {
  let ratesTotal = movieList
    .filter(function(movie) {
      if (movie.rate) {
        return true;
      }
    })
    .map(function(movie) {
      return movie.rate;
    })
    .reduce(function(accum, rating) {
      return accum + rating;
    }, 0);
  return Number((ratesTotal / movieList.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieList) {
  let dramaMovieList = movieList.filter(function(movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });
  return ratesAverage(dramaMovieList);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieList) {
  let minutesMovieList = movieList.map(function(movie) {
    if (!movie.duration.includes("h")) {
      return {
        ...movie,
        duration: Number(movie.duration[0] + movie.duration[1])
      };
    } else if (movie.duration.length === 2) {
      return {
        ...movie,
        duration: Number(movie.duration[0]) * 60
      };
    } else if (isNaN(Number(movie.duration[4]))) {
      return {
        ...movie,
        duration: Number(movie.duration[0]) * 60 + Number(movie.duration[3])
      };
    } else {
      return {
        ...movie,
        duration:
          Number(movie.duration[0]) * 60 +
          Number(movie.duration[3] + movie.duration[4])
      };
    }
  });
  return minutesMovieList;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

// function bestYearAvg(movieList) {
//   let moviesByYear = movieList.reduce(function(accum, movie) {
//     for (let i = 1800; i < 2020; i++) {
//       if (movie.year === i) {
//         accum.push();
//       }
//     }
//   }, []);

//   return moviesByYear;
// }

// I can't figure it out!!!! :(
