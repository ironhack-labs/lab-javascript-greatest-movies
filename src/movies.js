// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arr) {
    let directors = arr.map(function (movie) {
        return movie.director;
    });
    return directors;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    let filteredDirectors = array.filter(function (movie) {
        return (
            movie.director.includes("Steven Spielberg")
            && movie.genre.includes("Drama")
        )
    });
    return filteredDirectors.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    if (array.length === 0) 
        return 0;
    let sumRate = array.reduce(function (accumulator, item) {
        if (item.rate === undefined) {
            return accumulator;
        }
        return accumulator + item.rate;
    }, 0);
    let totalMovies = array.length;
    let totalRate = parseFloat((sumRate / totalMovies).toFixed(2));
    return totalRate;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(function (item) {
        return item.genre.includes("Drama");
    });
    if (dramaMovies.length === 0) {
        return 0;
    }
    let sumRate = dramaMovies.reduce(function (accumulator, item) {
        if (item.rate === undefined) {
            return accumulator;
        } return accumulator + item.rate;
    }, 0);
    let totalDramaMovies = dramaMovies.length;
    let totalRate = parseFloat((sumRate / totalDramaMovies).toFixed(2));
    return totalRate;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear (arr){
    let copiaArray = arr.filter(casilla => true);
    let copiaArrayOrdenada = copiaArray.sort(function(a, b){
        if(a.year === b.year){
        return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return copiaArrayOrdenada;
}

/* ============ Iteration 5: Ordering by year ======== OPTION 2 =====
function orderByYear(array) {
    let moviesInMinutes = [...array]
    let moviesByYear = moviesInMinutes.sort(function (movie1, movie2){
        if(movie1.year === movie2.year){
            return movie1.title.localeCompare(movie2.title)
        } 
        return  movie1.year - movie2.year; 
});
    return moviesByYear;
};
*/

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array){
    let mappedMovies = array.map(function (movie) {
        return movie.title;
    });
    mappedMovies.sort()
        return mappedMovies.slice(0,20)
};

/* ============ Iteration 6: Alphabetic Order ======== OPTION 2 =====
function orderAlphabetically(arr){
    let copiaArray= arr.filter(casilla => true);
    let copiaArrayOrdenada = copiaArray.sort(function(a, b){
        return a.title.localeCompare(b.title);
        } 
    );
    let arrayTitles = copiaArrayOrdenada.map(peli => peli.title)
    if(arrayTitles.length > 20){
        return arrayTitles.slice(0,20);
    }
    return arrayTitles;
}
*/

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

const regexHour = /(\d+)(?=\s*h)/g;
const regexMin = /(\d+)(?=\s*min)/g;

function turnHoursToMinutes(arr) {
  moviesInMinutes = []
  arr.forEach(function(movie){
    modifiedMovie = {...movie}
    hoursToMinutes = movie.duration.match(regexHour) * 60
    minutes = movie.duration.match(regexMin) * 1
    modifiedMovie.duration = hoursToMinutes + minutes
    moviesInMinutes.push(modifiedMovie)
  })
 return moviesInMinutes
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(arr){
    if (arr.length === 0) return null

    return `The best year was ${year} with an average rate of ${rate}`
}