/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(moviesArr) {
    const sumRates = moviesArr.reduce(function (accumulator, value) {
        return accumulator + parseFloat(value.rate);
    }, 0) / moviesArr.length;
    return sumRates;
}


// Iteration 2: Drama movies - Get the average of Drama Movies
//!!!
function dramaMoviesRate(arr) {
    drama = arr.filter(function (item) {
        return item.genre.includes("Drama");
    });

    const sumDrama = drama.reduce(function (accumulator, value) {
        return accumulator + parseFloat(value.rate);
    }, 0) / drama.length;
    return sumDrama;
};


// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(movies) {
    const newOrder = movies.sort(function (a, b) {
        if (a.year !== b.year) {
            //     // return a[title].localeCompare(b[title]);
            // }
            return a.year - b.year;
        }
    });
    return newOrder;
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    dramaSpielberg = arr.filter(function (value1, value2) {
        if (value1.genre.includes("Drama") && value2.director == "Steven Spielberg");
    });
    return dramaSpielberg.length;
};



// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const alphabeticalOrder = arr.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        return 1;
    })
    const printFirstTwenty = alphabeticalOrder.filter(function (value, index) {
        if (index <= 19) {
            return value.title;
        }
    })
    return printFirstTwenty;
}

// function orderAlphabetically(arr) {
//     const alphabeticalOrder = arr.sort(function (a, b) {
//         return a.title.localeCompare(b.title);


//     const printFirstTwenty = alphabeticalOrder.filter(function (value, index) {
//         if (index <= 19) {
//             return value;
//         }
//     })
//     return printFirstTwenty;
// }


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    arrNew = arr.map(function (movie) {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movie.duration * 60,
            genre: movie.genre
        };
    });
    return arrNew;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average