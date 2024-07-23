// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(movie => movie.director)
    return [...new Set(directorsArray)]
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter(movie => movie.genre.includes('Drama') && movie.director === 'Steven Spielberg').length
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0;
    }
    const average = moviesArray.reduce((sum, movie) => movie.score ? sum + Number(movie.score) : sum, 0) / moviesArray.length;
    return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const average = moviesArray.reduce((sum, movie) => movie.genre.includes('Drama') && movie.score ? sum + Number(movie.score) : sum, 0) / moviesArray.length;
    return Number(average.toFixed(2));

}

function dramaMoviesScore(moviesArray) {
    const {total, count} = moviesArray.reduce((sum, movie) => {
        if (movie.genre && movie.genre.includes('Drama')) {
            sum.total += movie.score;
            sum.count += 1;
        }
        return sum;
    }, {total: 0, count: 0});

    const average = count > 0 ? total / count : 0;
    return Number(average.toFixed(2));
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        } else {
            return a.year - b.year;
        }
    });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray]
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0,20)
        .map(movie => movie.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
   return moviesArray.map(movie => {
        return {
            ...movie,
            duration: parseDuration(movie.duration)
        }
    })
}

function parseDuration(duration){
    const [hoursStr, minutesStr] = duration.split('h')
    const hours = parseInt(hoursStr, 10) || 0
    const minutes = parseInt(minutesStr.replace('min', ''), 10) || 0

    return (hours * 60) + minutes
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (!moviesArray.length){
        return null
    }
    
    const yearScores = moviesArray.reduce((acc, { year, score }) => {
        if (!acc[year]) {
            acc[year] = { totalScore: 0, count: 0 }
        }

        acc[year].totalScore += score
        acc[year].count += 1
        return acc
    }, {})


    let yearScoresAverage = {}
    for (year in yearScores){
        yearScoresAverage[year] = yearScores[year].totalScore / yearScores[year].count
    }

    const [bestYear, bestRate] = Object.entries(yearScoresAverage).reduce(
        ([maxYear, maxAverage], [currentYear, currentAverage]) => {
            return (currentAverage > maxAverage ? [currentYear, currentAverage] : [maxYear, maxAverage])
        },
    );

    return `The best year was ${bestYear} with an average score of ${bestRate}`
}