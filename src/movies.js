// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {

    const allDirectorsArray = moviesArray.map(element => element['director'])
    
    return allDirectorsArray
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    // Select Steven Spielberg's drama movies
    const stevenSpielbergMovies = moviesArray.filter(element => element['director'] === 'Steven Spielberg' && element['genre'].includes('Drama'))

    return stevenSpielbergMovies.length

}



// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {

    // Check if the array is empty
    if (!moviesArray.length) {

        return 0

    } else {

        // filter the movies with rate and then calculate average
        const sumTotalRates = moviesArray.filter(element => element['rate'] !== undefined).reduce((acc, element) => acc + element['rate'], 0)

        const average = parseFloat((sumTotalRates / moviesArray.length).toFixed(2))

        //const average = sumTotalRates / movies.length
        return average
    }

    

}

// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(moviesArray) {

    // Get drama movies
    const dramaMovies = moviesArray.filter(element => element['genre'].includes('Drama'))

    // Check if the array is empty
    if (!dramaMovies.length) {

        return 0

    } else {
        
        const sumTotalRates = dramaMovies.reduce((acc, element) => acc + element['rate'], 0)

        const average = parseFloat((sumTotalRates / dramaMovies.length).toFixed(2))

        return average
    }
}



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    const copyOfMoviesArray = [...moviesArray]

    const sortMoviesByYearAndName = copyOfMoviesArray.sort((a, b) => {

        let order = a['year'] - b['year']

        // Evaluate titles if years are equal
        if (!order) {

            order = a['title'].localeCompare(b['title'])

        }

        return order

    })

    return sortMoviesByYearAndName

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    const copyOfMoviesArray = [...moviesArray]

    const moviesOrderedByName = copyOfMoviesArray.map(element => element['title'])

    moviesOrderedByName.sort()

    if (moviesOrderedByName.length > 20) {

        moviesOrderedByName.splice(20)

        return moviesOrderedByName

    }

    return moviesOrderedByName

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
