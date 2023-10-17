// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const newArray = moviesArray.map(eachMovie => {
        return eachMovie.director
    })
    return newArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const totalSpielberg = moviesArray.filter(eachMovie => {
        return eachMovie.director === "Steven Spielberg" && eachMovie.genre.includes("Drama");
    });

    return totalSpielberg.length;
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray === 0) {
        return 0;
    }
    const totalScore = moviesArray.reduce((acc, movie) => {
        return acc + movie.score
    }, 0);

    const averageScore = totalScore / moviesArray.length;

    return Number(averageScore.toFixed(2));

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(eachMovie => {
        return eachMovie.genre.includes("Drama");
    });

    if (dramaMovies.length === 0) {
        return 0;
    }

    const totalScoreDra = totalDrama.reduce((acc, movie) => {
        return acc + movie.score;
    }, 0)


    return parceFloat((totalScoreDra / totalDrama.length).toFixed(2))
}




// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const realMoviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    realMoviesArrayCopy.sort((a, b) => {
        return a.year - b.year

    })

    return realMoviesArrayCopy;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    if (moviesArray.length > 20) {
        moviesArray = moviesArray.splice(0, 20)
    }
    const orderedMoviesArrayCopy = JSON.parse(JSON.stringify(moviesArray))
    orderAlphabetically.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })


    return orderedMoviesArrayCopy;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const hoursToMinutes = JSON.parse(JSON.stringify(moviesArray))
    hoursToMinutes



}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}
