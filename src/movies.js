// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let mappedDirectors = moviesArray.map((elem) => {
    //    console.log(elem.director);
    return elem.director;
  });
  return mappedDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let filterSpielberg = moviesArray.filter((elem) => {
    return elem.director === "Steven Spielberg" && elem.genre.includes("Drama");
  });
  //console.log(filterSpielberg);
  return filterSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let aveScore = moviesArray.reduce((acc, cValue) => {
    if (cValue.score) {
      return acc + cValue.score;
    } else {
      return acc;
    }
  }, 0);
  let average = aveScore / moviesArray.length;
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let allDramas = moviesArray.filter((elem) => {
    return elem.genre.includes("Drama");
  });
  if (!allDramas.length) {
    return 0;
  }
  let dramaScore = allDramas.reduce((acc, cValue) => {
    if (cValue.score) {
      return acc + cValue.score;
    } else {
      return acc;
    }
  }, 0);

  let dramaAverage = dramaScore / allDramas.length;
  // console.log(dramaAverage);
  return Number(dramaAverage.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let clonedMovies = JSON.parse(JSON.stringify(moviesArray));
  let sortedMovies = clonedMovies.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let clonedMovies = JSON.parse(JSON.stringify(moviesArray));
  let sortedMovies = clonedMovies.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  });
  let mapedArr = sortedMovies.map((elem) => {
    return elem.title;
  });
  let slicedArr = mapedArr.slice(0, 20);
  return slicedArr;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
