// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    return moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
    
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0){
        return 0;
    }
    
    let scoreFiltered = moviesArray.filter(movie => movie.score != undefined)
    let scoreAvg = scoreFiltered.map(movie => movie.score).reduce((acc, el) => acc + el, 0) / moviesArray.length;
    
    return Number(scoreAvg.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let filtered = moviesArray.filter(movie => movie.genre.includes('Drama')).map(x => x.score);
    if (filtered.length === 0){
        return 0;
    }
    let avg = filtered.reduce((acc, el) => acc + el, 0) / filtered.length
    
    return Number(avg.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let copiedArr = structuredClone(moviesArray);
    copiedArr = copiedArr.sort((a, b) => a.year - b.year);
    return copiedArr.sort((a, b) => {
        if (a.year === b.year && a.title > b.title){
          return 1
        } else if (a.year === b.year && a.title < b.title) {
          return -1
        }
        else {
          return 0
        }
      })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    let copiedArr = structuredClone(moviesArray);
    return copiedArr.map(movie => movie.title).sort().slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let copiedArr = structuredClone(moviesArray);
    for (let obj of copiedArr) {
      let durationArr = obj.duration.split('');  
      let hour = +durationArr[0] * 60;
      let min = '';
      for (let i = durationArr.length - 4; i >=0 ; i--) {
        if (durationArr[i] === ' '){
          break;
          } else {
          min += durationArr[i];
          }
      }
    min = min.split('').reverse().join('');
    min = +min;
    obj.duration = hour + min;
    }

    return copiedArr;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
