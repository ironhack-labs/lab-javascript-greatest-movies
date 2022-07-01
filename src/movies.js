// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map(eachMovie => eachMovie.director)
  return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let stevenSpielbergMovies = moviesArray.filter(eachMovie =>
  { return eachMovie.director.includes('Steven Spielberg') 
    && eachMovie.genre.includes('Drama')
  })
  return  stevenSpielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { 
  /* if (!moviesArray.length) return 0
const sum = moviesArray.reduce((acc, curr) => acc + curr.score || 0, 0)
return sum / moviesArray.length.toFixed()*/

  if (moviesArray.length) {let scores = moviesArray.map((element) => element.score);    
        console.log(scores);    
        let filteredScores = Array.from(scores, (item) => item || 0);    
        console.log(filteredScores);    
        let average = filteredScores.reduce((acc, value) => acc + value, 0);    
        return parseFloat((average / filteredScores.length).toFixed(2));} 
        else {return 0;  
          
    }
  }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMoviesAverage = moviesArray.filter((element)=> element.genre.includes('Drama'));
  return scoresAverage(dramaMoviesAverage)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {
    function quienSabeQue(moviesArray){
    let orderByYearList = (movies.map(moviesOrderByYear =>
    {return movie.year})).sort(function (a,b){return a - b})
    orderByYearList.forEach(movie => (movie))
  return orderByYear(orderByYearList)
}
  }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const orderByTitle = movies
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b));
  return orderByTitle.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
