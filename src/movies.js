// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((eachMovie) => {
        return eachMovie.director
    })
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const spielberg = moviesArray.filter((eachMovie) => {
        return eachMovie.director.includes('Steven Spielberg')
    });
    const drama = spielberg.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })
    return drama.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const mediaScore = moviesArray.reduce((acc, eachScore) => {
        if (!eachScore.score) {
            eachScore.score = 0
        }
        return acc + eachScore.score / moviesArray.length
    }, 0);

    return +mediaScore.toFixed(2)

}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes('Drama')
    })
    const mediaDrama = drama.reduce((acc, eachScore) => {
        return acc + eachScore.score / drama.length
    }, 0);

    return +mediaDrama.toFixed(2)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    const alphOrder = moviesArrayCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    })
    const finalOrder = alphOrder.sort((a, b) => a.year - b.year)
    return finalOrder
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const titleOnly = moviesArrayCopy.map((eachTitle) => {
        return eachTitle.title
    })

    const finalOrder = titleOnly.sort()

    const newa = finalOrder.slice(0, 20);

    return newa






    // const titleOnly = moviesArrayCopy.map((eachTitle) => {
    //     return eachTitle.title
    // })
    // const first20 = titleOnly.slice(0, 20);
    // const finalOrder = first20.sort((a, b) => {
    //     if (a < b) {
    //         return -1;
    //     }
    //     if (a < b) {
    //         return 1;
    //     }
    //     return 0;
    // })
    // return finalOrder
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }

