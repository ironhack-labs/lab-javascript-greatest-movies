/* eslint no-restricted-globals: 'off' */


// ************ turnHoursToMinutes hacer con un reduce *****************/
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movieArray) {

    return movieArray.map(function (item) {
        var newMovieArry = Object.assign({}, item);
        var transformToMinutes = newMovieArry.duration.split(' ');

        if (transformToMinutes.length === 2) {
            var hour = Number(transformToMinutes[0].slice(0, transformToMinutes.indexOf('h'))) * 60;
            var minutes = Number(transformToMinutes[1].replace('min', ''));
            newMovieArry.duration = hour + minutes;
        }

        if (transformToMinutes.length === 1) {
            if (transformToMinutes[0].includes('h')) {
                newMovieArry.duration = Number(transformToMinutes[0].slice(0, transformToMinutes.indexOf('h'))) * 60;
            }
            else if (transformToMinutes[0].includes('min')) {
                newMovieArry.duration = Number(transformToMinutes[0].replace('min', ''));
            }

        }
        return newMovieArry
    })
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

function howManyMovies(movieArray) {
    if(!movieArray.length){
        return undefined;
    }
    
    var steveMovies = movieArray.filter(function (item) {
        return item.director === 'Steven Spielberg' &&
            item.genre.some(
                function (item) {
                    return item === 'Drama'
                });
    });
    return 'Steven Spielberg directed ' + steveMovies.length + ' drama movies!'
}
// Order by title and print the first 20 titles


// Best yearly rate average
