// Iteration 1: All directors? - Get the array of all directors

function getAllDirectors (movies) {
    let allDirectors = movies.map((movie) => movie.director)
    return allDirectors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    return movies.filter(movie => {
      return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    }).length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    let allRates = movies.map(movie => {
    return movie.rate;
    });
    //let filteredRates= allRates.filter(function () {
    //    return true
    //});
    let sumRates = allRates.reduce((sum, rate) => {return sum + rate}, 0);
    let averageRates = sumRates / movies.length;
    return Math.round(averageRates*100)/100;
} 
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
 
    let onlyDrama = movies.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(onlyDrama);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const copyMovies = [...movies];
    return copyMovies.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } else if (a.year < b.year) {
        return -1;
      } else {
        const firstMovieTitle = a.title.toLowerCase();
        const secondMovieTitle = b.title.toLowerCase();
        if (firstMovieTitle > secondMovieTitle) {
          return 1;
        } else if (firstMovieTitle < secondMovieTitle) {
          return -1;
        } else {
          return 0;
        }
      }
    });
}
  
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    return movies.map(movie => movie.title).sort((a, b) => {
    const movieTitleOne = a.toLowerCase();
    const MovieTitleTwo = b.toLowerCase();
    if (movieTitleOne > MovieTitleTwo) {
        return 1;   
    } else if (movieTitleOne < MovieTitleTwo) {
        return -1;
    } else {
        return 0;
    }
    }) .slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average