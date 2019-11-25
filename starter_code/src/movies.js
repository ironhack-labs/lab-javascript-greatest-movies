/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
  let sortedMovies = [...moviesArr];
  return sortedMovies.sort(function(a, b) {
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(moviesArr) {
  return moviesArr.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {
  let titles = moviesArr.map(function(movie) {
    return movie.title;
  });
  titles.sort();
  return titles.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArr) {
  if (moviesArr.length === 0) return 0;
  let sumOfRates = moviesArr.reduce(function(total, movie) {
    if (typeof movie.rate == "number") {
      return total + movie.rate;
    } else {
      return total;
    }
  }, 0);
  /*let numberOfRates = moviesArr.reduce(function(total, movie) {
    if (typeof movie.rate == "number") {
      return total + 1;
    } else {
      return total;
    }
  }, 0);*/

  return +(sumOfRates/moviesArr.length).toFixed(2)
}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr){
    if (moviesArr.length === 0) return 0;
    let sumOfRates = moviesArr.reduce(function(total, movie) {
      if (typeof movie.rate == "number" && movie.genre.includes("Drama")) {
        return total + movie.rate;
      } else {
        return total;
      }
    }, 0);
    let numberOfDramas = moviesArr.reduce(function(total, movie) {
      if (movie.genre.includes("Drama")) {
        return total + 1;
      } else {
        return total;
      }
    }, 0);
    if (numberOfDramas === 0) return 0

  
    return +(sumOfRates/numberOfDramas).toFixed(2)
  }

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr){

    return moviesArr.map(function(movie){
        console.log(" duration " +  movie.duration);
        let hours = (movie.duration.includes("h")) ? 
                         movie.duration.split("h")[0] : 0;
        let minutes = (movie.duration.includes("min")) ? 
                         movie.duration.split("min")[0].split(" ")[1] :0;
        
        movie.duration = hours*60 + minutes;
       
        console.log(" hours " + hours + "minutes " + minutes );

        return movie
    })
}
turnHoursToMinutes(movies);
// BONUS Iteration: Best yearly rate average - Best yearly rate average
