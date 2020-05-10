// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr){
     return arr.map(movie => movie.director);
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr){
    return arr.filter(movie => movie.genre.includes('Drama') && movie.director === "Steven Spielberg").length;  
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let average = 0;
    if (arr.length === 0){
      return average;
    };
    const sum = arr.reduce((ac, movie) => {
      if (movie.rate === '' || movie.rate === undefined){
        movie.rate = 0;
      }
      return ac + movie.rate;
    }, 0);
    average = Number((sum/arr.length).toFixed(2));
    return average;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(movie => movie.genre.includes('Drama'))
    if (dramaMovies.length === 0) {
      return 0;
    }
    const rateSum = dramaMovies.reduce((ac, movie) => {
      return ac + movie.rate
    }, 0);
    return Number((rateSum/dramaMovies.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    const newSortedArray = arr.slice().sort((a, b) => {
      if (a.year - b.year > 0) {
        return 1;
      } else if (a.year - b.year < 0) {
        return -1;
      } else if (a.year - b.year === 0){
        if (a.title > b.title) {
          return 1
        } else if (a.title < b.title) {
          return -1
        }
      }
    });
    return newSortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const movieTitles = arr.map(movie => movie.title).sort();
    const first20Elements = movieTitles.slice(0,20);
    return first20Elements;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
