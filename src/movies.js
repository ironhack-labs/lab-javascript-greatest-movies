// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((movie) => movie.director);
}

function getAllDirectorsUnique(moviesArray) {
  const directors = getAllDirectors(moviesArray);
  return directors.filter((director, index) => directors.indexOf(director) === index);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  return moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const averageScore = moviesArray.reduce((acc, movie) => {
    return movie.score ? acc + movie.score : acc;
  }, 0);

  return Number((averageScore / moviesArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];
  return moviesCopy.sort((movie1, movie2) => {
    if (movie1.year === movie2.year) {
      return movie1.title.localeCompare(movie2.title);
    }
    return movie1.year - movie2.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];
  const moviesTitles = moviesCopy.map((movie) => movie.title);
  return moviesTitles.sort((title1, title2) => title1.localeCompare(title2)).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const moviesCopy = [...moviesArray];
  return moviesCopy.map((movie) => {
    const duration = movie.duration.split(" ");
    let minutes = 0;
    duration.forEach((time) => {
      if (time.includes("h")) {
        minutes += Number(time.replace("h", "")) * 60;
      } else {
        minutes += Number(time.replace("min", ""));
      }
    });
    return { ...movie, duration: minutes };
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }

  const moviesCopy = [...moviesArray];
  const moviesByYear = moviesCopy.reduce((acc, movie) => {
    if (acc[movie.year]) {
      acc[movie.year].push(movie);
    } else {
      acc[movie.year] = [movie];
    }
    return acc;
  }, {});

  const bestYear = Object.keys(moviesByYear).reduce(
    (acc, year) => {
      const averageScore = scoresAverage(moviesByYear[year]);
      if (averageScore > acc.score) {
        acc.score = averageScore;
        acc.year = year;
      }
      return acc;
    },
    { year: 0, score: 0 }
  );

  return `The best year was ${bestYear.year} with an average score of ${bestYear.score}`;
}
