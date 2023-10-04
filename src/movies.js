// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function (movie) {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let sumScores = 0;

  sumScores = moviesArray.reduce(function (accumulator, movie) {
    return movie.hasOwnProperty("score")
      ? accumulator + movie.score
      : accumulator;
  }, sumScores);

  let average = sumScores / moviesArray.length;

  return Math.round(average * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let moviesDrama = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  return scoresAverage(moviesDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray
    .sort(function (movieA, movieB) {
      if (movieA.year < movieB.year) {
        return -1;
      }
      if (movieA.year > movieB.year) {
        return 1;
      }
      return movieA.title.localeCompare(movieB.title);
    })
    .slice();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .sort(function (movieA, movieB) {
      return movieA.title.localeCompare(movieB.title);
    })
    .slice(0, 20)
    .map(function (movie) {
      return movie.title;
    });
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(function (movie) {
    let durationString = movie.duration;
    let hourCharIndex = durationString.indexOf("h");
    let minCharIndex = durationString.indexOf("min");

    let duration = 0;

    if (hourCharIndex != -1) {
      duration += 60 * parseInt(durationString.substring(0, hourCharIndex));
    }

    if (minCharIndex != -1) {
      duration += parseInt(
        durationString
          .substring(hourCharIndex != -1 ? hourCharIndex + 1 : 0, minCharIndex)
          .trim()
      );
    }

    let cloneMovie = { ...movie };

    cloneMovie.duration = duration;

    return cloneMovie;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  let arrayGroupedByYear = moviesArray.reduce(function (accumulator, movie) {
    let year = movie.year;

    if (!accumulator[year]) {
      accumulator[year] = [];
    }

    accumulator[year].push(movie);

    return accumulator;
  }, {});

  let rateMax = 0;
  let rate;
  let yearMaxAverage;

  for (const year in arrayGroupedByYear) {
    rate = scoresAverage(arrayGroupedByYear[year]);

    if (rate > rateMax) {
      rateMax = rate;
      yearMaxAverage = year;
    }
  }

  return `The best year was ${yearMaxAverage} with an average score of ${rateMax}`;
}
