// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let nameDirectors = movies.map((movie) => {
        return movie.director;
    });
    return nameDirectors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(movies) {
    let dramaMovies = movies.filter((movie) => {
        if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
          return true;
        }
    });
    return dramaMovies.length;
}

howManyMovies(movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

// 1. map array numeros
// 2. variable con suma de todos reduce
// 3. division entre numero total

function ratesAverage(movies) {
    if (movies.length === 0){
        return 0;
    }
    let moviesRate = movies.map((movie) => {
        return movie.rate;
    });
    let ratesSum = moviesRate.reduce((acc, rate) => {
        return acc + rate;
    }, 0);
    let average = ratesSum / moviesRate.length;
    return Number(average.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaList = movies.filter((movie) => {
      if(movie.genre.includes("Drama")){
        return true;
      } else {
        return false;
      }
    });
    let sumRates = dramaList.reduce((acc, movie) => {
        return acc + movie.rate;
    }, 0);
    if(dramaList.length === 0){
        return 0;
    }
    return Number((sumRates / dramaList.length).toFixed(2));
} 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// We need to sort the movies in ascending order by their release year.
// Create a function orderByYear() that receives an array as parameter and returns a new sorted array.
// If two movies have the same year, order them in alphabetical order by their title!

function orderByYear(movies){
    if (movies.length === 0){
        return [];
    }
    let orderedMovies = movies.sort((a, b) => {
        if (a.year < b.year){
            return -1;
        } else if (a.year > b.year){
            return 1;
        } else {
            if (a.title < b.title){
                return -1;
            } else if (a.title > b.title){
                return 1;
            } else {
                return 0;
            }
        }
    });
    return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// ordenar alfabeticament les pelis. 2. triar les 20 primeres. Return only the title of each movie.

function orderAlphabetically(movies){
    let orderedMovies = movies.sort((a, b) => {
        if(a. title < b.title){
            return -1;
        } else if (a.title > b.title){
            return  1;
        } else {
            return 0;
        }
    });
    let titleMovies = orderedMovies.map((movie) => {
        return movie.title;
    });
    return titleMovies.slice(0, 20);
}

orderAlphabetically(movies);


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
