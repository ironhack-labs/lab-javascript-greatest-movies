// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    let directors = moviesArray.map(arr => arr.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray[0]){
        return 0
    }
        let dramaNum = moviesArray.filter(dra => dra.director === 'Steven Spielberg' && dra.genre.includes('Drama'))
        return dramaNum.length
}

  
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray[0]){
       return 0
    }
        let scoreVal = moviesArray.map(scr => scr.score)
        const tot = scoreVal.reduce((tot1, tot2) => {
            if (tot2) {
            return tot1 + tot2
            }
                else {
                    return tot1
                }
        
        }, 0)
    let fintot = (tot / scoreVal.length)
    return Math.round(fintot * 100) / 100 
}
  
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaAvg = moviesArray.filter(dram => dram.genre.includes('Drama'))
    let drmscrAvg = dramaAvg.reduce((drm1, drm2) => {
        return drm1 + drm2.score
    }, 0)
            if (drmscrAvg){
            return Math.round(drmscrAvg / dramaAvg.length * 100) / 100
            }  
                else {
                return 0
                }   
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {  
    const byYear = [...moviesArray]
    byYear.sort((yr1, yr2) => {
      if (yr1.year > yr2.year) {
        return 1
        } 
            else if (yr1.year < yr2.year) {
            return -1
            } 
                else {
                return yr1.title.localeCompare(yr2.title)
                }
    });
    return byYear;
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let movOrder = moviesArray
    let maptitle = movOrder.map((movie) => movie.title);
        maptitle.sort((a, b) => 
        a.localeCompare(b))
    return maptitle.slice(0, 20)
    
}  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let trnhrs
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
