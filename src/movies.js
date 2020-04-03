/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = arrToOrder => {
    //Copiamos el array con el metodo .from() para no modificar el original.
    let moviesCopy = Array.from(arrToOrder).sort(function (a, b) {
        // Ordenamos por year en descendente.
        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        // Si la propiedad year es igual, ordenamos por title.
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    });
    return moviesCopy
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = moviesArr => {
    return moviesArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}
/*const howManyMovies = moviesArr => {
    if (!moviesArr.length) {
        return 0;
    }
    if (!moviesArr.filter(movie => movie.genre.includes('Drama'))) {
        return 0
    } else {
        return 1
    }

    return 0
    
}*/

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average


