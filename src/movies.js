// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movie) {
    return (
      movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
    );
  });
  return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const totalScores = moviesArray
    .filter(function (movie) {
      return movie.score !== undefined;
    })
    .reduce(function (acc, movie) {            //used reduce right after filter method. Had trouble declaring new variable and using reduce there
      return acc + movie.score;
    }, 0);
  const avgScore = totalScores / moviesArray.length;
  if (moviesArray.length === 0) {
    return 0;
  }
  return avgScore;  // Don't know how to round it to decimals
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 1) {
    return moviesArray[0].score;
  }
  const dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
  if (dramaMovies.length === 0) {
    return 0;
  }
  const dramaMoviesRating = dramaMovies.reduce(function (acc, curr) {
    return acc + curr.score;
  }, 0);
  const avgScore = dramaMoviesRating / dramaMovies.length;

  return avgScore; // Sorry no idea how to make it a floating point number
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedByYear = [...moviesArray];
  sortedByYear.sort(function (a, b) {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const copy = [...moviesArray];
  const titlesOnly = copy.map(function (movie) {
    return movie.title;
  });
  titlesOnly.sort(function (a, b) {
    return a.localeCompare(b);
  });
  if (titlesOnly.length > 20) {
    return titlesOnly.slice(0, 20);
  }
  return titlesOnly;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
