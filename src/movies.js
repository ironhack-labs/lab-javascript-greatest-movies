// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectorList = moviesArray.map((movie) => movie.director);

  /*  const noRepDirectorList = allDirectorList.filter((director) => noRepDirectorList.indexOf(director) === -1)
    return noRepDirectorList */
  return allDirectorList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergMovieList = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg"
  );
  const spielbergMovieCount = spielbergMovieList.length;

  const spielbergDramaList = spielbergMovieList.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  const spielbergDramaCount = spielbergDramaList.length;

  if (spielbergDramaList.length === 0) {
    return 0;
  } else if (spielbergDramaList.length === 2) {
    return 2;
  } else if (spielbergDramaList.length === 4) {
    return 4;
  } else return spielbergDramaCount;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const result =
    moviesArray.reduce((acc, movie) => {
      if (movie.score) {
        return acc + movie.score;
      } else return acc;
    }, 0) / moviesArray.length;

  if (moviesArray.length === 0) {
    return 0;
  } else return Math.round(result*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes(`Drama`);
  });
  
  const dramaScore = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score
  }, 0)
  return Math.round((dramaScore / dramaMovies.length)*100)/100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = moviesArray.sort((a, b) => {
      return a.year - b.year})
    return sortedMovies
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
    const sortedTitles = movieArray.map(movie => movie.title).sort().slice(0, 20);
    return sortedTitles;
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
