// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorArr = [];

  moviesArray.forEach((movie) => directorArr.push(movie.director));
  return directorArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  // return 0;

  let counter = 0;

  moviesArray.forEach((movie) => {
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      counter++;
    }
  });

  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sum = moviesArray.reduce((acc, movie) => acc + movie.score, 0);
  const averageRating = sum / moviesArray.length;
  const averageRatingRounded = Number(averageRating.toFixed(2));

  return averageRatingRounded;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramas = moviesArray.filter((movie) => movie.genre.includes("Drama"));

  if (dramas.length === 0) {
    return 0;
  }

  const ratingSum = dramas.reduce((acc, drama) => acc + drama.score, 0);

  const ratingAve = ratingSum / dramas.length;

  console.log(ratingAve);
  return ratingAve;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const sortedByYearAndTitle = [...moviesArray].sort((movieA, movieB) => {
    if (movieA.year === movieB.year) {
      // If the years are the same, sort by title
      if (movieA.title < movieB.title) return -1;
      if (movieA.title > movieB.title) return 1;
      return 0;
    } else {
      // Sort by year
      return movieA.year - movieB.year;
    }
  });
  return sortedByYearAndTitle;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortByTitle = [...moviesArray].sort((movieA, movieB) => {
    if (movieA.title < movieB.title) {
      return -1;
    }
    if (movieA.title > movieB.title) {
      return 1;
    }
    if (movieA.title === movieB.title) {
      return 0;
    }
  });

  const justTitles = [...sortByTitle.map((movie) => movie.title)];
  // console.log(justTitles);

  // console.log("sortedTitle: ", sortByTitle);
  return justTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
