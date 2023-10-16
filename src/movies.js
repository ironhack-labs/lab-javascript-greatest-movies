// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(eachMovie => {


        return eachMovie.director
    })

    return allDirectors

}






// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const numberOfMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama") && eachMovie.director === "Steven Spielberg"
    },)

    return numberOfMovies.length



}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length == 0)
        return 0
    const totalScore =

        moviesArray.reduce((acc, movie) => {
            if (movie.score)
                return acc + movie.score
            else
                return acc

        }, 0)


    const averageScore = +((totalScore / moviesArray.length).toFixed(2))
    return averageScore
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama")

    })
    if (dramaMovies.length == 0)
        return 0
    const totalDramaScore = dramaMovies.reduce((acc, eachMovie) => {
        return acc + eachMovie.score

    }, 0)

    return totalDramaScore / dramaMovies.length

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = JSON.parse(JSON.stringify(moviesArray))
    return moviesCopy.sort((a, b) => {
        if (a.year > b.year)
            return 1
        else if (a.year < b.year)
            return -1
        else

        //both have same year
        {
            if (a.title > b.title)
                return 1
            else if (a.title < b.title)
                return -1
            else
                return 0

        }

    }


    )

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titlesArray = moviesArray.map(eachMovie => {
        return eachMovie.title
    }
    )
    const titlesArraySorted = titlesArray.sort((a, b) => {
        if (a > b)
            return 1
        else if (a < b)
            return -1
        else
            return 0
    })
    return titlesArraySorted.slice(0, 20)


}




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
