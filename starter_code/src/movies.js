/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


let year = 0;
let yearArray = [];
let movieTitle = "";
let movieTitleArray = [];

function orderByYear(array){
  for (let i = 0; i < array.length; i++){
    year = array[i].year;
    movieTitle = array[i].title;
    yearArray.push(year);
    movieTitleArray.push(movieTitle);
    yearArray.sort(function ascendingOrder(movie1, movie2){
      return movie2 - movie1;
    });
  }
  return yearArray;
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
  const sumRates = movies.reduce((accumulator, movie) => accumulator + (movie.rate ? movie.rate : 0), 0);
  const average = Math.round((sumRates / movies.length) * 100) / 100;

  if (movies.length === 0) {
  return 0;
  }

  return average;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
