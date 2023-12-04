// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movie) {
  let newArray = [];
  return movie.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray) {
    return 0;
  } else {
    let spielbergDramas = moviesArray.filter(
      (movie) =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
    return spielbergDramas.length;
  }
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return 0;
  } else {
    const averageRate = moviesArray.reduce((acc, movie) => {
      return acc + (movie.score || 0);
    }, 0);
    return parseFloat((averageRate / moviesArray.length).toFixed(2));
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray) {
    return 0;
  }

  const dramaMovies = moviesArray.filter(
    (movie) => movie.genre && movie.genre.includes("Drama")
  );

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalDramaScore = dramaMovies.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);

  const averageDramaScore = parseFloat(
    totalDramaScore / dramaMovies.length
  ).toFixed(2);
  return parseFloat(averageDramaScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const orderedMovies = moviesArray.slice().sort((a, b) => {
    return a.year - b.year;
  });
  return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const arrayNames = moviesArray.map((movie) => movie.title);
  const sortedByName = arrayNames.slice().sort().slice(0, 20);
  return sortedByName;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((movie) => {
    const durationArray = movie.duration.split(" ");
    let totalMinutes = 0;

    durationArray.forEach((time) => {
      if (time.includes("h")) {
        totalMinutes += parseInt(time) * 60;
      } else {
        totalMinutes += parseInt(time);
      }
    });

    return {
      ...movie,
      duration: totalMinutes,
    };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray || moviesArray.length === 0) {
    return null;
  }

  const years = [...new Set(moviesArray.map((movie) => movie.year))];

  const bestYear = years.reduce((best, year) => {
    const moviesOfYear = moviesArray.filter((movie) => movie.year === year);
    const averageScore =
      moviesOfYear.reduce((sum, movie) => sum + (movie.score || 0), 0) /
      moviesOfYear.length;

    if (best.averageScore === undefined || averageScore > best.averageScore) {
      return { year, averageScore };
    } else {
      return best;
    }
  }, {});

  return `The best year was ${
    bestYear.year
  } with an average score of ${bestYear.averageScore.toFixed(2)}`;
}

// Exporting functions for testing
if (typeof module !== "undefined" && module.exports) {
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
