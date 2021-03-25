// Iteration 1: All directors? - Get the array of all directors.

let getAllDirectors = (movies) => movies.map((el) => {
    return el.director;
})

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
   return movies.filter(el=>el.director === "Steven Spielberg" && el.genre.includes("Drama")).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function  ratesAverage (movies) {
    let rates = movies.reduce((acc, singleMovie) => {
        acc += singleMovie.rate / movies.length;
        return acc;
    }, 0)
    return rates.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let dramaMovies = movies.filter(movieDrama=>movieDrama.genre.includes("Drama"));
    let ratesDrama = dramaMovies.reduce((acc, singleDramaMovie) =>{
        acc += singleDramaMovie.rate / dramaMovies.length;
        return acc;
    },0)
    return ratesDrama.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

let orderByYear = (movies) => movies.sort((movieYear1, movieYear2) => {

    return movieYear1.year - movieYear2.year;
});

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
