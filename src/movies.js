// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(element){
        return element.directorsNames
    })

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
 let counter = 0 
    moviesArray.filter(function(directorsNames){
        if(directorsNames ==="Steven Spielberg"){
            return counter++
        }
    })
    return counter
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray){
let totalScore = movies.reduce(function(accumulator,movies){
    return accumulator + movies.score
},0)
averageScore = totalScore /movies.length
return Math.round(averageScore * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = movies.filter(function(type){
        if(type.genre.includes('Drama')){
          return true;
        }else{ return false}
      })
      let averageScore = dramaMovies.reduce(function(accumulator, movies){
        return accumulator + movies.score
       }, 0)
       return Math.round(averageScore * 100) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const sortedByYear = movies.sort((a,b) =>{
        return a.year -b.year
    })
    return sortedByYear
} 
function orderAlphabetically(moviesArray) {  
    const sortedAlpha = movies.sort((a,b) =>{
    if(a.title < b.title) return -1;
    return 1 ;  
})
return sortedAlpha
}
//i didnt quite fully understand this one , i was watching a video:https://www.youtube.com/watch?v=nq0DC5M3Kc8&ab_channel=JamesQQuick
  /// and manages to adapt his solution to my problem , but i didnt feel like i learned something


  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
