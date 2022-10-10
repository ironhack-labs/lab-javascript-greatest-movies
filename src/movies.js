// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
let directors = moviesArray.map ((movie) => { 
    return movie.director;
})
return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSumMovies = 0;
    if(moviesArray.length === 0 ){
        return 0;
    } 
    let filteredDirectors =  moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg';});

    let filteredDramaMovies = filteredDirectors.filter((movie) => {
        return movie.genre.includes('Drama')});

        return dramaSumMovies = filteredDramaMovies.length ;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let averageScore = 0;
    if(moviesArray.length === 0) {
        return 0;
    }
    let scoreArr = moviesArray.map ((movie) => { 
        return movie.score;
    })
    if(movie.score === "undefined"){
        return 0;
    }
    let reducedScore = scoreArr.reduce((acc , score) => {
        acc + score, 0 } );
 
    return averageScore = (reducedScore / scoreArr.length).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let averageDramaScore = 0;
  
    let filteredDramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama') });

    if (moviesArray.length === 0){
        return 0;
    }
    let reducedDramaScores = filteredDramaMovies.reduce((acc, score) => acc + score, 0).toFixed(2);

        return averageDramaScore = reducedDramaScores / filteredDramaMovies.length;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesArrayCopy = moviesArray.sort((firstMovie, secondMovie) => {
       firstMovie.year - secondMovie.year })
       return moviesArrayCopy;
    }
    

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
