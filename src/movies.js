const dramaMovies = (movies) => {
  return movies.filter((movie) => movie.genre.includes("Drama"));
};

const orderTitleAlphabetic = (movies) => {
  return movies.sort((a, b) => a.title.localeCompare(b.title));
};

const ascOrder = (movies) => {
  return movies.sort(function (a, b) {
    if (a.year - b.year === 0) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
};

const groupYears = (movies) => {
  const yearMovies = movies.map((i) => i.year);
  
  const removeRepetYears = yearMovies.filter(function (year, index) {
    return yearMovies.indexOf(year) === index;
  });

  const resultMoviesForYear = removeRepetYears.map((year) =>
    movies.filter((f) => f.year === year)
  );

  // - Short version, we will use the long version for ease of understanding.
  // const resultMoviesForYear = yearMovies
  //   .filter(function (year, index) {
  //     return yearMovies.indexOf(year) === index;
  //   })
  //   .map((year) => movies.filter((f) => f.year === year));

  // . Using map
  const TheBestYear = { year: 0, average: 0 };
  resultMoviesForYear.map((movie) => {
    if (scoresAverage(movie) === TheBestYear.average) {
      const SameBestAverage = orderByYear([
        TheBestYear,
        { year: movie[0].year, average: scoresAverage(movie) },
      ])[0];
      TheBestYear.year = SameBestAverage.year;
      TheBestYear.average = SameBestAverage.average;
    }
    if (scoresAverage(movie) > TheBestYear.average) {
      TheBestYear.year = movie[0].year;
      TheBestYear.average = scoresAverage(movie);
    }
  });

  // . Using forEach
  // const TheBestYear = { year: 0, average: 0 };
  // resultMovies.forEach((movie) => {
  //   if (scoresAverage(movie) === TheBestYear.average) {
  //     const SameBestAverage = (orderByYear([TheBestYear, {year: movie[0].year, average: scoresAverage(movie)}]))[0]
  //     TheBestYear.year = SameBestAverage.year;
  //     TheBestYear.average = SameBestAverage.average;
  //   } if (scoresAverage(movie) > TheBestYear.average) {
  //     TheBestYear.year = movie[0].year;
  //     TheBestYear.average = scoresAverage(movie);
  //   }
  // });

  return TheBestYear;
};


// - Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// - Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return dramaMovies(
    moviesArray.filter(
      (movie) => movie.director === "Steven Spielberg" && movie
    )
  ).length;
}

// - Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const AverageMovies =
    Math.round(
      (moviesArray.reduce((acc, el) => {
        return el.score ? acc + el.score : acc + 0;
      }, 0) /
        moviesArray.length) *
        100
    ) / 100;
  return AverageMovies ? AverageMovies : 0;
}

// - Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const averageDramaMovies = dramaMovies(moviesArray);
  return scoresAverage(averageDramaMovies);
}

// - Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newMoviesArray = JSON.parse(JSON.stringify(moviesArray));
  return newMoviesArray.length > 1 ? ascOrder(newMoviesArray) : newMoviesArray;
}

// - Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return orderTitleAlphabetic(moviesArray)
    .map((movie, i) => i < 20 && movie.title)
    .filter((f) => f !== false);
}

// - BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((i) => ({
    ...i,
    duration:
      (i.duration.split(" ")[0][0]
        ? parseInt(i.duration.split(" ")[0][0])
        : 0) *
        60 +
      (i.duration.split(" ")[1] ? parseInt(i.duration.split(" ")[1]) : 0),
  }));
}

// - BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  const MoviesGroupYears = groupYears(moviesArray);
  return moviesArray.length !== 0
    ? `The best year was ${MoviesGroupYears.year} with an average score of ${MoviesGroupYears.average}`
    : null;
}
