// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) =>
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const res = moviesArray.reduce((acc, movie) => {
        if (movie.score === 0 || movie.score > 0) {
            return acc + movie.score
        } else {
            return acc;
        }
    }, 0);

    let aver = res / moviesArray.length;

    return Math.round(aver * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMoviesArray = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama")
    })

    if (dramaMoviesArray.length === 0) {
        return 0;
    }

    const res = dramaMoviesArray.reduce((acc, movie) => {
        return acc + movie.score
    }, 0);

    let aver = res / dramaMoviesArray.length;

    return Math.round(aver * 100) / 100;

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const clonedArray = [...moviesArray];

    clonedArray.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return clonedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titleArray = moviesArray.map((movie) => {
        return movie.title;
    });

    const clonedArray = [...titleArray];

    const res = clonedArray.sort((a, b) => {
        return a.localeCompare(b);
    });

    return res.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(moviesArray) {

    return moviesArray.map((movie) => {
        let amountHours = 0;
        let amountMinutes = 0;
        let stringWithMin = "";

        if (movie.duration.includes("h")) {
            amountHours = parseInt(movie.duration.split("h")[0])
            stringWithMin = movie.duration.split("h")[1]
        } else {
            stringWithMin = movie.duration;
        }


        if (stringWithMin.includes("min")) {
            amountMinutes = parseInt(stringWithMin.split("min")[0])
        }

        const clonedObj = {...movie};

        clonedObj.duration = amountHours * 60 + amountMinutes

        return clonedObj
    })

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
