// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(
        (movie) =>
            movie.director === 'Steven Spielberg' &&
            movie.genre.includes('Drama')
    ).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    return +(
        moviesArray.reduce((prev, curr) => {
            return curr.score ? prev + curr.score : prev;
        }, 0) / moviesArray.length
    ).toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    return Number(
        moviesArray
            .filter((movie) => movie.genre.includes('Drama'))
            .reduce((prev, curr, i, arr) => {
                if (i === arr.length - 1) {
                    return (prev + curr.score) / arr.length;
                }
                return prev + curr.score;
            }, 0)
            .toFixed(2)
    );
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copy = [...moviesArray];

    return copy.sort((a, b) => {
        if (a.year - b.year > 0) {
            return 1;
        } else if (a.year - b.year < 0) {
            return -1;
        } else {
            if (a.title - b.title > 0) {
                return 1;
            } else {
                return -1;
            }
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray]
        .sort((a, b) => {
            if (a.title > b.title) {
                return 1;
            } else {
                return -1;
            }
        })
        .slice(0, 20)
        .map((movie) => movie.title);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
        const time = movie.duration.replace('min', '').split('h');

        const minutes = Number.isNaN(time[1])
            ? Number(time[0]) * 60
            : Number(time[0]) * 60 + Number(time[1]);

        return { ...movie, duration: minutes };
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length) return null;
    const yearsAndScores = moviesArray.reduce((prev, curr) => {
        if (prev[curr.year]) {
            prev[curr.year].push(curr.score);
        } else {
            prev[curr.year] = [curr.score];
        }
        return prev;
    }, {});

    for (let key of Object.keys(yearsAndScores)) {
        yearsAndScores[key] = yearsAndScores[key].reduce(
            (prev, curr, i, arr) => {
                if (i === arr.length - 1) {
                    return Number(((prev + curr) / arr.length).toFixed(2));
                }
                return prev + curr;
            },
            0
        );
    }

    let bestYear = 0;
    let bestAvg = 0;

    for (let key of Object.keys(yearsAndScores)) {
        if (bestAvg < yearsAndScores[key]) {
            bestAvg = yearsAndScores[key];
            bestYear = key;
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}
