//** Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
  let allDirectors = [];
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];
    allDirectors.push(movie.director);
  }

  return allDirectors;
}

//_Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

//** Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const stevenDramaMovies = movies.filter((movie) => {
    const isSteven = movie.director === "Steven Spielberg";
    const isDrama = movie.genre.includes("Drama");
    return isSteven && isDrama;
  });
  return stevenDramaMovies.length;
}

/*
const howManyMovies = (movies) => movies.filter(m => m.director === "Steven Spielberg" && m.genre.includes("Drama")).length
*/

//**  Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  if (movies.length === 0) {
    return 0;
  } else if (movies.length > 0) {
    const lengthMovie = movies.length;
    const arrayOfMovies = function (movies) {
      movies.forEach((movie) => {
        if (movie.rate == undefined) {
          movie.rate = "";
        }
      });
      return movies;
    };
    const sumOfMovieRates = arrayOfMovies(movies).reduce(
      (acc, val) => acc + Number(val.rate),
      0
    );
    return Number(Number(sumOfMovieRates / lengthMovie).toFixed(2));
  }
}

//**  Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
  const dramaMovies = movies.filter(({ genre }) => genre.includes("Drama"));
  return ratesAverage(dramaMovies);
}

/* console.log(dramaMoviesRate(movies)); */

//* Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
  const sortedMovieByYear = movies
    .filter((movie) => movie.hasOwnProperty("year"))
    .sort((movie1, movie2) =>
      movie1.year > movie2.year
        ? 1
        : movie1.year === movie2
        ? movie1.title > movie2.title
          ? 1
          : -1
        : -1
    );
  return sortedMovieByYear;
}

//* Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
  if (movies.length < 20) {
    const sortedAlphabetically = movies
      .filter((movie) => movies.indexOf(movie) < 20)
      .map((movie) => movie.title.toLowerCase())
      .sort((m1, m2) => m1.localeCompare(m2));

    return sortedAlphabetically;
  } else if (movies.length >= 20) {
    const orderedMoviesAlphabetically = movies.sort((movie1, movie2) => {
      if (movie1.title >= movie2.title) {
        return 1;
      }
      return -1;
    });

    return orderedMoviesAlphabetically
      .map(({ title }) => title)
      .filter((movie, index) => index < 20);
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
