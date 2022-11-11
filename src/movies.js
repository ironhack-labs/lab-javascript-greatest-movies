// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newMoviesArray = moviesArray.map(function(numbers){
        return numbers.director;
    });
    return newMoviesArray
}
console.log(numbers.director)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama = moviesArray.filter(function(movie){
        return (movie.director=='Steven Spielberg' && movie.genre.includes('Drama'))
    });
    return spielbergDrama.length
}
      
console.log(spielbergDrama)

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length){
        return 0;
    }
    const arrayOfRates = moviesArray.map(value =>{
        return value.score;
    });
    const sumArray = arrayOfRates.reduce((sum,score) => {
        return sum + score;
    },0);
    return sumArray / moviesArray.length;
   
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  
    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arrayCopy = [...moviesArray];
    return arrayCopy.sort((a, b) => {
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
function orderAlphabetically(moviesArray) {
    const arrayCopy = [...moviesArray];
    return arrayCopy.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
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

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
