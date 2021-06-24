// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  return movies.map((movie, i, arr) => {
    return movie.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const stevesMovies = movies
    .filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  return stevesMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  const avgScore = movies.reduce((acc, item, index, array) => {
    const avgScore = item.score ? item.score : 0;
    return acc += avgScore / array.length;
  }, 0);
  return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaAvgScore = movies.filter(item => item.genre.includes("Drama"))
    .reduce((acc, item, index, array) => acc += item.score / array.length, 0);
  return Number(dramaAvgScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const newArr = movies.slice();
  const orderedByYear = newArr.sort((movie1, movie2) => {
    return movie1.year - movie2.year
  });
  const orderedByYearAndTitle = orderedByYear.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      return (movie1.title > movie2.title) ? 1 : -1;
    }
  });
  return orderedByYearAndTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const shallowCopy = movies
    .slice()
    .sort((movie1, movie2) => movie1.title > movie2.title ? 1 : -1)
    .map((movie) => movie.title)
    .filter((item, index) => {
      if (index < 20) {
        return item;
      }
    });
  return shallowCopy;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  // creating a deep copy of the array of objects but loosing som etypes
  const convertingToMinutes = JSON.parse(JSON.stringify(movies));
  convertingToMinutes.map((movie) => {
    movie.duration = movie.duration
      .split(" ")
      .map(item => {
        if (item.indexOf("h") !== -1) {
          return Number(item.replace("h", "")) * 60;
        } else if (item.indexOf("min") !== -1) {
          return Number(item.replace("min", ""));
        }
      })
      .reduce((acc, item) => acc += item, 0);
    return movie;
  });
  return convertingToMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
  const result = JSON.parse(JSON.stringify(movies));
  // The best year was 1972 with an average score of 9.2
  result
}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}