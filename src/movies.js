// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie)=>movie.director)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let filmes = moviesArray.filter((movie)=>movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
    return filmes.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
/*function scoresAverage(moviesArray) {
    let total = moviesArray.reduce((movie)=>movie.score);
    let average = total / movie.length;
    return average;
}*/

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
  let mediumScore = moviesArray.reduce((acc, film) => {
    if (film.score) {
      return acc + film.score;
    } else {
      return acc;
    }
  }, 0); //always set the initial value to start the acc
  return Math.round((mediumScore * 100) / moviesArray.length) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaScore = moviesArray.filter(movie => movie.genre.includes("Drama"))
    return scoresAverage(dramaScore);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrayCopy = [...moviesArray];
    let ordem = arrayCopy.sort((a, b) => {
        if (a.year>b.year) {
            return 1;
    
          }  if (a.year<b.year){
            return -1;
    
           }  if (a.year===b.year){
         return a.title.localeCompare(b.title);
        }
    });

    return ordem;
      }



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const array2 = moviesArray.map(function(movie){
        return movie.title
    })
    const lastOrder = array2.sort().splice(0,20);
    return lastOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

