// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(function (director) {
        return director.director
    })
    return directorsArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenSpielbergDramas = moviesArray.filter(function (stevenS) {
        return (stevenS.genre.includes('Drama') && stevenS.director === 'Steven Spielberg');
    })
    return stevenSpielbergDramas.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) { return 0 };
    const scoreAverage = moviesArray.reduce(function (acc, movie) {
        if (!movie.score) { return acc };
        return acc + movie.score
    }, 0);
    let result = Number((scoreAverage / moviesArray.length).toFixed(2))
    return result

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(function (onlyDrama) {
        return onlyDrama.genre.includes('Drama')
    })
    if (dramaMovies.length === 0) { return 0 };

    const dramaScore = dramaMovies.reduce(function (acc, movie) {
        return acc + movie.score
    }, 0)
    let result = Number((dramaScore / dramaMovies.length).toFixed(2))
    return result

}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const result = [];
    const sortedArray = moviesArray.sort(function (a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title)
        }
        return a.year - b.year
    })
    return result.concat(sortedArray)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) { debugger
    const result = [];
    const titlesArray = moviesArray.map(movie => movie.title);
    const titleSorted = titlesArray.sort();
    const limit = Math.min(titleSorted.length, 20)
    for (let i = 0; i < limit; i++) {
        result.push(titleSorted[i])
    }
    return result
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
