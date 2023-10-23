// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const dirArray = moviesArray.map(movie => movie.director);
    return dirArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergMovies = moviesArray.filter((movie) => {
        return movie.director == 'Steven Spielberg' && movie.genre.includes('Drama');
    });
    return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length > 0) {
        const avgScores = moviesArray.reduce((avg, movie) => {
            if (movie.score == undefined) {
                return avg;
            }
            return avg + movie.score;
        }, 0);
        let result = avgScores / moviesArray.length;
        result = parseFloat(result.toFixed(2));
        return result;
    } else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes('Drama'))
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedMovies = moviesArray.toSorted((movie1, movie2) => {
        if (movie1.year > movie2.year) return 1;
        if (movie2.year > movie1.year) return -1;
        return movie1.title.localeCompare(movie2.title) // if same year order alphabetically
    });
    return orderedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let orderedMovies = moviesArray.toSorted((movie1, movie2) => {
        return movie1.title.localeCompare(movie2.title) // if same year order alphabetically

    });
    let onlyTitlesArray = [];
    for (i = 0; i < orderedMovies.length; i++) {
        onlyTitlesArray.push(orderedMovies[i].title);
    }
    if (onlyTitlesArray.length < 20) {
        return onlyTitlesArray;
    } else {

        return onlyTitlesArray.slice(0, 20);
    }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = moviesArray.map((movie) => {
        return {
            "title": movie.title,
            "year": movie.year,
            "director": movie.director,
            "duration": parseTime(movie.duration),
            "genre": movie.genre,
            "score": movie.score
        }

    })
    return newArray
}

function parseTime(timeString) {
    let hours = 0;
    let minutes = 0;
    let sum = 0;
    if (timeString.length > 0) {
        let hIndex = timeString.indexOf('h');
        let wIndex = timeString.indexOf(" ");
        let mIndex = timeString.indexOf('m');
        if (hIndex != -1) {
            hours = Number(timeString.substring(0, hIndex));

            if (mIndex != -1) {
                minutes = Number(timeString.substring(wIndex + 1, mIndex))
            }

            if (hours == 0) {
                sum = minutes
            }
            sum = hours * 60 + minutes;
        }
    }
    return sum;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    // return The best year was <YEAR> with an average score of <RATE>

    if (moviesArray.length == 0) {
        return null;
    }

    let yearsArray = [];

    for (let i = 0; i < moviesArray.length; i++) {
        if (!yearsArray.includes(moviesArray[i].year)) {
            yearsArray.push(moviesArray[i].year);
        }
    }

    let bestScore = 0;
    let bestYear = 0;

    for (let i = 0; i < yearsArray.length; i++) {
        let moviesInAYear = moviesArray.filter((movie) => {
            if (yearsArray[i] == movie.year) {
                return movie
            }
        });

        if (scoresAverage(moviesInAYear) > bestScore) {
            bestScore = scoresAverage(moviesInAYear);
            bestYear = yearsArray[i];
        } else if (scoresAverage(moviesInAYear) == bestScore) {
            if (yearsArray[i] < bestYear) {
                bestYear = yearsArray[i];
            }
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestScore}`;
}
