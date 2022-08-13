// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(function(movie) {
        return movie.director;
    })
    return allDirectors;  
}
getAllDirectors(moviesArray);

function removeReapeatedDirectorNames (allDirectors, director) {
    if (allDirectors.indexOf(director) === -1) {
        let filteredDirectors = allDirectors.push(director);
        return filteredDirectors;
    }
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramas = moviesArray.filter(function (movie) {
    return movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg')
      })
    let moviesCount = spielbergDramas.length;
    return moviesCount;
  } 
  howManyMovies(moviesArray); 



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    const allScores = moviesArray.filter(function (movie) {
      return movie.score.length >= 4;
    })
    
  } 
  scoresAverage(moviesArray);







// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
