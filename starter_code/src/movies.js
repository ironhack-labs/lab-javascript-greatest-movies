/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

    if (!movies.length) {
        return [];
    }

    return movies
        .sort( (movieA, movieB) => movieA.year - movieB.year || movieA.title.localeCompare(movieB.title) );
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    return movies
        .filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

    let moviesArr = [...movies];

    return moviesArr
        .sort((movieA, movieB) => movieA.title.localeCompare(movieB.title))
        .map(movie => movie.title)
        .slice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {

    if (!movies.length) {
        return 0;
    }

    let moviesAvg = movies
        .reduce((acc, m) => { return acc + (m.rate || 0) }, 0) / movies.length;

    return parseFloat((moviesAvg).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {

    if (!movies.length) {
        return 0;
    }

    let dramaMovies = movies.filter((movie) => movie.genre.includes('Drama'));

    if (!dramaMovies.length) {
        return 0;
    }

    let dramaMoviesAvg = dramaMovies
        .filter((movie) => movie.genre.includes('Drama'))
        .reduce((acc, m) => { return acc + (m.rate || 0) }, 0) / dramaMovies.length;

    return parseFloat((dramaMoviesAvg).toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

    return movies.map(movie => {

        movie = Object.assign({}, movie);

        if (typeof movie.duration !== 'number') {

            let hoursToMinutes = parseInt( (movie.duration.match(/\d+h/g) || [0])[0] ) * 60;
            let minutes = parseInt( (movie.duration.match(/\d+min/g) || [0])[0] );

            movie.duration = hoursToMinutes + minutes;
        }

        return movie;
    });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {

    if (!movies.length) {
        return null;
    }

    // Getting an array of unique years
    let movieYears = new Set(movies.map(movie => movie.year));
        movieYears = [...movieYears];

    // Looping over the years to filter a list of movies for that particular year, and returning an object comprised
    //  of 'year' and 'rate' of all the movies of that year. Then, sorting the movies by rate, if there's a tie, put
    //  the oldest year first, so the the 1st position of the returning array will be the oldest year with the best average.
    let AvgsByYear = movieYears.map(year => {

        let moviesOfAYear = movies.filter(movie => movie.year === year);

        return {
            "year": moviesOfAYear[0].year,
            "rate": moviesOfAYear.reduce((acc, movie) => { return acc + movie.rate }, 0) / moviesOfAYear.length
        }
    }).sort((movieA, movieB) => {

        if (movieA.rate === movieB.rate) {
            return movieA.year > movieB.year ? 1 : movieA.year < movieB.year ? -1 : 0;
        }

        return movieB.rate - movieA.rate
    })[0];

    return `The best year was ${AvgsByYear.year} with an average rate of ${AvgsByYear.rate}`
}