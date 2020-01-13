/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arr) {
    
    const movieYear = arr.slice().sort(function(a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year;
    })

    return movieYear;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies (arr) {
    let dramaMovies = 0;
    arr.filter(function(type){
        if (type.director === "Steven Spielberg" && type.genre.includes("Drama")) {
            dramaMovies += 1;
        }
    })
    return dramaMovies;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {
    const movieNames = arr.slice().sort(function(a, b) {
        return a.title.localeCompare(b.title);
    })
    .map(function(movieTitle){
        return movieTitle.title;
    })
    return movieNames.slice(0,20);
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arrAvg) {
    if(arrAvg.length == 0){
        return 0}
    let sum = arrAvg.
    reduce(function(acc, value) {
        if(value.rate){
            return acc + value.rate
        }

        return 0+acc
        
    },0)
    let average = sum / arrAvg.length;

    console.log(average)
    return Number(average.toFixed(2))
    };


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (arrAvg) {
    let dramas = arrAvg.filter(function(movie) {
        if (movie.genre.indexOf("Drama") > -1) {
          return true;
        }
      });
      return ratesAverage(dramas);
    }
    

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes (arr) {
    function minutes(string) {
        let minutesTemplate = string.split(" ");
    
        let time = 0;
    
        minutesTemplate.forEach(function(duration) {
          if (duration.includes("h")) {
            time += parseInt(duration) * 60;
          }
          if (duration.includes("m")) {
            time += parseInt(duration);
          }
        });
    
        return time;
      }
    
      let moviesInMinutes = arr.map(function(movie) {
        return {
          ...movie,
          duration: minutes(movie.duration)
        };
      });
    
      return moviesInMinutes;
    }
// BONUS Iteration: Best yearly rate average - Best yearly rate average
