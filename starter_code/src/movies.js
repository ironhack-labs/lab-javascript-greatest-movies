/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        total += array[i].rate
    }
    return total / array.length
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let total = 0
    let cont = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].genre.length; j++) {
            if (array[i].genre[j] == "Drama") {
                total += array[i].rate
                cont++
            }
        }
    }
    if (cont == 0) {
        return 0
    }
    var x = total / cont
    return parseFloat(x.toFixed(2))
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(array) {
    let x = array.sort((a, b) => {
        if (a.duration > b.duration) {
            return 1;
        }
        if (a.duration < b.duration) {
            return -1;
        }
        if (a.duration == b.duration) {
            if (a.title > b.title) {
                return 1
            }
            else {
                return -1
            }
        }
        return 0;
    })
    return x

}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(array) {
    let total = 0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].genre.length; j++) {
            if (array[i].genre[j] == "Drama" && array[i].director == "Steven Spielberg") {
                total++
            }
        }
    }
    return total
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    let y = []
    let x = array.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    })

    for (let i = 0; i < array.length; i++) {
        if (i < 20)
            y[i] = x[i].title

    }
    return y
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// SOCORRO CON LO DEL SPREAD MI CABEZA NO DA PA´ MAS 😃🔫

function turnHoursToMinutes(array) {



    var x = array.map(function (movie) {
        var mins = 0
        var y
        var z
        if (movie.duration.search("h") >= 0) {
            y = movie.duration.split("h")
            mins += parseInt(y[0]) * 60
        }
        if (movie.duration.search("m") >= 0) {
            if (mins > 0) {
                z = y[1].split("m")
                mins += parseInt(z[0])
            } else {
                y = movie.duration.split("m")
                z = y[0].split(" ")
                if (z[1]>1){
                    mins += parseInt(z[1])
                }
                else
                    mins += parseInt(z[0])      
            }
        }
        movie.duration = parseInt(mins)
        return movie
    })
    console.log(array)
    return x
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
