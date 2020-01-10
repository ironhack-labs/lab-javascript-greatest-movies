// eslint no - restricted - globals: 'off' 

const orderByYear = array => {
    let newArray = array.map(arr => arr).sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
    return newArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    const dramaSp = movies
        .filter(panchita => panchita.director === "Steven Spielberg" && panchita.genre.includes("Drama"))
    return dramaSp.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let copyMovies = [...movies]
    let pelis = copyMovies.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } else {
            return -1;
        }
    })
    return pelis.slice(0, 20).map(movie => movie.title);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if (movies.length === 0) return 0
    const newArray = movies.map(movie => {
        if (movie.rate > 0) {
            return movie.rate;
        } else {
            return 0;
        }
    });
    const rates = ((newArray.reduce((accum, rate) => accum + rate)) / movies.length).toFixed(2)
    return (1 * rates)
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = [];
    movies.map(movie => {
        if (movie.genre.includes("Drama")) {
            dramaMovies.push(movie);
        }
        return dramaMovies;
    });
    if (dramaMovies.length === 0) return 0;
    let averageRateDrama = dramaMovies.reduce((accum, currentValue) => {
        return accum + currentValue.rate;
    }, 0) / dramaMovies.length;
    return Number(averageRateDrama.toFixed(2));
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average