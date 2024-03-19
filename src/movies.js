// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((movie) => movie.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.reduce((totalCount ,movie) => movie.genre.includes('Drama') && movie.director.includes('Steven Spielberg') ? 
    totalCount + 1 : totalCount, 0);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    
    const totalScore = moviesArray.reduce((totalScore, movie) => 
         totalScore + (movie.score || 0)
    , 0);
    
    return parseFloat((totalScore / moviesArray.length).toFixed(2)); 
}
      


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const {totalScore, totalCountDrama} = moviesArray.reduce((total, movie) => {
        if (movie.genre.includes('Drama')) {
            total.totalScore += movie.score;
            total.totalCountDrama++;
        }
        return total;
    }, { totalScore: 0, totalCountDrama: 0 });
    
    if (totalCountDrama === 0) {
        return 0;
    }

    const averageScore = totalScore / totalCountDrama;
    return parseFloat(averageScore.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const sortedMovies = moviesArray.toSorted((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year; 
        } else {
            if (a.title < b.title) return -1;
            if (a.title > b.title) return 1;
            return 0; 
        }
    });

    return sortedMovies;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray.toSorted((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0; 
    });

    const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);

    return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const calculatedMinuteMovies = moviesArray.map(movie => {
        const [hours, minutes = 0] = movie.duration.split(' ');
        const totalMinutes = parseInt(hours) * 60 + parseInt(minutes);
        return { ...movie, duration: totalMinutes };    
    });
    
    return calculatedMinuteMovies;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    // Calculate total score and count for each year
    const yearArray = moviesArray.reduce((yearMovie, movie) => {
        const year = movie.year;
        yearMovie[year] = yearMovie[year] || { totalScore: 0, count: 0 };
        yearMovie[year].totalScore += movie.score;
        yearMovie[year].count++;
        return yearMovie;
    }, {});

    // Find the year with the highest average score
    const { bestYear, bestScoreAvg } = Object.entries(yearArray).reduce((best, [year, data]) => {
        const scoreAvg = data.totalScore / data.count;
        if (scoreAvg > best.bestScoreAvg || (scoreAvg === best.bestScoreAvg && year < best.bestYear)) {
            return { bestYear: year, bestScoreAvg: scoreAvg };
        }
        return best;
    }, { bestYear: null, bestScoreAvg: -Infinity });

    return `The best year was ${bestYear} with an average score of ${bestScoreAvg}`;
}


