// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
    const allDirectors =
        arr.map(movie => {
            return movie.director
        });
    return allDirectors
};
getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(arrDeMovies) {
    const result = arrDeMovies.filter(function (movie) {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama");
    })
    return result.length;
}

/* console.log(howManyMovies(movies)) */
//retourne un nombre de films DRAMA et dir SPIELBERG


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieRates) {
    if (movieRates.length === 0) {
        return 0;
    } else {
        let sumOfRatings = movieRates.reduce(function (accumulator, currentMovie) {
            if (currentMovie.rate) {
                return accumulator += currentMovie.rate;
            } else {
                return accumulator;
            }
        }, 0);
        return Math.round((sumOfRatings / movieRates.length) * 100) / 100;
    }
}


// function reduceMovie(MovieList) {
//     var accumulator;
//     for (var i = 0; i < MovieList.length; i++) {
//         currentMovie = MovieList[i];
//         if (accumulator) {
//             reduceFonction(accumulator, MovieList[i]);
//         } else {
//             reduceFonction(MovieList[i], MovieList[i + 1]);
//             i++;
//         }
//     }
// }

// function reduceFonction(accumulator, currentValue) {
//     // Faire des choses
//     return '';
// }


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movieRates) {
    if (movieRates.length === 0) {
        return 0;
    } else {
        let movieCount = 0;
        let sumOfRatings = movieRates.reduce(function (accumulator, currentMovie) {
            if (currentMovie.rate && currentMovie.genre.includes('Drama')) {
                movieCount++;
                return accumulator += currentMovie.rate;
            } else {
                return accumulator;
            }
        }, 0);
        if (movieCount === 0) {
            return 0;
        }
        return Math.round((sumOfRatings / movieCount) * 100) / 100;
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average