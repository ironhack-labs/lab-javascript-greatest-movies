// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((eachMovie => {
        return eachMovie.director
    }))
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(genresArray) {
    const dramaGenre = genresArray.filter((eachGenre) => {
        return eachGenre.genre.includes('Drama')
    })
    const movies = dramaGenre.filter((eachDramaMovie) => {
        return eachDramaMovie.director === 'Steven Spielberg'
    })
    return movies.length
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const avgScore = moviesArray.reduce((acc, eachMovie) => {
        if (!eachMovie.score) {
            return acc + 0
        }
        return acc + eachMovie.score
    }, 0)
    if (!avgScore) {
        return avgScore
    } else {
        return Number((avgScore / moviesArray.length).toFixed(2))
    }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaGenre = moviesArray.filter((eachGenre) => {
        return eachGenre.genre.includes('Drama')
    })

    const dramaScore = dramaGenre.reduce((acc, eachDrama) => {
        return acc + eachDrama.score
    }, 0)
    if (!dramaScore) {
        return 0
    }

    return Number((dramaScore / dramaGenre.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newSorted = JSON.parse(JSON.stringify(moviesArray))
    const sorting = newSorted.sort((a, b) => {
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            }
        }
        return a.year - b.year
    })

    return sorting

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const newSorted = JSON.parse(JSON.stringify(moviesArray))

    const sortedArray = newSorted.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });

    const stringMovies = sortedArray.map((eachTitle) => {
        return eachTitle.title
    })

    if (stringMovies.length > 20) {
        return stringMovies.splice(0, 20)
    }

    return stringMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const newArray = JSON.parse(JSON.stringify(moviesArray))
    newArray.forEach(eachMovie => {

        const hIndex = eachMovie.duration.indexOf("h")
        const hours = eachMovie.duration.slice(hIndex - 1, hIndex)

        const minIndex = eachMovie.duration.indexOf("min")
        const mins = eachMovie.duration.slice(minIndex - 2, minIndex)

        if (eachMovie.duration.includes("min")) {
            eachMovie.duration = Number(hours * 60) + Number(mins)
        } else {
            eachMovie.duration = Number(hours * 60)
        }

    });
    return newArray
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
