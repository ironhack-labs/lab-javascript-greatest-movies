// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple 
// movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movies) => movies.director);
}

function getAllDirectorsWithoutDuplicates(moviesArray) {
    return moviesArray.reduce((acc, movie) => {
        if (!acc.includes(movie.director)) {
            acc.push(movie.director);
        }
        return acc;
    }, []);
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


function howManyMovies(moviesArray) {
    return moviesArray.filter(movie =>
        movie.director === "Steven Spielberg" &&
        movie.genre.includes("Drama")
    ).length;
}
// 1st director Steven Spielberg
// 2nd genre.Drama
//     genre: ['Adventure', 'Drama', 'Sci-Fi'],
// movie.genre.includes("Drama")
// .length counts 


// // to be clear
// const spMovieCount = moviesArray.filter(function spMovie(movies) {
//     return movies.director === `Steven Spielberg` && movies.genre === `Drama`;
// }).length;

// // w/z allow function
// const spMovieCount = moviesArray.filter((movie) => movies.director === `Steven Spielberg` && movies.genre === `Drama`).length;


// ✔︎ Create a howManyMovies() function 
// ✔︎ that receives an array as a parameter and
// ✔︎ filter the array so we can have only the drama movies where Steven Spielberg is the director.


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // Get scores from the `moviesArray` and store them in the `scores` array.
    const scores = moviesArray.filter(movie => typeof movie.score === 'number').map(movie => movie.score);

    // should return 0 if an empty array is passed
    if (scores.length === 0) {
        return 0;
    }

    // total score
    const totalScore = scores.reduce((acc, cur) => acc + cur, 0);

    // average score 
    const averageScore = totalScore / moviesArray.length;

    // rounded to 2 decimals places
    return parseFloat(averageScore.toFixed(2));
}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }

    const dramaMovies = moviesArray.filter(movie => movie.genre.includes('Drama'));

    if (dramaMovies.length === 0) {
        return 0;
    }

    if (dramaMovies.length === 1) {
        return dramaMovies[0].score;
    }

    const totalDramaScore = dramaMovies.reduce((acc, cur) => acc + cur.score, 0);

    const averageDramaScore = totalDramaScore / dramaMovies.length;

    return parseFloat(averageDramaScore.toFixed(2));
}


// should return a number
// should return the score of a single element array
// should return the average of the rating of the drama movies in the array
// should return the average of the array, a floating point number
// should only calculate the average for drama movies
// should return 0 if there is no Drama movie





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = moviesArray.slice();

    moviesCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });

    return moviesCopy;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const copiedMovies = moviesArray.slice();

    copiedMovies.sort((a, b) => {
        return a.title.localeCompare(b.title);
    });

    const first20 = copiedMovies.slice(0, 20);

    const titles = first20.map(movie => movie.title);

    return titles;
}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    const copiedMovies = moviesArray.map(movie => ({ ...movie }));

    const convertedMovies = copiedMovies.map(movie => {
        const durationParts = movie.duration.split(' ');
        let totalMinutes = 0;

        for (let part of durationParts) {
            if (part.includes('h')) {
                totalMinutes += parseInt(part) * 60;
            } else if (part.includes('min')) {
                totalMinutes += parseInt(part);
            }
        }

        return { ...movie, duration: totalMinutes };
    });

    return convertedMovies;
}





// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    const scoresByYear = {};

    for (let movie of moviesArray) {
        if (!scoresByYear[movie.year]) {
            scoresByYear[movie.year] = { totalScore: movie.score, count: 1 };
        } else {
            scoresByYear[movie.year].totalScore += movie.score;
            scoresByYear[movie.year].count++;
        }
    }

    const averageScoresByYear = {};
    for (let year in scoresByYear) {
        averageScoresByYear[year] = scoresByYear[year].totalScore / scoresByYear[year].count;
    }

    let bestYear = null;
    let bestAverage = -Infinity;
    for (let year in averageScoresByYear) {
        if (averageScoresByYear[year] > bestAverage) {
            bestAverage = averageScoresByYear[year];
            bestYear = year;
        } else if (averageScoresByYear[year] === bestAverage) {
            // スコアが同じ場合はより古い年を選択
            bestYear = Math.min(bestYear, year);
        }
    }

    if (moviesArray.length === 1) {
        return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
    }

    return `The best year was ${bestYear} with an average score of ${bestAverage.toFixed(1)}`;
}
