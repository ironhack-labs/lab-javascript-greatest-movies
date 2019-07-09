/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of all rates with 2 decimals 
const ratesAvg = movies => {
    const accRate = movies.reduce((acc, elm) => acc + elm.rate, 0)
    let avg = accRate / movies.length
    let round = Math.round(avg * 100)/100
    return round
}
// Get the average of Drama Movies
const dramaMoviesRate = movies => {
    let dramaMovie = movies.filter(elm =>genre == 'Drama')
    if (dramaMovie.length == 0){
        return undefined
    }else return ratesAverage(dramaMovie)
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){

    if (moviesSpielberg.length == 0){
        return undefined
    }

    let moviesSpielberg = movies.filter(elm => {
        

        return elm.director == 'Steven Spielberg' && elm.genre.includes('Drama')
    })

    return `Steven Spielberg directed ${moviesSpielberg.length} drama movies`

    console.log(moviesSpielberg)
}

// Order by title and print the first 20 titles


// Best yearly rate average
