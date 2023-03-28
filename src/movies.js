// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
   let AllDirectors = moviesArray.map(movie => {
    return movie.director;

   })
return AllDirectors

    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let stevenS = moviesArray.filter(movie => movie.director === 'Steven Spielberg')
    let drama=stevenS.filter(movie => movie.genre.includes('Drama'))
return drama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if(moviesArray <= 0){
        return 0
    }else{
        let scoreSum = moviesArray.reduce((sum, movie) => {
            if (!movie.score) movie.score = 0;
            return sum + movie.score
        }, 0)
        let scoreAverage = scoreSum / moviesArray.length
        // console.log(scoreAverage.toFixed(2))
        return Number(scoreAverage.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMoviesScore = moviesArray.
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
