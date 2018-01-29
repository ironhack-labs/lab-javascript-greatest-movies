/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
    var movies = array.map(function (movie) {
        let durationArray = movie.duration.split(' ');
        let firstNumber = parseInt(durationArray[0].slice(0, 1)) * 60;
        let secondNumber = parseInt(durationArray[1].slice(0,2));
        let output = firstNumber + secondNumber;
        movie.duration = output;
        return movie;
    });
}

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    var ratesTotal = array.reduce(function (previous, current){
    return previous + parseFloat(current.rate);
},0)
    return (ratesTotal / array.length).toFixed(2);
}
// Get the average of Drama Movies
function dramaMoviesRate(array) {
    var sum = 0;
    let currentRate = 0;
    let dramaCount = 0;

    array.forEach(function(movies) {
        movies.genre.forEach(function(genre) {
            if (genre === 'Drama') {
                currentRate += parseFloat(movies.rate);
                dramaCount++;
            }
        })

    })

    })

    console.log((currentRate / dramaCount).toFixed(2));
}
    

// Order by time duration, in growing order
function orderByDuration(array) {
    const movies = turnHoursToMinutes(array);

    currMovies.sort(function(a, b){
        
    })
    const movieDurations = array.map(function(movie) {
        if ()
    }
)
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
