// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies){
  const directors = movies.map(oneMovie => oneMovie.director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(fewMovies){
  return fewMovies.filter(
    movie =>
      movie.director === 'Steven Spielberg' &&
      movie.genre.includes('Drama')
  ).length;
}
  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(allOfThem){
  if (!allOfThem.length){
    return 0;
  }

  const avg = allOfThem.reduce((x, y) => {
    if (y.score){
      return x + y.score;
    } else {
      return x;
    }
  }, 
    0); 
    return rating(avg / allOfThem.length);
}

function rating(num){
  return Math.round(num * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramas){
  const dramaMovies = dramas.filter(
    movie =>
      movie.genre.includes('Drama')
  );
  return Math.round(scoresAverage(dramaMovies) * 100) / 100;
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
  if (!movies.length){
    return [];
  } else {
    return movies.sort((x,y) => x.year > y.year ? 1 : -1);
  }
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(allOfThem){
  let titles = allOfThem.map(movie => movie.title).sort();
  return titles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(){}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(){}



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
