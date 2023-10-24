// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

const allDirector = moviesArray.map(function(moovie){
    return moovie.director
}); 
// console.log(allDirector);
return allDirector

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
// const SpielbergMoovie = allDirector.filter(function(SpielbergDrama)){
// if (director === "Steven Spielberg"){
//     return true
// } else {
//     return false {
// }

// }
const spielbergMovies = moviesArray.filter((movie) => {
    if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
        return movie
    }
})
console.log(spielbergMovies)
    return spielbergMovies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals {{use LENGTH and toFixed}}
function scoresAverage(moviesArray) {
    // let total = 0; 
    // score.forEach(function()){}
    // total += amount /     
    // });
    const total = moviesArray.reduce (function(accumulator, currentValue){
        return accumulator + currentValue.score; 
    }, 0); 
    return total / movie.length
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaAverage = moviesArray.reduce(function(accumulator, currentValue){
        return accumulator + currentValue.score.includes("Drama")
    }, 0); 
    return dramaAverage / score.length
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearMovie = moviesArray.filter((year)=> {
        if(movie.year > 1800 ){
        return year
        }
    })
    console.log(yearMovie)
    return yearMovie.length
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray){} 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
