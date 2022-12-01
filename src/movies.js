// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray
        .map((movie) => movie.director)
        .filter((director, index, directors) => directors.indexOf(director) === index)
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const average = moviesArray
        .map((movie) => movie.score || 0)
        .reduce((totalScore, currentScore) => (totalScore + currentScore)) / moviesArray.length;
    return Number(average.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (moviesArray.length === 0 || moviesArray.filter((movie) => movie.genre.includes('Drama')).length === 0) {
        return 0;
    }
    const average = moviesArray
        .filter((movie) => movie.genre.includes('Drama'))
        .map((movie) => movie.score)
        .reduce((totalScore, currentScore) => totalScore + currentScore) / moviesArray
            .filter((movie) => movie.genre.includes('Drama')).length
    return Number(average.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderedMovies = moviesArray
        .map((movie) => movie)

    return orderedMovies
        .sort((a, b) => {
            if (a.title > b.title) return 1;
            if (a.title < b.title) return -1;
            return 0;
        })
        .sort((a, b) => a.year - b.year)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortedMovies = moviesArray
        .map((movie) => movie.title)
        .sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })
        .filter((title, index) => index < 20)
    return sortedMovies;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const yearAvg = moviesArray.map((movie) => movie)
    return yearAvg.map((movie) => {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: Number(movie.duration.trim().split('h')[0]) * 60 + Number(movie.duration.trim().split('h')[1].split('min')[0]), //'2h 55min',
            genre: movie.genre,
            score: movie.score
        }
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }
    const yearScore = moviesArray
        .sort((a, b) => a.year - b.year)
        .reduce((acc, el) => {
            acc[el.year] = (acc[el.year] || 0) + el.score;
            return acc
        }, {})
    const yearAvg = { year: '', score: 0 };
    for (let key in yearScore) {
        const currentAvg = yearScore[key] / moviesArray.filter((movie) => movie.year === +key).length;
        if (currentAvg > yearAvg.score) {
            yearAvg.year = key,
            yearAvg.score = currentAvg;
        }
    }

    console.log(yearScore)

    return `The best year was ${yearAvg.year} with an average score of ${yearAvg.score}`
}
