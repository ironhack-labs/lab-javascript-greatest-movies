/* eslint no-restricted-globals: 'off' */
// let movies = [
//     {
//       title: 'The Shawshank Redemption',
//       year: '1994',
//       director: 'Frank Darabont',
//       duration: '2h 22min',
//       genre: ['Crime', 'Drama'],
//       rate: '9.3'
//     },

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    // check if array is not empty
    if (!movies.length) return 0;

    // create empty array
    let movieRates = [];

    // push all rates into array
    movies.forEach(function (movie) {
        movieRates.push(movie.rate);
    });
    // calculate sum of rates
    let sum = movieRates.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue
    }, 0);
    // return average
    return parseFloat((sum / movies.length).toFixed(2));
};

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    // create empty array for dramamovies
    let dramaMovies = [];
    // iterate over movies
    movies.forEach(function (movie) {
        // if its a drama movie
        if (movie["genre"].includes("Drama")) {
            // push to array
            dramaMovies.push(movie);
        };
    });
    let avg = ratesAverage(dramaMovies);

    // calculate average
    return ratesAverage(dramaMovies);
};

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(movies) {
    // sort movies based on years
    const orderedYears = movies.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    })
    return orderedYears;
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    let spielbergsMovies = movies.filter(function (movie) {
        // if spielberg is the director & genre = drama
        if ((movie.director == "Steven Spielberg") && (movie.genre.includes("Drama"))) {
            return true;
        }
    });
    return spielbergsMovies.length;
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    // return array with titles
    let titles = movies.map(function (movie) {
        return movie.title;
    })
    // sort titles
    let sortedTitles = titles.sort(function (a, b) {
        return a.localeCompare(b);
    })
    // return the first 202 titles
    return sortedTitles.slice(0, 20);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {

    // let hours = movies.map(function (movie) {
    //     // extract hours and turn into minutes
    //     let minutes = 0;
    //     // iterate over duration string
    //     for (let i = 0; movie.duration.length; i++) {
    //         // extract the numbers
    //         if ((movie.duration[i] !== NaN) {
    //             // find 
    //             if (movie.duration[i + 1] === "h") {
    //             minutes = movie.duration[i] * 60;
    //         } else if (movie.duration[i + 1] == NaN) {
    //             minutes += (movie.duration[i] + movie.duration[i +1])
    //         }

    //     }
    //     return movie.duration[0];
    // })
    // console.log(hours);
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average