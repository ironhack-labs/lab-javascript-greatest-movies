
// Gizem Wanka && Aleksandra Porada

// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arrayOfMovies) {
    let allDirectors = [];
    {
        for (let movie of arrayOfMovies) {
            allDirectors.push(movie.director);
        }
    }
    return allDirectors;
    console.log(allDirector);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrayOfMovies) {
    if (arrayOfMovies.length === 0) {
        return 0;
    }
    let stevensDramas = 0;
    let stevensMovies = 0;

    for (let movie of arrayOfMovies) {
        if (
            movie.director === "Steven Spielberg" &&
            movie.genre.includes("Drama")
        ) {
            stevensDramas += 1;
        }
    }
    return stevensDramas;

    if (movie.director === "Steve Spielberg") {
        return stevensMovies;
    }
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrayOfMovies) {
    if (arrayOfMovies.length === 0) {
        return 0;
    }
    let totalRate = 0;
    let averageRate = 0;
    for (movie of arrayOfMovies) {
        if (!movie.rate) {
            continue;
        }
        totalRate += movie.rate;
    }
    averageRate = totalRate / arrayOfMovies.length;
    averageRate = parseFloat(averageRate.toFixed(2));
    return averageRate;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrayOfMovies) {
    if (arrayOfMovies.length === 0) {
        return 0;
    }
    let totalRateDrama = 0;
    let averageRateDrama = 0;
    let counter = 0;
    for (movie of arrayOfMovies) {
        if (movie.genre.includes("Drama") && movie.rate) {
            counter += 1;
            totalRateDrama += movie.rate;
        }
    }
    if (counter === 0) {
        return 0;
    }
    averageRateDrama = totalRateDrama / counter;
    averageRateDrama = parseFloat(averageRateDrama.toFixed(2));
    return averageRateDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrayOfMovies) {
    let yearOrder = [...arrayOfMovies];

    yearOrder.sort(function(a, b) {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return yearOrder;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrayOfMovies) {

    let newOrder = [...arrayOfMovies];

    newOrder.sort(function(a, b) {
        return a.title.localeCompare(b.title);
    });
    newOrder = newOrder.map(function(movie) {
        return movie.title;
    });
    return newOrder.slice(0, 20);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
