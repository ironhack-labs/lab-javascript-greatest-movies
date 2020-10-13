// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const arrayOfDirectors = movies.map((movie) => movie.director);
    return arrayOfDirectors;
    }

//Iteration 1.1:
arrayOfDirectors.filter((item, index) => arrayOfDirectors.indexOf(item) !== index);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergMovies = movies.filter(
        (movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
        );
    return spielbergMovies.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
if(movies.length !== 0) {
    let sumOfRates = movies.reduce(
        function(acc, nextVal){
            return acc + nextVal.rate
        },0)
let numMovies = movies.length;
let averageRate = sumOfRates/numMovies;
let roundedAvg = Number(averageRate.toFixed(2));
return roundedAvg;  
}
return 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter((movie) => movie.genre.includes("Drama"));
    return ratesAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    let sortMovies = movies
    .map((movie) => movie)
    .sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    })
    .sort((a, b) => {
        return a.year - b.year;
    });
    return sortMovies;
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const alphabeticallyOrderedArray = movies.map((movie) => movie.title);
    alphabeticallyOrderedArray.sort();
    return alphabeticallyOrderedArray.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
