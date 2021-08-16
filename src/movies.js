// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let directors = movies.map((movie) => movie.director);
  let filteredDirectors = directors.filter(
    (director, i) => !directors.includes(director, i + 1)
  );
  return filteredDirectors;
}
  

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let movieStevenSpielberg = movies.filter((drama) =>{
      return drama.director === 'Steven Spielberg' && drama.genre.includes('Drama')
  });

  return movieStevenSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if(movies.length <= 0) return 0;

  let average = movies.reduce((acumulator, currentValue)=>{
    if(currentValue.score) 
    return acumulator + currentValue.score
    else 
    return acumulator + 0;
  }, 0);
  return Number((average/movies.length).toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let averageDrama = movies.filter((drama) => 
    drama.genre.includes('Drama')

  )

  if(averageDrama <= 0) 
  return 0;

  let sumAverage = averageDrama.reduce((acumulator, currentValue)=>{
    if(currentValue.score) 
    return acumulator + currentValue.score
    else 
    return acumulator + 0;
  }, 0);
  return Number((sumAverage/averageDrama.length).toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let newMovies = [...movies]

  newMovies.sort(function (a, b){
    return (b.year - a.year)
  })


  return newMovies.reverse()

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let newMovies = [...movies]

  newMovies.sort(function(a, b){
    return a.title.localeCompare(b.title)
  })
  let orderMovies = newMovies.map((movie) => movie.title);
  return orderMovies.slice(0, 20)

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
