// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?



function getAllDirectors(moviesArray) {
    let directorsArray = moviesArray.map((directorsMovie) => directorsMovie.director);
    return directorsArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   
    let movieStevens = moviesArray.filter((moviesDramaFromStevens) => 
    moviesDramaFromStevens.director === 'Steven Spielberg' 
    && moviesDramaFromStevens.genre.includes('Drama'));
   return movieStevens.length;

    }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

/*  
    let scoresArray = moviesArray.map((scores) => scores.score);
    let allScores =+ scoresArray;
    let average = allScores/scoresArray.length;
    return average; 
*/
    if (moviesArray.length === 0) {
    return 0; }
    let average = moviesArray.reduce ((acc, val) => acc + val.score,0);
    return Math.round(average/moviesArray.length * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    
/*  
    let arrayDrama = moviesArray.filter((dramaMovies) => 
    dramaMovies.genre.includes('Drama'));
    let sumScoreDrama = arrayDrama.reduce((acc, val) => acc + val.score);
    let howManyDramas = arrayDrama.length;
    return sumScoreDrama/howManyDramas;
 */

    if (moviesArray.length === 0) {
        return 0;
    } else if (
        moviesArray.filter((movie) => movie.genre.includes("Drama")).length === 0
    ) {
        return 0;
    } else {
    let isDrama = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    const avgScore =
        isDrama.reduce((acc, val) => {
        return acc + val.score;
    }, 0) / isDrama.length;
        return avgScore;
}
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    let newArrayOrdem = moviesArray.slice(moviesArray).sort((a, b) => {
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.year === b.year)  {
            if (a.title.toLowerCase() < b.title.dramaMoviesScoretoLowerCase()) return 1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
        } 
        });
    return newArrayOrdem;
    }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArrayOrdemAlphabetically = [...moviesArray];
    
    moviesArray.sort((a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() === b.title.toLowerCase()) return 0;
        return newArrayOrdemAlphabetically;
})


    let titlesArray = moviesArray.map((movie) => movie.title);
    
    let first20 = titlesArray.slice(0,20);
    return first20;

}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


