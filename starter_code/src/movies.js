const peliculas = require("./data");

/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
  moviesArr.sort((a, b) => {
    return a.year - b.year ? a.year - b.year : b.title < a.title ? 1 : -1;
  });
  var arr = [...moviesArr];
  return arr;
}

orderByYear(peliculas);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArr) {
  return moviesArr.filter(
    a => a.director == "Steven Spielberg" && a.genre.includes("Drama")
  ).length;
}

// console.log(howManyMovies(peliculas));

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArr) {
  return moviesArr
    .map(movie => movie.title)
    .sort()
    .splice(0, 20);
}

orderAlphabetically(peliculas);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr){
    if(moviesArr.length==0){return 0;}
    const finalRate = moviesArr.map(movie => movie.rate? movie.rate:0).reduce((acc,currentRate) => {return acc + currentRate;})/moviesArr.length;
    return Math.round(finalRate*100)/100;
}

ratesAverage(peliculas);

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr){
    const dramaMovies = moviesArr.filter(a => a.genre.includes("Drama"));
    if(dramaMovies.length == 0){return 0;}
    const dramaMoviesRate = dramaMovies.map(movie => movie.rate? movie.rate:0).reduce((acc,currentRate) => acc + currentRate)/dramaMovies.length;
    return Math.round(dramaMoviesRate*100)/100;
}

dramaMoviesRate(peliculas);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArr){
    const moviesMinutes = moviesArr.map(a => a.duration).map(b => (b.substring(0,b.indexOf('h'))*60) + Number(b.substring(b.indexOf(' '),b.indexOf('m'))));
    const newMoviesArr = moviesArr.map(a =>  ({...a, duration: moviesMinutes[moviesArr.indexOf(a)]})
    )
    return newMoviesArr;
    }


turnHoursToMinutes(peliculas);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

// function bestYearAvg(moviesArr) {
//   var years = [];
//   var yearsUnique = moviesArr.map(a => years.includes(a.year)? "": years.push(a.year));
//   console.log(years);
//   // moviesArr.filter (a => a.year = years.map(b => b)? += a.rate)
//   ;
// }

// bestYearAvg(peliculas);