/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    const ordered = arr.slice().sort(function(a,b){
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year-b.year;
    });
    return ordered;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    const stevenMovies = arr.filter(function(movie) {
        if(
            movie.director === "Steven Spielberg" && movie.genre.indexOf ("Drama") > -1
        ) {
            return true;
        }
    });
    return stevenMovies.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    const alphabet = arr.slice().sort(function(a,b){
        return a.title.localeCompare(b.title);
    });
    return alphabet.slice(0,20).map(function(movie){
        return movie.title;
    });
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if(arr.length === 0) {
        return 0;
    }

    const rates = arr.map(function(movie) {
        if (movie.rate > 0) {
            return movie.rate;
        }
        return 0;
    });

    const averageRates = rates.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;}, 0);

        return parseFloat((averageRates/rates.length).toFixed(2));
    }
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(function(movie) {
        if (movie.genre.indexOf("Drama") > -1) {
            return true;
        }
    });
    return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    function hoursToMinutes(time) {
        if (!time.includes("h")) {
            return parseInt (time);
        }
        let hoursAndMinutes = time.split (" ");
        return (
            parseInt (hoursAndMinutes[0])*60+parseInt(hoursAndMinutes[1] || 0)
                );
}

const newTime = arr.map(function(movie) {
    const newMovies = Object.assign({}, movie);
    newMovies.duration = hoursToMinutes(movie.duration);
    return newMovies;
});
return newTime;
}
console.log(turnHoursToMinutes(movies));
// BONUS Iteration: Best yearly rate average - Best yearly rate averag
function bestYearAvg(movies){
   

}