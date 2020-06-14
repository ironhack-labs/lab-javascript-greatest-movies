// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  const directors = movies.map(function (m) {
    return m.director;
  });
  return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  if (movies.length == 0) return 0;
  else {
    var stevenMovies = movies.filter(
      (p) => p.director == "Steven Spielberg" && p.genre.includes("Drama")
    );
    return stevenMovies.length;
  }
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length == 0) return 0;
  let sum = 0;
  movies.forEach((movie) => {
    if (isNaN(movie.rate) == false) sum += movie.rate;
  });
  return Math.round((sum / movies.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var drama = movies.filter((movie) => movie.genre.includes("Drama"));
  return ratesAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// function orderByYear(movies) {
//   let rateList = movies.map((movie) => movie);
//   console.log(rateList);
//   return rateList;
// }

function orderByYear(movies) {
  var rateList = Object.assign(
    [],
    movies.sort(function compare(movie1, movie2) {
      if (movie1.year == movie2.year) {
        if (movie1.title < movie2.title) {
          return -1;
        }
        if (movie1.title > movie2.title) {
          return 1;
        }
        return 0;
      } else {
        return movie1.year - movie2.year;
      }
    })
  );
  return rateList;
}

// Iteration 6: Alphabetic

function orderAlphabetically(movies) {
  let alpha = Object.assign([], movies);
  alpha = alpha
    .map((movie) => movie.title)
    .sort(function compare(movie1, movie2) {
      if (movie1 < movie2) {
        return -1;
      }
      if (movie1 > movie2) {
        return 1;
      }
      return 0;
    });
  return alpha.filter((movie, i) => i < 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
