// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const directorsArray = moviesArray.map((eachMovie) => {
        return eachMovie.director

    })

    return directorsArray

}





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const arrayStevenDrama = moviesArray.filter((eachMovie) => {

        if ((eachMovie.director.includes('Steven Spielberg')) && (eachMovie.genre.includes(('Drama')))) {

            return eachMovie

        }
    })
    return arrayStevenDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }



    //create an array for scores with .map

    const arrayScores = moviesArray.map((eachMovie) => {

        return eachMovie.score

    })


    //reduce arrayScores for obtainer sumScoresValue

    const sumScores = arrayScores.reduce((acc, eachScore) => {

        return acc + eachScore

    }, 0)



    const average = sumScores / arrayScores.length

    const fixedAverage = average.toFixed(2)

    return parseFloat(fixedAverage)



}




// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesScore(moviesArray) {






}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {




}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {




}











// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }


