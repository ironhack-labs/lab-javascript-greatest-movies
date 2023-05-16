// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return directorsArray
}

const directorsArray = movies.map ((element) => {
    return element.director;
});

getAllDirectors(movies) 



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;

const moviesSpielberg = moviesArray.filter ((element) => {
  if (element.director === 'Steven Spielberg') {
    count ++;
    return true;
    }
});
    
}

howManyMovies(movies)



    



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const scores = moviesArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.score;
  },0);

  return scores;
}

const averageResult = scoresAverage(movies) / movies.length;
console.log(averageResult.toFixed(2))




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaFilter = moviesArray.filter ((element) => {
    
    if (element.genre.includes('Drama')) {
      return true;
    }
   });
  
    const dramaScores = dramaFilter.map(function(value) {
      return value.score;
                                        
   });
  
    const dramaScoresAverage = dramaScores.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
   }, 0);
  
    const result = dramaScoresAverage / dramaScores.length;
    
  return result;
 }


 dramaMoviesScore (movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
