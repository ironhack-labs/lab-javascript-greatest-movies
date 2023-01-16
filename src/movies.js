// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map(function (movie) {
    // let unique = [...new Set(movie.Director)];
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(function (howMany) {
    return (
      howMany.director === "Steven Spielberg" && howMany.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  }
  const newAccumulator = moviesArray.reduce(function (accumulator, element) {
    if (element.score == undefined) {
      return accumulator;
    }
    const accu = accumulator + element.score;
    return accu;
  }, 0);
  const avg = newAccumulator / moviesArray.length;
  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesAverage = moviesArray.filter(function (el) {
    return el.genre.includes("Drama");
  });
  return scoresAverage(dramaMoviesAverage);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let orderedArray = moviesArray.map(function (element) {
    return element;
  });

  orderedArray.sort(function (a, b) {
    if (a.year > b.year) return 1;

    if (a.year < b.year) return -1;

    if (a.year == b.year) {
      if (a.title > b.title) return 1;

      if (a.title < b.title) return -1;

      if (a.title == b.title) return 0;
    }
  });

  return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const mapped = moviesArray.map(function (movie) {
    return movie.title;
  });
  let sorted = mapped.sort((a, b) => a.localeCompare(b));
  let sliced = sorted.slice(0, 20);
  return sliced;
}

// .sort((a, b) => a - b)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const filteredDuration = moviesArray.map(function (movie) {
    return movie.duration;
  });
  let timeinMinutes = filteredDuration.split("h ");
  return Number(timeinMinutes[0]) * 60 + Number(timeinMinutes[1]);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
