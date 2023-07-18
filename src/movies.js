// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {

    const theDirectors = moviesArray.map(function (movies)
    
    {  
            return movies.director
    })
    
    return theDirectors
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

    const filmsSteven = moviesArray.filter(function (eachMovies)
    {
        return eachMovies.director.includes('Steven Spielberg') && eachMovies.genre.includes('Drama')
    })
    
    return filmsSteven.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }
    const scoresFilms = moviesArray.reduce(function (acc, eachMovies){
        if (!eachMovies.score) {
            eachMovies.score = 0
        }
        
        return acc + eachMovies.score 
    }, 0)
    
    const average = scoresFilms / moviesArray.length
    return Number((average).toFixed(2))

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama = moviesArray.filter(function (eachMovies){

        return eachMovies.genre.includes('Drama')
    })

    if (moviesArray.length === 0) {
        return 0
    }
    const scoreAvg = drama.reduce(function (acc, eachDramaMovies) {


        return acc + eachDramaMovies.score
    }, 0)

    if (!scoreAvg) {
        return 0
    }

    const result = scoreAvg / drama.length
    return Number((result).toFixed(2))

}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    moviesArrayCopy.sort(function (a,b) {
    
        if(a.year!== b.year)
        {
            return a.year-b.year
        } 
    })


    return moviesArrayCopy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {


 }



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
