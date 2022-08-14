// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const allDirectors = moviesArray.map(function(movie){
    return movie.director
  })
return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) {  
  return moviesArray.filter(function(movie){
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  }).length
}
                                           
howManyMovies(movies)



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  let sum = moviesArray.reduce(function(acc,val) {
    {return acc + val.score }
 
},0)

return Math.round(sum / moviesArray.length * 100)/100
}

scoresAverage(movies)



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  const dramaMovies = moviesArray.filter(function (drama) {
   return drama.genre.includes('Drama')
  })
  let dramaMoviesAver = dramaMovies.reduce(function(acc,val) {
    return acc + val.score
  },0)

 return Math.round(dramaMoviesAver / dramaMovies.length * 100)/100
}

dramaMoviesScore(movies)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let copy = JSON.parse(JSON.stringify(moviesArray)) 
  
  let sort = copy.sort(function (a,b) { 
  return a.year - b.year
  })
  return sort 
}

orderByYear(movies)


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
