/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {

    function construirPelis (movies) {
        title: movie.title,
        year: movie.year,
        director: movie.director,
        duration: movie.duration,
        genre: movie.genre,
        rate: movie.rate

    };



    ________________________

    let moviesWithDuration = movies.map(function (movie) {
        var duration ,horas, minutes;

        horas = movie.duration.toString().match(/\d+h/g);
        mins = movie.duration.toString().match(/\d+min/g);

        movie.duration = ((horas !== null) ? Number.parseInt(horas) * 60 : 0) + ((mins !== null) ? Number.parseInt(minutes) : 0);
       
        return Object.create({
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movie.duration,
            genre: movie.genre,
            rate: movie.rate
        })
    });
    return moviesWithDuration;
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    var countOfFilms = movies.lenght;
    var result = 0;
    var allRates = movies.reduce((acum,movie) => 
    acum += +movie.rate , 0 );
    result = allRates / countOfFilms;
    return parseFloat(result.toFixed(2));

}


// Get the average of Drama Movies

function dramaMoviesRate(movies) {
}


// Order by time duration, in growing order

function orderByDuration(movies) {
    var orderMovies = movies.sort((a, b) a,b)
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(params) {
    
}


// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    
}


// Best yearly rate average

function bestYearAvg(params) {
    
}
