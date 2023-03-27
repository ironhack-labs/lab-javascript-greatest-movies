// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } 
  const newArray = moviesArray.map(function (movie) {
    return movie.director;
  });
  return newArray;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } 
  const manyMoviesArray = moviesArray.filter(function (movie) {
    return movie.director === "Steven Spielberg" && movie.genre("Drama");
  });
  let steveMovies = manyMoviesArray.length;
  return steveMovies;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumOfAllScores = moviesArray.reduce(function (acc, val) {
    if (val.score === undefined) 
    return acc;
  }
   return numbers(acc) + numbers(val.score); 
    },0)
   return numbers((sumOfAllScores(moviesArray.length).toFixed(2)));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
if (moviesArray.length === 0) {
    return 0;
}
const sumOfAllDramaScores = moviesArray.reduce(function (acc, val){
    if (!val.genre == 'drama') 
    return acc;
}
return numbers(acc) + numbers(val.score); 
},0)
return numbers((sumOfAllDramaScores(moviesArray.length).toFixed(2)));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } 
  moviesArray.sort(function (a, b) {
    if (a.year > b.year) return -1;
    if (a.year < b.year) return 1;
    return 0;
  });
  return moviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    } 
  moviesArray.sort(function (a, b) {
    const sortedMovieArray = [...moviesArray];
    const aTitleToUppercase = a.title.toUppercase();
    const bTitleToUppercase = b.title.toUppercase();
    if (aTitleToUppercase > bTitleToUppercase) return -1;
    if (aTitleToUppercase < bTitleToUppercase) return 1;
    return 0;
  });
  const sortedMovieArray = moviesArray.map(function (movie) {
    return movie.title;
  });
  const twentyMovieTitles = sortedMovieArray.slice[(0, 20)];
  return twentyMovieTitles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
