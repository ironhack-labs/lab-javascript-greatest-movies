/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    return  [...arr.sort(function(movie1, movie2){
        if(movie1.year > movie2.year){return 1};
        if(movie1.year < movie2.year){return -1};
        if(movie1.year === movie2.year){
            if(movie1.title > movie2.title){return 1};
            if(movie1.title < movie2.title){return -1};    
        };
    })]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr){
    num = 0
    let arr2 = [];
    arr2 = arr.filter(movie => movie.director === "Steven Spielberg");
    if(arr =[]){
        return 0
    }
    return arr2.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
    let arr2 = [...arr.sort(function(movie1, movie2){
        if(movie1.title > movie2.title){return 1};
        if(movie1.title < movie2.title){return -1};
    })]

    arr2 = arr2.filter(movie => arr2.indexOf(movie) < 20);
    arr2 = arr2.map(movie => movie.title);
    return arr2;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    let sum = 0
    let result = 0;
    let newResult = 0;
    if(arr.length === 0){
        return 0;
    }
    sum = arr.reduce((ac, movie) =>  ac + movie.rate, 0);
    result = sum/arr.length;
    newResult = result.toFixed(2);
    return newResult;
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr){
    let result = 0;
    let newResult = 0;
    let arr2 = [];
    let sum = 0;
    arr2 = arr.filter(movie => movie.genre.indexOf("Drama"));
    sum = arr2.reduce((ac, movie) => ac + movie.rate, 0);    
    result = sum/arr2.length;
    newResult = result.toFixed(2);
    console.log(newResult);
    if(arr2.length === 0){
        return 0;
    }
    return newResult;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(){
    result = [];
    return result;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
