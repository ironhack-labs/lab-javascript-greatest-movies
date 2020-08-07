// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(peliculas) {
    const directors = peliculas.map(function(pelicula) {
            return pelicula.director;
        })
        // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
    return directors.filter((director, index) => directors.indexOf(director) == index)
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(peliculas) {
    return peliculas.filter(pelicula => (pelicula.director === "Steven Spielberg" && pelicula.genre.indexOf("Drama") > -1)).length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(peliculas) {
    if (!peliculas.length) return 0
    let sum = 0;
    peliculas.forEach(function(pelicula) {
        if (pelicula.rate)
            sum += pelicula.rate
    })
    return parseFloat((sum / peliculas.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(peliculas) {
    const dramaMovie = peliculas.filter(pelicula => (pelicula.genre.indexOf("Drama") > -1))
    return ratesAverage(dramaMovie)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(peliculas) {
    const sortedPeliculas = [...peliculas];
    sortedPeliculas.sort((a, b) => {
        if (a.year - b.year)
            return a.year - b.year
        else {
            if (a.title < b.title) return -1
            else if (a.title > b.title) return 1
            else return 0
        }
    })
    return sortedPeliculas
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(peliculas) {
    const sortedPeliculas = [...peliculas];
    let tituloPeliculas = sortedPeliculas.map(function(pelicula) {
        return pelicula.title
    })
    tituloPeliculas.sort((a, b) => {
        if (a < b) return -1
        else if (a > b) return 1
        else return 0
    })
    if (tituloPeliculas.length > 20) {
        tituloPeliculas = tituloPeliculas.slice(0, 20)
    }
    return tituloPeliculas
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    const copyMovies = JSON.parse(JSON.stringify(movies))
    const newMovies = copyMovies.map(movie => {
        const duration = movie.duration;
        let hoursInMin = 0;
        let minInMin = 0;
        if (duration.includes("h")) {
            hoursInMin = parseInt(duration.slice(0, duration.indexOf("h"))) * 60;
        }
        if (duration.includes("min") && duration.includes("h")) {
            minInMin = parseInt(duration.slice((duration.indexOf("h") + 2), duration.indexOf("min")));
        } else if (duration.includes("min") && !duration.includes("h")) {
            minInMin = parseInt(duration.slice(0, duration.indexOf("min")));
        }
        movie.duration = hoursInMin + minInMin
        return movie
    })
    return newMovies;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) return null;
    else if (movies.length === 1) return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`;
    const years = [];
    movies.forEach(el => {
        if (!years.includes(el)) years.push({ year: el.year, rates: [] })
    })
    movies.forEach(el => {
        for (let i = 0; i < years.length; i++) {
            if (el.year === years[i]) years[i].rates.push[el.rate]
        }
    })
    years.forEach(el => el.averageRate = el.rates.reduce((a, b) => a + b) / el.rates.length);
    const bestYear = years.filter((a, b) => {
        if (a.averageRate != b.averageRate) return Math.max(a.averageRate, b.averageRate);
        else return Math.min(a.year, b.year)
    })
    return `The best year was ${bestYear.year} with an average rate of ${bestYear.averageRate}`
}