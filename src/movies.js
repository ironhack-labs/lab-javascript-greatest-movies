// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
    let allDirectors = arr.map((eachMovie) => {
        return eachMovie.director;
    })
    return allDirectors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
    let steven = arr.filter((eachMovie) => {
        return eachMovie.director === `Steven Spielberg` && eachMovie.genre.includes(`Drama`);
    })
    return steven.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    let currentTotal = 0;
    let avg = 0;
    if (!arr.length == 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].rate >= 0) {
                currentTotal += arr[i].rate;
            }
        }
        avg = currentTotal / arr.length;
        return Number(avg.toFixed(2));
    }
    return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let currentTotal = 0;
    let avg = 0;
    let actualCount = 0;
    if (!arr.length == 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].rate && arr[i].genre.includes(`Drama`)) {
                currentTotal += arr[i].rate;
                actualCount++
            }
        }
        if (actualCount) {
            avg = currentTotal / actualCount;
            return Number(avg.toFixed(2));
        }
    }
    return 0;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    // let sortedByYear = arr.slice();
    return arr.slice().sort((movie1, movie2) => {
        if (movie1.year > movie2.year) {
            return 1;
        } else if (movie1.year == movie2.year) {
            if (movie1.title < movie2.title) {
                return -1;
            }
        } else {
            return -1
        };
        // return movie1.year - movie2.year;
    })
    // return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let abcOrder = [...arr];
    let titleAbcOrder = [];
    ///////////////////////////////////
    abcOrder.sort((movie1, movie2) => {
      if (movie1.title > movie2.title) {
        return 1;
      } else {
        return -1;
      }
    });
  
    ////////////////////////////////////
    for (let i = 0; i < 20; i++) {
      titleAbcOrder.push(abcOrder[i]);
    }
      return titleAbcOrder;
  };


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average