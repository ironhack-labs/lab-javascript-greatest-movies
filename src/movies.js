// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let alldirector = movies.map((movies) => movies.director);
    return alldirector;
  }


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    let moviesd = movies.filter((movies) => movies.director === "Steven Spielberg" && movies.genre.includes("Drama"));
    let thedramamovies = moviesd.length;

    return thedramamovies;

    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length === 0) {
      return 0
    }
    else { 
        let total=movies.map(function(a,b){
            return n*100;
        }).reduce(function(a, b){
            return a+(b || 0);
        });
        
        Math.round((total/movies.length))/100;
    }
   
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(movie => {
      if (movies.length === 0) {
            return 0
      }
          
      if (movie.genre.indexOf('Drama') > -1) {
        return true;
      }
       else if (movie.genre.includes('Drama')) {
        return true;
      }
    });
       if (dramaMovies.length) return 0;
        return dramaMoviesRate;
  }



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let gettheyears = [...movies];
    return gettheyears.sort((a, b) => {
      if (a.year > b.year) {
        return 1;
      } 
      else if (a.year < b.year) {
        return -1;
      } 
      else {
        let firstMovie = a.title;
        let secondMovie = b.title;
        if (firstMovie > secondMovie) {
          return 1;
        } 
        else if (firstMovie < secondMovie) {
          return -1;
        } 
        else {
          return 0;
        }
      }
    });
  }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (movies) {

    movies.sort(function(a, b){
        if (a.tittle > b.tittle){
            return 1;
        }
        else if (a.title < b.tittle){
            return -1
        }
        else{
            return 0;
        }
    })

}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
