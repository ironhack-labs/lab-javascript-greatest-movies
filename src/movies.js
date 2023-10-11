// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times 
//in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


function getAllDirectors(moviesArray) {

    const directors = moviesArray.map((movie) => {
        return movie.director
    })

    return directors

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const howMany = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
    })

    return howMany.length


}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0
    }

    const moviesWhitscore = moviesArray.filter((movie) => {
        return movie.score
    })

    //Primero recorremos todo el array de objetos para sacar todas las peliculas que 
    //tienen un score, la función de arriba 

    const allScores = moviesWhitscore.map((movie) => {
        return movie.score
    })
    //Luego recorremos de nuevo la array de antes para sacar las puntuaciones de las peliculas

    const total = allScores.reduce((acc, score) => {
        acc += score
        return acc
    }, 0)

    return Number((total / moviesArray.length).toFixed(2));






    // Luego volvemos a recorrer el array antes recorrido movies 

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama')
    });
    if (dramaMovies.length === 0) {
        return 0
    }

    const totalscore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);

    // Calculate the average rating (floating-point number)
    const averagescore = totalscore / dramaMovies.length;

    return parseFloat(averagescore.toFixed(2));
    //return Number(averagescore.toFixed(2)); También funciona Jasmine si se utiliza Number
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const newArr = [];
    const orderedMoviesYear = moviesArray.sort((movieA, movieB) => {
        if (movieA.year === movieB.year) {
            return movieA.title.localeCompare(movieB.title)
        }
        return movieA.year - movieB.year
    })
    return orderedMoviesYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {


    const orderedMoviesName = moviesArray.sort((movieA, movieB) => {

        return movieA.title.toLowerCase().localeCompare(movieB.title.toLowerCase())
    })

    if (orderedMoviesName.length > 20) {

        return orderedMoviesName.slice(0, 20)
    }

    const onlyTitle = orderedMoviesName.map((movie) => {
        return movie.title
    })

    return onlyTitle;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
