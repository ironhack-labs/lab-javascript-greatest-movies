// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsName = moviesArray.map((i) => {
    return i.director;
  });
  return directorsName;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let spielbergMovies = moviesArray.filter((el) => {
    if (el.director === "Steven Spielberg" && el.genre.includes("Drama")) {
      return el;
    }
  });
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let mediumScore = moviesArray.reduce((acc, film) => {
    if (film.score) {
      return acc + film.score;
    } else {
      return acc;
    }
  }, 0); //always set the initial value to start the acc
  return Math.round((mediumScore * 100) / moviesArray.length) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let scoresDramaArray = [];
  let avg = 0;

  scoresDramaArray = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  scoresDramaArray = scoresDramaArray.map((movie) => {
    return movie.score;
  });

  let total = scoresDramaArray.reduce((acc, film) => {
    return acc + film;
  }, 0);

  avg = total / scoresDramaArray.length;

  if (scoresDramaArray.length === 0) {
    return 0;
  } else {
    return parseFloat(avg.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  return moviesArray.slice().sort(function (a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = moviesArray.slice().sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
  });
  const sortedTitles = sortedMovies.map((movie) => movie.title);
  const top20Movies = sortedTitles.slice(0, 20);
  return top20Movies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  let allMinutes = moviesArray.slice()((el) => {
    if (el.duration === String) {
      el.duration = el.duration.replace(/[hmin]/g, "").parseInt();
      return el.duration;
    }
    if (el.duration[0]) {
      return el.duration[0] * 60;
    }
  });
  let totalMinutes = allMinutes.map((el) => {
    let sum = Object.values(duration).reduce((acc, int) => acc + int, 0);
    return sum;
  });

  return (allMinutes = totalMinutes); //0 GREENS
}
//first remove the letters from the string with .replace() method and replace with space
//second turn the string into a integer with .parseint() method
//third selec the index 0 (the hour) and multiply it by 60
//fourth access the values with object.values(duration) and sum/reduce
//return the array

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
