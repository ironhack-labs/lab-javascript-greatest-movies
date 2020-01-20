/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

let byYear = [];

function orderByYear(movies){
    byYear = movies.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) return 1;
        else return -1
    })

    moviesByYear = [...byYear];
    return moviesByYear;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    return movies.filter(movie =>  {
        return movie.genre.includes('Drama') && movie.director.includes("Steven Spielberg");
    }).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){    
    let titles = movies.map(movie => movie.title)
    titles.sort((a, b) => a.localeCompare(b))
    let firstTwenty = titles.splice(0, 20);

    return firstTwenty;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length > 0){
        let rates = movies.reduce((ac, cu) => {
            if (typeof cu.rate === 'number') {
                return ac + cu.rate;
            } else {
                return ac + 0;
            } 
        }, 0)
        let average = rates / movies.length;
        return +average.toFixed(2);
    } else {
        return 0;
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    dramaMovies = movies.filter(movie => movie.genre.includes('Drama'))
    if(dramaMovies.length > 0){
        let drama = dramaMovies.reduce((ac, cu) => ac + cu.rate, 0);
        let average = drama / dramaMovies.length;
        return +average.toFixed(2);
    } else {
        return 0;
    }
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    let moviesDuration = movies.map(movie => movie.duration);
    let moviesInMinutes = []

    for (let i = 0; i < moviesDuration.length; i++) {
        let hours = moviesDuration[i].split("h");
        let hour = (hours[0].includes('min')) ? hours.unshift(0) : hours[0];
        hour = hours[0];
        let minutes = (hours[1]) ? parseInt(hours[1]) : 0;
        let totalMinutes = (hour * 60) + minutes;
        moviesInMinutes.push(totalMinutes)
    };

    let moviesWithDurationInMinutes = movies.slice(0);

    moviesWithDurationInMinutes.forEach((movie, idx) => movie.duration = moviesInMinutes[idx]);

    return moviesWithDurationInMinutes;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
// bestYearAvg(movies){

// }