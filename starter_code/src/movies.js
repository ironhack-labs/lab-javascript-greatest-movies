/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    h = ""
    hClean = 0
    mins = ""
    minsClean = 0
    const time = movies.map(elm => {
        const timeClean = elm.duration.split(" ")

        if (timeClean.length == 2) {
            h = timeClean[0].split("")
            hClean = parseInt(h) * 60

        }

    })


}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies) {

    const rating = movies.reduce((acc, elm) => {
        return acc + parseInt(elm.rate)
    }, 0)

    return rating / movies.length
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {

    const dramaMovies = movies.filter(elm => elm.genre.includes("Drama"))

    const rating = dramaMovies.reduce((acc, ele) => {


        return acc + parseInt(ele.rate)



    }, 0)

    return rating / dramaMovies.length
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG



function howManyMovies(movies) {


    const stevenMovies = movies.filter(elm => elm.director == 'Steven Spielberg')

    const dramaMovies = movies.filter(ele => ele.genre.includes("Drama"))

    if (!stevenMovies) {
        return undefined
    }
    else if (stevenMovies && dramaMovies) {
        return "Steven Spielberg directed 1 drama movies!"
    }
    else {
        return "Steven Spielberg directed 0 drama movies!"
    }



}



// Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    const titles = movies.map(elm => elm.title)
    const ordTitles = titles.sort()

    return ordTitles.splice(0, 20)
}
// Best yearly rate average

