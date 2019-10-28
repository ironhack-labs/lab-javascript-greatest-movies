
/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    return [...movies.sort(function (movie1, movie2) {

        if (movie1.year === movie2.year) {
            return movie1.title.localeCompare(movie2.title);
        } else if (movie1.year > movie2.year) {
            return 1;
        } else {
            return -1;
        }
    })]
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {

    return movies.filter((movies) => movies.genre.includes("Drama") && movies.director === "Steven Spielberg").length;

}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movie) {

    let allTheMovies = movie.map(movie => movie.title);
    return allTheMovies.sort().splice(0, 20);

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals


function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }
    let singleAverages = movies.reduce((ac, movie) => {
        if (typeof (movie.rate) != "number") {
            movie.rate = 0
        } return movie.rate + ac
    }, 0)
    return parseFloat((singleAverages / movies.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = [... movies.filter(movie => movie.genre.includes("Drama"))];

    return ratesAverage(dramaMovies);
    
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    let moviesCopy = [... movies];
    let hoursArray = moviesCopy.map(movie => {
        if (typeof movie.duration !== "string"){
            movie.duration = 0;
            return movie;
        }
        let timeDuration = movie.duration;
        let movieDuration = timeDuration.split(" ").map(duration => {
            if (duration.endsWith("h")) {
                return parseInt(duration.substring(0, duration.length-1))* 60; 
            } else {
                return parseInt(duration.substring(0, duration.length-3));
            }
        });
        let totalMinutes = movieDuration.reduce((ac, movieDuration) => {
            return movieDuration + ac;
        }, 0);

        movie.duration = parseInt(totalMinutes);
        return movie; 
    });

    return hoursArray;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average 
