// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {

    let doubledDirectors = moviesArray.map((movies) => {


        return movies.director
    })

    return doubledDirectors

}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const stevenMoviesDrama = moviesArray.filter((eachMovies) => {
        return eachMovies.director.includes('Steven Spielberg')
            && eachMovies.genre.includes('Drama')

    })

    return stevenMoviesDrama.length

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {


    if (!moviesArray.length) {
        return 0
    }


    const movieAverage = moviesArray.reduce((acc, eachmovie) => {
        if (!eachmovie.score) {
            eachmovie.score = 0
        }

        return acc + eachmovie.score / moviesArray.length
    }, 0)

    return +movieAverage.toFixed(2)

}




// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) {
        return 0
    }

    const dramaMovies = moviesArray.filter((eachMovies) => {
        return eachMovies.genre.includes('Drama')

    })



    const movieDramaAverage = dramaMovies.reduce((acc, eachmovie) => {



        return acc + eachmovie.score / dramaMovies.length
    }, 0)

    return +movieDramaAverage.toFixed(2)


}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {


    const moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))

    const resultadoDeTodaEstaMierda = moviesArrayCopy.sort((a, b) => {

        if (a.year < b.year) {
            return -1;
        }
        else if (a.year > b.year) {
            return 1;
        }

        else if (a.year === b.year) {

            if (a.title < b.title) {
                return -1;
            }
            else {
                return 1;
            }

        } else { return 0 }
    })
    return resultadoDeTodaEstaMierda
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {


    let movieMap = moviesArray.map((movies) => {


        return movies.title
    })


    movieMap.sort();



    if (movieMap.length > 20) {
        return movieMap.slice(0, 20)
    }
    return movieMap
}










// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
