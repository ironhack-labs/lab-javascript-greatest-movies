/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
var movies = [{
        title: 'The Shawshank Redemption',
        year: '1994',
        director: 'Frank Darabont',
        duration: '2h 22min',
        genre: ['Crime', 'Drama'],
        rate: '9.3'
    },
    {
        title: 'The Godfather',
        year: '1972',
        director: 'Francis Ford Coppola',
        duration: '2h 55min',
        genre: ['Crime', 'Drama'],
        rate: '9.2'
    }
]

// this is just a helper function
function stringToMinutes(string) {
    var arr = string.split('h')
    if (arr.length < 2) {
        arr.unshift("0")
    }
    var hours = Number(arr[0])
    var minutes = Number(arr[1].split("min")[0])

    return hours * 60 + minutes
}



function turnHoursToMinutes(movies) {
    let moviesMinutes = movies.map(movie => {

        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: stringToMinutes(movie.duration),
            genre: movie.genre,
            rate: movie.rate
        };
    });
    return moviesMinutes;
}

function ratesAverage(movies) {

    let rates = movies.map(movie => parseInt(movie.rate))

    let ratesSum = rates.reduce(function (accumulator, currentValue) {
        return (accumulator + currentValue)
    })
    0;

    return avg = (ratesSum) / (rates.length)
}




// Get the average of all rates with 2 decimals 

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average