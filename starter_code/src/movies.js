/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {

    let result = movies.map((movie) => {

        let newMovie = Object.assign({}, movie);
        let duration;

        if(typeof newMovie.duration === 'string') {

            if((newMovie.duration.indexOf('h') !== -1) && (newMovie.duration.indexOf('min') !== -1)) {
                duration = newMovie.duration.split(' ');
                duration = parseInt(duration[0]) * 60 + parseInt(duration[1]);
            } else if(newMovie.duration.indexOf('h') !== -1) {
                duration = parseInt(newMovie.duration) * 60;
            } else if(newMovie.duration.indexOf('min') !== -1) {
                duration = parseInt(newMovie.duration);
            }

            newMovie.duration = duration;
        }

        return newMovie;
    });

      return result;

}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {

    let averageRate = movies.reduce((sum, movie) => {
        return sum += parseFloat(movie.rate);
    }, 0);

    averageRate = averageRate / movies.length;

    return +averageRate.toFixed(2);
}



// Get the average of Drama Movies

function dramaMoviesRate(movies) {

    let dramaMovies = movies.filter((movie) => {
        return movie.genre.includes('Drama');
    });

    if(dramaMovies.length === 0) {
        return undefined;
    }

    let averDramaRate = dramaMovies.reduce((sum, movie) => {

        if(movie.rate === '') {
            movie.rate = 0;
        }
        return sum += parseFloat(movie.rate);
    }, 0) / dramaMovies.length;


    return +averDramaRate.toFixed(2);
}

// Order by time duration, in growing order

function orderByDuration(movies) {

    if(movies.length === 1) {
        return movies.slice();
    }

    let result = movies.map((movie) => {

        let newMovie = Object.assign({}, movie);
        let duration;

        if(typeof newMovie.duration === 'string') {

            if((newMovie.duration.indexOf('h') !== -1) && (newMovie.duration.indexOf('min') !== -1)) {
                duration = newMovie.duration.split(' ');
                duration = parseInt(duration[0]) * 60 + parseInt(duration[1]);
            } else if(newMovie.duration.indexOf('h') !== -1) {
                duration = parseInt(newMovie.duration) * 60;
            } else if(newMovie.duration.indexOf('min') !== -1) {
                duration = parseInt(newMovie.duration);
            }

            newMovie.duration = duration;
        }

        return newMovie;
    });

    result.sort((movie1, movie2) => {

        if(movie1.duration === movie2.duration) {
            console.log("THE SAME");
            if(movie1.title < movie2.title) return -1;
            if(movie1.title > movie2.title) return 1;
            return 0;
        }
        return movie1.duration - movie2.duration;
    });

return result;


}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {

    if(movies.length === 0) {
        return undefined;
    }

    let moviesCopy = movies.slice();
    let moviesNum;

    moviesCopy = moviesCopy.filter((movie) => {
       return (movie.genre.indexOf("Drama") !== -1 && movie.director === "Steven Spielberg")
    });

    moviesNum = moviesCopy.length;

    return `Steven Spielberg directed ${ moviesNum } drama movies!`;

}

// Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    let moviesCopy = movies.slice().map((movie) => {
        return movie.title;
    }).sort();

    if(moviesCopy.length >= 20) {
        return moviesCopy = moviesCopy.slice(0, 20);
    } else {
        return  moviesCopy;
    }
}



// Best yearly rate average

function bestYearAvg(movies) {

    if(movies.length === 0) {
        return undefined;
    }

    if(movies.length === 1) {
        return `The best year was ${movies[0].year} with an average rate of ${movies[0].rate}`;
    }

    let yearsMap = {};
    let biggestRate;
    let biggestYear = [];

    for(let movie of movies) {
        if(!yearsMap[movie.year]) {
            yearsMap[movie.year] = [+movie.rate];
        } else {
            yearsMap[movie.year].push(+movie.rate);
        }
    }

    for(let year in yearsMap) {
        yearsMap[year] = Number((yearsMap[year].reduce((sum, rating) => {
            return sum += rating;
        }, 0) / yearsMap[year].length).toFixed(1));
    }

    biggestRate = Math.max(...Object.values(yearsMap));

    for(let year in yearsMap) {
        if(yearsMap[year] === biggestRate) {
                biggestYear.push(+year);
            }
    }

    if(biggestYear.length > 1) {
        biggestYear = Math.min(...biggestYear);
    }

    return `The best year was ${biggestYear} with an average rate of ${biggestRate}`;
}
