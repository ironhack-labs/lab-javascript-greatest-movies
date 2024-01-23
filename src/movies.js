// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie => movie.director);
    return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter(movie => movie.director === `Steven Spielberg` && movie.genre.includes(`Drama`));
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {return 0;}

    const scores = moviesArray.map(movie => movie.score);

    const avg = (scores.reduce(function(acc, curr) {
        if (!curr) {
            return acc;
        } else {
            return acc + curr;
        }
    }) / scores.length);
    
    return Number(avg.toFixed(2));
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramas = moviesArray.filter(movie => movie.genre.includes(`Drama`));

    if (dramas.length === 0) {return 0};

    const total = dramas.reduce((acc, movie) => acc + movie.score, 0);
    const avg = total / dramas.length

    return Number(avg.toFixed(2));

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const orderedArray = moviesArray.map(element => element);

    orderedArray.sort(function(a,b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }

        return a.year - b.year;

    });

    return orderedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const titleArray = moviesArray.map(movie => movie.title);

    titleArray.sort(function(a, b) {
        return a.localeCompare(b);
    })

    const twenty = titleArray.slice(0,20);

    return twenty;

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const minutesArray = moviesArray.map(element => element);

    const hoursToMinutes = (str) => {

        const hours = str.slice(0, str.indexOf('h'))
        const mins = str.slice(str.indexOf('h') + 2, str.indexOf('min'))

        const newTime = Number((hours * 60) + mins);

        console.log(newTime);
        return newTime;

    }

    minutesArray.forEach((movie) => {
        const newTime = hoursToMinutes(movie.duration);
        movie.duration = newTime;
    });

    return minutesArray;

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
