// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    return moviesArray.map(movie => {
        return movie.director
    });
}
console.log(getAllDirectors(movies))

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return moviesArray.reduce((acc, cur) => {
        if (cur.director === 'Steven Spielberg' && cur.genre.includes('Drama')) {
            acc += 1
        }
        return acc
    }, 0)

}
console.log(howManyMovies(movies))
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }
    const sum = moviesArray.reduce((acc, cur) => {
        let score = cur.score || 0
        acc += score
        return acc
    }, 0)
    return +(sum / moviesArray.length).toFixed(2)
}
console.log(scoresAverage(movies))

// // Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movies => movies.genre.includes('Drama'))
    if (!drama.length) {
        return 0
    }
    let count = drama.reduce((acc, cur) => {
        acc += cur.score
        return acc
    }, 0)

    return +(count / drama.length).toFixed(2)
}
console.log(dramaMoviesScore(movies))
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return moviesArray.toSorted((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year
    })
}
console.log(orderByYear(movies))
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const filtered = moviesArray.filter(movies => isNaN(parseFloat(movies.title)))
    const maped = filtered.map(movies => movies.title)
    const sorted = maped.toSorted((a, b) => {

        return a.localeCompare(b);


    })
    return sorted.slice(0, 20)
}
console.log(orderAlphabetically(movies))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movies => {
        const duration = movies.duration.split(' ')
        let minutes = 0
        duration.forEach(time => {
            if (time.includes('h')) {
                minutes += parseInt(time) * 60

            }
            else if (time.includes('min')) {
                minutes += parseInt(time)
            }
        });
        return { ...movies, duration: minutes }
    })
}
console.log(turnHoursToMinutes(movies))

function orderByYear(moviesArray) {}
    

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
