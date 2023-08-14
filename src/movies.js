// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    
    const allDirectors = movies.map((movie) => {
     return movie.director
    });

    return allDirectors;
 }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let count = 0;
    if (movies.length === 0) {
        return 0
    } 
    const moviesSpielberg = movies.filter((movie) => {
        movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    });

   return moviesSpielberg.length;

}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
        return 0; 
      }
    const totalScore = movies.reduce((sum, movie) => sum + movie.score, 0);
    const averageScore = totalScore / movies.length;
    return parseFloat(averageScore.toFixed(2)); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    if (dramaMovies.length === 0) {
        return 0; 
      }
    const dramaMovies = movies.filter(movie => {
        return movie.genre.includes('Drama');
    });
    const dramaScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
    const avgDramaScore = dramaScore / dramaMovies.length;
    return parseFloat(avgDramaScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    // const newOrderedArray = movies.sort(movie => {
    //     return movie.year;
    // });

    const orderedMovies = movies.slice();

    orderedMovies.sort((movie) => {
      if (movie.year !== movie.year) {
        return movie.year - movie.year; 
      } else {
        return movie.title.localeCompare(movie.title); 
      }
    });
  
    return orderedMovies; 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const orderedByTitle = movies.slice();
    orderedByTitle.sort((movie) => {
        return movie.title;
    });
    return orderedByTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
