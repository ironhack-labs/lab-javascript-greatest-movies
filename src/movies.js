
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors (array) {
  return array.map(movie => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    return moviesArray.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  const sum = moviesArray.reduce(function(acc, element) {
    if (element.rate === undefined) {
      return acc + 0;
    }
    return acc + element.rate;
  }, 0);
  return (sum / moviesArray.length).toFixed(2);
}
 
// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (moviesArray) {
  return ratesAverage(moviesArray.filter(movie => movie.genre.includes('Drama')));

}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (moviesArray) {
  let moviesList = [...moviesArray];
  moviesList.sort((mov1,mov2) => {
    if (mov1.year < mov2.year) return -1;
    if (mov1.year > mov2.year) return 1;
    
    return mov1.title.localeCompare(mov2.title);
  });
    return moviesList;  
  }

  // Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (moviesArray) {
  const titles = moviesArray.map(mov => mov.title);
  titles.sort((mov1, mov2) => mov1.localeCompare(mov2));
  return titles.slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
