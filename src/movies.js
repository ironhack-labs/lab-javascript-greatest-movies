// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    // return moviesArray.map(movie => movie.director);
    let newArray = moviesArray.map(movie => movie.director).filter((director, index) => moviesArray.map(movie => movie.director).indexOf(director) === index);
    //console.log(newArray);
    return newArray;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let arrayFiltrado = moviesArray.filter(movieArray => { return movieArray.genre.includes("Drama") && movieArray.director === "Steven Spielberg" });
    //console.log(arrayFiltrado);
    return arrayFiltrado.length;
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    console.log(moviesArray, moviesArray.length)
    arrayFilt = moviesArray.map((movie) => movie.score);
    let suma = arrayFilt.reduce((acumulador, elemento) => {
        if(elemento) acumulador += elemento;
        return acumulador;
    },0);
    let promedio = suma / moviesArray.length;
    console.log(arrayFilt.length)
    return Math.round(promedio * 100) / 100;
    
 
//     if (moviesArray.length === 0) {
//     return 0;
// }
// let suma = moviesArray.reduce((acumulador, elemento) => {
//     if(elemento.score) acumulador += elemento.score;
//     return acumulador;
// }, 0);
// let promedio = suma / moviesArray.length;
// return Math.round(promedio * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let arrayFiltrado = moviesArray.filter(movieArray => movieArray.genre.includes("Drama"));
    //console.log(arrayFiltrado);
    if (arrayFiltrado.length === 0) {
        return 0;
    }
    arrayFilt = arrayFiltrado.map(movie => movie.score);
    //console.log(arrayFilt);
    let suma = arrayFilt.reduce((acumulador, elemento) => {
        acumulador += elemento;
        return acumulador;
    });
    let promedio = suma / arrayFilt.length;
    return Math.round(promedio * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let newArray = moviesArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        }
    });
    //console.log(newArray);
    return newArray.slice();
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = moviesArray.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        } else {
            if (a.year > b.year) {
                return 1;
            } else if (a.year < b.year) {
                return -1;
            } else {
                return 0;
            }
        }
    });
    //console.log(newArray);
    return newArray.slice(0, 20).map(pelicula => pelicula.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let arrayModificado = moviesArray.map((pelicula) => {
        let horas = pelicula.duration.split("h")[0];
        let minutos = pelicula.duration.split("h")[1].split("min")[0];
        pelicula.duration = parseInt(horas) * 60 + parseInt(minutos);
        return pelicula;
    })
    //console.log(arrayModificado);
    return arrayModificado;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const yearScore = moviesArray.map((pelicula) => {
        return {
            year: pelicula.year,
            score: pelicula.score
        }
    });
    //console.log(yearScore);
    let years = yearScore.filter((year, index) => { yearScore.year.indexOf(year) === index })
    console.log(years);
}
