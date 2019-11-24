/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(a) {

    let orderArr = a.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }

        if (a.year < b.year) {
            return - 1
        }

        if (a.year === b.year) {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            }
        }
    })

    let newArr = orderArr.map(function (movie) {
        if (!movie.title) {
            return { "year": movie.year };
        }
        return { "title": movie.title, "year": movie.year };
    })


    return newArr


}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(m) {

    let moviesSp = []

    m.filter(function (movie) {
        if (movie.director === "Steven Spielberg") {
            movie.genre.forEach(function (drama) {
                if (drama === "Drama")

                    return moviesSp.push(movie)
            })
        }
    })

    return moviesSp.length
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(o) {

    let alphabeticObj = []
    let alphabeticArr = []

    let orderArr = o.sort(function (a, b) {
        if (a.title > b.title) {
            return 1
        }

        if (a.title < b.title) {
            return -1
        }

        if (a.title === b.title) {
            return 0
        }
    })


    orderArr.map(function (t) {
        return alphabeticObj.push(t.title)
    })


    alphabeticObj.reduce(function (acc, act, i) {

        if (acc + 1 <= 20)
            return alphabeticArr.push(act)
    }, 0)




    return alphabeticArr
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(r) {


    let arrRates = r.map(function (rate) {
        return rate.rate
    })

    let suma = arrRates.reduce(function (acc, act, i, arr) {

        return acc + act
    })

    let average = Math.round((suma / arrRates.length) * 100) / 100


    return average
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(m) {

    let dramaFilms = []

    m.filter(function (movie) {
        movie.genre.forEach(function (drama) {
            if (drama === "Drama")
                return dramaFilms.push(movie)
        })

    })

    let rates = dramaFilms.map(function (rate) {
        return rate.rate
    })

    let averages = rates.reduce(function (acc, act, i, arr) {
        return acc + act
    })

    console.log(Math.round(averages / rates.length * 100) / 100)
    return Math.round(averages / rates.length * 100) / 100

}



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes



function turnHoursToMinutes(m) {
    let newArr = []

    m.filter(function (movie) {
        if (movie.duration)
            movie.duration = changeTime(movie.duration)
        console.log(movie)
        return newArr.push(movie)
    })



    function changeTime(time) {
        let timeNumber = time.replace("h", "").replace("min", "")
        let timeArr = timeNumber.split(" ").map(Number)
        let timeMin = (timeArr[0] * 60 + timeArr[1])

        return timeMin
    }

    return newArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
