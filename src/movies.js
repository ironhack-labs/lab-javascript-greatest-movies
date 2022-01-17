


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
function getAllDirectors(movies){
  
  const directors = movies.map(function(film){
    return film.director
})
  return directors
}


// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllTheDirectors(movies) {
  
 //   const allDirectors = movies.filter(function(elem) {
   //   return [...set(allDirectors)]
   /*   return elem.indexOf(elem) === index;
  })
  return allDirectors*/
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const steveScore = movies.filter(function(movie) {

    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
  })
  return steveScore.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) { 
if (movie.length === 0) return 0;
  const allScores = movies.reduce (function (total, value) {
    i
    return total + (value.score || 0)}, 0)
    return allScores / total.length
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { /*
  let avrg = 0;

const isDrama = movies.reduce(function (film){
  if(film.genre.includes ("Drama") {
  return film.score }

  return isDrama { */
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) { /*
  
  const pubYear = JSON.parse(JSON.stringify(movies{}))
    return film.year
  })

  pubYear.sort((a, b) => {
    return orderByYear = a.age - b.age;
}); */
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) { 
  const byTitle = movies.map(function(film){
    return movie.title
  })                 
    
    film.year.sort((a, b) => {
      return orderByYear = a.year - b.year;
  })
  console.log([0] - [19])
} 

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  return
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
