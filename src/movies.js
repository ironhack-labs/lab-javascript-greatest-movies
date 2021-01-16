// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors (moviesArr) {
    return moviesArr.map(function(moviesArr){
        return moviesArr.director
})
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//1. go over all movies
//2.filter all movies with Director Steven Spielberg 
//3. Count movies (return length of array)

 function howManyMovies(movies) {
    return movies.filter(function (movie){
      return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    }).length;
  }


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
 function ratesAverage (moviesArr){
    if (!moviesArr.length) {
        return 0;
      }
    else {
    return moviesArr.reduce(function (total, movie){
        return total + movie.rate / 2
    }, 0)
    }
 }

// Iteration 4: Drama movies - Get the average of Drama Movies

//go over the array
//filter Drama Movies
//apply function above

function dramaMoviesRate(moviesArr){
    return ratesAverage (moviesArr.filter (function (movie){
        return  movie.genre.includes('Drama');
       }),
     )
} 



/* Note for TAs: I don't get how to return the rate of a single element array!
and for some reason: "should return the average of the array" is still an error.

ALso tried: 
 function dramaMoviesRate(moviesArr){
    let dramaMovie = moviesArr.filter (function (dramaMovie){
        return dramaMovie.genre.includes('Drama')
        })
    return ratesAverage (dramaMovie).toFixed(2)
    };
 */



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// For some reason I apparantly didn't return a new array

function orderByYear(moviesArr){
    let arrCopy = [...moviesArr];
    return moviesArr.sort (function (a,b){
        if (a.year > b.year) {
            return 1;
          } else if (a.year < b.year) {
            return -1;
          } else {
            const firstMovieTitle = a.title.toLowerCase();
            const secondMovieTitle = b.title.toLowerCase();
            if (firstMovieTitle > secondMovieTitle) {
              return 1;
            } else if (firstMovieTitle < secondMovieTitle) {
              return -1;
            } else {
              return 0;
            }
          }
        });
      }



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// loop over every title via sort
// create new array with only titles
// compare each title to one another and sort alphabetically
// print first 20 with string.slice 
// if length < 20 return all

function orderAlphabetically(moviesArr){
    return moviesArr.map(function (movie) {
        const orderedArr = {title: movie};
        return orderedArr.sort (function (a,b) {
            let firstMovieTitle = a.toLowerCase();
            let secondMovieTitle = b.toLowerCase();
                if (firstMovieTitle > secondMovieTitle) {
                  return 1;
                } else if (firstMovieTitle < secondMovieTitle) {
                  return -1;
                } else {
                  return 0;
                }
        })
    }); 
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
