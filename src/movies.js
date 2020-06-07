// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    let directors = movies.map(function(movie){
        return movie.director
      })
    return [...new Set(directors)]
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    let dramas = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return dramas.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length === 0) return 0;
    let sum = movies.filter(function(movie) {
        return movie.rate;
    }).reduce((sum, movie) => { 
        return sum + movie.rate
    }, 0);
    let result = sum/movies.length;
    return Number(result.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let drama = movies.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(drama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    return [...movies].sort(function(a, b) {
        if(a.year === b.year){
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    let sortedMovies = [...movies].sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    let first20 = sortedMovies.slice(0, 20).map(movie => movie.title);
    return first20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    let newArray = JSON.parse(JSON.stringify(movies));
    return newArray.map(function(movie) {
        movie.duration = changeDuration(movie.duration);
        return movie 
    });
}

function changeDuration(a) {
    if(a.includes("min") && a.includes("h")){
        let b = a.split(" ");
        b[0] = Number(b[0].replace("h", ""));
        b[1] = Number(b[1].replace("min", ""));
        return b[0]*60 + b[1];
    } else if(a.includes("h")) {
        return Number(a.replace("h", ""))*60;
    } else {
        return Number(a.replace("min", ""));
    }   
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if(movies.length === 0) return null;
    let data = rankingsAndYears(movies);
    let bestScore = calculateAverage(data[0].ratings);
    let bestYear = data[0].year;
    for(let i = 1; i < data.length; i++){
        if(calculateAverage(data[i].ratings) > bestScore){
            bestScore = calculateAverage(data[i].ratings);
            bestYear = data[i].year;
        } else if (calculateAverage(data[i].ratings) === bestScore && bestYear > data[i].year) {
            bestYear = data[i].year;
        }
    }
    return `The best year was ${bestYear} with an average rate of ${Number(bestScore.toFixed(2))}`
}

function rankingsAndYears(movies) {
    let result = [];
    let duplicatedYears = movies.map(function(movie) {
        return movie.year;
    });
    let years = [...new Set(duplicatedYears)];
    for(let i = 0; i < years.length; i++) {
        let obj = {};
        obj.year = years[i];
        obj.ratings = movies.filter(function(movie){
            if(movie.year === years[i]) 
                return true;
            }).map(function(movie) {
                return movie.rate;
        });
        result.push(obj);
    }
    return result
}

function calculateAverage(ratingsArray){
    return ratingsArray.reduce((acc, val) => acc + val)/ratingsArray.length
}

