/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// this is just a helper function
function stringToMinutes(string) {
    var arr = string.split("h");
    if (arr.length < 2) {
        arr.unshift("0");
    }
    var hours = Number(arr[0]);
    var minutes = Number(arr[1].split("min")[0]);

    return hours * 60 + minutes;
}

/*var moviesNew = movies.map(movie => {
    console.log(stringToMinutes(movie.duration));
});
console.log(moviesNew);
*/


function turnHoursToMinutes(movies) {
    var moviesNew = movies.map(movie => {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: stringToMinutes(movie.duration),
            genre: movie.genre,
            rate: movie.rate
        }
    });
    return moviesNew;
}


// Get the average of all rates with 2 decimals

// --> what i made wrong: 1. wrong parameter (my choice was: movie) and 2. accumulator.rate instead of accumulator

function ratesAverage(moviesParam) {
    var sum = moviesParam.reduce((accumulator, currentMovie) => accumulator + parseFloat(currentMovie.rate), 0)
    console.log(sum)
    return sum / moviesParam.length
}
console.log(ratesAverage(movies));

// string into a number: `parseFloat` (for `1.23`) 
// need a whole number: `parseInt` 


// Get the average of Drama Movies

function dramaMoviesRate(moviesParam) {
    let dramaMovies = []
    dramaMovies = moviesParam.filter(movie => movie.genre == 'Drama')
    if (dramaMovies.length <= 0) {
        return undefined
    } else {
        return parseFloat(ratesAverage(dramaMovies).toFixed(2));

        // return moviesParam
        //     .filter(movie => movie.genre == 'Drama')
        //     .reduce((accumulator, currentMovie) => accumulator + parseFloat(currentMovie.rate), 0)
    }
}
console.log(dramaMoviesRate(movies));


// Order by time duration, in growing order

function orderByDuration(moviesParam) {
    let durationOrder = moviesParam.sort(function (movie1, movie2) {
        if (movie1.duration < movie2.duration) {
            return -1;
        } else if (movie1.duration == movie2.duration) {
            if (movie1.title < movie2.title) {
                return -1;
            } else if (movie1.title == movie2.title) {
                return 0;
            } else {
                return 1;
            }

        } else {
            return 1;
        }
    });
    return durationOrder;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(moviesParam) {
    //let dramaMovies = []
    //let dramaSpielbergMovies = []
    dramaSpielbergMovies = moviesParam.filter(movie => movie.director == 'Steven Spielberg')
    moviesParam.filter(movie => movie.genre == 'Drama')
    if (dramaSpielbergMovies.length <= 0) {
        return undefined
    }
}




// Order by title and print the first 20 titles

// Best yearly rate average

/*if someone ist still trying the bonus from the last lab.. an idea would be to create yourself an object with each year as the key and the corresponding array of movies from that year as the value
=> then you can call your existing averageRate() function on each of these arrays*/