// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArr = moviesArray.map(direct => direct.director)
    return newArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const newArr = moviesArray.filter( condition => condition.director === 'Steven Spielberg' && condition.genre.includes('Drama'))
    return newArr.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let sum = 0;
    if(moviesArray.length === 0){return 0}
    else{
      for(let i = 0; i < moviesArray.length; i++){
        if(moviesArray[i].score === undefined){ moviesArray[i].score = 0;} 
        else{
          sum += moviesArray[i].score
        }
      }
      let avgScore = sum / moviesArray.length
      return Math.round(avgScore*100)/100; 
  }
  }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){return 0}
  
    let dramaArr = moviesArray.filter(src => src.genre.includes('Drama') && src.score )
    
    let avgDrama = dramaArr.reduce((cv, add)=> cv + add.score/dramaArr.length, 0)
    
    return Math.round(avgDrama*100)/100;
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
