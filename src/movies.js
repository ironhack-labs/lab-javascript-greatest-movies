// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function (movie) {
        return movie.director;
      });
    
      const repitedDirectors = [];
    
      allDirectors.forEach(function (director) {
        let isDuplicated = false;
        for (let i = 0; i < repitedDirectors.length; i++) {
          if (director === repitedDirectors[i]) {
            isDuplicated = true;
            break;
          }
        }
        if (!isDuplicated) {
          repitedDirectors.push(director);
        }
      });
      return repitedDirectors;

}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0; 
  }
  const filteredMovies = moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg');

  return filteredMovies.length;
  
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  const sumOfScores = moviesArray.reduce((total, movie) => {
    const movieScore = movie.score || 0;
    return total + movieScore;
  }, 0);

  const averageScore = sumOfScores / moviesArray.length;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

  if (dramaMovies.length === 0) {
    return 0; 
  }
  const sumOfScores = dramaMovies.reduce((total, movie) => {
    const movieScore = movie.score || 0;
    return total + movieScore;
  }, 0);

  const averageScore = sumOfScores / dramaMovies.length;

  return Math.round(averageScore * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((movieA, movieB) => {
    if (movieA.year !== movieB.year) {
      return movieA.year - movieB.year; 
    } else {
      return movieA.title.localeCompare(movieB.title);
    }
  });
  return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedMovies = [...moviesArray];

  sortedMovies.sort((movieA, movieB) => movieA.title.localeCompare(movieB.title));

  const titles = sortedMovies.slice(0, 20).map(movie => movie.title);

  return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
