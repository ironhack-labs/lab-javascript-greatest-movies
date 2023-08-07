/*{
        title: "PK",
        year: 2014,
        director: "Rajkumar Hirani",
        duration: "2h 33min",
        genre: ["Comedy", "Drama", "Fantasy", "Sci-Fi"],
        score: 8.2,
    }*/
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const getDirectors = moviesArray.map((movie) => {
        return movie.director;
    });
    return getDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const filteredSpielberg = moviesArray.filter((spielberg) => {
        if (
            spielberg.director === "Steven Spielberg" &&
            spielberg.genre.includes("Drama")
        ) {
            return true;
        } else {
            return false;
        }
    });
    return filteredSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const moviesWithScore = moviesArray.filter(
        (movie) => typeof movie.score === "number"
    );
    if (!Array.isArray(moviesWithScore) || moviesWithScore.length === 0) {
        return 0;
    }
    const reducedArr = moviesWithScore.reduce((acc, curr) => {
        const total = acc + curr.score;
        return total;
    }, 0);
    const avarage = reducedArr / moviesArray.length;
    return Number(avarage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) =>
        movie.genre.includes("Drama")
    );
    if (dramaMovies.length === 0) {
        return 0;
    }
    const total = dramaMovies.reduce((acc, curr) => acc + curr.score, 0);
    const AvgDrama = total / dramaMovies.length;
    return Number(AvgDrama.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let orderedArr = moviesArray
        .map((movie) => {
            return movie;
        })
        .sort((a, b) => {
            return a.year !== b.year
                ? a.year - b.year
                : a.title.localeCompare(b.title);
        });
    return orderedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const allMovies = moviesArray.slice();
    allMovies.sort((a, b) => a.title.localeCompare(b.title));
    const onlyTitle = allMovies.map((movie) => movie.title);
    return onlyTitle.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
