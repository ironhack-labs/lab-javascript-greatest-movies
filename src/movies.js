
//console.log(movies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
// function getAllDirectors(moviesArray) {
//     const directorsArray = moviesArray.map(function(movie) {
//         return movie.director;
//       });
//       return directorsArray;
//     }


function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
 
  }

  const dArray = getAllDirectors(movies);
  console.log(dArray)
 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) { // check if the array is not empty
        return 0;
      }
      
const spielbergDramas = moviesArray.filter(movie => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });

    return spielbergDramas.length; //returns quantity of movies with director Steven Spielberg and genre Drama
}

const spielbergArray = howManyMovies(movies);
console.log(spielbergArray)



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0; // Return 0 for an empty array
      }
      
 const totalScores = moviesArray.reduce((accumulator, movie) => {
  //  const movieAvgScore = movies.score
    return accumulator + (movie.score || 0);
}, 0);


const avgScore = totalScores / moviesArray.length 
return parseFloat(avgScore.toFixed(2)); // Round to 2 decimal places and convert back to number
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
