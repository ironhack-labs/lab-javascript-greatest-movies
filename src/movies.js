// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director); 
        return allDirectors;
    };


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    const dramaMoviesSpielberg = moviesArray.filter(movies => 
        movies.director === "Steven Spielberg" && movie.genre.includes("Drama"));
        return dramaMoviesSpielberg.length;
        
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const completeScore = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
    const averageScore = completeScore / moviesArray.length;
    const averageScoreTwoDecimals = averageScore.toFixed(2);
    return averageScoreTwoDecimals;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const onlyDramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
   
    if (movies.genre !== "Drama") {
        return 0;
    }

    const completeDramaScore = onlyDramaMovies.reduce((sum, movie) => sum + movie.score, 0);
    const averageDrama = completeDramaScore / onlyDramaMovies.length;
    return parseFloat(averageDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedByYear = moviesArray.slice().sort((a, b) => {
        if (a.year !== b.year) {
          return a.year - b.year;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedByAlphabet = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));
    if (sortedByAlphabet.length > 20) {
        return sortedByAlphabet.slice(0, 20);
    }
    return sortedByAlphabet;
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
