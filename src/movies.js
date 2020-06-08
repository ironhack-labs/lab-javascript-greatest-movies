// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {

    const directors = movies.map(elm => {
        return elm.director
    })

    return directors
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    const result = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes("Drama")).length
    return result
}




// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {


    if (movies.length == 0) {
        return 0;
    }
    const total = movies.reduce((accu, elm) => {
        return accu + (elm.rate || 0)
    }, 0);
    return Math.round(total / movies.length * 100) / 100;

}



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const newArr = movies.filter(elem => {
        return elem.genre.includes("Drama")
    }, )

    const total = movies.reduce((accu, elm) => {
        return accu + elm.genre.includes("Drama")
    }, 0);

    return Math.round(total / movies.length * 100) / 100;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average