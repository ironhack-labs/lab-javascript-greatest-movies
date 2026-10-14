// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directorsArray = moviesArray.map((movie) => {
    return movie.director;
  });
  return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const howManyMoviesArray = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });
  return howManyMoviesArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const arrLength = moviesArray.length;
  if (arrLength === 0) {
    return 0;
  }
  const totalScores = moviesArray.reduce((acc, movie) => {
    if (movie.score !== undefined && movie.score !== "") {
      return acc + movie.score;
    } else {
      return acc;
    }
  }, 0);
  const avgScores = Math.round((totalScores / arrLength) * 100) / 100;
  return avgScores;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesByYear = moviesArray.slice();
  moviesByYear.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      return movie1.title.localeCompare(movie2.title);
    }
    return movie1.year - movie2.year;
  });
  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newMoviesArray = moviesArray.slice();
  newMoviesArray.sort((movie1, movie2) => {
    return movie1.title.localeCompare(movie2.title);
  });
  let topTwenty;
  if (newMoviesArray.length > 20) {
    topTwenty = newMoviesArray.splice(0, 20);
  } else {
    topTwenty = newMoviesArray;
  }
  let movieTitles = topTwenty.map((movie) => movie.title);
  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newMoviesArray = moviesArray.map((movie) => {
    let stringDuration = movie.duration.split(" ");
    let hours = parseInt(stringDuration[0].replace("h", ""));
    let minutes = stringDuration[1]
      ? parseInt(stringDuration[1].replace("min", ""))
      : 0;
    let totalMinutes = hours * 60 + minutes;
    const newObject = { ...movie, duration: totalMinutes };
    return newObject;
  });
  return newMoviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const newMoviesArray = moviesArray;
  const scoresByYear = {};

  newMoviesArray.forEach((movie) => {
    if (scoresByYear[movie.year]) {
      scoresByYear[movie.year].push(movie.score);
    } else {
      scoresByYear[movie.year] = [movie.score];
    }
  });

  let bestYear = null;
  let highestAverage = 0;

  Object.keys(scoresByYear).forEach((year) => {
    const total = scoresByYear[year].reduce((sum, score) => sum + score, 0);

    const average = total / scoresByYear[year].length;

    if (
      average > highestAverage ||
      (average === highestAverage &&
        (bestYear === null || Number(year) < bestYear))
    ) {
      highestAverage = average;
      bestYear = Number(year);
    }
  });
  return `The best year was ${bestYear} with an average score of ${highestAverage}`;
}
