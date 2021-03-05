// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    
    let directorsArray = movies.map(function(movie) {
        return movie.director;
      });
    return directorsArray;
    }        

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let spielbergDrama = movies.filter(function(movie){
      return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    });

    return spielbergDrama.length;
    }
    howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    let Avgrates = movies.reduce(function(acc, current){
        if (current.rate === "" || current.rate === undefined) {
            return acc;
        };
       return acc + current.rate / movies.length
    },0); 
  
  return Math.round(Avgrates * 100) / 100;
  }
  
  ratesAverage(movies)


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
   
    let AvgRatesDrama = dramaMovies.reduce(function(acc, current){ 
      return acc + current.rate / dramaMovies.length
    },0);
  
  
  return Math.round(AvgRatesDrama *100) / 100;
  }
  dramaMoviesRate (movies)

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let newMoviesArray = movies.map(function(movie) {
      return movie
      });
  
    let moviesByYear = newMoviesArray.sort(function(movie1, movie2) {
      return movie1.year - movie2.year
    });
  
  return moviesByYear;
  
  }

  orderByYear(movies)

  // ORDER BY TITLE IF YEAR IS THE SAME ??

//   function orderByYear(movies) {
//     let newMoviesArray= movies.map(function(movie) {
//       return movie
//       });
  
//     let moviesByYear = newMoviesArray.sort(function(movie1, movie2) {
//       if (movie1.year != movie2.year) {
//         return movie1.year - movie2.year
//       }
//      else {
//         return movie1.year - movie2.year && movie1.title > movie2.title
//      }
    
//     });
//     return moviesByYear

//     }

// orderByYear(movies)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let newMoviesArray = movies.map(function(movie) {
      return movie.title
    });
    
    newMoviesArray.sort() 

    return newMoviesArray.slice (0, 20);
  }
  
  orderAlphabetically(movies) 


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes () {

  
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
