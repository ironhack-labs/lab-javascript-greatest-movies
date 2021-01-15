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

    if (arr.length === 0) {
        return 0;
    }

    totalRates = arr.reduce(function(total, film) {

    let sumRates = 0;
        if (film.rate === 0 || undefined) {
            return total;
        } else {
            sumRates = total + film.rate;
        }
        return sumRates;
    }, 0);
        return Number((totalRates / arr.length).toFixed(2));
}

ratesAverage(movies);

// ==========================NaN should be 2 ???==========================

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {

    let dramaMovies = arr.filter(function (arrElement) {
      return arrElement.genre.includes("Drama");
    });
    return ratesAverage(dramaMovies);
  }

  dramaMoviesRate(movies);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {

    let yearSorted = arr.slice().sort(function (a, b) {
        if (a.year > b.year && a.title > b.title) {
            return 1;
        } else if (a.year < b.year && a.title < b.title) {
            return -1;
        }
        return a.year - b.year;
    });
    
    return yearSorted;
}

orderByYear(movies);

// ==========================sort by title is wrong ???==========================

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    let listed = arr.map(function(arrElement) {
        return arrElement.title;
    });
    let orderedList = listed.sort();

    return orderedList.splice(0,20);
}

orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
