/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let newArr = [...movies.sort((movie1, movie2) => {
        if (movie1.year > movie2.year) return 1;
        return -1;
    })];
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    let dramaMovies = movies.filter(element => element.genre.join("").indexOf("Drama") >= 0);
    return dramaMovies.filter(movie => movie.director === "Steven Spielberg").length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let workingArr = [...movies];
    let newArr = [...workingArr.sort((movie1, movie2) => movie1.title.localeCompare(movie2.title))];
    return newArr.map(element => element.title).splice(0, 20)
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (JSON.stringify(movies) === JSON.stringify([])) {
        return 0;
    } else {
        let newArr = [...movies.map(movie => movie.rate)];
        return parseFloat(((newArr.filter(element => element % element === 0)).reduce((ac, cv) => ac + cv, 0) / newArr.length).toFixed(2));
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(element => element.genre.join("").indexOf("Drama") >= 0);
    // return dramaMovies;
    return ratesAverage(dramaMovies);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    let workingArr = JSON.parse(JSON.stringify(movies));
    let durationArr = [...workingArr.map(movie => movie.duration)];
    let newDurationArr = durationArr.map(dtn => dtn.split(" "));

    newDurationArr.map(element => {
        if (element.length > 1) {
            element[0] = parseInt(element[0]) * 60 + parseInt(element[1]);
            element.pop();
        } else {
            if (element[0].indexOf("h") >= 1) {
                element[0] = parseInt(element[0]) * 60;;
            } else {
                element[0] = parseInt(element[0]);
            }
        }
    })

    let newMovies = [...workingArr.map(function (cv, idx) {
        cv.duration = newDurationArr[idx][0];
        return cv;
    })];

    return newMovies;
}



// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (JSON.stringify(movies) === JSON.stringify([])) {
        return null;
    } else {

        let workingArr = JSON.parse(JSON.stringify(movies));
        let yearArr = [...workingArr.map(movie => movie.year)];
        let uniqueYears = yearArr.filter((year, idx) => yearArr.indexOf(year) === idx);
        
        let moviesInYear = [];
        uniqueYears.forEach(function (uniqueYear) {
            moviesInYear.push({ year: uniqueYear, movies: workingArr.filter(movie => movie.year === uniqueYear) });
        });
        let avgPerYear = [];
        moviesInYear.forEach(function (element) {
            avgPerYear.push({ year: element.year, averageRate: ratesAverage(element.movies) })
        });

        let sortedAvgPerYear = avgPerYear.sort((year1, year2) => {
            if (year1.averageRate > year2.averageRate) return 1
            return -1
            });

        let maxRate = Math.max(...[...avgPerYear.map(i => i.averageRate)]);
        console.log(maxRate)
        
        let bestYear = sortedAvgPerYear.filter(element => element.averageRate === maxRate);
        console.log(bestYear[0].year)
        return `The best year was ${bestYear[0].year} with an average rate of ${bestYear[0].averageRate}`
    }
}