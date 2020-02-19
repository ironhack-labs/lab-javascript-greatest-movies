/* eslint no-restricted-globals: 'off' */

// Example:
//     title: "The Shawshank Redemption",
//     year: 1994,
//     director: "Frank Darabont",
//     duration: "2h 22min",
//     genre: ["Crime", "Drama"],
//     rate: 9.3

// methods: map, reduce, filter and sort
let movies = require("./data");

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let resp = arr.slice();
    resp.sort((a,b) => {
        if (a.year === b.year) return a.title > b.title ? 1 : -1;
        return a.year > b.year ? 1: -1;
    })
    console.log(resp);
    return resp
}

 let out = orderByYear(movies);
 console.log(typeof out);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    return arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

let out2 = howManyMovies(movies);
console.log(out2, typeof out2);

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let resp = arr.slice();
    return resp.sort((a, b) => a.title > b.title? 1: -1).slice(0,20).map(movie => movie.title);
}

let out3 = orderAlphabetically(movies);
console.log(out3);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length === 0) return 0;
    const total = arr.filter(movie => movie.rate ).reduce((acc, movie) => {
        return acc += movie.rate;
    }, 0);
    return Number.parseFloat(( total / arr.length ).toFixed(2));
}

let out4 = ratesAverage(movies);
console.log(typeof out4);

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    if (arr.length === 0) return 0;
    // Copia para no afectar el original, y poder tener el número filtrado de elementos
    let temp = arr.slice().filter(movie => movie.rate && movie.genre.includes("Drama"));
    if (temp.length === 0) return 0;
    const total = temp.reduce((acc, movie) => {
        return acc += movie.rate;
    }, 0);
    return Number.parseFloat(( total / temp.length ).toFixed(2));
}

let out5 = dramaMoviesRate([
    { genre: ["Drama"], rate: 8 },
    { genre: ["Romance"], rate: 9 },
    { genre: ["Drama"], rate: 7 }
  ]);

  console.log(out5);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const test = [{
    "title":"The Shawshank Redemption",
    "year":1994,
    "director":"Frank Darabont",
    "duration":"2h 22min",
    "genre":["Crime","Drama"],
    "rate":9.3
  }];

function turnHoursToMinutes(arr) {
    return arr.map(movie => movie.duration = 1);
}

let out6 = turnHoursToMinutes(test);

console.log(out6[0]);

// BONUS Iteration: Best yearly rate average - Best yearly rate average
