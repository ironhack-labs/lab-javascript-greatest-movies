// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectorsArr = moviesArray.map((movie) => {
        return movie.director;
    })
    return allDirectorsArr;
}


// Bonus Iteration 1.1: clean the array of directors
// function getAllDirectorsOnlyOnce(moviesArray) {
//     const allDirectorsOnlyOnceArr = moviesArray.map((movie, index) => {
//         if (movie.indexOf(movie.director))
//     })
// }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielbergDramaMovies = moviesArray.filter((movie) => {
        if (movie.director == 'Steven Spielberg' && movie.genre.includes('Drama') == true) {
            return movie;
        }
    })
    return spielbergDramaMovies.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    let totalScore = 0;
    let totalAvgScore = 0;

    if (moviesArray.length > 0) {
        for(let i = 0; i < moviesArray.length; i++) {
            if (moviesArray[i].score )
            totalScore += moviesArray[i].score;
        }
        totalAvgScore = (Math.round((totalScore / moviesArray.length + Number.EPSILON) * 100) / 100) ;
    }
    return totalAvgScore;
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let totalDramaMovieScore = 0;
    let totalAvgDramaScore = 0;

    const allDramaMovies = moviesArray.filter((movie) => {
        if (movie.genre.includes('Drama') == true) {
            totalDramaMovieScore += movie.score;
            return movie;
        }
    })
    
    if (allDramaMovies.length <= 0) {
        totalAvgDramaScore = 0;
    } else {
        totalAvgDramaScore = (Math.round((totalDramaMovieScore / allDramaMovies.length + Number.EPSILON) * 100) / 100) ;
    }

    return totalAvgDramaScore;
}