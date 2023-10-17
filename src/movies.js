// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray){
const allDirectors = moviesArray.map(movie => movie.director)
return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }

const spielbergDrama = moviesArray.filter(movie => movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama'))
return spielbergDrama.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0){
        return 0
    }
    const sumScores = moviesArray.reduce((accumulator, movieScores) =>{
        if(typeof movieScores.score !== 'number'){
            return accumulator
        }
        return accumulator + movieScores.score},0)

        return Number((sumScores / moviesArray.length).toFixed(2))
    }



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const drama = moviesArray.filter(dramaMovie => dramaMovie.genre.includes('Drama'))
    return scoresAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
let releaseArray = [...moviesArray]

    const releaseDate = releaseArray.sort((a , b) =>{
        if(a.year > b.year){
            return 1
        }
        else if(a.year < b.year){
            return -1
        }
        else if(a.year === b.year){
           return a.title.localeCompare(b.title)
        }

    })
    return releaseDate
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let alphaArray = [...moviesArray]
if (alphaArray <= 20){
    alphaArray.sort((a,b)=> a.title.localeCompare(b.title))
}
else{
    alphaArray.sort((a,b)=> a.title.localeCompare(b.title))
    alphaArray = alphaArray.slice(0,20)
}
return alphaArray.map(movie => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
