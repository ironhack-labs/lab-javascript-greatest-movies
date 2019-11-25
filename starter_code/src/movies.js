/* eslint no-restricted-globals: 'off' */
const moviesMy = require("./data.js");
// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArr){
    return movieArr.slice().sort(function(a, b){
        if (a.year < b.year){
            return - 1;
        }else if (b.year < a.year){
            return 1;
        }else{
          return a.title.localeCompare(b.title);       
        }
    });
 };

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movieArr){  
    return movieArr.filter(function (movie) {
      if ((movie.director === "Steven Spielberg")&&(movie.genre.includes("Drama"))) {
        return movie;
      }
    }).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr) {
    return movieArr.slice().sort(function (a, b) {
      return a.title.localeCompare(b.title);
    }).slice(0,20).reduce(function(acc, val, index, arr) {
      if (index < arr.length-1) {
        return acc += val.title + "|";
      }
      else {
        return acc += val.title;
      }
    },"").split("|");
  }

//solution by Marco
//function orderAlphabetically(movieArr) {
//  return movieArr.slice().map(movieArr=>movieArr.title).sort().slice(0,20);
//}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movieArr) {
  return movieArr.slice().reduce(function (acc, val, index, arr) {
    if (val.hasOwnProperty("rate") === false) {
      val.rate=0;
    }
    if (val.rate === '') {
        val.rate=0;
      }
    if (index < arr.length-1) {
      return acc += val.rate;
    }
    else{
      return Math.round(((acc += val.rate)/(arr.length))*100)/100;
    }    
  },0);
}
console.log(ratesAverage(movies));

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr) {
    return moviesArr.slice().filter(function(movie) {
      if (movie.genre.includes("Drama")) {
        return movie;
      }    
    }).reduce(function (acc, val, index, arr) {
      if (index < arr.length-1) {
        return acc += val.rate;
      }
      else{
        return Math.round(((acc += val.rate)/(arr.length))*100)/100;
      }    
    },0);
  }
console.log(dramaMoviesRate(movies));

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
    return newArr = moviesArr.map(function(movie) {
      let h_dur = movie.duration.indexOf("h");
      let m_dur = movie.duration.indexOf("m");
      let result = 0;
      if (movie.duration.indexOf("h") > 0){
        //console.log(movie.duration.substr(0, movie.duration.indexOf("h"))*60);
        result = Number(movie.duration.substr(0, movie.duration.indexOf("h"))*60);
      }
      if (movie.duration.indexOf("m") > 0) {
        result += Number(movie.duration.substr(movie.duration.indexOf(" ")+1, (movie.duration.indexOf("m"))-(movie.duration.indexOf(" ")+1)));
      }
      return {...movie, duration: result };
    })
}
console.log(turnHoursToMinutes(movies));

// BONUS Iteration: Best yearly rate average - Best yearly rate average
