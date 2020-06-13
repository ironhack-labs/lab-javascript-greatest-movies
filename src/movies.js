var movies = require('./data'); //importing the movies array from data.js

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies){
    const directors = movies.map(movie => movie.director); //creates new array of director name
    return uniqueArray(directors);
}

// console.log(getAllDirectors(movies));

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function uniqueArray(array){
    let newArray = [];
    array.forEach(element => {
        if(!newArray.includes(element)) newArray.push(element);
    })
    return newArray;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies){
    const spielbergDramas = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return spielbergDramas.length;
}

// console.log(howManyMovies(movies));

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies){
    if(movies.length === 0) return 0;
    const ratingsArray = movies.map(movie => Object.keys(movie).length === 0 || movie.rate === '' ? 0 : movie.rate);
    const ratingSum = ratingsArray.reduce((accumulator, current) => accumulator + current, 0);
    let averageRating = ratingSum / movies.length;
    return parseFloat(averageRating.toFixed(2));
}

// console.log(ratesAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"));
    if(dramaMovies.length === 0) return 0;
    const dramaRatings = dramaMovies.map(movie => movie.rate);
    const dramaRatingSum = dramaRatings.reduce((accumulator, current) => accumulator + current, 0);
    let dramaRatingAve = dramaRatingSum / dramaMovies.length;
    return parseFloat(dramaRatingAve.toFixed(2));
}

// console.log(dramaMoviesRate(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){
    const ascending = [...movies].sort((a, b) => a.year == b.year ? a.title.localeCompare(b.title) : a.year - b.year);
    return ascending;
}

// console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies){
    const alphabetOrder = movies.map(movie => movie.title).sort();
    return alphabetOrder.slice(0, 20);
}

// console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    const minuteArray = movies.map(movie => {
        let sum = 0;
        let split = movie.duration.split(' ');

        for(let i = 0; i < split.length; i++){
            if(split[i].slice(-1) === 'h') sum += +split[i][0] * 60;
            else sum += +split[i].slice(0, -3);            
        }
        movie.duration = sum;
        return movie;
    })
    return minuteArray;
}

// console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){
    const yearOrderedArray = movies.map(movie => movie.year).sort();
    const yearRating = [];

    for(let i = 0; i < yearOrderedArray.length; i++){
        let obj = {};
        const yearArray = movies.map(movie => {
            if(movie.rate === yearOrderedArray[i]) return movie.rate
        });
        return yearArray;
        const summedYear = yearArray.reduce((accumulator, current) => accumulator + current);
        let ave = summedYear / yearArray.length;
        obj.yearOrderedArray[i] = ave;
        yearRating.push(obj);
    }
    return yearRating;
    // return 'The best year was ${} with an average rate of ${}';
}

console.log(bestYearAvg(movies));