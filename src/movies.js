
console.log(movies);
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   return moviesArray.map(movie => movie.director); 
}
console.log(getAllDirectors);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct? - .filter()
function howManyMovies(moviesArray) {
    let stevenMovies = moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return stevenMovies.length;
}
console.log(howManyMovies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals - .reduce()

function scoresAverage(moviesArray) {
  if(moviesArray.length === 0) {
    return 0
  };

  let sum = moviesArray.reduce((acc, val) => {
    if(val.score) {
        return acc + val.score;
    } else return acc 
}, 0);

    let avgScores = sum / moviesArray.length;
    return Number(avgScores.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'));
    if(dramaMovies.length === 0) {
        return 0
    }
    let sumDrama = dramaMovies.reduce((acc, val) => {
            if(val.score) {
                return acc + val.score;
            } else return acc 
        }, 0);

    let avgDramaScores = sumDrama / dramaMovies.length;
    return Number(avgDramaScores.toFixed(2));
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}
/*const moviesCopy = [...movies];
// console.log(moviesCopy);
moviesCopy.sort(function (a, b) {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() === b.toLowerCase()) return 0;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  });
moviesArray.sort(moviesCopy.year)
*/


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
