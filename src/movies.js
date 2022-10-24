// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((eachDirector) => {
        /*  const newResult = {
              ...eachDirector
          }
        const result = []
        resutl += eachDirector.director */


        return eachDirector.director
    }
    )
    return allDirectors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const moviesSpielberg = moviesArray.filter((eachMoviesArray) => {
        return eachMoviesArray.director === 'Steven Spielberg' && eachMoviesArray.includes('Drama')
    }
    )
    return moviesSpielberg.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const promMovies = moviesArray.reduce((acc, eachMoviesArray) => {
        /*    if (eachMoviesArray = undefined) {
                eachMoviesArray = 0
            }*/
        return acc + eachMoviesArray.score
    }, 0)
    const result = promMovies / moviesArray.length

    console.log(result.toFixed(2))
    return result
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((eachMoviesArray) => {
        return eachMoviesArray.genre.include('Drama')
    })
    const promDramaMovies = dramaMovies.map((eachMoviesDramaArr) => {
        const sumDrama = eachMoviesDramaArr.score // aquí me quedo por que ya no soy nada productivo, nada me sale, y por mucho que doy vueltas no consigo sacarlo.
    })
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
