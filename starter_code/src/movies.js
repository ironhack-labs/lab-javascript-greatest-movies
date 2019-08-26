/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array) {
  return parseFloat((array.reduce((acc, current) => acc + parseFloat(current.rate), 0) / array.length).toFixed(2))
}

console.log(typeof (ratesAverage(movies)))

ratesAverage();

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrayDrama) {
  const arrayGenDrama = arrayDrama.filter(arrD => arrD.genre.indexOf('Drama') >= 0)

  if (arrayGenDrama == []) {
    return 0
  } else
    return parseFloat((arrayGenDrama.reduce((accD, currentD) => accD + parseFloat(currentD.rate), 0) / arrayGenDrama.length).toFixed(2))
}

console.log(dramaMoviesRate(movies))


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(items) {
  //check if length is greater than 1
  if (items.length > 1) {
    //sort and  conditional 1 check if duration is equal and sort by title
    items.sort((a, b) => {
      if (a.duration === b.duration) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
      }
      return a.duration - b.duration;
    });
  }
  return items;
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArray, SearchDirector) {
  if (moviesArray != "undefined") {
    var dramaMovies = moviesArray.filter(function (movie) {
      return movie.genre.indexOf("Drama") != -1
    });
    var directorMoviesArray = dramaMovies.filter(function (movie) {
      return movie.director == "Steven Spielberg";
    })
    console.log(directorMoviesArray);
    if (directorMoviesArray.length >= 0) {
      return "Steven Spielberg directed " + directorMoviesArray.length + " drama movies!";
    }
  }
}
console.log(howManyMovies(movies));
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArray = arr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
    return 0;
  });
  newArray = newArray.map(function (movie) {
    return movie.title;
  });
  return newArray.slice(0, 20);
}

orderAlphabetically(movies);
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg() {

}