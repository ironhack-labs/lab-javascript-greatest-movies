// Iteration 1: All directors? - Get the array of all directors.

//Iteration 1: All directors

function getAllDirectors(arrMovies) {

    const newArray = arrMovies.map(elm => elm.director)

    return newArray

}

getAllDirectors(movies);

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arrMovies) {

    //only the drama movies where Steven Spielberg is the director
    const moviesSpielberg = arrMovies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))

    return moviesSpielberg.length
}

howManyMovies(movies)




// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arrMovies) {

    if (arrMovies.length === 0) {
        return 0
    }
    //filter only movie with rate
    const moviesRate = arrMovies.filter(elm => elm.rate)

    //rate sum
    const sumRate = moviesRate.reduce((acc, elm) => (acc + elm.rate), 0)

    //drama movies average rate
    const averageRate = parseFloat((sumRate / arrMovies.length).toFixed(2))

    console.log('the average rate is', averageRate)

    return averageRate

}

ratesAverage(movies)



// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arrMovies) {

    //filter only drama movies
    const moviesDrama = arrMovies.filter(elm => elm.genre.includes("Drama"))

    //drama movies rate sum
    const sumRate = moviesDrama.reduce((acc, elm) => (acc + elm.rate), 0)

    //Should return 0 if there is no Drama movie!
    if (moviesDrama.length === 0) {
        return 0
    }
    //drama movies average rate
    const averageRate = parseFloat((sumRate / moviesDrama.length).toFixed(2))

    const averageRound = averageRate
    console.log('the average rate is', averageRound)

    return averageRound

}

dramaMoviesRate(movies)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arrMovies) {

    // Make sure not to mutate the original array
    const clonedArrMovies = JSON.parse(JSON.stringify(arrMovies))

    const newSortedArray = clonedArrMovies.sort((a, b) => {
        //If two movies have the same year, order them alphabetically by their title
        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1;
            }
            if (b.title > a.title) {
                return -1;
            }
            return 0;

        } else return a.year - b.year   // ascending order by their release year

    })

    return newSortedArray

}

orderByYear(movies)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arrMovies) {

    // Make sure not to mutate the original array
    const clonedArrMovies2 = JSON.parse(JSON.stringify(arrMovies))

    //sort them alphabetically using the title key
    const newSortedArray2 = clonedArrMovies2.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        if (b.title > a.title) {
            return -1;
        }
        return 0;
    })

    // return array of first 20 titles
    const firstTwentyMovies = newSortedArray2.map(elm => elm.title).splice(0, 20)
    return firstTwentyMovies

}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arrMovies) {

    const clonedArrMovies3 = JSON.parse(JSON.stringify(arrMovies))

    return clonedArrMovies3.map(elm => {
        const hoursMinutes = elm.duration.split(' ')

        if (hoursMinutes.length === 1) {
            if (hoursMinutes[0].includes('h')) {
                //It should return the correct number when the duration is only in hours
                elm.duration = parseFloat(hoursMinutes[0].slice(-2, -1)) * 60
            }
            else {
                //It should return the correct number when the duration is only in minutes
                elm.duration = parseFloat(hoursMinutes[0].slice(-5, -3))
            }
        }
        else {
            const minutes = parseFloat(hoursMinutes[1].slice(-5, -3))

            const hours = parseFloat(hoursMinutes[0].slice(-2, -1)) * 60

            const totalDuration = minutes + hours

            elm.duration = totalDuration
            console.log(typeof (elm.duration))
        }
        return elm
    })

}




// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(arrMovies) {

    //Should return null if the array is empty
    if (arrMovies.length === 0) {
        return 0
    }


    const clonedArrMovies4 = JSON.parse(JSON.stringify(arrMovies))


    //which year was the best year for cinema and what was its average rate.



    //return `The best year was <YEAR> with an average rate of <RATE>`
}