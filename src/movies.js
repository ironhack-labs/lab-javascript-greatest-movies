//const movies = require("./data");

// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((onlyDirec) => onlyDirec.director);
  console.log(directors)
}

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const dramaFilter = movies.filter( movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
  console.log(dramaFilter);

}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  const totalScore = movies.reduce((acc, current) => current.score + acc, 0);
  const avgScore = totalScore / movies.length;
  console.log((avgScore).toFixed(2));

}
scoresAverage(movies);

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  
  const totalDrama = movies.filter(movies => movies.genre.includes('Drama'));
  const dramaScore = totalDrama.reduce((acc, current) => current.score + acc, 0);
  const avgDrama = dramaScore / totalDrama.length;
  console.log((avgDrama).toFixed(2));

}
dramaMoviesScore(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const sortedYear = [... movies];

  sortedYear.sort((a, b) => {
    return a.year - b.year;
  })
  console.log(sortedYear);
    
}

orderByYear(movies);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const sortedTitle = [... movies];

  sortedTitle.sort((a, b) => {
    if (a.title < b.title){
      return -1;
    }
    if (a.title > b.title){
      return 1;
    }
    return 0;
  })
  
  const titles = sortedTitle.map((onlytitles) => onlytitles.title);
  console.log(titles.slice(0,20));
}

orderAlphabetically(movies);

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
