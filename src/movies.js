/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    let newArr = [...arr.sort((a, b) => (a.year < b.year) ? -1 : 1)];
    newArr.sort((a, b) => (a.year === b.year && a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 1);
    return newArr;
} 

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
    if (arr.length === 0) { return 0};
    arr = arr.filter(movie => movie.genre.includes(`Drama`) && movie.director === `Steven Spielberg` );
    return arr.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    let newArr = [...arr]; // Copy array
    newArr.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase()) ? -1 : 1); // Order alphabetically
    newArr = newArr.filter((movie,i) => i < 20); // Filter out top 20
    return newArr.map((element) => element.title); // Output is string of titles
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (arr) => {
    if (arr.length === 0) { return 0};
    let newArr = arr.map((element) => typeof element.rate === `number` ? element.rate : 0); // Create array of rates. Zero if no rte
    let sum = newArr.reduce((a,b) => a + b);
    return Number((sum / newArr.length).toFixed(2));
}

// Iteration 5: Drama movies - Get the average of Drama Movies
const dramaMoviesRate = (arr) => {
    return ratesAverage(arr.filter((movie) => movie.genre.includes(`Drama`)));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
    // Create auxiliary function to take a string with xh, xxmin and return the number in minutes
    const adjustStringToMinutes = (str) => {
        let minutes = 0;
        let strArray = str.toString().split(` `);
        for (const time of strArray) {
            if (time.includes('h')) { minutes += time.replace('h','') * 60 };
            if (time.includes('min')) { minutes += time.replace('min','') * 1 };
        }
        return minutes;
    }
    
    return arr.map((originalElement) => {
        let newElement = {...originalElement};
        newElement.duration = adjustStringToMinutes(newElement.duration);
        return newElement;
    });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
    if (arr.length === 0) { return null};
 
    let avgRateObject = {};

    // Create an array of objects with key = year, value = array of ratings
    arr.forEach((element) => {
        if (!Object.keys(avgRateObject).includes(element.year.toString())) { avgRateObject[element.year] = [] }
        avgRateObject[element.year].push(element.rate);
    }); 

    // Push average rating into array of objects
    let avgRateArray = [];
    for (const year in avgRateObject) {
        let numRates = avgRateObject[year].length;
        avgRateArray.push({
            'year': year,
            'avgRate': avgRateObject[year].reduce((a, b) => a + b) / numRates
        })
    }

    // Sort by rating
    avgRateArray.sort((a, b) => (a.avgRate > b.avgRate) ? -1 : 1);

    // Sort by year with same rating
    avgRateArray.sort((a, b) => (a.avgRate === b.avgRate && a.year < b.year) ? -1 : 1);

    return `The best year was ${avgRateArray[0].year} with an average rate of ${avgRateArray[0].avgRate}`;
}