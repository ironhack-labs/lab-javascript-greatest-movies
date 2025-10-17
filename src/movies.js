// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    let newArray = moviesArray.map(movie => {
        return movie.director
    })

    let filteredNewArray = newArray.map(director => {
        if (newArray.indexOf(director) === newArray.lastIndexOf(director)) {
            return director
        }
    })

    return filteredNewArray
}

console.log(moviesArray)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let spielbergMovies = moviesArray.filter(movie => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return true
        }
    })

    return spielbergMovies.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0) {
        return 0
    }

    let totalScore = moviesArray.reduce((acc, movie) => {

        if (!movie.score) {
            return acc
        } else {
            return acc += movie.score
        }
    }, 0)
    return Number((totalScore / moviesArray.length).toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let counter = 0

    let anyDrama = moviesArray.some(movie => {
        return movie.genre.includes('Drama')
    })

    if(!anyDrama){
        return 0
    } else {
        let totalDramaScore = moviesArray.reduce((acc, movie) => {
       if(!movie.genre.includes('Drama')){
        return acc
       } else if(movie.genre.includes('Drama')){
        counter++
        return acc + movie.score
       }
       
    },0)

    return Number((totalDramaScore / counter).toFixed(2))
    }

    
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedByYear = moviesArray.toSorted((a,b) => a.year - b.year)
    return sortedByYear.sort((a, b) => {
        if(a.year === b.year){
            return a.title.localeCompare(b.title)
        }
    })
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {

    const titles = [...moviesArray].map(movie => movie.title).sort((a, b) => a.localeCompare(b)) 

    return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const modifiedMovie = {...movie}

        let duration = modifiedMovie.duration
        let hours = 0
        let mins = 0

        if(duration.includes('h')){
            duration.slice(
                
            )
        }
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
