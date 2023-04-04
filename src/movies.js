// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director).filter((movie) => movie.director);

    return directors;
}

//Action
function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter(stevenGenre => stevenGenre.director === 'Steven Spielberg' && stevenGenre.genre.includes('Drama'));

    return stevenMovies.length;

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
      return Math.round(avgScore100)/100; 
  }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    /*if(moviesArray.length === 0){return 0}

    let dramaArr = moviesArray.filter(src => src.genre.includes('Drama') && src.score )

    let avgDrama = dramaArr.reduce((cv, add)=> cv + add.score/dramaArr.length, 0)

    return Math.round(avgDrama100)/100;*/
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   /* const srotedMovies = moviesArray.slice();

    srotedMovies.sort(function (a, b) {
        if (a.year === b.year) {

            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    })
    return srotedMovies;*/
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.map((el)=> el.title).sort(function (a, b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1; 
        if (a.toLowerCase() > b.toLowerCase()) return 1; 
        if (a.toLowerCase() === 0) return 0;
      })
 
    return sortedMovies.slice(0,20);
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
