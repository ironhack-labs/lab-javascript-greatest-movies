//const movies = require("./data");
console.log(movies);

// Iteration 1: All directors? - Get the array of all directors.
/* _Bonus_: It seems some of the directors had directed multiple movies so they
 will pop up multiple times in the array of directors. */
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    const mappedArr = moviesArray.map((movie) => movie.director);
    return mappedArr;
}


/* Iteration 2: Steven Spielberg. The best? - 
How many drama movies did STEVEN SPIELBERG direct? */
function howManyMovies(moviesArray) {
const steveMovies = moviesArray.filter((movies) => movies.director === 'Steven Spielberg' && movies.genre.includes("Drama")) ;
return steveMovies.length;
}
console.log(howManyMovies);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const average = moviesArray.reduce((acc, movie) => {
        if (movie.score){
            return acc + movie.score;
        } else return acc;
    }, 0)
    const avg = average / moviesArray.length;
    return Number(avg.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const average = moviesArray.filter((movies) => movies.genre.includes('Drama'))
    return scoresAverage(average);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
    const filteredArr = [...moviesArray].filter(elem => elem.year)
    const orderedTitle = filteredArr.sort((a,b) => {
        if(a.year > b.year){
          return 1;
        } else if(a.year < b.year){
          return -1
        }
        if(a.title > b.title){
          return 1;
        } else if(a.title < b.title){
          return -1
        } else{ 
          return 0;
        }
   
      }); return orderedTitle;
    };

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const arrayCopy = [...moviesArray].map;
    const list = moviesArray.map(el => el.title);
    let listRiv = list.sort();
    return listRiv.slice(0, 20);
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
