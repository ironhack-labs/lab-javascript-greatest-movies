// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArr = []
    const directorMap = moviesArray.map((movie) => {
        directorsArr.push(movie.director)
    })
    return directorsArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let count = 0;
    spielbergDramas = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })
    count = spielbergDramas.length
    return count
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalScore = moviesArray.reduce((sum, movie) => {
        if (movie.score){
            return  sum + movie.score
        }
        else {
            return sum + 0
        }
    }, 0)
    let  result = (totalScore + 0)/moviesArray.length

    if (moviesArray.length > 0){ 
    return (Math.round(result*100)/100);
    }
    else {
        return 0
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama')
    })


    const totalScore = dramaMovies.reduce((sum, movie) => {
        return sum + movie.score
    }, 0)

    let result = totalScore/dramaMovies.length
    if (dramaMovies.length >0){
    return Math.round(result*100)/100
    }
    else {
        return 0
    }
        
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   // let newArr = newArr.push(moviesArray)
   let moviesArrayCopy = []
   moviesArrayCopy = moviesArray.map((x) => x);
    const sortedArray = moviesArrayCopy.sort((a,b)=> {
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        else {
            return a.year - b.year
        }
        
    }) 
    return sortedArray
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesArrayCopy = []
    for (let i = 0; i < moviesArray.length; i++){
        moviesArrayCopy.push(moviesArray[i].title)
    }
    moviesArrayCopy.sort()

    if (moviesArrayCopy.length > 20){
        moviesArrayCopy = moviesArrayCopy.slice(0, 20)
    }
        return moviesArrayCopy
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray){}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
