// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(word => word.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSteven = moviesArray.filter((word) => {
        let steven = word.director === 'Steven Spielberg'
        let drama = word.genre.indexOf('Drama') >= 0
        return steven && drama
      }) 
      return dramaSteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if ( moviesArray.length === 0) return 0

    let score = moviesArray.reduce((accumulator, moviesArray) =>{
        if(moviesArray.score){
            return accumulator + moviesArray.score
        }else{
            return accumulator
        }
    },0)
    let result = score / moviesArray.length
    return Math.round(result * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
    let drama = moviesArray.filter((word) => {
         return word.genre.includes('Drama')
    })
    if(drama.length <= 0) return 0
    let dramaScore = scoresAverage(drama)
    return dramaScore
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    let year = [...moviesArray].sort((a, b) => {
        if (Number(a.year) - Number(b.year)){
            return Number(a.year) - Number(b.year)
        }else if (Number(a.year) === Number(b.year)){
            if (a.title < b.title){
                return -1
            }else{
                return 1
            }
        }
        
    } )

    return year
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let titles = moviesArray.map(word => word.title)
    titles.sort((a, b) => {
        if(a < b) { return -1; }
        if(a > b) { return 1; }
        return 0;
    })
    return titles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
