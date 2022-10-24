// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(function(allDirectors){
        const director = allDirectors.director
        // console.log(director)
        
    })
    return directors
   
}




//Iteration 2


function howManyMovies(moviesArray) {
    
    const dramaMovies = moviesArray.filter(function (eachMovie) {
        eachMovie.director == 'Steven Spilberg' && eachMovie.genre.includes('Drama')
    })
   
    return dramaMovies.length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  
    const sumRating = moviesArray.reduce(function (acc, eachScore) {
       return acc + eachScore.score  
    }, 0)

    console.log(sumRating)
    const rating = sumRating / moviesArray.length
  //  console.log(tipeOf(rating))
   console.log(rating)
   const ratingFixed = rating.toFixed(2)

    console.log(ratingFixed)
    console.log(typeOf(ratingFixed))

    return ratingFixed

  
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const averageDrama = moviesArray.filter(function (eachMovie) {
        return eachMovie.genre.includes('Drama')
    })
    const average = averageDrama.reduce(function (acc, eachMovie){
            return acc+=eachMovie.score
        }, 0)
   
        
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
