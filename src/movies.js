// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => movie.director);
    return allDirectors; 
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const SpielbergDramaMovies = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return SpielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
   if (!moviesArray.length) {
        return 0;
    }
    const scoresArray = moviesArray.map((movie) => movie.score);
    const filteredScoresArray = scoresArray.filter(score => typeof score === "number");
    let scoresAverage = filteredScoresArray.reduce((a, b) => a + b, 0) / scoresArray.length;
    return +scoresAverage.toFixed(2);
    

   /*
   HE INTENTADO MEJORAR EL CÓDIGO, PERO NO ME PASA LOS TESTS. 
   LO DEJO AQUÍ PORQUE ME GUSTARÍA SABER CÓMO HABRÍA QUE HACERLO PARA QUE FUNCIONE CON ESTA SINTAXIS. 
   
   if (!moviesArray.length) {
        return 0;
    }
        let scoresAverage = moviesArray
        .map((movie) => movie.score)
        .filter(score => typeof score === "number")
        .reduce((a, b) => a + b, 0)
    
        return (+scoresAverage / moviesArray.length).toFixed(2);
    */
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    if (!dramaMovies.length) {
        return 0;
    }
    const dramaMoviesScores = dramaMovies.map((movie) => movie.score);
    let dramaScoresAverage = dramaMoviesScores.reduce((a, b) => a + b, 0) / dramaMovies.length;
    
    return +dramaScoresAverage.toFixed(2);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
