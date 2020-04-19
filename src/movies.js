/* eslint no-restricted-globals: 'off' */

function orderNames(a, b) {
    if (a.title < b.title) {
        return -1;
    } else if (a.title > b.title) {
        return 1;
    } else {
        return 0;
    };
};

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies) {
    let copyMovies = Array.from(arrMovies);

    function orderYear(a, b) {
        return a.year - b.year;
    };

    copyMovies.sort(orderNames);
    return copyMovies.sort(orderYear);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arrMovies) {
    let copyMovies = Array.from(arrMovies);

    let directorFilter = copyMovies.filter(function (arrDirector) {
        return arrDirector.director === "Steven Spielberg" && arrDirector.genre.includes("Drama");
    });
    return directorFilter.length;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrMovies) {
    let copyMovies = Array.from(arrMovies);
    return copyMovies.sort(orderNames).slice(0, 20).map(arr => arr.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arrMovies) {
    if (arrMovies.length === 0) {
        return 0;
    };

    let copyMovies = Array.from(arrMovies);

    let rates = copyMovies.filter(film => "rate" in film).reduce((sum, film) => {
        return sum + film.rate;
    }, 0);

    return Math.round(rates / copyMovies.length * 100) / 100;
};

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arrMovies) {

    let dramaMovies = Array.from(arrMovies);

    dramaMovies = dramaMovies.filter(film => film.genre.includes("Drama"));

    if (dramaMovies.length === 0) {
        return 0;
    };

    let dramaRates = dramaMovies.reduce((sum, film) => {
        return sum + film.rate;
    }, 0);

    return Math.round(dramaRates / dramaMovies.length * 100) / 100;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arrMovies) {
    let copyMovies = Array.from(arrMovies);

    let timeFormat = copyMovies.map(film => {
        switch (film.duration.length) {
            case 8:
                return {
                    duration: film.duration[0] * 60 +
                        parseInt(film.duration.slice(-5, -3))
                };

            case 7:
                return {
                    duration: film.duration[0] * 60 +
                        parseInt(film.duration.slice(-4 - 3))
                };

            case 2:
                return {
                    duration: film.duration[0] * 60
                };

            default:
                return {
                    duration: parseInt(film.duration.slice(0, 2))
                };
        };
    });
    return timeFormat;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arrMovies) {

    // Definición de dos condiciones específicas en caso que la array tenga 0 o 1 item
    if (!arrMovies.length) {
        return null;
    } else if (arrMovies.length === 1) {
        return `The best year was ${arrMovies[0].year} with an average rate of ${arrMovies[0].rate}`;
    };

    // Deep copy del objeto para no modificar el original
    const copyMovies = JSON.parse(JSON.stringify(arrMovies));

    // Ordenar por año para hacer el loop y que sume los ratings hasta que cambie el .year
    copyMovies.sort((a, b) => a.year - b.year);

    // Definición de un array sumatorio donde almacenar todos los objetos del mismo año para hacer la media con el loop 
    let arrSummatory = [];
    // Definición de un array que en el loop llenaremos con objetos con el año y la media de rate
    const resultYearAvg = [];

    // Definimos el primer caso (primer item del array)
    arrSummatory.push(copyMovies[0]);

    // Loopeamos por la copia del array de objetos dado
    for (let i = 1; i < copyMovies.length; i++) {
        // Comprovamos que el objeto siguiente al array tenga el mismo .year que el que hemos hecho push en el caso 0
        if (copyMovies[i].year === arrSummatory[0].year) {
            // En caso de que lo sea, le hacemos push al objeto al array sumatorio y continuamos con la siguiente iteración
            arrSummatory.push(copyMovies[i]);
        } else {
            // Si el siguiente objeto no tiene el mismo año, hacemos una suma de todos los valores de rate de los objetos del array sumatorio 
            const rating = arrSummatory.reduce((sum, arrYear) => {
                return (sum + arrYear.rate);
            }, 0);
            // Hacemos un push de un objeto al array de objetos con el año y la media del rate iniciado
            resultYearAvg.push({
                year: arrSummatory[0].year,
                // Hacemos la media de la suma de los rates con la longitud del array sumatorio
                rate: Math.round(rating / arrSummatory.length * 10) / 10
            });

            // Reseteamos el array sumatorio y lo inicializamos con el valor de copyMovies[i] para empezar con el loop del siguiente año
            arrSummatory = [];
            arrSummatory.push(copyMovies[i]);
            i--;
        }
    };

    // Ordenamos los años por media de rate y retornamos el string con los primeros valor del array creado con objetos con año y rate
    resultYearAvg.sort((a, b) => b.rate - a.rate);
    return `The best year was ${resultYearAvg[0].year} with an average rate of ${resultYearAvg[0].rate}`;
};