// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const directors = movies
        .map((movie) => movie.director);
    return directors;
}
//change done

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(bestDirector) {
    return bestDirector.filter(
        (stevenSpielberg) =>
        stevenSpielberg.director === "Steven Spielberg" && stevenSpielberg.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(averageMovies) {
    if (!averageMovies.length) {
        return 0;
    }
    let total = averageMovies.reduce((a, b) => {
        if (b.rate) {
            return a + b.rate;
        } else {
            return a;
        }
    }, 0);

    return Number((total / averageMovies.length).toFixed(2));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(dramaMovies) {
    let moviesInspector = dramaMovies.filter((theMovie) => theMovie.genre.includes('Drama'));
    return scoresAverage(moviesInspector);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(scoresAverage) {
    let arrayOrdered = [];
    arrayOrdered.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (b.year > a.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            } else if (b.title > a.title) {
                return -1;
            }
            return 0;
        }
    });
    return arrayOrdered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(scoresAverage) {
    return scoresAverage.sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            } else if (a.title < b.title) {
                return -1;
            } else {
                return 0;
            }
        })
        .map((stevenSpielberg) => stevenSpielberg.title)
        .slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function convertionHours(hString) {
    let calcHour = hString.split("h");
    return calcHour[0] * 60;
}

function convertionMinutes(minString) {
    let calcMin = minString.split("min");
    return Number(calcMin[0]);
}

function convertionDuration(duration) {
    let timeSpaces = duration.split(" ");
    let minutes = timeSpaces.reduce((sum, oneSpace) => {
        if (oneSpace.includes("h")) {
            return sum + convertionHours(oneSpace);
        }
        return sum + convertionMinutes(oneSpace);
    }, 0);
    return minutes;
}

function turnHoursToMinutes(movies) {
    let centArray = movies.map((oneMovie) => {
        let newMovie = {};
        newMovie.title = oneMovie.title;
        newMovie.year = oneMovie.year;
        newMovie.director = oneMovie.director;
        newMovie.duration = converDuration(oneMovie.duration);
        newMovie.genre = oneMovie.genre;
        newMovie.rate = oneMovie.rate;
        return newMovie;
    });
    return centArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(scoresAverage) {
    if (!scoresAverage.length) return null;
    let newObject = {};
    scoresAverage.forEach((stevenSpielberg) => {
        if (!scoresAverage[stevenSpielberg.year]) {
            newObject[stevenSpielberg.year] = [stevenSpielberg];
        } else {
            newObject[stevenSpielberg.year].push(stevenSpielberg);
        }
    });
    let high = 0;
    let now;
    for (let theYear in newObject) {
        if (scoresAverage(newObject[theYear]) > high) {
            high = scoresAverage(newObject[theYear]);
            now = theYear;
        }
    }
    return `The best year was ${now} with an average rate of ${high}`;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
    module.exports = {
        getAllDirectors,
        howManyMovies,
        scoresAverage,
        dramaMoviesScore,
        orderByYear,
        orderAlphabetically,
        turnHoursToMinutes,
        bestYearAvg,
    };
}