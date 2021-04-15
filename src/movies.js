// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
console.log(movies.length);
const getAllDirectors = (array) => {
    const directores = array.map((e) => {

        return e.director
    })

    return directores;
}

getAllDirectors(movies)
console.log(getAllDirectors(movies));
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


const howManyMovies = (arr) => ((arr.filter(e => e.director === "Steven Spielberg")).filter(e => e.genre.includes("Drama"))).length;
console.log(howManyMovies(movies));
howManyMovies(movies)

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (array) => {
    const promedios = array.reduce((acumulado, actual) => {

        if (actual.rate !== null && actual.rate !== '' && typeof actual.rate !== "undefined") {

            acumulado += actual.rate;

        }

        return acumulado;
    }, 0)
    if (promedios === 0) {
        return 0
    }
    let puntuacion = (promedios / array.length)

    return parseInt(puntuacion.toFixed(2))

}


// Iteration 4: Drama movies - Get the average of Drama Movies


const dramaMoviesRate = (arr) => {
    let newArr = [];
    arr.map(e => e.genre.includes('Drama') ? newArr.push(e) : newArr);
    let dramaRating = newArr.reduce((fin, movie) => movie.rate ? fin + movie.rate : fin, 0);
    return newArr.length ? Math.round(dramaRating / newArr.length * 100) / 100 : 0;
};


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

8
const orderByYear = (array) => {
    let fechas = []
    array.forEach((e) => {
        fechas.push(e.year)
    })
    fechas.sort((a, b) => b - a)
    console.log(fechas);
    return fechas
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
    let newArr = [...arr]; // USO DE SPREAD OPERATOR
    let sort = newArr.sort((a, b) => {
        return a.title > b.title ? 1 : a.title < b.title ? -1 : 0; // Operador ternario?
    });
    return sort.map(e => e.title).slice(0, 20);
};
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average