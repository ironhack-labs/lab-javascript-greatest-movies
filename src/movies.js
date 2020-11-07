// Iteration 1: All directors? - Get the array of all directors.

const getAllDirectors = (arr) => arr.map(element => element.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (arr) => { 
    const spMovies = arr.filter(element => element.director === 'Steven Spielberg' && element.genre.includes('Drama'))
    return spMovies.length
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// Me queda añadir la condición de que devuelva una media incluso si una película no tiene rate

const ratesAverage = (movies) => {
    const average = movies.reduce(function (acc, rates) {
        return acc + rates.rate;
    }, 0);
    if (movies.length === 0) {
        return 0
    } else {
        return Math.round((average/movies.length)*100)/100
    }
}


  


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  
    const dramaArray = array.filter(elemento => elemento.genre.includes ("Drama") && elemento.rate>0)
    const solution = Math.round( dramaRatesSum(dramaArray)/dramaArray.length * 1e2 ) / 1e2;
  
    if (solution > 0){
      return solution}
      else 
      {
        return 0
      }  }
  const dramaRatesSum = (array) => array.filter (elemento => elemento.rate > 0).reduce((acumulador, elemento) => acumulador + elemento.rate, 0)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    const orderedMovies = array.sort((a, b) => {
  
      if (a.year > b.year) return 1;
      if (a.year < b.year) return -1;
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1; });
  
     return orderedMovies
   }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (array) {
    const onlyTitle = (array) => array.map (elemento => elemento.title)
    return onlyTitle(array).sort().slice(0, 20)
    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
  return array.map(movie => {
        const newMovieArray = {movie};
          if (movie.duration.includes('h')) {
            newMovieArray.duration = parseInt(movie.duration.slice(0,2)) * 60 + parseInt(movie.duration.slice(3, 5) || 0);
          }   else {
            newMovieArray.duration = Number(movie.duration.slice(0,2));
          }   return newMovieArray;
      });
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average