// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrayOfMovies) {
  const arrayOfDirectors = arrayOfMovies.map((name) => name.director);
  return arrayOfDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  const arrayOfDirectors = arrayOfMovies.map((names) => names.director);
  const directors = arrayOfDirectors.filter(
    (item, index) => arrayOfDirectors.indexOf(item) === index
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
  let hoursToMinutes = arrayOfMovies.slice();
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
function bestYearAvg(arrayOfMovies) {
  if (arrayOfMovies.length === 0) return null;
  const newArrayByYear = arrayOfMovies.slice().map((movie) => movie.year);
  const equalYears = newArrayByYear.filter(
    (item, index) => newArrayByYear.indexOf(item) === index
  );
  let yearAverageArray = [];
  let arraybyYear = [];
  let moviesByYearArray = [];
  let compareRating = [];
  let sameRateArray = [];
  let highestAverage;

  for (let i = 0; i < equalYears.length; i++) {
    arraybyYear = arrayOfMovies.filter((movie) => movie.year === equalYears[i]);

    moviesByYearArray.push(arraybyYear);

    let yearAverage =
      Math.round(
        (arrayOfMovies
          .filter((movie) => movie.year === equalYears[i])
          .reduce((sum, movie) => sum + movie.rate, 0) /
          arraybyYear.length) *
          100
      ) / 100;

    yearAverageArray.push(yearAverage);

    highestAverage = Math.max(...yearAverageArray);

    indexOfHighRatedYear = yearAverageArray.indexOf(
      Math.max(...yearAverageArray)
    );
  }

  for (let i = 0; i < yearAverageArray.length; i++) {
    if (yearAverageArray[i] === highestAverage) {
      compareRating.push(i);
    }
  }

  for (let i = 0; i < compareRating.length; i++) {
    sameRateArray.push(moviesByYearArray[compareRating[i]][0]);
    sameRateArray.reverse();
  }

  return `The best year was ${sameRateArray[0].year} with an average rate of ${highestAverage}`;
}
