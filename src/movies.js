// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directorsArr = moviesArray.map((elem) => {
    return elem.director;
  });
  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let moviesSpielberg = moviesArray.filter((elem) => {
    if (elem.director === 'Steven Spielberg' && elem.genre.includes('Drama')) {
      return elem;
    }
  });
  return moviesSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let totalScores = moviesArray.reduce((sum, elem) => {
    if (elem.score === '' || !elem.score) {
      elem.score = 0;
    }
    return sum + elem.score;
  }, 0);

  if (moviesArray.length === 0) {
    return 0;
  }
  return Math.round((totalScores / moviesArray.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((elem) => {
    if (elem.genre.includes('Drama')) {
      return elem;
    } else if (!elem.genre.includes('Drama')) {
      return 0;
    }
  });

  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let yearArr = moviesArray.slice(0);
  yearArr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    } else {
      return a.year - b.year;
    }
  });
  return yearArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let titleArr = moviesArray.slice(0);

  let newArr = titleArr.map((elem) => {
    return elem.title;
  });

  return newArr.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
