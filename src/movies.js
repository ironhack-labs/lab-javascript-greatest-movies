// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {
 const directors = [];
 movies.forEach(movie => {
  directors.push(movie.director)
 });
 return directors;
}

       
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const spielbergDramas = movies.filter(function(movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  });

  return spielbergDramas.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(movies) {

  if (movies.length === 0) {
    return 0;
  }

  const totalScores = movies.reduce(function(sum, movie) {
    return sum + (movie.score || 0);
  }, 0);

  const averageScore = totalScores / movies.length;
  return parseFloat(averageScore.toFixed(2));

}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(movies) {

 const dramaMovies = movies.filter(function(movie) {
    return movie.genre.includes('Drama') && typeof movie.score === 'number';
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  const totalScores = dramaMovies.reduce(function(sum, movie) {
    return sum + movie.score;
  }, 0);

  const averageScore = totalScores / dramaMovies.length;
  return parseFloat(averageScore.toFixed(2));
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

  function orderByYear (moviesArray) {
    const sortedArray = moviesArray.slice().sort((a, b) => {
      if (a.year !== b.year) {
        return a.year - b.year;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

    return sortedArray;
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
  
    const sortedMovies = [movies];
    sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);
  
    return first20Titles;
  }
  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
