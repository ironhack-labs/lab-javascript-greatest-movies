// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => {
        if (!moviesArray.includes(movie.director)) {
            return movie.director
        } else {
            return;
        }
    })
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {    
    const dramaMovie = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) 
    return dramaMovie.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    } else {
        const scoreSum = moviesArray.reduce((acc, movie) => {
            if (movie.score) {
                return acc + movie.score
            } else {
                return acc
            }
        }, 0);
        const average = scoreSum / moviesArray.length;
        return Number(average.toFixed(2));
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));

    
    const dramaScoreSum = dramaMovies.reduce((acc, movie) => acc += movie.score, 0);
    
    const average = dramaScoreSum / dramaMovies.length;
    return average ? Number(average.toFixed(2)) : 0;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
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
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
