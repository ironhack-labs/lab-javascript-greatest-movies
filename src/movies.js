// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const allDirectorNames = movies.map(function(dir) {
        return dir.director;
    })
    return allDirectorNames;
}

getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const dramaMovies = movies.filter((drama) => {
    
        if (
          drama.director === 'Steven Spielberg' && drama.genre.includes('Drama')
        ) {
          return true;
        }
      });
    
      return dramaMovies.length;
}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    const totalAvarage = movies.reduce(function (acc, val) {
        
        if (val.score === undefined) {
            return acc;
        }

        return acc + val.score;
    }, 0);

    let total = totalAvarage / movies.length;

    if (totalAvarage === 0) {
        return 0;
    };

    return Math.round(total*100)/100;
}

scoresAverage(movies);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    const dramaMovies = movies.filter(function(drama) {
        return drama.genre.includes('Drama')
      });

    const averScore = dramaMovies.reduce(function(acc, points) {
      return acc + points.score;
    }, 0);

    if (dramaMovies === 0) {
        return 0;
    };

    if (averScore === 0) {
        return 0;
    }

    let total = averScore / dramaMovies.length;
    
    return Math.round(total*100)/100;
}

dramaMoviesScore(movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movieYear = movies.year.sort();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
