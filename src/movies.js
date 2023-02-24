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
function getAllDirectorsOnlyOnce(moviesArray) {
    
    // use the function before to get an array with a list of all directors
    let listOfDirectors = getAllDirectors(moviesArray);

    // i-counter: loop through each item in the array
    for (let i=0; i < listOfDirectors.length; i++) {
        let currentDirector = listOfDirectors[i].director;

        // j-counter: for each item in the array, check if any subsequent items are the same
        // if so, remove said item and reset the j-counter -1
        // (because an item that we didn’t check before has moved up to the position where we just removed something)
        for (let j=0; j < listOfDirectors.length - 1; j++) {
            if (listOfDirectors[i] == listOfDirectors[i+j]) {
                listOfDirectors.splice(i+j,1);
                -j;
            }
        }
    }
    return listOfDirectors;
}

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
        totalAvgDramaScore = scoresAverage(allDramaMovies);
    }
    return totalAvgDramaScore;
}
