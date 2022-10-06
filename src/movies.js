// Iteration 1: All directors? - Get the array of all directors.


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {
    let directors = moviesArray.map((movie) =>movie.director);
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const stevenMovies = moviesArray.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama"));
    return stevenMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
        if( moviesArray.length === 0){
        return 0}
        else {
        let result = moviesArray.reduce((acc , val) =>{
        return acc + val.score;
        },0) / moviesArray.length; 
        return Math.round(result * 100) / 100;
        }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    } else if (
      moviesArray.filter((movie) => movie.genre.includes("Drama")).length === 0
    ) {
      return 0;
    } else {
      let dramaMov = moviesArray.filter((movie) => movie.genre.includes("Drama"));
      const avgScore =
        dramaMov.reduce((acc, val) => {
          return acc + val.score;
        }, 0) / dramaMov.length;
      return avgScore;
    }
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let Year = moviesArray.map((element)=> element);
    let movies2 = Year.sort((a,b)=> a.year - b.year)
    return movies2;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


