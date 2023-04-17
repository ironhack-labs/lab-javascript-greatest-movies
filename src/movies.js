// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const director = moviesArray.map((eachMovie) => {
        return eachMovie.director


    })

    return director
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const SpielbergDramaMovies = moviesArray.filter((eachMovie) => {


        if (eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes("Drama")) {

            return true

        }

    })


    return SpielbergDramaMovies.length

}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    const scoreAverage = moviesArray.reduce((acc, eachMovie) => {

        if (!eachMovie.score) {
            eachMovie.score = 0
        }

        return acc + eachMovie.score / moviesArray.length

    }, 0)


    return +scoreAverage.toFixed(2)

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    const dramaMovies = moviesArray.filter((eachMovie) => {
        return eachMovie.genre.includes("Drama");
    });

    if (dramaMovies.length === 0) {
        return 0;
    }

    const dramaScores = dramaMovies.reduce((acc, eachMovie) => {
        return acc + eachMovie.score;
    }, 0);

    const averageScore = dramaScores / dramaMovies.length;

    return +averageScore.toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {

    const movieCopies = JSON.parse(JSON.stringify(moviesArray))
    // Hacemos una copia del array original para no cambiarlo

    const sortMovies = movieCopies.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year                 //me costó, me gustaría que lo explicaran en calse para asimilarlo. Yo solo no la hubiera implementado correctamente
        } else {
            return a.title.localeCompare(b.title)  //esto tuve que pedir ayuda para hacerlo, no hubiera dado con ello por mi cuenta
        }

    })

    return sortMovies
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// function orderAlphabetically(moviesArray) {
//     const movieCopies = JSON.parse(JSON.stringify(moviesArray))
//     const titlesOrderedArr = movieCopies.map(())


//no he sido capaz de hacerla


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
