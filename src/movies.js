// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map(movie => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDrama = moviesArray.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))

    return spielbergDrama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0

    const totalScore = moviesArray.reduce((acc, currentMovie) => {
        if (currentMovie.score) {
            return acc + currentMovie.score
        } else {
            return acc
        }
    }, 0)

    let averageScore = totalScore / moviesArray.length

    averageScore = parseFloat(averageScore.toFixed(2))

    return averageScore
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));

    if (dramaMovies.length === 0) return 0;

    const totalDramaScore = dramaMovies.reduce((acc, currentMovie) => {
        if (currentMovie.score) {
            return acc + currentMovie.score;
        } else {
            return acc;
        }
    }, 0);

    let averageDramaScore = totalDramaScore / dramaMovies.length;
    averageDramaScore = parseFloat(averageDramaScore.toFixed(2));

    return averageDramaScore;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray]

    moviesCopy.sort((a, b) => {

        if (a.year < b.year) return -1
        if (a.year > b.year) return 1

        return a.title.localeCompare(b.title)
    })

    return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = [...moviesArray]

    moviesCopy.sort((a, b) => a.title.localeCompare(b.title))

    const titles = moviesCopy.map(movie => movie.title)

    return titles.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

    return moviesArray.map(movie => {

        const parts = movie.duration.split(' ')
        let totalMinutes = 0


        parts.forEach(part => {
            if (part.includes('h')) {

                const hours = parseInt(part.replace('h', ''))
                totalMinutes += hours * 60

            } else if (part.includes('min')) {

                const minutes = parseInt(part.replace('min', ''))
                totalMinutes += minutes
            }
        })


        return {
            duration: totalMinutes
        }
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
