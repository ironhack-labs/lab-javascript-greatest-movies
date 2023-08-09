// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((theDirector) => {
    return theDirector.director;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenSpielbergDrama = moviesArray.filter(
    (director) =>
      director.director == "Steven Spielberg" &&
      director.genre.includes("Drama")
  );
  return stevenSpielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length == 0) {
    return 0;
  } else {
    const ave = moviesArray.reduce((acc, curr) => {
      return acc + curr.score;
    }, 0);
    const ave2 = (ave / moviesArray.length).toFixed(2);
    return Number(ave2);
  }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaArray = moviesArray.filter((drama) =>
    drama.genre.includes("Drama")
  );
  let dramaScore = dramaArray.reduce((a, b) => a + b.score, 0);
  const dramaAve = dramaScore / dramaArray.length;
  if (dramaArray.length == 0) {
    return 0;
  } else {
    return Number(dramaAve.toFixed(2));
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const yearArray = moviesArray
    .filter((movie) => movie.year)
    .sort((a, b) => a.year - b.year);
  /* 
if (yearArray.year == yearArray.year) {
    return yearArray.sort((a, b) => a.title - b.title);    
  } else {   */

  return yearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  //  const titles = moviesArray.map((title) => title.title);
  //  const sortTitles =  titles.split(',').sort((a, b) => a - b).join(',')

  const sortedmovies = moviesArray.map((title) => title.title).sort();

  if (sortedmovies.length <= 20) {
    // const titles = sortedmovies.map((title) => title.title);
    // titles.sort((a, b) => a - b);
    return sortedmovies;
  } else {
    // const titles = sortedmovies
    //   .map((title) => title.title)
    //   .slice(0, 20)
    //   .sort();
    return sortedmovies.slice(0, 20);
  }
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
