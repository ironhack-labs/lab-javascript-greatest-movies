// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
    let directors = array.map((obj) => obj.director);
    directors = [... new Set(directors)];
    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    ssMovies = array.filter((obj) => (obj['director'] === "Steven Spielberg" && obj['genre'].includes('Drama')));
    return ssMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(array) {
    let rateSum = array.reduce((sum, obj) => sum += obj['rate'] || 0, 0);
    let rateAverage = rateSum / array.length;
    return Math.round(rateAverage * 100) / 100 || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter((obj) => obj['genre'].includes('Drama'));
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
    let sortedArray = JSON.parse(JSON.stringify(array));
    
    return sortedArray.sort((a, b) => {
        if(a.year != b.year) {
            return a.year - b.year;
        } else {
            return (a.title >= b.title) ? 1 : -1;
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {
    let sortedArray = JSON.parse(JSON.stringify(array));
    sortedArray.sort((a, b) => {
        return (a.title >= b.title) ? 1 : -1;
    });
    sortedArray = sortedArray.map((obj) => {return obj['title'];});
    return sortedArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
    let sortedArray = JSON.parse(JSON.stringify(array));
    sortedArray = sortedArray.map((obj) => {
        let sum = 0;
        let time = obj['duration'];
        if(time.includes('h')) {
            sum += (parseInt(time[0]) * 60);
            if(time.includes('min')) {
                sum += (parseInt(time.slice(time.indexOf(' '), time.indexOf('min'))));
            }
        } else {
            sum += parseInt(time.slice(0, time.indexOf('min')));
        }
        obj['duration'] = sum;
        return obj;
    });
    return sortedArray;
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(array) {

    if(array.length > 0) {
        let sortedYears = orderByYear(array);
        possibleYears = [...new Set( sortedYears.map((obj) => {return obj.year;}) )];

        let collectedYearsArray = []
        for (index in possibleYears) {
            collectedYearsArray[index] = sortedYears.filter((obj) => {
                return (obj.year == possibleYears[index]);
            });
        }

        let topRatedYear = {rate: 0, year:  0};

        for (yearCollection of collectedYearsArray) {
            yearAvg = ratesAverage(yearCollection);
            if(topRatedYear.rate < yearAvg) {
                topRatedYear.rate = yearAvg;
                topRatedYear.year = yearCollection[0].year;
            }
        }

        return `The best year was ${topRatedYear.year} with an average rate of ${topRatedYear.rate}`;
    }

    return null;

}
