// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map((element) => element.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let SpielbergDramas = moviesArray.filter(function (element) {
    return (
      element.genre.indexOf("Drama") >= 0 &&
      element.director === "Steven Spielberg"
    );
  }).length;
  return SpielbergDramas;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray == "") {
    return 0;
  }
  const average = moviesArray
    .filter((element) => element.score)
    .map((element) => element.score)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  let decimal = average / moviesArray.length;
  return Math.round(decimal * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const allDramaMovies = moviesArray.filter(
    (element) => element.genre == "Drama"
  );
  if (allDramaMovies.length === 0) {
    return 0;
  }
  const dramaScores = allDramaMovies
    .map((element) => element.score)
    .reduce((previousValue, currentValue) => previousValue + currentValue);
  let decimal = dramaScores / allDramaMovies.length;

  return Math.round(decimal * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const directorSort = [];
  const sortTitle = moviesArray
    .sort((a, b) => {
      const nameA = a.title;
      const nameB = b.title;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .sort((a, b) => a.year - b.year);
  directorSort.push(...sortTitle);
  return directorSort;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortTitle = moviesArray
    .sort((a, b) => {
      const nameA = a.title;
      const nameB = b.title;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    })
    .filter((element, index) => element.title && index < 20)
    .map((element) => element.title);
  return sortTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const timeFormat = moviesArray;

  const duration = moviesArray.map((element) => element.duration);
  for (let i = 0; i < duration.length; i++) {
    let clearString = duration[i].replace(/([hmin])/g, "");
    let min =
      parseInt(clearString.slice(0)) * 60 + parseInt(clearString.slice(-2));
    timeFormat[i].duration = min;
  }
  return timeFormat;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
