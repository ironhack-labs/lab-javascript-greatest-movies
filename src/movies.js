/* eslint no-restricted-globals: 'off' */
'use strict';


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
//Devolvemos las movies en una sola linea con arrow function y .filter()
const howManyMovies = moviesArr => moviesArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = moviesArr => {
    //Copiamos array original y ordenamos alfabeticamente
    let newArr = Array.from(moviesArr).sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
    })
    //Hacemos un return de los titles con .map() y de los 20 primeros con .slice()
    return newArr.map(a => a.title).slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// La iteracion comienza analizando si el array introducido contiene datos.
// Si es false, devuelve 0
// Si es true, devuelve el rating de todas las peliculas (map) filtrado para que no haya datos invalidos (filter - ratio > 0) y reducido con reduce.

const ratesAverage = moviesArr => !moviesArr.length ? 0 : Math.round(moviesArr.map(a => a.rate).filter(ratio => ratio > 0).reduce((acc, elem) => acc + elem, 0) / moviesArr.length * 100) / 100;


// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = moviesArr => {
    //Almacenamos en dramaMovies las peliculas filtradas para que solo tengan genero 'Drama' y devolvemos unicamente el rate
    let dramaMovies = moviesArr.filter(movie => movie.genre.includes('Drama') && movie.genre.length === 1).map(a => a.rate);
    //Almacenamos la media de dramaMovies y reducimos a 2 decimales
    let newArr = Math.round(dramaMovies.reduce((acc, elem) => acc + elem,0) /dramaMovies.length * 100) / 100;
    //Devolvemos newArr si contiene datos para eliminar la posibilidad de que entre un array vacio
    return !newArr ? 0 : newArr;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average


