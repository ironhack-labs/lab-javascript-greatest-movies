// moviesArray = [{
//         title: '12 Angry Men',
//         year: 1957,
//         director: 'Sidney Lumet',
//         duration: '1h 36min',
//         genre: ['Crime', 'Drama'],
//         score: 8.9
//     },
//     {
//         title: 'Schindler"s List',
//         year: 1993,
//         director: 'Steven Spielberg',
//         duration: '3h 15min',
//         genre: ['Biography', 'Drama', 'History'],
//         score: 8.9
//     },
//     {
//         title: 'Pulp Fiction',
//         year: 1994,
//         director: 'Quentin Tarantino',
//         duration: '2h 34min',
//         genre: ['Crime'],
//         score: 8.9
//     }
// ]







// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let x = moviesArray.map(function (movie) {
        return movie.director
    })
    return x
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // let counter = 0
    let x = moviesArray.filter(function (movie) {
        if (movie.genre.includes('Drama') && movie.director.includes('Spielberg')) {
            return movie
        }
        // return counter
    })
    return x.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let x = moviesArray.reduce(function (acc, movie) {
        console.log(movie.score)
        //movie = movie.score
        return acc + movie.score
        // return acc / moviesArray
    }, 0)
    console.log(x)
    x = x / moviesArray.length
    console.log(x)

    x = x.toFixed(2) // converts the DATA to a string!!!!
    console.log(x)

    return Number(x)
}

// console.log(scoresAverage(moviesArray))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let a = moviesArray.filter(function (movie) {
        if (movie.genre.includes('Drama')) {
            return movie
        }
    })

    console.log(a)


    let x = a.reduce(function (acc, movie) {
        console.log(a.length)
        return acc + movie.score
    }, 0)

    x = x / a.length

    console.log(x)
    return x

    // x = x / moviesArray.length


}

console.log(dramaMoviesScore(moviesArray))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let x = [...moviesArray].sort(function (a, b) {
        if (a.year > b.year) {
            return 1
        } else if (b.year > a.year) {
            return -1
        } else {
            return a.title.localeCompare(b.title) //When the years match, they will be ranked by year
        }
    })

    console.log(x)
    return x
}

console.log(orderByYear(moviesArray))

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let x = [...moviesArray].map(function (movie) {
        return movie.title
    }).sort(function (a, b) {
        return a.localeCompare(b)
    })

    console.log(x)
    return x.slice(0,20)
}

console.log(orderAlphabetically(moviesArray))

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}