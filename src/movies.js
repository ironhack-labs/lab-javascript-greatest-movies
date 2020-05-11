// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrayOfMovies) {
  const arrayOfDirectors = arrayOfMovies.map((name) => name.director);
  return arrayOfDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  const arrayOfDirectors = arrayOfMovies.map((names) => names.director);
  const directors = arrayOfDirectors.filter(
    (v, i) => arrayOfDirectors.indexOf(v) === i
  );
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arrayOfMovies) {
  const spielbergMovies = arrayOfMovies
    .filter((name) => name.director === "Steven Spielberg")
    .filter((genreArrays) => genreArrays.genre.indexOf("Drama") >= 0).length;

  return spielbergMovies;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayOfMovies) {
  if (arrayOfMovies.length === 0) return 0;
  const noRatedMovies = arrayOfMovies.map(function (movie) {
    if (!movie.rate) {
      movie.rate = 0;
      return movie;
    }
    return movie;
  });

  const averageOfMovies =
    Math.round(
      (noRatedMovies.reduce((sum, movie) => sum + movie.rate, 0) /
        noRatedMovies.length) *
        100
    ) / 100;

  return averageOfMovies;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies) {
  const dramaMoviesLength = arrayOfMovies.filter(
    (onlyDrama) =>
      onlyDrama.genre.length === 1 && onlyDrama.genre.indexOf("Drama") >= 0
  ).length;

  if (dramaMoviesLength === 0) return 0;

  const dramaMovies =
    Math.round(
      (arrayOfMovies
        .filter(
          (onlyDrama) =>
            onlyDrama.genre.length === 1 &&
            onlyDrama.genre.indexOf("Drama") >= 0
        )
        .reduce((acc, movie) => acc + movie.rate, 0) /
        dramaMoviesLength) *
        100
    ) / 100;

  return dramaMovies;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrayOfMovies) {
  const newArrayByYear = arrayOfMovies.slice();
  return newArrayByYear.sort((movie1, movie2) => {
    if (movie1.year < movie2.year) {
      return -1;
    }

    if (movie1.year > movie2.year) {
      return 1;
    }

    if (movie1.year === movie2.year) {
      if (movie1.title > movie2.title) {
        return 1;
      }

      if (movie1.title < movie2.title) {
        return -1;
      }
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
  const alphabeticallyArray = arrayOfMovies.slice();
  return alphabeticallyArray
    .sort((movie1, movie2) => {
      if (movie1.title > movie2.title) {
        return 1;
      }

      if (movie1.title < movie2.title) {
        return -1;
      }

      return 0;
    })
    .map((movieTitle) => movieTitle.title)
    .slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrayOfMovies) {
  const hoursToMinutes = arrayOfMovies.slice(0, 1);
  return hoursToMinutes.map(function (movie) {
    if (movie.duration.includes("h")) {
      movie.duration =
        Number(movie.duration.split("min")[0].split("h")[0]) * 60 +
        Number(movie.duration.split("min")[0].split("h")[1]);

      return movie;
    }
    movie.duration = Number(movie.duration.split("min")[0]);
    return movie;
  });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
