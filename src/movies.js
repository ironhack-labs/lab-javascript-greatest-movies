// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArray) {
    const directorList = moviesArray.map((movie) => movie.director);
    return directorList;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    spielbergDramas = moviesArray.filter((movie) => movie.genre.indexOf("Drama") >= 0 && movie.director === "Steven Spielberg");
    return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScore = moviesArray.reduce((acc, val) => {
        if (val.score) {
            return acc + val.score;
        } else {
            return acc;
        }

      }, 0)
    
    if (moviesArray.length === 0) {
        return 0;
    }
    
    let averageScore = totalScore / moviesArray.length;
    return Math.round(averageScore * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    // create array with all dramas
    const dramasList = moviesArray.filter((movie) => movie.genre.indexOf("Drama") >= 0);

    // get total score of all dramas
    const dramasScoreTotal = dramasList.reduce((acc, val) => {
        return acc + val.score;
      }, 0)

    // return 0 if no dramas; return rounded score of all dramas otherwise
    if (dramasList.length === 0) {
        return 0;
    }
  
    return Math.round((dramasScoreTotal / dramasList.length) * 100) / 100;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrayCopy = [...moviesArray];
    moviesArrayCopy.sort(function(a,b) {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        }
    
      });
    
    return moviesArrayCopy;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    moviesArray.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        } else if (a.title < b.title) {
          return -1;
        }
      });
    
      const titleList = moviesArray.map((movie) => movie.title);
      
      return titleList.slice(0, 20);
    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
