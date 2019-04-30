/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// let newMovies = movies.map(movie => {
//     class movie {
//         constructor(title, year, director, duration, genre, rate) {
//             this.title = title;
//             this.year = year;
//             this.director = director;
//             this.duration = duration;
//             this.genre = genre;
//             this.rate = rate;
//         }
//         turnHoursToMinutes() {

//         }
//     }

// })

/*function turnHoursToMinutes(movies) {
    let newMovies = movies.map(movie => {
        if (movie.duration.includes('h') === true && movie.duration.includes('min') === true) {
            let arraySplit = movie.duration.split('h');
            let hours = parseInt(arraySplit[0], 10);
            let minutes = parseInt(arraySplit[1], 10);
            let duration = hours * 60 + minutes;
        }
        else if (movie.duration.includes('h') === false && movie.duration.includes('min') === true) {
            let duration = parseInt(movie.duration, 10);
        }

        else {
            let duration = parseInt(movie.duration, 10) * 60;
        }
        return { ...movie, duration: duration };
    })
    console.log("here")
    return newMovies;
}
*/
function turnHoursToMinutes(movies) {
    return movies.map(movie => {
        let arraySplit, hours, minutes, durationMinutes;
        if (movie.duration.includes('h') === true && movie.duration.includes('min') === true) {
            arraySplit = movie.duration.split('h');
            hours = parseInt(arraySplit[0], 10);
            minutes = parseInt(arraySplit[1], 10);
            durationMinutes = hours * 60 + minutes;
        }
        else if (movie.duration.includes('h') === false && movie.duration.includes('min') === true) {
            durationMinutes = parseInt(movie.duration, 10);
        }
        else {
            durationMinutes = parseInt(movie.duration, 10) * 60;
        }
        return { ...movie, duration: durationMinutes };
    })
}
/*
function turnHoursToMinutes(movies) {
    let newMovies = movies.map(movie => {
        let arraySplit, hours, minutes, durationMinutes;
        if (movie.duration.includes('h') === true && movie.duration.includes('min') === true) {
            arraySplit = movie.duration.split('h');
            hours = parseInt(arraySplit[0], 10);
            minutes = parseInt(arraySplit[1], 10);
            durationMinutes = hours * 60 + minutes;
        }
        else if (movie.duration.includes('h') === false && movie.duration.includes('min') === true) {
            durationMinutes = parseInt(movie.duration, 10);
        }
        else {
            durationMinutes = parseInt(movie.duration, 10) * 60;
        } 
        return { ...movie, duration: durationMinutes };
    })
    return newMovies;
}*/
// Get the average of all rates with 2 decimals
function ratesAvarage(movies) {

}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
