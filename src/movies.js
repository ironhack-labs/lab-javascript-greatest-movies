// Iteration 1: All directors? - Get the array of all directors.
// create a function = getAllDirectors with parameters movies


     const getAllDirectors = (moviesList) => {
         return moviesList.map((movie) => {
             return movie.director;
         });  
    } 

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// clean up the directors list of duplicates

    /* const removedDuplicates = movieDirectorsList.reduce((acc, currentValue) => {
        if (acc.includes(currentValue)) {
          return acc;
        } else {
          return [...acc, currentValue];
        }
    }, []);
    return removedDuplicates; */


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const howManyMovies = (moviesList) =>
moviesList.filter(
  (movie) =>
    movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
).length;

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if(movies.length == 0) {
      return 0;
    }
    let newArr = movies.reduce(function(acc, currIndex) {
      var rate = 0
      if(currIndex.rate > 0){
        rate = currIndex.rate;
      }
      return acc + rate
    }, 0);
    let average = newArr / movies.length
    return Math.round(average * 100) / 100
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const dramaRates = movies.filter((movie) => {
        if (movie.genre.includes('Drama')){
          return movie;
        }
    });
    let dramaAverage = ratesAverage(dramaRates);
    return dramaAverage;
    };

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let sortedMovies = [...movies].sort((a,b) => {
        return compare(a,b);
    });
    return sortedMovies;
}
function compare(a,b) {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.year === b.year) {
       if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
       if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    }
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let moviesTitle = movies.map(function (title) {
        return title.title;
      });
    let moviesTitleSort = moviesTitle.sort();
    return moviesTitleSort.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const newTime = movies.map(function(movie) {
    const newMovies = Object.assign({}, movie);
    newMovies.duration = hoursToMinutes(movie.duration);
    return newMovies;
  });
    function hoursToMinutes(time) {
        if (!time.includes("min")){
          let hoursAndMinutes = time.split (" ");
          return parseInt(hoursAndMinutes[0])*60;  //120 + 22 =142
        }
        if (!time.includes("h")){
          return parseInt(time);
        }
          let hoursAndMinutes = time.split (" ");
          return parseInt(hoursAndMinutes[0])*60+parseInt(hoursAndMinutes[1]);  
    }
  return newTime;
  }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

