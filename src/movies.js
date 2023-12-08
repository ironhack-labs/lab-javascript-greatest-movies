// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
   const newMovieArr = moviesArray.map(function(element){
        return element.director
    })

//    const filteredArr = newMovieArr.filter(function(director, index, array) {
//     return array.indexOf(director) === index;
// })
// i checked with AI but dont completely understand the parameters and how is automatically plugged what it needs

    return newMovieArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(function (element){
        return element.director === "Steven Spielberg" && element.genre.includes('Drama')
    })

    return stevenMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(moviesArray.length === 0){
        return 0
    }

    const averageScore = moviesArray.reduce(function(sum, currentValue){
        if(currentValue.score){
            return sum + currentValue.score
        }
        else {
            return sum + 0
        }
        
    }, 0)

    return Math.round((averageScore / moviesArray.length)*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const filteredDrama = moviesArray.filter(function (element){
        return element.genre.includes('Drama')
    })
    
    const averageDramaScore = filteredDrama.reduce(function (sum, currentValue){
            return sum + currentValue.score
    }, 0)

    if(filteredDrama.length === 0){
        return 0
    }
    
        return Math.round((averageDramaScore / filteredDrama.length)*100)/100
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let copyArr = [...moviesArray]

    copyArr.sort(function(a,b){
        if(a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })

    return copyArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let copyArr = [...moviesArray]

    copyArr.sort((a,b) => a.title.localeCompare(b.title))

    copyArr = copyArr.slice(0,20)

    let organizedMovies = copyArr.map(element => element.title)

    return organizedMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
