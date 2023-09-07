// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) { 
    return moviesArray.map((item) => item.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let numberOfTimes = 0;
    moviesArray.filter((item) => {
        if (item.director === "Steven Spielberg" && item.genre.includes("Drama")) {
            numberOfTimes++
        }
    }
    );
    return numberOfTimes;
};


// Iteration 3: All scores average - Get the average of all scores with 
function scoresAverage(moviesArray) {
    if (moviesArray.length < 1) {
        return 0;
    } else {
        let sum = moviesArray.reduce((total, movies) => { 
            if(typeof movies.score === "number") {
                return total + movies.score
            } else {
                return total
            }
        }, 0);
        let average = sum / moviesArray.length;
        return Number(average.toFixed(2));
    }
};


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let onlyDramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(onlyDramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {const sortedMovies = [...movies]; // Make a shallow copy of the array to avoid modifying the original
      
        sortedMovies.sort((a, b) => {
          if (a.year === b.year) {
            return a.title.localeCompare(b.title); // Sort alphabetically by title if the years are the same
          }
          return a.year - b.year; // Sort by release year
        });
      
        return sortedMovies;
      }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copiedMovies = [...movies];
    copiedMovies.sort((a, b) => a.title.localeCompare(b.title));
    const first20Titles = copiedMovies.slice(0, 20).map(movie => movie.title);
  
    return first20Titles;
  }
   const first20Titles = orderAlphabetically(movies);
  console.log(first20Titles);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
