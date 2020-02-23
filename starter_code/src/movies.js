/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = dt => 
 dt.slice()
 .sort((a, b) => a.year != b.year ? 
 a.year - b.year : 
 a.title < b.title ? 
 -1 : 
 1);

 // Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = dt => dt
.filter(film => film.director == "Steven Spielberg" && film.genre.includes("Drama")).length

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = dt => [...dt]
.map( a => a.title)
.filter(a => typeof a == "string")
.sort((a, b) => a < b ? -1 : 1)
.slice(0, 20);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = dt => 
    Number((dt.length == 0 ? 
    0 : 
    dt.filter(a => a.rate)
    .map( obj => obj.rate)
    .reduce((a, b) => a + b)/dt.length)
    .toFixed(2));
