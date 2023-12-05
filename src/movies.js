// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
     
        return moviesArray.map(function(element){
            return element.director
        }) 
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter(function(element){
        return element.director===`Steven Spielberg` && element.genre.includes(`Drama`)})

        let spielbergCount= spielbergDramaMovies.length
        return spielbergCount
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length===0){
        return 0
    }
    const validMovies = moviesArray.filter(function(element){
        return typeof element.score=== `number`
    })
    // also filter(element => typeof element.score ===`number`)

    const totalScore = validMovies.reduce(function(sum, currentScore){
        return sum + currentScore.score},0)
    const averageScore = totalScore/moviesArray.length
    const roundedAverageScore = Math.round(averageScore*100)/100
    return roundedAverageScore
       
    }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie){
        return movie.genre.includes(`Drama`) && typeof movie.score === `number`
    })

    if(dramaMovies.length===0){
        return 0
    }
    const dramaSum = dramaMovies.reduce(function(sum,movie){
        return sum + movie.score
    },0)

    const averageDramaScore = dramaSum/dramaMovies.length
    return averageDramaScore

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
