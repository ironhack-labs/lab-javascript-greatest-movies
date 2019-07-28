/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    let suma = arr.reduce((acc, movie) => {
        if (movie.rate == "") movie.rate = 0;
        return (acc += parseFloat(movie.rate))
    }, 0);
    let average = suma / arr.length;
    return parseFloat(average.toFixed(2));
}
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let dramaMovies = arr.filter(movie => movie.genre.indexOf("Drama") != -1)
    if (dramaMovies == "") return 0;
    return ratesAverage(dramaMovies);
}
// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(arr) {
    arr.sort((movieA, movieB) => {
        if (movieA.duration > movieB.duration) return 1
        if (movieA.duration < movieB.duration) return -1
        if (movieA.title > movieB.title) return 1
        if (movieA.title < movieB.title) return -1
    });
    return arr;
}
// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    return arr.filter(movie => movie.genre.indexOf("Drama") != -1 && movie.director === "Steven Spielberg").length;
}
// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    arr.sort((movieA, movieB) => {
        if (movieA.title > movieB.title) return 1
        if (movieA.title < movieB.title) return -1
        return 0
    });
    let newArr = [];
    arr.forEach(movie => newArr.push(movie.title));
    if (newArr.length >= 20) return newArr = newArr.slice(0, 20);
    return newArr;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    let newArr = [];
    newArr = arr.map(movies => {
        let hrs = 0, mins = 0;
        for (let i = 0; i < movies.duration.length; i++) {
            if (movies.duration[i] === "h") {
                hrs = parseInt(movies.duration[i - 1]);
            }
            if (movies.duration[i] === "m") {
                mins = parseInt(movies.duration[i - 2] + movies.duration[i - 1])
            }
        }
        return {
            title: movies.title,
            year: movies.year,
            director: movies.director,
            duration: (hrs * 60 + mins),
            genre: movies.genre,
            rate: movies.rate,
        }
    })
    return newArr;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr) {
    let allYears = [];
    let bestScore = 0;
    let bestYear;
    arr.forEach(movies => {
        if (allYears.indexOf(movies.year) == -1) {
            allYears.push(movies.year);
        }
    });
    console.log(allYears);
    allYears.forEach(date => {
        let yearMovies = arr.filter(movie => movie.year.indexOf(date) != -1)
        if (ratesAverage(yearMovies) >= bestScore) {
            bestScore = ratesAverage(yearMovies);
            bestYear = date;
            console.log(`NewBestScore: ${bestScore} // bestYear: ${bestYear} `);
        } else if (ratesAverage(yearMovies) === bestScore) {

        };
    });
    if (allYears == '') {
        return null;
    }
    return `The best year was ${bestYear} with an average rate of ${bestScore}`;
}
