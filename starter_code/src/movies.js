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

function howManyMovies(arr) {
  const spielbergDramaMovies = arr.filter(movie => (movie.director === 'Steven Spielberg') && (movie.genre.includes('Drama')));
  return spielbergDramaMovies.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
// I don't understand the error in yasmine "You should not mutate the original array"

function orderAlphabetically(arr){

  let newArr = arr.slice(0)
  const sortedMovies = newArr.sort(function(title1, title2) {
      return title1.title.localeCompare(title2.title);
    })
    .map(function(object){
      return object.title;
    })
    .slice(0,20);
    return sortedMovies;
  }



// Iteration 4: All rates average - Get the average of all rates with 2 decimals
// // I don't understand the error in yasmine "Return average even if one of the movies does not have rate!"

function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumRates = arr.reduce(function(accumulator, movieRate) {
    if (movieRate.rate){
      return accumulator + movieRate.rate;
    } else {
      return accumulator;
    }
  },0);
  const average = Math.round((sumRates / arr.length) * 100) / 100;
  return average;
}  


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
  return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  function hoursToMinutes(time) {
      if (!time.includes("h")) {
          return parseInt(time);
      }
      let hoursAndMinutes = time.split (" ");
      return  (parseInt(hoursAndMinutes[0])*60+parseInt(hoursAndMinutes[1] || 0));
}

const newTime = arr.map(function(movie) {
  const newMovies = Object.assign({}, movie);
  newMovies.duration = hoursToMinutes(movie.duration);
  return newMovies;
});
return newTime;
}

console.log(turnHoursToMinutes(movies));
// BONUS Iteration: Best yearly rate average - Best yearly rate average
