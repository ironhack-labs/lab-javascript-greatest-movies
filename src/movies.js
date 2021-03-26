// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    const directors = movies.map(function (movie) {
        console.log(movie.director)
        return movie.director;

    })
    return directors;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergDramas = movies.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) return true;
    })
    return spielbergDramas.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    const mappedRating = movies.map(function (movie) {
        if (movie.rate === '') {
            movie.rate = 0;
        }
        return movie.rate;
    })

    const average = mappedRating.reduce(function (total, rating) {
        if (typeof rating === 'undefined') {
            return total + 0
        }
        return total + rating;
    })
    return parseFloat((average / mappedRating.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    // const filteredMovies = movies.filter(function (movie) {
    //     if (movie.genre.includes('Drama')) {
    //         return true;
    //     }
    // });

    // return ratesAverage(filteredMovies);

    //SEE BOTTOM OF SCRIPT-wanted to test calling nested methods
    return ratesAverage(filterByType(movies, 'genre', 'Drama'));
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const sorted = movies.sort(function (a, b) {
        let aTitle = a.title,
            bTitle = b.title;
        if (a.year == b.year) {
            if (aTitle < bTitle) {
                return -1;
            }
            if (aTitle > bTitle) {
                return 1;
            }
            return 0;

        }
        return a.year - b.year;
    })
    const sortedToReturn = [...sorted]
    return sortedToReturn;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
//use above plus map plus Slice
function orderAlphabetically(movies) {
    const mapped = movies.map(function (movie) {
        return movie.title;
    });
    return mapped.sort().slice(0,20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function filterByType(movieArr, key, value) {
    const filteredMovies = movieArr.filter(function (movie) {
        if (movie[key].includes(value)) {
            return true;
        }
    });

    return filteredMovies;
}