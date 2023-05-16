// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map(movies => movies.director); 
    }
    const directors = getAllDirectors(movies);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const filmsSpielberg = moviesArray.filter(movies => movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));      
    
    return filmsSpielberg.length;
}
   

// Iteration 3: All scores average - Get the average of all scores with 2 decimals


function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
        const sum = moviesArray.reduce((totalMovies, movies) => {
            if (typeof movies.score === 'number') {
            return totalMovies + movies.score;
            } else {
                return totalMovies;
            }

    }, 0);

    const averageScore = sum / moviesArray.length;

    return parseFloat(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
            if (moviesArray.length === 0) {
                return 0;
            }
    const averageDrama = moviesArray.reduce((totalMovies, movies) => {
        if (movies.genre === 'Drama') {
            return totalMovies + movies.score;
        } 
    }, 0);
    const averageDramaScore = averageDrama / moviesArray.length;

    return parseFloat(averageDramaScore.toFixed(2));

}

/* OR maybe: 

function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const averageDrama = 0;
    moviesArray.forEach((dramaMovies) => {
      if (dramaMovies.genre === 'Drama') {
        averageDrama += movies.score;
        return averageDrama;
    };
    }
    const averageDramaScore = averageDrama / dramaMovies.length;
  
    return (parseFloat(averageDramaScore.toFixed(2)));
  }
  */


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let yearOder = [];

    moviesArray.sort()

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
