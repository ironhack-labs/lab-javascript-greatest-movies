/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    return [...movies].sort(function(movie1, movie2) {
      if (movie1.year === movie2.year) {
        if (movie1.title.localeCompare(movie2.title)) {
          return -1;
        } else {
          return 1;
        }
      } else if (movie1.year < movie2.year) {
        return -1;
      } else if (movie2.year > movie2.year) {
        return 1;
      }
    });
  }



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    return movies.filter(movie => movie.director.includes("Steven Spielberg") && movie.genre.includes("Drama")).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let alphabetic = [...movies].sort((a, b) => a.title - b.title).map(title => title.title).sort();
    return alphabetic.splice(0,20);
    
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length === 0) {return 0};
   let rate = movies.reduce((acumulator, value) => acumulator + value.rate, 0);
   let moviesLength = movies.length;
   let rateAverage = rate/moviesLength;
   return +(rateAverage.toFixed(2));

}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let moviesArray = [...movies];
    let dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    let rate = dramaMovies.reduce((acumulator, value) => acumulator + value.rate, 0);
    let moviesLength = movies.length;
    let rateAverage = rate/moviesLength;
    return +(rateAverage.toFixed(2));
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(movies) {
    [...movies].forEach(element =>  {
    let arrayduration = element.duration.split("");
    hours = +(arrayduration[0])*60;
    minutes = Number(arrayduration[4]) + Number(arrayduration[5]);
    element.duration = hours + minutes;  
    });
    return [...movies];
    }


// BONUS Iteration: Best yearly rate average - Best yearly rate average
