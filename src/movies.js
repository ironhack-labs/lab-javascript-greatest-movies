// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(array) {
    const directorAll = array.map(function(movie) {
      return movie.director;
      })
        return directorAll
      }

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    const SpielbergMovies = array.filter(function(steven){
      if (steven.director == 'Steven Spielberg' && steven.genre.includes("Drama")) {
          
          return steven.director.length
    };
    });
    //console.log(SpielbergMovies);
    return SpielbergMovies.length;
  }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function movieRed(total, movie) {
    if (movie.rate) {
      return total + movie.rate;
    } else {
        return total;
    }
  }
function ratesAverage(arr) {
    if (arr.length === 0) {
      return 0;
    }
    const totalRates = arr.reduce(movieRed, 0);

    //console.log(totalRates);
    return +(totalRates / arr.length).toFixed(2);
  } 
//   const avg = ratesAverage([1,2,3])

// Iteration 4: Drama movies - Get the average of Drama Movies
// You should return a number!
// Return the rate of a single element array!
// It should return the average of the array!
// It should return the average of the array, float!
// Only Drama Movies! You should return the average of Drama movies only!
// Should return 0 if there is no Drama movie!
function dramaMoviesRate(arr1){
    // get only the drama movies
    const dramaMovies = arr1.filter(function(movie){
        if (movie.genre.includes('Drama')){
            return true;
        }
        return false;
    });
    const dramaAvr = ratesAverage(dramaMovies);
    return dramaAvr;
}

// console.log("Return the rate of a single element array", dramaMoviesRate([{"genre": ["Drama"], "rate": 7}]) === 7);




// function dramaMoviesRate(movies) {
//     const dramaMovies = movies.filter(function(movie){
//         //console.log(movie)
//         return movie.genre.includes('Drama')
//     })
//         //console.log(dramaMovies);
//     if (!dramaMovies.length) return 0;

//     return ratesAverage(dramaMovies)
// }


    
  
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
// create a copy of the original array
const sortedByYear = movies.slice();
// sort fuction on the new array
 sortedByYear.sort(function(a, b){
      if(a.year < b.year) return -1; 
      if(a.year > b.year) return 1;
      
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    });
    // console.log(sortedByYear);
//return new array sorted by year
    return sortedByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr2) {
    const alpha = arr2.map(function(movie){
        return movie.title;
    });
    alpha.sort();
    return alpha.slice(0, 20);

    // return arr2
    //     .map(m => m.title)
    //     .sort()
    //     .slice(0, 20);
}
orderAlphabetically(movies);
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// function fixDuration(originalMovie) {
//     const movie = Object.assign ({}, originalMovie);

//     const d = movie.duration.split(' ');
//     // if d contains 2 elements, we know how to parse them
//     let hToMinutes;
//     if (d.length == 2) {
//         hToMinutes = parseInt(d[0]) * 60 + parseInt(d[1]);
//     } else {
//         // if d[0] ends with "h" then parse it as hours
//         if (d[0].endsWith("h")){
//             hToMinutes = parseInt(d[0]) * 60;
//         } else {
//         // else parse it as minutes
//         hToMinutes = parseInt(d[0]);
//         }
//     }

//     movie.duration = hToMinutes;
//     // else we need to check for the 1 element, if it ends with "h" or "min"
//     // and parse accordingly.
//     return movie;
// }

function turnHoursToMinutes(movies){
        //map the original array
    const moviesMinutes = movies.map(function fixDuration(originalMovie) {
        const movie = Object.assign ({}, originalMovie);
    
        const d = movie.duration.split(' ');
        // if d contains 2 elements, we know how to parse them
        let hToMinutes;
        if (d.length == 2) {
            hToMinutes = parseInt(d[0]) * 60 + parseInt(d[1]);
        } else {
            // if d[0] ends with "h" then parse it as hours
            if (d[0].endsWith("h")){
                hToMinutes = parseInt(d[0]) * 60;
            } else {
            // else parse it as minutes
            hToMinutes = parseInt(d[0]);
            }
        }
    
        movie.duration = hToMinutes;
        // else we need to check for the 1 element, if it ends with "h" or "min"
        // and parse accordingly.
        return movie;
    });
    // console.log(movies);
    return moviesMinutes;
} 
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
