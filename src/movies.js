// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
  const newMoviesArray = movies.map((movie => movie.director))
  return newMoviesArray;
}
// probar version anterior
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {

  const dramaGenre = movies.map(
    movie => { if(movie.genre.includes('Drama')) return movie })
    .filter(movie => movie !== undefined)
    .filter(movie => movie.director === 'Steven Spielberg');
  
  return dramaGenre.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
let ratesAverage = (movies) => {
  if (movies.length === 0) {
      return 0
  }

  let rateMovies = movies.map(
      movie => movie.rate === '' || movie.rate === undefined ? 0 : Number(movie.rate)
  );

  let avgRateMovies = Number(parseFloat(rateMovies.reduce((reducer, accum) => reducer + accum) / rateMovies.length).toFixed(2));

  return avgRateMovies
}
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  
  const moviesDrama = array.map(
    movie => {
      if(movie.genre.includes('Drama')) return movie
  }).filter(movie => movie !== undefined)
  
  return ratesAverage(moviesDrama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
  let moviesByYear = [];
  if(array.length===0){
    return moviesByYear
  }
  moviesByYear = array.sort((a, b) => 
    (a.year > b.year) ? 1 : (a.year === b.year) 
    ?
    ((a.title > b.title) ? 1 : -1)
    : -1
    )

  return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
  if(array.length > 19) {
    let moviesArray= [...array];

    let alphabeticalMovies = moviesArray.sort(
      (a,b) => (a.title > b.title) ? 1 : -1
    )
    let alphaMovSliced = alphabeticalMovies.slice(0, 20);

    let movieByTitle = alphaMovSliced.map(movie => movie.title)
    
    return movieByTitle
  }
  let moviesArray= [...array];

    let alphabeticalMovies = moviesArray.sort(
      (a,b) => (a.title > b.title) ? 1 : -1
    )

    let movieByTitle = alphabeticalMovies.map(movie => movie.title)
    
    return movieByTitle

}
orderAlphabetically(movies)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
