// Iteration 1: All directors? - Get the array of all directors.

    const getAllDirectors = moviesArr => moviesArr.map(elm => elm.director)


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

    function howManyMovies(moviesArray) {
        const movies = moviesArray.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))
        return movies.length
    }

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

    function ratesAverage(movies) {
        if (movies.length === 0) {
            return 0
        } else {
            const rateAvg = movies.reduce((acc, elm) => acc + elm.rate, 0)
            return Math.round ((rateAvg / movies.length) * 100) / 100
        }
    }


// Iteration 4: Drama movies - Get the average of Drama Movies

    function dramaMoviesRate(dramaMovies) {
        const drama = dramaMovies.filter(elm => elm.genre.includes("Drama"))
        if (drama.length > 0) {
            return ratesAverage(drama)
        } else {
            return 0
        }
    }





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

    function orderByYear(moviesYear) {
        const year = moviesYear.filter(elm => elm.year)
        return year.sort()
    }


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

    function orderAlphabetically(orderMovies) {
        const order = orderMovies.map(elm => elm.title)
        order.sort()
        return order.slice(0, 20)

    }



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes() {
        
    }


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

