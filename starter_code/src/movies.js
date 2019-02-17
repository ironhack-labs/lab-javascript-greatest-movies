/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movieArray) {
    var newMovieArray = movieArray.map(function (elem) {
        var arr = elem.duration.toString().split('h');
        if (arr.length < 2) {
            arr.unshift("0");
        }
        var hours = Number(arr[0]);
        var minutes = Number(arr[1].toString().split("min")[0]);
        elem.duration = hours * 60 + minutes;
        return elem;
    })
    return newMovieArray.reverse();

    // Get the average of all rates with 2 decimals 
    function ratesAverage(movies) {
        var totalRate = movies.reduce(function (sum, movie) {
            return sum + parseFloat(movie.rate);
        }, 0);
        return totalRate / movies.length.toFixed(2);
    }

    // Get the average of Drama Movies
    function dramaMoviesRate(movies) {
        var dramaMovies = movies.filter(function (movie) {

            return movie.genre.includes('Drama');
        });
        var totalRate = dramaMovies.reduce(function (sum, movie) {
            if (dramaMovies.length === 0) return undefined;
            return sum + parseFloat(movie.rate);
        }, 0);
        return totalRate / dramaMovies.length.toFixed(2);
    };


    // Order by time duration, in growing order


    // How many movies did STEVEN SPIELBERG

    var howManyMovies = movies.filter(function (movie) {
        if (movies.length === 0) return undefined;
        return movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg');
    }, 0);
    // Order by title and print the first 20 titles
    function orderAlphabetically(movies){
        
    }

    // Best yearly rate average
