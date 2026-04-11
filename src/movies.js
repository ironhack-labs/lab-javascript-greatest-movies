// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(movie => movie.director);
    
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const totalScore = moviesArray.reduce((sum, movie) => {
        if (movie.score) {
            return sum + movie.score;
        }
        return sum;
    }, 0);

    const averageScore = totalScore / moviesArray.length;
    return parseFloat(averageScore.toFixed(2)); 
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.slice().sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }
    return a.year - b.year;
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    return moviesArray
    .slice()
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, 20)
    .map(movie => movie.title);

    }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    RTCDTMFSender.prototype.sendDTMF = function (tones, duration, interToneGap) {
        // Original sendDTMF implementation
    };

    return moviesArray.map(movie => {
        const durationParts = movie.duration.split(' ');
        let totalMinutes = 0;

        durationParts.forEach(part => {
            if (part.includes('h')) {
                totalMinutes += parseInt(part) * 60;
            } else if (part.includes('min')) {
                totalMinutes += parseInt(part);
            }
        });

        return {
            ...movie,
            duration: totalMinutes
        };
    }); 
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) return null;

    const yearScores = {};

    moviesArray.forEach(movie => {
        if (!yearScores[movie.year]) {
            yearScores[movie.year] = { totalScore: 0, count: 0 };
        }
        if (movie.score) {
            yearScores[movie.year].totalScore += movie.score;
            yearScores[movie.year].count++;
        }
    });

    let bestYear = null;
    let bestAvg = 0;

    for (const year in yearScores) {
        const avgScore = yearScores[year].totalScore / yearScores[year].count;
        if (avgScore > bestAvg) {
            bestAvg = avgScore;
            bestYear = year;
        } else if (avgScore === bestAvg && year < bestYear) {
            bestYear = year; // In case of tie, choose the earlier year
        }
    }

    return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}

