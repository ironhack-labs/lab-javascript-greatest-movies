// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (arrayOfMovies) {
    let mappedArray = arrayOfMovies.map(function(movie) {
      return movie.director;
    })
    return mappedArray;
  };

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (arrayOfMovies) {
    let filteredMovies = arrayOfMovies.filter(function(movie) {
      if (movie.genre.includes('Drama') && movie.director === 'Steven Spielberg'){
        return movie
    }
    });
    if (filteredMovies.length === 0) return 0;
    return filteredMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrayOfMovies){
    if (arrayOfMovies.length === 0) return 0;
    let calculation = arrayOfMovies.reduce(function (acc, film){
      if (!("rate" in film) || film.rate.length === 0) {
        film.rate = 0
      }
      return (acc + film.rate)
    }, 0);
    return Number((calculation/arrayOfMovies.length).toFixed(2))
  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies){
    let filteredMovies = arrayOfMovies.filter(function(movie) {
        if (movie.genre.includes('Drama')) {
          return movie
      }
      }); 
    return ratesAverage(filteredMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(Movies){
  if (Movies.length === 0) return 0;
  let films = Movies;
    films.sort(function (a,b){
      if (a.year < b.year) return -1;
      if (a.year > b.year) return 1;
      if (a.year === b.year){
        let title1 = a.title.toLowerCase();
        let title2 = b.title.toLowerCase();
        if (title1 < title2) return -1;
        if (title1 > title2) return 1;
        if (title1 === title2) return 0;
      }
    })
  return films;
};
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
  if (movies.length === 0) return 0;
  let titleList = movies.map(function(movie) {
      return movie.title;
  })
  titleList.sort(function(a,b){
    let title1 = a.toLowerCase();
    let title2 = b.toLowerCase();
    if (title1 < title2) return -1;
    if (title1 > title2) return 1;
    if (title1 === title2) return 0;
  })
  if (titleList.length < 20){
    return titleList.slice(0,titleList.length)
  }
  return titleList.slice(0,20)
  };
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
