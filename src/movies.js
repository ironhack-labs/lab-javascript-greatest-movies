console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//const directors = getAllDirectors(movies)

function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movies) => movies.director); return directors
}

// directors.push(movies.director);
console.log(movies.director)
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {
    const stevenCount = moviesArray.filter((movies) => movies.director === `Steven Spielberg` && movies.genre.includes("Drama")); return stevenCount.length 
    };
    // return stevenCount.length;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if(!moviesArray.length){
        return 0
    };

    let sum = moviesArray.reduce((acc, movie) =>{
        
        if (movie.score){
        return acc + movie.score
        } else return acc;
    }, 0);

    let average = sum / moviesArray.length
    return Number(average.toFixed(2));
}
    
    // allScores += arr.reduce((acc, val) => acc + val.movies.director, 0);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let allDrama = moviesArray.filter((movie) => movie.genre.includes('Drama')) //.includes() method searches the genre array for drama
   
    return scoresAverage(allDrama);

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//function orderByYear(arr) {}

    function orderByYear(moviesArray){
        let yearOrdered = [...moviesArray];
    yearOrdered.sort((a, b) => {
        if (a.year < b.year) {
            return -1
        } else if (a.year > b.year) {
            return 1 
        } if(a.title > b.title){
            return 1;
          } else if(a.title < b.title){
            return -1
          } else{ 
            return 0;
          }
        });
        return yearOrdered;
    //     let titlesOnly = moviesAlphabet.map((movies) => movies.title)
    // return titlesOnly.slice(0, 20);
    }
//   let moviesByYear = movies.sort(function (a, b) {
//     if (a.toLowerCase() < b.toLowerCase()) return - 1;
//     if (a.toLowerCase() < b.toLowerCase()) return 0;
//     if (a.toLowerCase() < b.toLowerCase()) return 1;
//      return movies;
//  });
//let moviesByYear = movies.year 
//moviesByYear.sort((a, b) => a - b);

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let moviesAlphabet = [...moviesArray];
    moviesAlphabet.sort((a, b) => {
        if (a.title < b.title) {
            return -1
        } else if (a.title === b.title) {
            return 0
        } else {
            return 1};
        });
        let titlesOnly = moviesAlphabet.map((movies) => movies.title)
    return titlesOnly.slice(0, 20);
    
}
//  const moviesAlphabet = moviesArray.map((movies) => movies.sort()); 



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
