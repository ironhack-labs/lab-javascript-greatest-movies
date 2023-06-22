// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directorsArray = moviesArray.map(movie => movie.director);
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const stevenDrama = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;

    const average = moviesArray.reduce((acc, curVal) => {
        const movieScore = curVal.score || 0;
        return acc + movieScore;
    }, 0) / moviesArray.length;

    const roundedAverage = average.toFixed(2);
    return parseFloat(roundedAverage);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(movie => movie.genre.includes('Drama'))
    if (drama.length === 0) return 0;

    const averageDrama = drama.reduce((acc, curVal) => {
        return acc + curVal.score;
    }, 0) / drama.length;
    const roundedAverage = averageDrama.toFixed(2);
    return parseFloat(roundedAverage);
}
  



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesArrayCopy = [...moviesArray];
    return moviesArrayCopy.sort((a,b) => {
        if (a.year > b.year) {
            return 1;
        } else if (b.year > a.year) {
            return -1;
        } else {
            if (a.title > b.title) {
                return 1;
            }
            else if (b.title > a.title) {
                return -1;
            }
            return 0;
        }
    })
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesArrayCopy = [...moviesArray];
    moviesArrayCopy.sort((a,b) => {
        if (a.title > b.title) {
            return 1;
        }
        else if (b.title > a.title) {
            return -1;
        }
        else {
            return 0;
        }
    });

    const titleArray = moviesArrayCopy.slice(0, 20);
    const newTitleArray20 = [];
    titleArray.forEach(function (movie) {
        newTitleArray20.push(movie.title);
    });
    return newTitleArray20;
}

