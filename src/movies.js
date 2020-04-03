/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieArr) {
    // create a copy
    let copyMovies = Array.from(movieArr);
    // sort by year, if same year sort alphabetically
    return copyMovies.sort((mov1, mov2) => (mov1.year !== mov2.year ? mov1.year - mov2.year : mov1.title.toUpperCase() > mov2.title.toUpperCase() ? 1 : mov1.title.toUpperCase() < mov2.title.toUpperCase() ? -1 : 0));
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movieArr) {
    // filter by genre drama and Spielberg director
    return movieArr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr) {
    // create a copy
    let copyMovies = Array.from(movieArr);
    // sort by title
    copyMovies.sort((mov1, mov2) => mov1.title.toUpperCase() > mov2.title.toUpperCase() ? 1 : mov1.title.toUpperCase() < mov2.title.toUpperCase() ? -1 : 0);
    // definition of the result array length (max => 20)
    let limitLength = 0;
    copyMovies.length > 20 ? limitLength = 20 : limitLength = copyMovies.length;
    // creating the result array
    let first20Alph = [];
    for (let i=0; i < limitLength; i++) {
        first20Alph.push(copyMovies[i].title);
    }
    return first20Alph;
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movieArr) {
    // test 0 length
    if (movieArr.length === 0) {
        return 0;
    } 
    // calculate the sum of the rates (taking 0 if there's an empty film or wrong type value) & calculate the average rounded to 2 decimals
    let sum = movieArr.reduce((sumRates, mov) => sumRates + (typeof mov.rate !== "number" ? 0 : mov.rate), 0);
    return parseFloat((sum/movieArr.length).toFixed(2));
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movieArr) {
    // create the filtered drama array and use of a previous function to calculate the average
    const dramaArrray = movieArr.filter(movie => movie.genre.includes("Drama"));
    return ratesAverage(dramaArrray);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieArr) {
    // create a copy using JSON
    let copyMovies = JSON.parse(JSON.stringify(movieArr));
    // create a minutes array with conversion h-min format to min
    let minutesArray = movieArr.map(movie => {
        let hourIndex = movie.duration.indexOf("h");
        let minIndex = movie.duration.indexOf("min");
        return (hourIndex === -1 ? 0 : parseInt(movie.duration[hourIndex - 1])*60) + (minIndex === -1 ? 0 : parseInt(movie.duration.slice(minIndex-2, minIndex)));
    });
    // change the duration format to a new min format    
    for (let i=0; i<copyMovies.length; i++) {
        copyMovies[i].duration = minutesArray[i];
    }
    return copyMovies;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(movieArr) {
    // test 0 length & 1 movie array case
    if (movieArr.length === 0) {
        return null;
    } else if (movieArr.length === 1) {
        return `The best year was ${movieArr[0].year} with an average rate of ${movieArr[0].rate}`;
    }
    // create an array of the year's movies
    let yearsArray = movieArr.map(movie => movie.year);
    let yearsRateObject = [];
    // definition of {name, avgRate} array & order by avgRate
    for (let i=0; i<yearsArray.length; i++) {
        // if the year is repeated, skip if
        if (yearsArray.indexOf(yearsArray[i]) === i) {
            // filter by year & calculate de average rate
            let yearFiltered = movieArr.filter(movie => movie.year === yearsArray[i]);
            let yearRate = parseFloat((yearFiltered.reduce((acc, rateFilm) => acc + rateFilm.rate, 0)/yearFiltered.length).toFixed(2));
            yearsRateObject.push({year: yearsArray[i], avgRate: yearRate})
        }
    }
    yearsRateObject.sort((mov1, mov2) => mov2.avgRate - mov1.avgRate);
    // in case the rate of the 1st and 2nd are the same, the oldest movie is returned
    if (yearsRateObject[0].avgRate > yearsRateObject[1].avgRate) {
        return `The best year was ${yearsRateObject[0].year} with an average rate of ${yearsRateObject[0].avgRate}`;
    } else if (yearsRateObject[0].avgRate === yearsRateObject[1].avgRate && yearsRateObject[0].year > yearsRateObject[1].year) {
        return `The best year was ${yearsRateObject[1].year} with an average rate of ${yearsRateObject[1].avgRate}`;  
    }
}