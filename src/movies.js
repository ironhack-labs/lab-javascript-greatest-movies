/* eslint no-restricted-globals: 'off' */
//General functions
//Clone Array
function cloneArray(pelis) {
    return JSON.parse(JSON.stringify(pelis));
}


// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(pelis) {
    let pelisYear = cloneArray(pelis);
    return pelisYear.sort((peliA, peliB) => peliA.year < peliB.year ? -1 : peliA.year === peliB.year ? peliA.title < peliB.title ? -1 : 0 : 0);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(pelis) {
    let pelisSpielberg = cloneArray(pelis);
    return pelisSpielberg.filter(peliA => peliA.director === "Steven Spielberg" && peliA.genre.includes("Drama")).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(pelis) {
    let pelisAlphabetically = cloneArray(pelis);
    return pelisAlphabetically.sort((peliA, peliB) => peliA.title.toUpperCase() < peliB.title.toUpperCase() ? -1 :
            peliA.title.toUpperCase() > peliB.title.toUpperCase() ? 1 : 0)
        .map(peli => peli.title).slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(pelis) {
    let pelisAverage = cloneArray(pelis);
    return (pelisAverage.length === 0 ? 0 :
        parseFloat((pelisAverage.reduce((acc, peli) => peli.hasOwnProperty('rate') && peli.rate != undefined ? acc + peli.rate : acc, 0) /
            pelisAverage.length).toFixed(2)));
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(pelis) {
    let pelisAverage = cloneArray(pelis);
    let pelisDrama = pelisAverage.filter(peliA => peliA.genre.includes("Drama"));
    return (pelisDrama.length === 0 ? 0 : parseFloat((pelisDrama.reduce((acc, peli) => peli.hasOwnProperty('rate') && peli.rate != undefined ?
        acc + peli.rate : acc, 0) / pelisDrama.length).toFixed(2)));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(pelis) {
    let pelisHours2Minutes = cloneArray(pelis);
    return pelisHours2Minutes.map(peli => {
        let hourIndex = peli.duration.indexOf("h");
        let minIndex = peli.duration.indexOf("m");
        peli.duration = parseInt(hourIndex != -1 ? peli.duration.substring(0, hourIndex) * 60 : 0) +
            parseInt(minIndex != -1 ? peli.duration.substring(hourIndex + 1, minIndex) : 0);
        return {
            duration: peli.duration
        };
    });
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average

//Reutilizo la función para encontrar el average total, esta vez por año

function YearMoviesRate(pelis, year) {
    let pelisYear = pelis.filter((peliA => peliA.year === year));
    if (pelisYear.length === 0) {
        return 0;
    }
    let total = pelisYear.reduce((acc, peli) => peli.hasOwnProperty('rate') && peli.rate != undefined ? acc + peli.rate : acc, 0);
    let rate = parseFloat((total / pelisYear.length).toFixed(2));
    return {
        greatYear: year,
        rate: rate
    }
}

//Reutilizo la función para ordenar, esta vez por rate

function orderByRate(years) {
    console.log(years);
    return years.sort((yearA, yearB) => yearA.rate > yearB.rate ? 1 : yearA.rate < yearB.rate ? -1 : yearA.rate === yearB.rate ? yearA.greatYear > yearB.greatYear ? -1 : 0 : 0);

}

function bestYearAvg(pelis) {
    let pelisAllYears = cloneArray(pelis);
    if (pelisAllYears.length === 0) {
        return null;
    }
    const years = pelisAllYears.map(peli => peli.year);
    //Array de años únicos de las películas
    let uniqueYears = [...new Set(years)];
    //Calculo el average por año único
    uniqueYears = uniqueYears.map(year => YearMoviesRate(pelisAllYears, year));
    //ordeno por rate los años
    let orderRates = orderByRate(uniqueYears);
    return `The best year was ${orderRates[orderRates.length - 1].greatYear} with an average rate of ${orderRates[orderRates.length - 1].rate}`;
}