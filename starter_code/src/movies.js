/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage(movies) {
    const averages = movies.reduce((sum, movies) => {
        return sum + movies.rate;
    }, 0);

    return (averages / movies.length)
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    const dramaFilter = movies.filter(themovies => themovies.genre.includes("Drama"))
        // console.log(dramaFilter);
    const dramaaverages = dramaFilter.reduce((sum, dramaFilter) => {
        return sum + dramaFilter.rate;
    }, 0);

    if (dramaFilter.length == 0) {
        return 0;
    }
    return Number((dramaaverages / dramaFilter.length).toFixed(2))
}

// }

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
    let fullDuration = movies.sort((m1, m2) => m1.duration - m2.duration || m1.title.localeCompare(m2.title))
    return fullDuration
}




// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    const stevenMovies = movies.filter(themovies => themovies.director.includes("Steven Spielberg"))
        // console.log(stevenMovies)
    const stevenDramas = stevenMovies.filter(themovies => themovies.genre.includes("Drama"))
    return stevenDramas.length;

}


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let newMovies = movies.map(movies => movies.title)
    let newOrder = newMovies.sort((m1, m2) => m1 - m2 || m1.localeCompare(m2))

    return newOrder.splice(0, 20)
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

let turnHoursToMinutes = (movieArr) => {
    let finalArr = []
    let movieDuration = movieArr.map((movie) => movie.duration)
    movieDuration.map((time) => {
        if (time.includes('h')) {
            let arrSplit = time.split('')
            let hours = (parseFloat(arrSplit[0]) * 60)
            let minutes = parseFloat(arrSplit[1]) || 0
            result = hours + minutes
            finalArr.push({ duration: result })
        } else {
            console.log(parseFloat(time))
        }
    })
    console.log(finalArr)
    return finalArr
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average