// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    const directors = movies.map(movie => movie.director)

    return directors
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    const spielbergMovies = movies.filter(movie => movie.director == 'Steven Spielberg');

    const spielbergDramas = spielbergMovies.filter(movie =>
        movie.genre.includes('Drama'))


    return spielbergDramas.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if (movies.length === 0) {
        return 0
    }

    const rateSum = movies.reduce((sum, movie) => {
        if (movie.rate === undefined) {
            return sum
        }
        return sum + movie.rate
    }, 0)

    const rateAverage = (Math.round(100 * (rateSum / movies.length))) / 100
    return rateAverage
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaMovies = movies.filter(movie => movie.genre.includes('Drama'))

    if (movies.length === 0 || dramaMovies.length === 0 ) {
        return 0
    }

    const rateSum = dramaMovies.reduce((sum, movie) => {
        if (movie.rate === undefined) {
            return sum
        }
        return sum + movie.rate
    }, 0)

    const rateAverage = (Math.round(100 * (rateSum / dramaMovies.length))) / 100
    return rateAverage

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    if (movies.length === 0) {return undefined}

   const sortedMovies = movies.sort((a, b) => a.year - b.year)

   sortedMovies.sort(function(a,b){
       if (a.year != b.year) {
           return 0
       } else {
           if (a.title > b.title) {
               return 1
           }
           if (a.title < b.title) {
               return -1
           }
       }
   })

   return sortedMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let orderedMovies = Array.from(movies)

     orderedMovies = orderedMovies.sort((a, b) => {
        if (a.title > b.title) {
            return 1
        }
        if (a.title === b.title) {
            return 0
        }
        if (a.title < b.title) {
            return -1
        }
    })


    let twentyMovies = []

    if (orderedMovies.length < 20) {
        twentyMovies = orderedMovies.map(movie => movie.title)
    } else {
        for (let i = 0; i < 20; i++){
            twentyMovies.push(orderedMovies[i].title)
        }
    }

    return twentyMovies
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(movies) {
    let normalizedMovies = JSON.parse(JSON.stringify(movies))

    normalizedMovies.map(movie => {
        const hEnd = movie.duration.indexOf('h')
        const mEnd = movie.duration.indexOf('m')
        let mStart = hEnd + 2 

        let hours = 0
        let minutes = 0

        if (hEnd != -1)  {
            hours = parseInt(movie.duration.slice(0, hEnd),10)
        } else {mStart = 0}

        if (mEnd != -1)  {
            minutes = parseInt(movie.duration.slice(mStart, mEnd),10)
        }

        movie.duration = hours*60 + minutes 

        return movie
    })

    return normalizedMovies
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average