// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(el => el.director)
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let moviesSteven = moviesArray.filter(el => el.director === 'Steven Spielberg')
    let stevenDrama = moviesSteven.filter((el) => el.genre.includes('Drama'))
    return stevenDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) return 0
    let filterScoreAverage = moviesArray.filter(el => typeof el.score === 'number')
    let sum = filterScoreAverage.reduce((total, el) => total + el.score, 0)
    let average = sum / moviesArray.length
    return +average.toFixed(2)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter(el => el.genre.includes('Drama'))
   return scoresAverage(dramaMovies)
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesCopy = [...moviesArray]
    return moviesCopy.sort((a, b) => a.year - b.year)
}
        
// function orderByYear(moviesArray) {
//     let moviesCopy = [...moviesArray]
//     return moviesCopy.sort((a, b) => {
//         if (a.year > b.year){
//             return 1
//         }
//         if (a.year < b.year){
//             return -1
//         }
//         if (a.year === b.year){
            
//                 if (a.title > b.title) {
//                     return 1
//                 }
//                 if (a.title < b.title){
//                     return -1
//                 }
            
//         }
//     })
    
// }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderTitle = [...moviesArray]
    const onlyTitle = orderTitle.map(el => el.title)
    onlyTitle.sort()
    const title20 = onlyTitle.slice(0, 20)
    return title20



}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
