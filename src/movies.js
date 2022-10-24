// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirectors = moviesArray.map(elm => {

        // console.log(elm.director)

        return elm.director

    })
    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const SpielbergDirector = moviesArray.filter(elm => {
        // console.log(elm.director.includes('Steven Spielberg'))
        return elm.director === 'Steven Spielberg' && elm.genre.includes('Drama')


    })

    return SpielbergDirector.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    const sumScore = moviesArray.reduce((acc, elm) => {
        if (!elm.score) {
            return acc
        }
        else {
            return acc + elm.score
        }
    }, 0)

    const TotalSum = sumScore / moviesArray.length
    const result = TotalSum.toFixed(2)

    // console.log(+result)

    return +result

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter(elm => {
        if (elm.genre.includes('Drama'))
            return elm
    })
    return scoresAverage(dramaMovies)


}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    moviesArrayCopy.sort((a, b) => {
        if (a.year < b.year) {
            return -1;
        }
        if (a.year > b.year) {
            return 1;
        }
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
        }
        return 0;
    });

    // console.log(moviesArrayCopy)
    return moviesArrayCopy

}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesAlphabeticallyCopy = JSON.parse(JSON.stringify(moviesArray))
    moviesAlphabeticallyCopy.sort((a, b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        else {
            return 0;
        }
    });
    const onlyTwenty = moviesAlphabeticallyCopy.map(elm => {
        return elm.title
    })
    return onlyTwenty.slice(0, 20)

}






// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
