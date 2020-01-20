/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



// movies.sort((a, b) => a - b)
// console.log(movies)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies(movies) {

    const directorFilm = movies.filter(movie =>
        movie.director === "Steven Spielberg" && movie.genre.includes('Drama')

    )

    return directorFilm.length
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles








// Iteration 4: All rates average - Get the average of all rates with 2 decimals






function ratesAverage(movies) {

// 

    const movies2 = movies.map(movie => {
        console.log(movie.hasOwnProperty("rate"))
        if (movie.hasOwnProperty("rate") && typeof movie.rate == 'number') {
            return movie.rate

        } else {
            return 0
        }
    })

    return moviesRate(movies2)


}

function moviesRate(array) {

    let acumulado = 0
    let media = 0

    if (array.length > 0) {
        acumulado = array.reduce((accumulator, currentValue) => accumulator + currentValue)

    }


    if (array.length > 0) {
        media = acumulado / array.length

    }

    return +media.toFixed(2)
}









// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
