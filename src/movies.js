// The `movies` array from the file `src/data.js`.
// console.log('movies: ', movies);

//const movies = require("./data");

 // <script src = "data.js" ></script>

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies) {

const mappedArray = movies.map(function (movie) {
 return movie.director ;
}
) 

console.log(mappedArray);

return mappedArray
}

// getAllDirectors(movies)

// console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {


let dramaStev = movies.filter(function(movie) {
  if ( movie.genre.includes("Drama") &&  movie.director === "Steven Spielberg")
  { return movies.filter } else { return 0 }
}
)
return dramaStev.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {


const sum = movies.map(function(mov) {
  return mov.score ;
}
)

let aver = sum.reduce(function(a, b) {
   return a + b 
}
)

return (aver/movies.length).toFixed(2)

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {

  let dramaMo = movies.filter((movie) {
  movie.genre.includes("Drama")
  }
  );

  return scoresAverage(dramaMo);
}

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {

  const syear = movies.map(function(movie) {
    return movie.year;
  }
  )

  let newArr = syear.sort(function(a, b) {
   if ( a < b) { return 1} ;
   else if ( a > b ) { return -1} ; 
   else if (a === 0 ) { return 0} ;
}
  )
  return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

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
