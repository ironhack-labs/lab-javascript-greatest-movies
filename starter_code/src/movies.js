/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear([...movies]) {
    movies.sort(function(a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
        });
        return movies;
    }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    let spielbergs = movies.filter(function (movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        }
    });
    return spielbergs.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically([...movies]) {
    let ordered = movies.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    let titles = ordered.map(function (movie) {
        return movie.title;
    });
    return titles.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(movies.length === 0) return 0;
    let rates = movies.reduce((acc, movie) => (acc + Number(movie.rate)),0);
    return Number((rates / movies.length).toFixed(2));
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(movie => movie.genre.find(gen => gen === 'Drama'))
    return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    let arr = movies.map(function(movie) {
      let minutes = movie.duration.split(' ').map(function(arrTime) { 
  
        let time = parseInt(arrTime);
  
        if (arrTime.endsWith('h')) {
          return time * 60;
        } else {
          return time;
        }
      }).reduce(function(acumulator, current) {
        return acumulator + current;
      }, 0);
      return Object.assign({}, movie, {duration: minutes});
    });
    return arr;
  }

// BONUS Iteration: Best yearly rate average - Best yearly rate average

