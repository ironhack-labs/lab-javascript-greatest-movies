
/* eslint no-restricted-globals: "off" */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrayOfMovies) {
    let moviesInMinutes = arrayOfMovies.map(function (movie) {
        if (movie.duration.indexOf(`h`) === -1) {
            hour = 0;
            duration = movie.duration.split(`min`)
            minutes = Number(duration[0]);
            movie.newDuration = minutes;
        }
        else if (movie.duration.indexOf(`m`) === -1) {
            minutes = 0;
            duration = movie.duration.split(`h`)
            hour = Number(duration[0]);
            movie.newDuration = hour * 60;
        }
        else {
            duration = movie.duration.split(`h `)
            duration[1] = duration[1].slice(0, (0, duration[1].length - 3));
            hour = Number(duration[0]) * 60;
            minutes = Number(duration[1]);
            movie.newDuration = (hour + minutes);
        }
        let updatedMovie = {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movie.newDuration,
            genre: movie.genre,
            rate: movie.rate
        }
        return updatedMovie;
    });
    return moviesInMinutes;
};

// Get the average of all rates with 2 decimals 
function ratesAverage(arrayOfMovies) {
    if (arrayOfMovies.length !== 0) {
        let totalRating = arrayOfMovies.reduce(function (accumulatedRating, movie) {
            if (movie.rate === ``) {
                return accumulatedRating;
            }
            return accumulatedRating + parseFloat(movie.rate);
        }
            , 0);
        return parseFloat((totalRating / arrayOfMovies.length).toFixed(2));
    }
}

// Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies) {
    let drama = arrayOfMovies.filter(function (movie) {
        if (movie.genre.includes(`Drama`)) {
            return movie;
        }
    });
    return ratesAverage(drama);
}

// Order by time duration, in growing order
function orderByDuration(arrayOfMovies) {
    return arrayOfMovies.sort(function (movieA, movieB) {
        if (movieA.duration - movieB.duration === 0) {
            return (movieA.title > movieB.title) || (movieA.title === movieB.title) - 1;
        } else {
            return movieA.duration - movieB.duration;
        }
    });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayOfMovies) {
    if (arrayOfMovies != 0) {
        let spielbergMovies = arrayOfMovies.filter(function (movie) {
            if (movie.genre.includes(`Drama`)) {
                if (movie.director.includes(`Spielberg`)) {
                    return movie;
                };
            };
        });
        if (spielbergMovies.length > 0) {
            return `Steven Spielberg directed ${spielbergMovies.length} drama movies!`;
        } else {
            return `Steven Spielberg directed 0 drama movies!`;
        }
    }
}

// Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies) {
    let orderedMovies = [];
    if (arrayOfMovies !== 0) {
        let moviesByDuration = arrayOfMovies.sort(function orderByDuration(movieA, movieB) {
            return (movieA.title > movieB.title) || (movieA.title === movieB.title) - 1;
        });
        if (moviesByDuration.length > 20) {
            for (let i = 0; i < 20; i++) {
                orderedMovies.push(moviesByDuration[i].title);
            }
            return orderedMovies;
        }
        return moviesByDuration.map(function (movie) {
            return movie.title;
        })
    }
    return orderedMovies;
}