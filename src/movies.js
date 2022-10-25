// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let directors = moviesArray.map(function(movie){
      return movie.director})

      return directors;
      

}  
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    if (moviesArray.length == 0){
        return 0
    }
   
    const dramaMovies = moviesArray.filter (function(movie){

        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){
            return movie; 
        }
    
       

})
return dramaMovies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
if (moviesArray.length == 0){
    return 0
}

let totalScore = moviesArray.reduce(function(acc, val){
    if(val.score==undefined || val.score == ""){
        return acc
    }
    return acc + val.score;
    }, 0)
    

    let avgScore = totalScore / moviesArray.length;
    return Number(avgScore.toFixed(2));
}

/* function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(function(movie){
        if (movie.genre.includes(“Drama”)) {
    return movie;
     }
    })
    if (dramaMovies.length === 0) {
        return 0
    }
        const score = dramaMovies.reduce(function(acc, val){
            return acc + val.score
        }, 0)
    return +((score / dramaMovies.length).toFixed(2))
} */



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
   
const dramaMovies = moviesArray.filter(function(movie){

 if (movie.genre.includes("Drama")){
    return movie
 } 
})
if (dramaMovies.length === 0) {
    return 0
}
let scoreDramaMovies = dramaMovies.reduce(function(acc, val){
   
        return acc + val.score;
    

},0)


let avgScoreDrama = scoreDramaMovies / dramaMovies.length;
return Number(avgScoreDrama.toFixed(2))    
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

const cloneArray = [...moviesArray]
cloneArray.sort(function(a, b){
    return a.year - b.year;
}) 

return cloneArray;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}



