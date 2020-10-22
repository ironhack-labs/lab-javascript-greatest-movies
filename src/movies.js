// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (movies) {
        return movies.map((movie) => movie.director)
}

// const getAllDirectors = movies => movies.map((movie) => movie.director)

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

/* function uniquifyDirectors(director) {
    const allDirectors = getAllDirectors
    const uniqueDirectors = allDirectors.filter(function (director, index) {
      if (array.indexOf(director) === index) {
        return true;
      } else {
        return false;
      }
    });

    return uniqueDirectors;
}
*/

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const getStevenSpielbergDramas = movies.filter(function (movie) {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    });
    return getStevenSpielbergDramas.length;
}

/* not working
function howManyMovies(movies) {
    const getStevenSpielbergMovies = movies.filter(function (movie) {
        return (movie.director === "Steven Spielberg")});
    }
    const getStevenSpielbergDramas = getStevenSpielbergMovies.includes("Drama");
    return getStevenSpielbergDramas.length;
*/

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return null;
    }
    const sumRates = movies.reduce(function (acc, movie) {
      return acc + movie.rate;
    }, 0);
  
    return Number((sumRates / movies.legth).toFixed(2));
  }

/* dont know where to put it, tried as if-else in .reduce:
    if (movies.rate === undefined) {
        continue;
    }
*/

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMovieRates(movies) {
    const getAllDramas = movies.filter(function (movie) {
        return (movie.genre.includes("Drama")) };
    
    function sumDramaRates = getAllDramas.reduce(function (acc, drama) {
        return acc + drama;
    },0);
return Number((sumDramaRates / getAllDramas.length).toFixed(2))
}

/*
function dramaMoviesRate (movies) {
    const sumRatesOfAllDramas = movie.reduce(function (acc, movie)) {
        if (movie.genre.includes("Drama")) {
            return acc + movie.rate 
        }
    
    const NumOfDramas = movies.filter(function (movie) {
            return movie.genre.includes("Drama");
        });
        return NumOfDramas.length;
    }

return sumRatesOfAllDramas / NumOfDramas.length;
}

*/

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (movies) {
const orderedByYear = movies.sort(function (movie1, movie2) {
    if (movie1.year < movie2.price) {
      return -1);
    }

    if (movie1.year = movie.year) {
        return movies.sort(function (title1, title2) {
            if (title1 < title1.2) {
                return -1;
            }
        })
    }
 return orderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movie) {
    const allTitles = movies.map (function (element) {
        return element.title //???Object.values(title);
    const orderedTitlesByAlphab = allTitles.sort(function (movie1, movie2) {
        if (movie1.year < movie2.price) {
            return -1
        }
    })
return orderedTitlesByAlphab.slice(0, 20)
}
// Object.values(title)

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
