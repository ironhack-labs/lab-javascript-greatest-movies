// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorArray = moviesArray.map((params) => {
    return params.director;
  });
  return directorArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const countMovies = moviesArray.filter((eachMovie) => {
    if (
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
    ) {
      return true;
    }
  });

  return countMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  } else {
    const hasScore = moviesArray.filter((eachMovie) => {
      if (typeof eachMovie.score === "number" && eachMovie.score !== "NaN") {
        return true;
      }
    });

    const sumScore = hasScore.reduce((acum, eachRate) => {
      return acum + eachRate.score;
    }, 0);

    return Math.round((sumScore / moviesArray.length) * 100) / 100;
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const totalDrama = moviesArray.filter((eachMovie) => {
    return eachMovie.genre.includes("Drama");
  });

  if (!totalDrama.length) {
    return 0;
  } else {
    const avgDrama =
      totalDrama.reduce((acum, scoreMovie) => {
        return acum + scoreMovie.score;
      }, 0) / totalDrama.length;

    return Math.round(avgDrama * 100) / 100;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray));
  copyMoviesArray.sort((a, b) => {
    return a.year - b.year || a.title.localeCompare(b.title);
  });

  return copyMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copyMoviesArray = JSON.parse(JSON.stringify(moviesArray));

  copyMoviesArray.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  const orderedList = copyMoviesArray.map((eachMovie) => {
    return eachMovie.title;
  });

  if (orderedList.length > 20) {
    orderedList.splice(20);
  }

  return orderedList;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
