// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(currentMovie => currentMovie.director);
}

/* ANOTHER APPROACH 
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(currentMovie) {
        return currentMovie.director;
    });
}
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaFilter = moviesArray.filter(function(currentMovie) {
        return currentMovie.director === 'Steven Spielberg' && currentMovie.genre.includes('Drama');
    });

    return spielbergDramaFilter.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0;
    }

    const totalScoreSum = moviesArray.reduce(function(sum, currentMovie) {
        return sum + (currentMovie.score || 0);
    }, 0);

    const totalAverageScore = totalScoreSum / moviesArray.length;

    return parseFloat(totalAverageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie) {
        return movie.genre.includes('Drama');
      });
    
      if (dramaMovies.length === 0) {
        return 0;
      }
    
      const totalScore = dramaMovies.reduce(function(sum, movie) {
        return sum + movie.score;
      }, 0);
    
      const averageScore = totalScore / dramaMovies.length;
    
      return parseFloat(averageScore.toFixed(2));
}

/* ANOTHER APPROACH 
function dramaMoviesScore(moviesArray) {
    const totalDramaMovies = moviesArray.filter(function(currentMovie) {
        return moviesArray.genre.includes('Drama');
    });

    return scoresAverage(totalDramaMovies);
}*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedMoviesArray = moviesArray.slice().sort(function(movie1, movie2) {
        if(movie1.year === movie2.year) {
            return movie1.title.localeCompare(movie2.title);
        } else {
            return movie1.year - movie2.year;
        }
    });

    return sortedMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedAlphabeticallyArray = moviesArray.slice().sort(function(movie1, movie2) {
        return movie1.title.localeCompare(movie2.title);
    });

    const movieTitles = sortedAlphabeticallyArray.map(function(currentMovie) {
        return currentMovie.title;
    });

    return movieTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
