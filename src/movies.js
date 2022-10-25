// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

    const directors = movies
      .map((movie) => {
        return movie.director;
      })
      .filter((value, index, originalArray) => {
        return originalArray.indexOf(value) === index;
      });
    return directors;
  }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielberg = movies.filter(function(pelis) {
  
    let spielbergMovies = pelis.director === "Steven Spielberg"
    const spielbergDrama = pelis.genre.indexOf('Drama') >= 0;
      return  spielbergDrama && spielbergMovies ;
    });
  
  
    return spielberg.length
  }
  

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray){
    if (moviesArray.length === 0) {
        return 0
    } else {
        const numbers = moviesArray.filter(currentValue => {
            return typeof currentValue.score == "number";
        })
        let totalSum = numbers.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.score
        }, 0)

        return parseFloat((totalSum / moviesArray.length).toFixed(2))
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
        const dramaMovies = moviesArray.filter((movie) => {
          return movie.genre.includes('Drama');
        });
        averageScore = scoresAverage(dramaMovies);
        return averageScore;
      
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
