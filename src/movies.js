// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(movie => movie.director)
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function cleanDirectors(movies) {
    const allDirectors = movies.map(movie => movie.director);
    const directorsWithoutDuplicates = new Set(allDirectors);
    return [...directorsWithoutDuplicates];
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let filtered = movies.filter( movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama") );
    return filtered.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    let averageRate = movies.filter( movie => movie.rate).reduce((acc, movie) => movie ? acc + movie.rate : false ,0) / movies.length; 
    return Number(averageRate.toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter( movie => movie.genre.includes("Drama"));
    if (dramaMovies.length === 0) return 0;
    const dramaAverage = dramaMovies.reduce((acc, movie) => acc + movie.rate, 0) / dramaMovies.length;
    return Number(dramaAverage.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    if (movies.length === 0) return [];
    const sortedMovies = movies.sort((a,b) => {
        if(a.year > b.year) return 1;
        if(a.year === b.year) {
            if(a.title > b.title) return 1;
            if(a.title === b.title) return 0;
            if(a.title < b.title) return -1;
        }
        if(a.year < b.year) return -1;
    }, 0)
    return sortedMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const orderedMovies = movies.map(movie => movie.title).sort();
    const top20 = orderedMovies.slice(0, 20);
    return top20;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

    const separateHoursFromMinutes = movies.map( movie => {
        const newMovie = {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movie.duration,
            genre: movie.genre,
            rate: movie.rate
        }
        
        if (newMovie.duration.includes("h") && newMovie.duration.includes("min")) {
            newMovie.duration = newMovie.duration.slice(0, -3).split("h");
            newMovie.duration = Number(newMovie.duration[0])*60 + Number(newMovie.duration[1])
        } else if (newMovie.duration.includes("h")) {
            newMovie.duration = Number(newMovie.duration.slice(0, -1))*60
        } else {
            newMovie.duration = Number(newMovie.duration.slice(0, -3))
        }
        return newMovie
    })
    return separateHoursFromMinutes;
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length === 0 ) return null;

    let moviesPerYear = {
        /* 2000: {
            totalRating: 0,
            numberOfFilms: 0,
            average: 0
        } */
    };
    movies.forEach( movie => {
        if (!moviesPerYear.hasOwnProperty(movie.year)) {
            moviesPerYear[movie.year] = {
                totalRating: movie.rate,
                numberOfFilms: 1,
                average: movie.rate
            }
        } else {
            moviesPerYear[movie.year].totalRating += movie.rate;
            moviesPerYear[movie.year].numberOfFilms++;
            moviesPerYear[movie.year].average =  moviesPerYear[movie.year].totalRating / moviesPerYear[movie.year].numberOfFilms;
        }
    });

    const bestYear = {year: 0, average: 0};
    for (year in moviesPerYear) {
        if (moviesPerYear[year].average > bestYear.average) {
            bestYear.year = year;
            bestYear.average = moviesPerYear[year].average;
        } 
    }     

    return `The best year was ${bestYear.year} with an average rate of ${bestYear.average}`
}
