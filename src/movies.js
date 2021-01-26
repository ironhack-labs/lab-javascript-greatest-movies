// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movies) {
    return movies.map(movie => {return movie.director;});
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectorsUnique(movies) {
    const directors = getAllDirectors(movies);
    const uniqueDirectors = [];
    directors.forEach(director => {
        if (!uniqueDirectors.includes(director)) uniqueDirectors.push(director);
    });
    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const spielbergDramaMovies = movies.filter(movie => {return (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));});
    return spielbergDramaMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if (movies.length === 0) return 0;
    const rateSum = movies.reduce((sum, movie) => {
        return sum + (movie.rate ? movie.rate : 0);
    }, 0);
    return Number((rateSum / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const yearOrder = movies.slice();
    return yearOrder.sort((a,b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const alphaOrder = movies.slice().sort((a,b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    });
    const titles = [];
    for (i = 0; i < movies.length && i < 20; i++) {
        titles.push(alphaOrder[i].title);
    }
    return titles;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const copy = {};
    return movies.map(movie => {
        Object.assign(copy, movie);
        copy.duration = convertToMinutes(movie.duration);
        return copy;
    });
}

function convertToMinutes(duration) {
    let hours, minutes;
    if (/\d+h \d+min/.test(duration)) {
        let partialProcessedDuration = duration.split('h');
        hours = Number(partialProcessedDuration[0]);
        minutes = Number(partialProcessedDuration[1].match(/\d+/)[0]);
        return 60 * hours + minutes;
    }
    else if (/\d+h/.test(duration)) {
        hours = Number(duration.match(/\d+/)[0]);
        return 60 * hours;
    }
    else if (/\d+min/.test(duration)) {
        minutes = Number(duration.match(/\d+/)[0]);
        return minutes;
    }
    else {
        console.log('TIME CONVERSION ERROR');
        return 0;
    }
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies) {
    if (movies.length === 0) return null;
    const years = movies.map(movie => {
        return movie.year;
    });
    const yearsAndAverages = [];
    years.forEach(year => {
        const moviesThisYear = movies.filter(movie => movie.year === year);
        const average = moviesThisYear.reduce((total, movie) => {
            return total + movie.rate;
        }, 0) / moviesThisYear.length;
        yearsAndAverages.push({year: year, avgRate: average});
    });
    yearsAndAverages.sort((a, b) => {
        if (a.avgRate < b.avgRate) return 1;
        if (a.avgRate > b.avgRate) return -1;
        if (a.year < b.year) return -1;
        else return 0;
    });
    return `The best year was ${yearsAndAverages[0].year} with an average rate of ${yearsAndAverages[0].avgRate}`
}