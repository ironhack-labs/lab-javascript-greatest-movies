// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let directorsNotRepeated = [];

    const directors = moviesArray.map((moviesArray) => moviesArray.director);
    
    directors.forEach((element) => {

        if(!directorsNotRepeated.includes(element))
        {
            directorsNotRepeated.push(element)
        }
    });

    return directorsNotRepeated;
    
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaSteven = moviesArray.filter((movie) => {
        
        return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama')

    })

    return dramaSteven.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length == 0) return 0

    let averageScores = 0

    const totalScores = moviesArray.reduce(function(sum, number) {
        return sum + number.score
    }, 0)

    averageScores = totalScores / moviesArray.length

    let newAverage = Number(averageScores.toFixed(2))

    return newAverage

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {


    const dramaArray = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama')
    })

    if(dramaArray.length == 0) return 0

    const dramaScores = dramaArray.reduce(function(sum, number) {
        return sum + number.score
    }, 0)

    let dramaAverage = dramaScores / dramaArray.length

    let newAverage = Number(dramaAverage.toFixed(2))

    return newAverage
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}





// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}





// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}





// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    //newset let newYearArray = […new Set(yearArray)]


}


