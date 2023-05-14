// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorArr = moviesArray.map((name) => name.director)
    return directorArr
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter ((movie) => 
    {return movie.director === 'Steven Spielberg' &&  movie.genre.includes ('Drama')});
    return spielbergDramaMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0){
        return 0
    }
    let avgResult
    const scoreSum = moviesArray.reduce((arr, currentScore) => {
       if (currentScore.score){//si el score es true
       return arr + currentScore.score}//hace la suma
       else {                           //si no es true
            return arr                  // devuelve el arr que es 0
        }
    }, 0);
    avgResult = scoreSum/moviesArray.length //dividimos la suma entre el largo del array
    const roundedNum = Math.round(avgResult * 100) / 100; //sirve para redondear a dos decimales
    return roundedNum

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie) => {
        return (movie.genre.includes ('Drama'))
    });
    let avgDramaResult
    const scoreDrama = dramaMovies.reduce((arr, currentScore) => {
        return arr + currentScore.score
    }, 0);
    avgDramaResult = scoreDrama/dramaMovies.length
    const roundedNum = Math.round(avgDramaResult * 100) / 100;
    if (roundedNum){
        return roundedNum}
      else {
        return 0;
      }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
