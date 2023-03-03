// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsRaw = moviesArray.map((movie, index) => {
    return movie.director;
  });
  const directors = directorsRaw.filter((director, index) => {
    return directorsRaw.indexOf(director) == index;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDramas = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return stevenDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length <= 0) {
    return 0;
  }

  const sumScores = moviesArray.reduce((acc, movie) => {
    if (movie.score >= 0) {
      return acc + movie.score;
    }
    return acc;
  }, 0);

  return Math.round((sumScores / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let countDramaMovies = 0;
  const sumDramaScores = moviesArray.reduce((acc, movie) => {
    if (movie.genre.includes("Drama")) {
      countDramaMovies++;
      return acc + movie.score;
    }
    return acc;
  }, 0);
  if (countDramaMovies > 0) {
    return Math.round((sumDramaScores / countDramaMovies) * 100) / 100;
  }
  return 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesByYear = moviesArray
    .map((movie) => movie)
    .sort((a, b) => {
      if (a.year === b.year) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      }
      return a.year - b.year;
    });

  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesByTitle = moviesArray
    .map((movie) => movie.title)
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  if (moviesByTitle.length > 20) {
    moviesByTitle.splice(20, moviesByTitle.length - 20);
  }
  return moviesByTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  //const clonedArray = structuredClone(moviesArray);

  const clonedArray = moviesArray.map((movie) => {
    let obj = {};
    for (const prop in movie) {
      obj[prop] = movie[prop];
    }
    return obj;
  });

  const moviesInMinutes = clonedArray.map((movie) => {
    const hours = movie.duration.split("h", 1);
    let minutes = ["0"];
    if (movie.duration.includes("min")) {
      const hoursAndMinutes = movie.duration.split("h ");
      minutes[0] = hoursAndMinutes[1].split("min", 1);
    }
    movie.duration = parseInt(hours[0]) * 60 + parseInt(minutes[0]);

    return movie;
  });
  return moviesInMinutes;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function orderByAverage(yearAverage) {
  const moviesByAverage = yearAverage
    .map((year) => year)
    .sort((a, b) => {
      if (a[1] === b[1]) {
        if (a[0] > b[0]) {
          return -1;
        }
        if (a[0] < b[0]) {
          return 1;
        }
        return 0;
      }
      return b[1] - a[1];
    });

  return moviesByAverage;
}

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
  const moviesByYear = orderByYear(moviesArray);
  let year = moviesByYear[0].year;
  let yearAverage = [];
  moviesByYear.forEach((el) => {
    const yearScore = moviesByYear.filter((movie) => {
      return movie.year === year;
    });
    if (yearScore.length > 0) {
      yearAverage.push([year, scoresAverage(yearScore)]);
    }
    year++;
  });
  const yearByAverage = orderByAverage(yearAverage);
  return `The best year was ${yearByAverage[0][0]} with an average score of ${yearByAverage[0][1]}`;
}
