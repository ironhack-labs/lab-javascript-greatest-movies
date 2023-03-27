// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function(movie){
        return movie.director
    })
    return directorsArray
}

/* getAllDirectors() */

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const directedBySpielberg = moviesArray.filter(function(movie){
    if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama") === true) {
            return true
        }
    })
    return directedBySpielberg.length

}

//howManyMovies(movies)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    let average = moviesArray.reduce(function(acc, val){
        if(val.score === undefined) {
            return acc
        }
        return acc + val.score
    }, 0)
    average = average / moviesArray.length
    average = average.toFixed(2)
    return Number(average)
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaArray = moviesArray.filter(function(movie){
        return movie.genre.includes("Drama")
    })
    if(dramaArray.length === 0) {
        return 0
    }

    let average = dramaArray.reduce(function(acc, val){
        return acc + val.score
    }, 0)
    average = average / dramaArray.length
    average = average.toFixed(2)
    return Number(average)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newMoviesArray = moviesArray.slice()
    const sortedArray = newMoviesArray.sort(function(b, a) {
        if(a.year === b.year) {
            return a.title - b.title
        }
         return b.year - a.year
    })
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newMoviesArray = moviesArray.slice(0, 20)
    newMoviesArray = newMoviesArray.map(function(movie){
        return movie.title
    })
    newMoviesArray = newMoviesArray.sort()
    
    return newMoviesArray
    //put sort at beginning
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let newMoviesArray = moviesArray.slice()
    newMoviesArray.forEach(function(movie){
        let durationHoursArray = movie.duration.split("h")
        let hoursToMinutes = Number(durationHoursArray[0] * 60)
        //console.log(hoursToMinutes)

        let durationMinutesArray = movie.duration.split(" ")
        //console.log(durationMinutesArray)
        let durationMinutesArray2 = durationMinutesArray[1].split("min")
        //console.log(durationMinutesArray2)
        let durationMinutes = durationMinutesArray2[0]
        //console.log(durationMinutes)
        
       return movie.duration = Number(hoursToMinutes) + Number(durationMinutes) + "min"
        //console.log(movie.duration)

    })
    console.log(newMoviesArray)
    return newMoviesArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
