// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsOfMovie = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return directorsOfMovie
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {


    const StevenSpilbergMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes('Drama') && eachMovie.director.includes('Steven Spielberg')



    })


    return StevenSpilbergMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const sumScores = moviesArray.reduce((acc, eachMovie) => {

        if (!eachMovie.score) {

            //console.log(eachMovie.score)
            return acc + 0
        } else {
            //console.log(eachMovie.score)
            return acc + eachMovie.score
        }

    }, 0)

    let average = sumScores / moviesArray.length

    //console.log(average.toFixed(2))
    return Number(average.toFixed(2))
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const IsADrama = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes('Drama')
    })
    if (IsADrama.length === 0) {
        return 0
    }

    const sumScoresDrama = IsADrama.reduce((acc, eachDrama) => {
        return acc + eachDrama.score
        /*if (!IsADrama.score) {
             //console.log(eachMovie.score)
             return acc + 0
         } else {
             //console.log(eachMovie.score)
             
         }*/

    }, 0)
    let average = sumScoresDrama / IsADrama.length
    return Number(average.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    const yearsCopy = JSON.parse(JSON.stringify(moviesArray))


    const orderYears = yearsCopy.sort((a, b) => { return a.year - b.year })

    return orderYears

}
console.log('holi')
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const copyMovies = JSON.parse(JSON.stringify(moviesArray))



    const orderMovies = copyMovies.sort((a, b) => a.title.localeCompare(b.title))



    const moviesByName = copyMovies.map(eachMovie => { return eachMovie.title });





    return moviesByName
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }