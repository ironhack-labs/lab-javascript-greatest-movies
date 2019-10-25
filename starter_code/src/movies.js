/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(someArray) {
    let sum = someArray.reduce((a, b) => {
        return a + Number(b.rate)
    }, 0);
    return sum / someArray.length;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesCall(someArray) {
    return someArray.filter((movie) => movie.genre.indexOf('Drama') !== -1);
}

function dramaMoviesRate(someArray) {
    let dramaMovies = dramaMoviesCall(someArray);
    let sumDramaMovies = dramaMovies.reduce((a, b) => {
        return a + Number(b.rate)
    }, 0);
    return Number((sumDramaMovies / dramaMovies.length).toFixed(2)) || 0;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(someArray) {
    let newArr = someArray.sort((a, b) => {
        if (a.year < b.year) {return -1;} 
        if (a.year > b.year) {return 1;} 
        return a.title.localeCompare(b.title);
    });
    return newArr;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(someArray) {
    return dramaMoviesCall(someArray).filter((movie) => movie.director === 'Steven Spielberg').length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(someArray) {
    let newArray = someArray.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });
    let mappedArr = newArray.filter((arr, ind) => ind < 20).map(arr => arr.title);
    return mappedArr;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(someArray) {
    let newMappedArr = someArray.map((arr) => {
        return {
            title: arr.title,
            year: arr.year,
            director: arr.director,
            duration: convertDuration(arr.duration.toString()),
            genre: arr.genre,
            rate: arr.rate
        }
    });
    return newMappedArr;
}

function convertDuration(strToConvert) {
    let sepArr = strToConvert.split(' ');
    let hour = 0;
    let min = 0;
    if (sepArr.length > 1) {
        hour = sepArr[0].slice(0, sepArr[0].indexOf('h'));
        min = sepArr[1].slice(0, sepArr[1].indexOf('m'));
    } else if (sepArr.length === 1) {
        if (sepArr[0].search('m') !== -1) {
            hour = 0;
            min = sepArr[0].slice(0, sepArr[0].indexOf('m'));
        } else {
            hour = sepArr[0].slice(0, sepArr[0].indexOf('h'));
            min = 0;
        }
    } else {
        hour = 0;
        min = 0;
    }
    let convertedDuration = Number(hour) * 60 + Number(min);
    return convertedDuration;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(someArray) {
    const arrYears = [];
    someArray.forEach((arr) => arrYears.push(arr.year));
    remDuplicates = [...new Set(arrYears)];
    let yearObject = remDuplicates.reduce((a, b) => (a[b] = [], a), {});
    someArray.forEach(arr => {
        for (let year in yearObject) {
            if (year === arr.year) {
                yearObject[year].push(arr);
            }
        }
    });
    const yearAndAverageArray = [];
    for (let eachYr in yearObject) {
        let avgYearRate = ratesAverage(yearObject[eachYr]);
        yearAndAverageArray.push({
            'year': eachYr,
            'avg': avgYearRate
        });
    }
    const winnerYearAvg = yearAndAverageArray.reduce((a, b) => {
        return a > b.avg ? a : b.avg;
    }, 0);
    const winnerArrays = yearAndAverageArray.filter(av => av.avg === winnerYearAvg);
    winnerArrays.sort((a, b) => {
        return a.year.localeCompare(b.year);
    });
    return (winnerArrays.length > 0) ? `The best year was ${winnerArrays[0].year} with an average rate of ${winnerArrays[0].avg}` : null;
}