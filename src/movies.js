// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const allDirector = moviesArray.map((eachDirector) => {
        return eachDirector.director
    })





    return allDirector
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const onlySteven = moviesArray.filter((eachSteven) => {
        return eachSteven.director === "Steven Spielberg" && eachSteven.genre.includes('Drama')
    })
    return onlySteven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (!moviesArray.length) {
        return 0
    }

    const scoreAvg = moviesArray.reduce((acc, eachScore) => {

        if (!eachScore.score) {

            eachScore.score = 0;
        }

        return acc + eachScore.score

    }, 0)
    return Number((scoreAvg / moviesArray.length).toFixed(2))

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const onlyDrama = moviesArray.filter((eachDrama) => {
        return eachDrama.genre.includes('Drama')
    })

    if (!onlyDrama.length) {
        return 0
    }

    const scoreDrama = onlyDrama.reduce((acc, eachScore) => {

        if (!eachScore.score) {

            eachScore.score = 0;
        }

        return acc + eachScore.score

    }, 0)
    return (Number((scoreDrama / onlyDrama.length).toFixed(2)))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const newArrayMovies = JSON.parse(JSON.stringify(moviesArray))

    newArrayMovies.sort(function (eachYear1, eachYear2) {

        if (eachYear1.year > eachYear2.year) {
            return 1
        }
        if (eachYear1.year < eachYear2.year) {
            return -1

        } else {

            if (eachYear1.title > eachYear2.title) {

                return 1
            }

            if (eachYear1.title < eachYear2.title) {
                return -1

            }
        }


    })

    return newArrayMovies


}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const newOrderTitle = JSON.parse(JSON.stringify(moviesArray))



    newOrderTitle.sort((eachTitle1, eachTitle2) => {

        if (eachTitle1.title > eachTitle2.title) {
            return 1
        }
        if (eachTitle1.title < eachTitle2.title) {
            return -1
        }

    })

    const firstTwenty = newOrderTitle.filter((element, index) => {

        return index < 20
    })

    const arrayOnlyMovie = []
    firstTwenty.forEach((element) => {
        arrayOnlyMovie.push(element.title)
    });

    return arrayOnlyMovie
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {





}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

    const allYearAndScore = moviesArray.map((eachYS) => {
        eachYS = eachYS.year + eachYS.score
        return eachYS
    })
    return allYearAndScore

}
