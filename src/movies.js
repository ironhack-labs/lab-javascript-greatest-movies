// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director);

  const uniqueDirectors = directors.filter(
    (director, index) => directors.indexOf(director) === index
  );

  return uniqueDirectors;
}

  
  const directors = getAllDirectors(movies);
  console.log(directors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
        const spielbergMovies = moviesArray.filter(
          (moviesArray) => movies.director === 'Steven Spielberg'
        );
      
    
        const dramaSpielbergMovies = spielbergMovies.filter(
          (moviesArray) => movie.genre.includes('Drama')
        );
      
        return dramaSpielbergMovies.length;
      
      

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
      return 0;
    }
  
    const totalScores = moviesArray.reduce((acc, movie) => {
      if (movie.score) {
        return acc + movie.score;
      } else {
        return acc;
      }
    }, 0);
  
    const average = totalScores / moviesArray.length;
  
    return parseFloat(average.toFixed(2));
  }
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
      }
    
      const totalDrama = moviesArray.reduce((acc, movie) => {
        if (movie.score) {
          return acc + movie.drama;
        } else {
          return acc;
        }
      }, 0);
    
      const average = totaldrama / moviesArray.length;
    
      return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMovies = [...moviesArray];

  sortedMovies.sort((movie1, movie2) => {
    return movie1.year - movie2.year || movie1.title.localeCompare(movie2.title);
  });

  return sortedMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
const sortedMovies = [...moviesArray];

sortedMovies.sort((movie1, movie2) => {
  return movie1.title.localeCompare(movie2.title);
});

const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);

return first20Titles;
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
