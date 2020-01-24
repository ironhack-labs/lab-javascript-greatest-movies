/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
    return [...movies.sort((a,b) => {
        if(a.year > b.year) return 1;
        else if(a.year < b.year) return -1;
        else {
            if (a.title > b.title) return 1;
            else if(a.title < b.title) return -1;
        }
    })];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
    return movies.filter((movie) => movie.genre.
    includes("Drama")).filter((movie) => movie.director === "Steven Spielberg").length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    return [...movies.map((value) => {return value.title}).
            sort((a,b) => {
                if (a > b) return 1;
                else if(a < b) return -1;
                else return 0;
            }).slice(0, 20)];
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if(movies.length === 0) return 0;
    let newMovies = movies.filter((value) => value.rate !== undefined);
    let average = newMovies.reduce((accumulator, value) => accumulator + value.rate, 0);
    return Math.round(average/movies.length * 100)/100;
}
// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let includeDrama = movies.filter((value) => value.genre.includes("Drama")),
    average = includeDrama.reduce((accumulator, value) => accumulator + value.rate, 0),
    lengthDrama = includeDrama.length;
    if(lengthDrama === 0) return 0;
    return Math.round(average/lengthDrama * 100)/100;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function hoursToMinutes(value){
    if(value.includes("h") && value.includes("m")) return parseInt(value) * 60 + parseInt(value.split(" ")[1]);
    else if(value.includes("h")) return parseInt(value) * 60;
    else return parseInt(value);
}

function turnHoursToMinutes(movies){
    return [...movies.map((value) => {
                return {
                    ...value,
                    duration:hoursToMinutes(value.duration)
                }
            })];
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

function hash(value){
    let s = value.toString();
    return parseInt(s.charAt(2)) + parseInt(s.charAt(3));
}

// TODO : Rewrite with better logic and code
function bestYearAvg(movies){
    if(movies.length === 0) return null;
    let yearsMovies = [], ratesMovies = [], countMovies = [];
    let index = 0;
    /* Filling the 3 arrays */
    movies.map((value) => {
        if(yearsMovies.includes(value.year)) {
          index = yearsMovies.indexOf(value.year);
          ratesMovies[index] += value.rate;
          countMovies[index] += 1;  
        }
        else{ 
          yearsMovies.push(value.year);
          ratesMovies.push(value.rate);
          countMovies.push(1);
        }
    }
    );

    let maxAverage = ratesMovies.map((rate, nMovies) => { return rate/countMovies[nMovies]; });
    let maxA = Math.max(...maxAverage);

    let indexMaxAverage = maxAverage.reduce((acc, value, index) => {
        if (value === maxA)
            acc.push(index);
        return acc;
    }, []); 
    
    if(indexMaxAverage.length > 1) {
        let years = [];
        for(let i = 0; i < indexMaxAverage.length; i++) years.push(yearsMovies[indexMaxAverage[i]]);
        maxA = yearsMovies.indexOf(Math.min(...years));
    }
    else maxA = indexMaxAverage[0];

    return `The best year was ${yearsMovies[maxA]} with an average rate of ${maxAverage[maxA]}`;
}