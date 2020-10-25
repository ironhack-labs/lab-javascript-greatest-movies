
// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    return movies.map(function (movie) {
        return movie.director;
    });
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function uniqueDirectors(directors){

    for (i = 0; i < directors.length; i++) {
        if (lastIndexOf(directors[i]) !== i) {
            directors.splice(i, 1);
            i--
        }
    }
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielberg = movies.filter(function (movie) {
        return (movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    });
    return spielberg.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    const average = movies.reduce(function (sum, movies) {
        return sum + (movies.rate || 0);
    }, 0) / movies.length;
    return ((Math.round(average * 100)) / 100);
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramas = movies.filter(function (movie) {
        return movie.genre.includes("Drama");
    });
    return ratesAverage(dramas);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesByYear = movies.sort(function (a, b) {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title > b.title) return 1;
        return -1;
    });

    return moviesByYear.slice();
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const list = movies.map(movie => (movie.title));
    const orderedList = list.sort(function (a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    });
    return orderedList.slice(0, 20);
};


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


// function turnHoursToMinutes(movies) {
//     let durations = []
//     for (movie of movies) {
//         let hours = 0;
//         let minutes = 0;
//         if (movie.duration.indexOf('h') > -1) {
//             hours = parseInt(movie.duration.slice(0, movie.duration.indexOf('h')));
//         };
//         if (movie.duration.includes(' ')) {
//             minutes = parseInt(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')));
//         }
//         console.log(parseInt(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m'))));
//         console.log(minutes)
//         // console.log((hours * 60) + minutes);
//         durations.push((hours * 60) + minutes);
//     }
//     return durations;
// }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAverage(movies) {
    if (movies.length === 0) return null;
    //     extract years from the array and reduce to unique values
    //     for each year in the reduced array
    //         filter movies for those years
    //         add the rates for the films in that year and calculate the average
    //         add the average to the array with the unique years
}
