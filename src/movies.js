// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director);
    return directors;

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    

    const stevenSpielbergDramas = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
      });
      return stevenSpielbergDramas.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

   //  const score = moviesArray.map(movie => movie.score);
 //const allScores = score.reduce((accumulator, currentValue)=> {return accumulator + currentValue},0);
 //const average = allScores / moviesArray.length;
//const roundedScore = average.toFixed(2);

 //return moviesArray.length === 0 ? 0 : parseFloat(roundedScore);  
 //const numMovies = moviesArray.length;
 const numMovies = moviesArray.length;
  if (numMovies === 0) {
    return 0;
  }

  const ratedMovies = moviesArray.filter(movie => typeof movie.score === 'number');

  const numRatedMovies = ratedMovies.length;

  if (numRatedMovies === null) {
    return null;
  }

  const sumScores = ratedMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);

  const averageScore = Number((sumScores / numMovies).toFixed(2));
  return averageScore;
 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
