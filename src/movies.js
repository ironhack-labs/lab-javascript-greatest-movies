// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {

    const mapped = movies.map(elm => elm.director)
    
    return mapped
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getCleanAllDirectors(movies) {

    let cleanMapped = []

    const mapped = getAllDirectors(movies)
    
    mapped.forEach(function (elm) {
        if (!(cleanMapped.includes(elm)))
            cleanMapped.push(elm)
    }) 

    return cleanMapped
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {

    const stevenMovies = movies.filter(elm => elm.director === "Steven Spielberg")

    const stevenDramaMovies = stevenMovies.filter(elm => elm.genre.includes("Drama"))

    return stevenDramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    if (movies.length === 0)
        return 0
    else {

        const movWithRate = movies.filter(elm => elm.rate > 0)
        
        const sumRate = movWithRate.reduce((acc, elm) => acc + (elm.rate), 0)

        let totalRate = sumRate / movies.length

        totalRate = totalRate.toFixed(2)
        return parseFloat(totalRate)
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    
    const dramaMovies = movies.filter(elm => elm.genre.includes("Drama"))

    return ratesAverage(dramaMovies)

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    let moviesCopy = [...movies]

    moviesCopy.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        if (a.year === b.year && a.title < b.title)
            return -1;
        return 0
        }); 

    return moviesCopy
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    let moviesCopy = [...movies]
    let orderCopy = []

    moviesCopy.forEach(elm => {
        orderCopy.push(elm.title)
    });

    orderCopy.sort()

    if (orderCopy.length > 20)
        orderCopy = orderCopy.slice(0, 20)
    
    return orderCopy

}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    
    const newDuration = [...movies]

    let h = ""
    let total = 0
    let min2 = ""
    let mins = ""

    newDuration.forEach(function (elm) {
        let time = elm.duration.replace('h', ':')
        time = time.replace(' ', '')
        time = time.replace('min', '')
        // mins.format("hh:mm").asMinutes()
        if (time[1] == ':' && (!time[2]))
        {
            time = time.replace(':', '')
            h = time[0]
        }
        if (time[2] > 0 || time[0] <= 9)
        mins = time[2]
        if (time[3] > 0 && time[3] < 9)
        mins = mins + time[3]
        
        if (!h)
           h = 0
        if (!mins)
           mins = 0
        total = (parseInt(h) * 60) + parseInt(mins)
        console.log(elm.duration)
        console.log(total)
    })


    return newDuration
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
