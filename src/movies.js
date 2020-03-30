const film = require("./data")
/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


// let newArrayStringified = JSON.stringify(film);
// console.log(typeof newArrayStringified)
// let newArrayParsed = JSON.parse(newArrayStringified)
// console.log(newArrayParsed)
// console.log(typeof newArrayParsed)


function orderByTitle (newArray){
    newArray.sort (function(a,b){
        if (a.localeCompare(b) < 0 ){
            return 1;
        }
        else if (b.localeCompare(a)){
            return -1;
        }
        else {
            return 0;
        }
    })
}

// function orderByYear (array){
//     let newArray = [...array]
//     newArray.sort (function(a,b){
//         if  (a.year - b.year === 0){
//             return a.title.localeCompare(b.title)
//         } 
//         else {
//         return a.year - b.year 
//         }
//     } )
//     return newArray 
// }
// console.log(orderByYear(film))

// movies.sort(function (a,b){
//     return a.year - b.year
// })
//console.log(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    let sum=0;
    let spielbergMovies = array.filter(function(film) {
        if(film.director === "Steven Spielberg" && film.genre.includes('Drama')) {
            return true;
        } else {
            return false;
        }
    });
    return spielbergMovies.length;
}

console.log(howManyMovies(film))

// const Spielber = film.filter(function(director) {
//   if (film.squad === "Squad 0120") {
//     return true;
//   } else {
//     return false;
//   }
// });



//const howManyMovies = film.filter(director =>director==="Spielberg")






// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// function orderAlpha(array) {
//     let titles = array.map(function(movie){
//         return movie.title
//     })
//     return titles.sort().slice(20)
// }

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
