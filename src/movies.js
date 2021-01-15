// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {

    let mappedArr = [];
    mappedArr = arr.map(function(elementsInArr) {
        return elementsInArr.director;
    });
    return mappedArr;
}

getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
    
    let dramas = [];
    dramas = arr.filter(function (elementsInArr) {
      if (elementsInArr.director === "Steven Spielberg" && elementsInArr.genre.includes("Drama")) {
          return 1;
      } else {
          return 0;
      }
    });
    return dramas.length;
  }

  howManyMovies(movies);


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {

    const sumRates = arr.reduce(function(total, film) {
        return total + film.rate
    }, 0);
    return Number((sumRates / arr.length).toFixed(2));
}
ratesAverage(movies);

// Jasmine says it should return 0 if there is no movie

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
