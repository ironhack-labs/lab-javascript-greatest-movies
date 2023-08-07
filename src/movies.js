// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(function (element){
        return element.director
    })

    if (allDirectors.length === moviesArray.length){
    return allDirectors}
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }


   const spielbergMovies = moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return spielbergMovies.length

/*const spielbergMovies = movies.filter(function (element){
        if( element.director === 'Steven Spielberg'){
            return true
        }
        else{
            return false
        }
    })
        const dramaMovies = spielbergMovies.filter(function (spielbergDramaMovie){
            if (spielbergDramaMovie.genre.includes('Drama')){
                return true
            }
            else{
                return false
            }
        })

    
    return dramaMovies.length*/
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }

    const scores = moviesArray.map(function(element){
        return element.score
    })

    const total = scores.reduce(function (accumulator, currentValue){
        return accumulator + currentValue
    },0)

    const average = total / moviesArray.length
    return Math.round(average * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) =>
    movie.genre.includes('Drama')
  );

  const points = dramaMoviesScore.reduce(function (accumulator, currentValue){
        return accumulator + currentValue
  }, 0)

    const average = points / dramaMoviesScore.length
    return average

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
