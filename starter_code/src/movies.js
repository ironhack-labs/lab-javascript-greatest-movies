/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesCopy = [...movies];
    moviesCopy.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            }
            else {
                return 1;
            }
        }
        return a.year - b.year;
    });
    
    return moviesCopy;
    
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {

    let filteredMovies = movies.filter((movie,i) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    });

    return filteredMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    // Shallow copy - create an Array of movie titles
    let moviesList = movies.map( (movie, i) => {
      return movie.title;
    });
  
    // Order the list alphabetically
    moviesList.sort( (a,b) => {
      return a === b ? 0 : a > b ? 1 : -1;
    });
  
    // Return first 20 elements
    return moviesList.slice(0,20);
  }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
