
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const listDirectors = moviesArray.map(function(movie) {
        return movie.director
      })
    return listDirectors     
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const sumMoviesSteven = moviesArray.filter(function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama') 
      })
    let numberOfMoviesSteven = sumMoviesSteven.length
    return numberOfMoviesSteven
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const averageScores = moviesArray.reduce(function(acc, val) {
        if (val.score === undefined) { 
            return acc;
        }
        return (acc + val.score)
      }, 0)
      
     return Number((averageScores / moviesArray.length).toFixed(2))     
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const listDramaMovies = moviesArray.filter(function(movie) {
        return moviesArray.genre.includes('Drama') 
    })
    
    const scoreDramaMovies = listDramaMovies.reduce(function(acc, val) {
      return acc + val.score
    },0)

    console.log(scoreDramaMovies);
    
    resultDramaScore = scoreDramaMovies / listDramaMovies.length
    return resultDramaScore
}

dramaMoviesScore(moviesArray);



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.sort(moviesArray.year)
}
orderByYear(moviesArray);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
