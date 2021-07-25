// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  const moviesDirectors = arr.map((element) => {
    return element.director;
  });
  return moviesDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const dramaSpielbergMovies = arr.filter((element) => {
    if (element.director === "Steven Spielberg" && element.genre.includes("Drama"))
  {
    return true;
  }
});
return dramaSpielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) { 
  if (!arr.length) {
    return 0
   }
 const total = arr.reduce ((accmulator, element) => {
   if (typeof element.score !== "number") {
     return accmulator;
   }
   return (accmulator += element.score)
 }, 0);
 return Math.round((total / arr.length) * 100) / 100;
 } 

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaMovies = arr.filter((element) => {
    return element.genre.includes("Drama")
  });
  const avgScoreDrama = dramaMovies.reduce((accmulator, element) => {
    return accmulator + element.score / dramaMovies.length
  }, 0);
  return Math.round(avgScoreDrama * 100) / 100;
}
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  const cloneMovies = arr.slice();
  const newArr = cloneMovies.sort((element1, element2) => {
    if (element1.year === element2.year) {
      return element1.title.localeCompare(element2.title);
    } else {
      return element1.year - element2.year;
    }
  });
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
const Alphas = arr.slice().sort((element1, element2) => {
    return element1.title.localeCompare(element2.title)
  });
  const titleMovie = Alphas.map((element) => {
    return element.title
  });

  if (titleMovie.length >= 20) {
    titleMovie.length = 20;
  }
  return titleMovie;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
