// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

const directors = movies.map(function (movie) {

  return movie.director
  
})

return directors;

}

// console.log(directors)


//map through the array and get all the directors
//return one array as final result 


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// 


function howManyMovies(movies) {

  if (movies.length === 0) return 0;
  const filtered = movies.filter(function (movie) {

    if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')){

      return true;

    }
  })
  return filtered.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) return 0;
  
    const AvgScore = movies.reduce(function(sum, movie) {
      if( movie.score === '' || movie.score === undefined) {
        movie.score = 0;
      }
        return sum + movie.score;

    }, 0) /movies.length;

    return Number(AvgScore.toFixed(2))
  
  }


// reduce method


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

  // use filter method 

  const dramaMovie = movies.filter(function(movie){
    return movie.genre.indexOf('Drama') !== -1
  })

  return scoresAverage (dramaMovie);
  



}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

//JSON.parse, JSONstringify
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

// map to get the titels

const titles = movies.map(function (movie){
  return movie.title
})

// sort to sort the elements 

const sorted = titles.sort(function(a, b){

  return a.localeCompare(b);

})

// slice to print the first 20 titles 

const first = sorted.slice(0, 20);
return first; 



}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {





  
}

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
