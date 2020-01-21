/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

    const moviesCopy = [...movies]

    const order = moviesCopy.sort(function (a, b) {
        if (a.year < b.year) {
            return -1;

        } else if (a.year > b.year) {
            return 1;

        } else if (a, b) {

            if (a.title < b.title) {
                return -1;

            } else (a.title > b.title)
            return 1;

        }
    }

    )
    return order
}




// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct


function howManyMovies(movies) {
    const films = movies.filter(film => film.director == "Steven Spielberg" && film.genre.includes("Drama")); // string ==... aray includes
    console.log(films.length)
    return films.length
}


//const fullHouses = places.filter(elm => elm.pool && elm.garage)
//console.log(fullHouses)



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {

    const mapMovies = movies.map(elm => elm.title)

    const orderMovie = mapMovies.sort(function (a, b) {
        if (a < b) {
            return -1;

        } else if (a > b) {
            return 1;
        }
        return 0
    })


    return orderMovie.slice(0, 20);
}



// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {

    //tengo queu poner aqui algún tipo de filtro para que ponga cero en los que no tienen....but...

    const rateMovies = movies.map(elm => elm.rate)

    let totalRateDrama = rateMovies.reduce((acc, elm) => acc + elm, 0)


    const average = totalRateDrama / rateMovies.length
    if (rateMovies.length === 0) {
        return 0
    }
    return parseFloat(average.toFixed(2))
}





// Iteration 5: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {
    const moviesDrama = movies.filter(film => film.genre.includes("Drama"));


    let rateDramaMap = moviesDrama.map(elm => elm.rate)

    let avgDrama = rateDramaMap.reduce((acc, elm) => acc + elm, 0)

    const totalRateDrama = avgDrama / rateDramaMap.length

    if (moviesDrama.length === 0) {
        return 0
    }
    return parseFloat(totalRateDrama.toFixed(2))
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average




//Dora Dora la exploradora.....DORA!
