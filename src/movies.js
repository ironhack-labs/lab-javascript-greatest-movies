// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
        return moviesArray.map((theDirector) => {
          return theDirector.director;
        });
      }  
      console.log(getAllDirectors(movies))  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielberg = moviesArray.filter((director) => director.director == "Steven Spielberg" && director.genre.includes("Drama")); 
    return stevenSpielberg.length;
}
console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
  function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
      return 0;
    }

    const avgScore = moviesArray.reduce(function(acc, scoreValue)=>{
      return acc + scoreValue.score;
    }, 0);

    const averageRate = (avgScore / moviesArray.length).toFixed(2);
    return Number(averageRate);
  }
  console.log(scoresAverage(movies));

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
