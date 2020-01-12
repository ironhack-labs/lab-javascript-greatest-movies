/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(arr) {
  const sortedMovies = arr.slice().sort(function(movie1, movie2) {
    if (movie1.year === movie2.year) {
      return movie1.title.localeCompare(movie2.title);
    }
    return movie1.year - movie2.year;
  });
  return sortedMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
  const spielbergDramaMovies = movies.filter(movie => (movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama')));
  return spielbergDramaMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

let title = "";
let orderedArray = []


function orderAlphabetically(movies){
  for (let i = 0; i < movies.length; i++){
    if (movies.length = 20){
    title = movies[i].title;
    orderedArray.push(title);
    orderedArray.sort();
    } 
  }
  return orderedArray;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  // Entender bien los condicionales!!!
  const sumRates = movies.reduce((accumulator, movie) => accumulator + (movie.rate ? movie.rate : 0), 0);
  const average = Math.round((sumRates / movies.length) * 100) / 100;

  if (movies.length === 0) {
  return 0;
  }

  return average;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
