// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const movieDirectors = moviesArray.map((movie) => movie.director); 
  return movieDirectors;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
   const SpielbergMovies = moviesArray.filter((movie) => movie.director === "Steven Spielberg"  && movie.genre.includes("Drama"));
   return SpielbergMovies.length;
} 
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const movieAverage = moviesArray.reduce((acc, val)  => { acc + val.score
    if(!val.score){
      return acc;
    } else {
      return acc + val.score;
    }
   }, 0);
  const unroundAvg = movieAverage / moviesArray.length;
  if(!moviesArray.length){
    return 0;
  } 
  return Math.round(unroundAvg * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(element => element.genre.includes('Drama'))
  return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr =[...moviesArray];
  newArr.sort((a,b) => {
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

  }); return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieList = moviesArray.map(element => element.title);
    let revisedList = movieList.sort();
    return revisedList.slice(0, 20)
}  


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

