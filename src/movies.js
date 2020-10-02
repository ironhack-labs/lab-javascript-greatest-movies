// Iteration 1: All directors? - Get the array of all directors.


function getAllDirectors(movies){
    let primero = movies.map(function (nameDirectors){
        return nameDirectors.director
    })
return primero
};



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
let dramaSteven = movies.filter (function (check){
        return (check.genre.includes("Drama") && check.director === "Steven Spielberg");
});
return dramaSteven.length};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0){
        return 0
    }

let avgRate = 
movies.reduce(function (sum, movie) {
if (movie.rate) {
    return sum + movie.rate;
} else {
    return sum;
}
},0) / movies.length;
return Math.round (avgRate * 100) / 100;
}
console.log(ratesAverage(movies));    


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (movies){
    let dramaSteven = movies.filter (function (check){
            return (check.genre.includes("Drama"));
    });
    return dramaSteven.length};

//

function dramaAverage(movies) {
    if (movies.length === 0){
        return 0
    }

let draRate = 
movies.reduce(function (sum, movie) {
if  ( movie.genre = "Drama") {
    return sum + movie.rate;
} else {
    return sum;
}
},0) / movies.genre.length;
return Math.round (draRate * 100) / 100;
}
console.log(dramaAverage(movies));   

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


    movies.sort (function (a,b){
        if (a.year > b.year) {
          return 1;
        }
        if (a.year < b.year) {
          return -1;
        }
        return 0;
      });


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(){

    
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
