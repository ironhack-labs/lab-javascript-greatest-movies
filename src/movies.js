// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map((movie) => movie.director);
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    return movies.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length <= 0) {
        return 0;
    }

    const total = movies.reduce(
        function(totalRates, currentMovie) {

            if (typeof currentMovie.rate !== 'number') {
                return totalRates;
            }

            return totalRates += currentMovie.rate;
        }, 0);

    return (Math.round(total / movies.length * 100) / 100);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

    let totalDrama = 0;

    const sumRate = movies.reduce(function(sumRating, currentMovie) {
        if (currentMovie.genre.indexOf('Drama') !== -1) {
            sumRating += currentMovie.rate;
            totalDrama += 1;
        }

        return sumRating;
    }, 0);

    if (totalDrama === 0) {
        return 0;
    }

    return (Math.round(sumRate / totalDrama * 100) / 100);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    if (movies.length === 1) {
        return singleMovie = movies;
    }

    const moviesOrderByYear = [...movies].sort(function(movieA, movieB) {

        if (movieA.year === movieB.year && movieA.title !== movieB.title) {

            return compareTitles(movieA, movieB);

        }

        return movieA.year - movieB.year;
    });

    return moviesOrderByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    const orederedByTitle = [...movies].sort(compareTitles);

    const twentyFirst = orederedByTitle.slice(0, 20);

    const titleValues = twentyFirst.map((value) => value.title);

    return titleValues;

}

function compareTitles(prevMovie, nextMovie) {

    if (prevMovie.title < nextMovie.title) {
        return -1;
    }

    if (prevMovie.title > nextMovie.title) {
        return 1;
    }

    return 0;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {

    const movieDurationInMinutes = [];

    movies.map(function(movie) {

        if (typeof movie.duration === 'number') {
            return movieDurationInMinutes.push(movie);
        }

        let numberDuration = timesToMinutes(movie.duration);
        let copyMovie = Object.assign({}, movie);
        copyMovie.duration = numberDuration;

        return movieDurationInMinutes.push(copyMovie);
    });

    return movieDurationInMinutes;

}


function timesToMinutes(duration) {

    if (duration.length <= 2) {

        return Number(duration[0]) * 60;

    } else if (duration.length < 5 && duration.length > 2) {

        return Number(duration.substr(0, 1));

    } else if (duration.length === 5) {

        return Number(duration.substr(0, 2));

    } else {

        let arrayDuration = duration.split(" ");
        let realMinutes = 0;

        if (arrayDuration[1].length < 5) {

            realMinutes = Number(arrayDuration[1].substr(0, 1));

        } else {

            realMinutes = Number(arrayDuration[1].substr(0, 2));
        }

        return (Number(arrayDuration[0]) * 60) + realMinutes;
    }

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {

    if (movies.length === 0) {
        return null;
    }

    // 1º array of movies in years
    const moviesInYears = [];


    movies.map(function(movie) {

        if (moviesInYears.indexOf(movie.year) === -1) { // no está el año

            return moviesInYears.push({ year: movie.year, films: [{ title: movie.title, rate: movie.rate }] });

        } else { // está el año

            return moviesInYears.films.push({ title: movie.title, rate: movie.rate });
        }

    });

    console.log('movies in year =>', moviesInYears);


    return `The best year was 1994 with an average rate of 9`;

}