/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = arr => {
    return JSON.parse(
      JSON.stringify(
        arr.sort((a, b) => {
          if (a.year !== b.year) {
            return a.year - b.year;
          } else if (a.title > b.title) {
            return 1;
          } else if (a.title < b.title) {
            return -1;
          }
        })
      )
    );
  };
  orderByYear(newarr);
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    const newArr = arr.filter( function (pelicula) {
      return pelicula.director === "Steven Spielberg" && pelicula.genre.includes("Drama");
    })
    return newArr.length;
  }


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
    const newArray = array.map(function(movie) {
        return movie.title;
    });

    newArray.sort(function(a, b) {
        return a.localeCompare(b);
    });

    if (newArray.length > 20) return newArray.slice(0, 20);

    return newArray;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {
    if (array.length === 0){
        return 0;
    } else {
        return Number((array.reduce(function(acc, movie) {
            if(typeof movie.rate === "number"){
                return acc + movie.rate;
            } else {
                return acc + 0;
            }
        }, 0) / array.length).toFixed(2));
    }
}
  
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
  const newArray = array.filter(function(movie){
      return (movie.genre.includes("Drama"))
  });

  if (newArray.length === 0) {
    return 0;
  } else {
    return Number((newArray.reduce(function(acc, movie) {
          return acc + movie.rate;
    }, 0) / newArray.length).toFixed(2));
  }
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
  if (array.length === 0) 
    return null;
}