

// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = movies.map(function(movie){
    return(movie.director)
  })
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const dramaMovies = movies.filter(function (movie) {
      if (movie.genre.includes("Drama") === true && movie.director === "Steven Spielberg") {
        return true;
      }
    });
    return dramaMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    const sumRates = movies.reduce(function(acc,val){
      return acc + val.rate
    },0)
    return +(sumRates / movies.length).toFixed(2)
    
  } 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramas = movies.filter(function(movie) {
        return movie.genre.includes('Drama');
      });
    let avg = dramas.reduce(function(acc,val){
      return acc += val.rate/dramas.length
    },0)
    return +(avg.toFixed(2))
  } 
  console.log(dramaMoviesRate(movies))
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let sorted = arr.sort(function(a, b){
      return a.year - b.year
    })
  return sorted
  };
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function getTitles(movies) {
    let titles = movies.map(function(movie) {return movie.title});
    return titles;
}

function orderAlphabetically(movies) {
    let sortedList = getTitles(movies).sort(function(a,b) {
        return a.localeCompare(b);
    });
    return sortedList.slice(0,20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
