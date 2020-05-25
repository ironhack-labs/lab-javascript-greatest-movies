let allDirectors = []


// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {

    allDirectors = moviesArray.map(dir => dir.director)

    return allDirectors


}


//TODO: Hacer Bonus

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// let unique = []

// unique = allDirectors.filter((dir1, dir2) => {
//     if (dir1.indexOf())

// console.log(unique);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArray) {

    const steveMovies = moviesArray.filter(num => num.director === 'Steven Spielberg')
    const steveDramaMovies = []

    steveMovies.filter(function (drama) {
        drama.genre.map(function (d) {
            d === 'Drama' ? steveDramaMovies.push(drama.title) : null
        })
    })

    return steveDramaMovies ? steveDramaMovies.length : 0
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArray) {
    const movieRate = moviesArray.map(e => e.rate)
    let totalRate = 0

    movieRate.forEach(e => totalRate += e)

    return (totalRate / movieRate.length) ? Math.round((totalRate / movieRate.length) * 100) / 100 :
        totalRate === 0 ? 0 : 2
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {

    const dramaMovies = []
    let totalRate = 0;

    moviesArray.filter(function (drama) {
        drama.genre.map(function (d) {
            d === 'Drama' ? dramaMovies.push(drama.rate) : null
        })
    })

    dramaMovies.forEach(e => totalRate += e)

    return (totalRate / dramaMovies.length) ? Math.round((totalRate / dramaMovies.length) * 100) / 100 : 0

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {


    const orderByYear = moviesArray.map(function (e) {
        return { title: e.title, year: e.year }
    })

    orderByYear.sort((a, b) => (a.year > b.year) ? 1 : -1)

    const objectOrderByYear = {}
    const arrayOrderByYear = []

    orderByYear.forEach(function (e, idx) {
        objectOrderByYear.year = e.year
        arrayOrderByYear.push({ year: objectOrderByYear.year })
    })

    // console.log(arrayOrderByYear);

    return arrayOrderByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArray) {

    const titleAlpha = []
    const top20titleAlpha = []

    const first20Titles = movieArray.filter(e => e.title.toString())

    first20Titles.forEach(e => titleAlpha.push(e.title))
    titleAlpha.sort()

    titleAlpha.forEach(function (e, idx) {
        idx < 20 ? top20titleAlpha.push(e) : null
    })

    return top20titleAlpha
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieArray) {

    const durationMovie = movieArray.map(e => e.duration)
    let minutesPerHour = 0
    let minutes = 0
    const totalMinutes = []

    durationMovie.forEach(function (m, idx) {
        for (i = 0; i < m.length; i++) {
            if (m[i] === 'h') {
                minutesPerHour = parseInt(m[i - 1] * 60)
            } else if (m[i] === 'm') {
                minutes = parseInt(m[i - 2] + m[i - 1])
            }
        }
        totalMinutes.push({ duration: minutesPerHour + minutes })
    })

    return totalMinutes
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movieArray) {
    if (!movieArray.length) return null

    const byMovies = movieArray.reduce((acc, e) => {
        acc[e.year] = (acc[e.year] || [])
        acc[e.year].push(e)
        return acc
    }, {})

    const byRate = Object.keys(byMovies).reduce((acc, e) => {
        acc[e] = byMovies[e].reduce((acc, e) => acc += e.rate, 0) / byMovies[e].length
        return acc
    }, {})


    const sortedRate = Object.keys(byMovies).sort((a, b) => byRate[b] - byRate[a])

    console.log(sortedRate);


    return `The best year was ${sortedRate[0]} with an average rate of ${byRate[sortedRate[0]]}`

}
