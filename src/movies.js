// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//map
function getAllDirectors(movies) {
  let resultDirectors = movies.map( movie => movie.director);
  //console.log(resultDirectors)
  return resultDirectors;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//filter

function howManyMovies(movies) {
  let resultSteDrama = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes("Drama"));
  return resultSteDrama.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//reduce
function scoresAverage(movies) {
  if (!movies.length) return 0;
  return parseFloat((movies.reduce((acc, movie) => {
    if (movie.score && typeof movie.score === "number") {
    return acc + movie.score;
    }
  return acc;
}, 0) / 
movies.length).toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let avgDrama = movies.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(avgDrama);
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//sort()
function orderByYear(movies) {
  let slicedWords = movies.slice();
  return slicedWords.sort((a, b) => {
    if (a.year < b.year) return -1; // a is less than b
    if (a.year > b.year) return 1; // a is greater than b
    if (a.year === b.year) { // a equals b
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
        if (titleA < titleB) return -1;
        if (titleB < titleA) return 1;
        if (titleA === titleB) return 0;
  }
})
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let slicedWords = movies.slice();
  let sorteByAlphabet = slicedWords.sort((a, b) => {
      let titleA = a.title.toUpperCase();
      let titleB = b.title.toUpperCase();
        if (titleA < titleB) return -1;
        if (titleB < titleA) return 1;
        if (titleA === titleB) return 0;
  })
  let onlyTitles = sorteByAlphabet.map( movie => movie.title);
  let only20elements = onlyTitles.slice(0,20);
  return only20elements;
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
