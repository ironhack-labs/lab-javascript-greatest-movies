// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArray) {
    const listOfDirectors = moviesArray.map((movie) => movie.director);

    // _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
    // How could you "clean" a bit this array and make it unified (without duplicates)?

    // i-counter: loop through each item in the array
    for (let i=0; i < listOfDirectors.length; i++) {

        // j-counter: loop through all subsequent items and check if any are the same
        for (let j=1; j < listOfDirectors.length; j++) {
            if (listOfDirectors[i] == listOfDirectors[i+j]) {
                // if so, remove said item and reset the j-counter -1
                // (we need to check this position again because the removal caused an item we didn’t check before to move up)
                listOfDirectors.splice(i+j,1);
                j -= 1;
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


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    // make a new array by copying the original one
    let moviesOrderedByYear = [...moviesArray];
    // sort the array by year
    moviesOrderedByYear.sort(
        function(a,b) {
            if (a.year < b.year) return -1;
            if (a.year > b.year) return 1;
            if (a.year === b.year) {
                // if the same year, sort by title
                if (a.title < b.title) return -1;
                if (a.title > b.title) return 1;
                if (a.title === b.title) return 0;
            };
        }
    )
    return moviesOrderedByYear;
}