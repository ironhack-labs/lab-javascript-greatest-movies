// Iteration 1: All directors? - Get the array of all directors.

// getAllDirectors(movies);

function getAllDirectors(movies) {
    return movies.map((movie) => movie.director)
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

const directors = getAllDirectors(movies)
const UniqueDirectors = directors.reduce((result, director) => {
    if (!result.includes(director)) {
        result.push(director)
    }
    return result
}, [])

console.log(UniqueDirectors);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


// function howManyMovies(movies) {
  
//   let moviesStevenSpielberg = movies.filter(function(movie){
//     return movie.director === "Steven Spielberg";
//   })
//   const moviesDramas = moviesStevenSpielberg.filter(function(movie){
//     return movie.genre.includes("Drama");
//   })

//   return moviesDramas.length;

// }

// console.log(howManyMovies(movies));

function howManyMovies(movies) {
    return movies
      .filter((movie) => movie.director === "Steven Spielberg")
      .filter((movie) => movie.genre.includes("Drama"))
      .length
}
console.log(howManyMovies(movies));



// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function round(number, decimals) {
    return parseFloat(number.toFixed(decimals))
}

function ratesAverage(movies) {
    const rates = movies.map((movie) => movie.rate || 0);

    const sum = rates.reduce((acum,rate) => acum + rate, 0);
    const avg = sum / rates.length;

    return round(avg, 2) || 0 ; //En el caso que el resultado no sea un numero, devolvemos 0.
}

console.log(ratesAverage(movies));


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const moviesDrama = movies.filter((movie) => movie.genre.includes("Drama"))
    return ratesAverage(moviesDrama);
}

console.log(dramaMoviesRate(movies));



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const newArrayYear = [...movies].sort((a,b) => {
        if(a.year > b.year){
            return 1;
        } else if(a.year < b.year){
            return -1
        } else {
            if(a.title && b.title) {
            return a.title.toUpperCase().localeCompare(b.title.toUpperCase())
            } else {
            return 0
            }
        }
    })
    return newArrayYear;
}
console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const newArrayTitle = [...movies]
    .sort((a,b) => a.title > b.title ? 1 : (a.title < b.title ? -1 : 0))
    .map((movie) => movie.title)
    .slice(0,20)

    return newArrayTitle;

}
console.log(orderAlphabetically(movies));


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
