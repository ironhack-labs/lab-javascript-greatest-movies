// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    const allDirectors = [];

    return movies.map((movie) => {
        if (allDirectors.indexOf(movie.director) === -1) {
            allDirectors.push(movie.director);

            return movie.director;
        }
    })
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    const filteredMovies = movies.filter(function(movie) {
        return movie.director === 'Steven Spielberg' && movie.genre.indexOf('Drama') !== -1;
    })

    return filteredMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
    if (movies.length === 0) {
        return 0;
    }

    const sumScores = movies.reduce(function(previousValue, movie) {
        if (typeof movie.score === 'number') {
            // if ('score' in movie) {
            return previousValue + movie.score;
        }

        return previousValue;
    }, 0)

    return Number((sumScores / movies.length).toFixed(2));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
    if (movies.length === 0) {
        return 0;
    }

    let numDramaMovies = 0;
    // let previousMovieScores = 0;

    // for (let i = 0; i < movies.length; i++) {
    //     if (movies[i].genre.indexOf('Drama') !== -1) {
    //         numDramaMovies++;

    //         if (typeof movies[i].score === 'number') {
    //             previousMovieScores += movies[i].score;
    //         }
    //     }
    // }

    // const movieScores = previousMovieScores;

    const movieScores = movies.reduce(function(previousMovieScores, movie) {
        if (movie.genre.indexOf('Drama') !== -1) {
            numDramaMovies++;

            if (typeof movie.score === 'number') {
                return previousMovieScores + movie.score;
            }

            return previousMovieScores
        }

        return previousMovieScores
    }, 0)

    if (numDramaMovies == 0) {
        return 0
    }

    return Number((movieScores / numDramaMovies).toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    const newMoviesArr = movies.map((movie) => movie);

    newMoviesArr.sort(function(firstMovie, secondMovie) {
        if (firstMovie.year > secondMovie.year) {
            return 1;
        } else if (firstMovie.year < secondMovie.year) {
            return -1;
        } else if (firstMovie.title > secondMovie.title) {
            return 1;
        } else if (firstMovie.title < secondMovie.title) {
            return -1;
        } else {
            return 0;
        }
    })

    return newMoviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const moviesTitles = movies.map((movie) => movie.title);

    moviesTitles.sort(function(firstMovieTitle, secondMovieTitle) {
        if (firstMovieTitle > secondMovieTitle) {
            return 1;
        } else if (firstMovieTitle < secondMovieTitle) {
            return -1;
        } else {
            return 0;
        }
    })
    return moviesTitles.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    const formattedMovies = movies.map((movie) => {
        let newMovie = {...movie };

        const movieDurationArr = movie.duration.split('h');
        if (movieDurationArr.length == 1) {
            movieDurationArr.push(0);
        } else {
            let mins = movieDurationArr[1].trim();
            movieDurationArr[1] = mins.substring(0, mins.length - 3);
        }

        newMovie.duration = (Number(movieDurationArr[0]) * 60) + Number(movieDurationArr[1]);

        return newMovie;
    })

    return formattedMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null;
    }

    const sumByYears = {};

    movies.forEach((movie) => {
        if (typeof sumByYears[movie.year] === "undefined") {
            sumByYears[movie.year] = { count: 0, sum: 0 }
        }

        sumByYears[movie.year].count++;
        sumByYears[movie.year].sum += movie.score;
    })

    let bestScore = 0;
    let bestYear = "";

    for (var year in sumByYears) {
        const avg = sumByYears[year].sum / sumByYears[year].count;

        if (avg > bestScore) {
            bestScore = avg;
            bestYear = year
        } else if (avg == bestScore && year < bestYear) {
            bestYear = year
        }
    }

    bestScore = Math.round(bestScore * 10) / 10

    if ((bestScore * 10) % 10 !== 0) {
        bestScore = bestScore.toFixed(1)
    }

    return `The best year was ${bestYear} with an average score of ${bestScore}`;
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