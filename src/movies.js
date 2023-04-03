// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

// BONUS Iteration 1.1: Clean the array of directors

function cleanDirectors(moviesArray) {
  // Uses getAllDirectors function to get an array of all directors.
  const directors = getAllDirectors(moviesArray);
  // Filter method to check if the index of the current director is the same as the current index, if so, it is a unique director.
  const uniqueDirectors = directors.filter((director, index) => {
    return directors.indexOf(director) === index;
  });

  return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    (movie) =>
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  // Reduce method to add all scores together.
  const totalScore = moviesArray.reduce((acc, movie) => {
    if (movie.score) {
      return acc + movie.score;
      // If the movie doesn't have a score, add 0 to the accumulator.
    } else {
      return acc;
    }
  }, 0);

  //
  const averageScore = totalScore / moviesArray.length;

  // Math.round() to round to the nearest whole number, then divide by 100 to get 2 decimal places.
  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  // Uses scoresAverage function to get the average score of all drama movies.
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  // Spread operator to create a copy of the moviesArray.
  const sortedMoviesYearly = [...moviesArray].sort((a, b) => {
    // If the years are different, sort by year.
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else {
      //  If the years are the same, use same logic to sort by title.
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  return sortedMoviesYearly;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray]
    // Sorts movies by title alphabetically - localeCompare() is built in method to sort strings.
    .sort((a, b) => a.title.localeCompare(b.title))
    // Map to return an array of just the movie titles.
    .map((movie) => movie.title);
  // Slice to return the first 20 movies.
  return sortedMovies.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const minsArray = moviesArray.map(function (movie) {
    // Split the duration string into an array of hours and minutes.
    const [hours, minutes] = movie.duration.split("h ");
    // Convert hours to minutes and add to minutes (if minutes exist)
    let totalMinutes = parseInt(hours) * 60;
    if (minutes) {
      totalMinutes += parseInt(minutes);
    }
    // Spread operator to return a new object with the duration changed to minutes.
    return {
      ...movie,
      duration: totalMinutes,
    };
  });
  return minsArray;
}

// BONUS - Iteration 8: Best yearly score average

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
}
