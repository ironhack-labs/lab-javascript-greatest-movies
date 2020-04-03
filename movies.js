/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const sorted = [...arr].sort(function(a, b) {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
  return sorted;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let numberOfDrama = 0;
  const dramaMovies = array.filter(function(drama) {
    if (
      drama.genre.includes("Drama") &&
      drama.director === "Steven Spielberg"
    ) {
      return true;
    }
  });
  numberOfDrama = dramaMovies.length;
  return numberOfDrama;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
let newArray = array.map(function(order){
    return order.title
});
let title = newArray.sort();
return title.slice(0,20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
const rating = array.reduce(accumulator, currentValue){
    return currentValue.rate / array.length 
}
}

// ugh i don't know how to resolve this one (iteration 4)

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
    let genreFilter = array.filter(movie => {return movie.genre.includes("Drama");})
    return ratesAverage(genreFilter);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
    const newDuration = array.map(movie => {
        return movie.duration.split("");
    });
        return newDuration;
    }
    console.log(turnHoursToMinutes(movies));


// BONUS Iteration: Best yearly rate average - Best yearly rate average
