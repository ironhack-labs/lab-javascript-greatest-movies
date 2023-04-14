// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let directorsArray = []
    directorsArray = moviesArray.map((element)=>{
        return element.director;
    }) 
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   let spielbergDrama = moviesArray.filter(hisMovies =>{
    
    if (hisMovies.director  === 'Steven Spielberg' && hisMovies.genre.includes('Drama'))
    return hisMovies;

   })
   return spielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    let totalArray = moviesArray.reduce((acc, films) => {
      if (films.score){
        return films.score + acc
      } else {
        return acc
      }
    }, 0)
    
return Math.round((totalArray * 100)/moviesArray.length)/100    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaM = [];
     dramaM = moviesArray.filter(allDrama =>{
        if (allDrama.genre.includes('Drama'))
        return allDrama
        
    })
    return scoresAverage(dramaM)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
 let 

}

/* 

Tentei todas as combinaçoes possivies de .sort/.filter, 
certeza que a resposta é mais simples do que eu acho

*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
