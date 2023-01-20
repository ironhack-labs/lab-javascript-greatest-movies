
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((movie) => {
        return movie.director;
    })
    
    return allDirectors;
};

/* --------------------------------BONUS

    let uniqueDirectors = [];
        moviesArray.forEach((element) => {
            if (!uniqueDirectors.includes(element)) {
                uniqueDirectors.push(element);
            }
}); */



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const justSpielberg = moviesArray.filter((movie) => {
        return movie.director === 'Steven Spielberg';
    })
    const justSpielbergDrama = justSpielberg.filter((movie) => {
        return movie.genre.includes('Drama');
    })

    return justSpielbergDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    const totalNumber = moviesArray.reduce((acc, val) => {
        if (!val.score) return acc + 0
        else return acc + val.score;
    }, 0)
    const totalAvg = +(totalNumber / moviesArray.length).toFixed(2);

    return totalAvg;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const justDrama = moviesArray.filter((movie) => {
        return movie.genre.includes('Drama');
    });

    return scoresAverage(justDrama);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = moviesArray.map((movie) => movie);

    moviesCopy.sort((a, b) => {

        if (a.year === b.year) {

            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
            else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
            else return 0;
        } else return (a.year - b.year)
    })
    return moviesCopy;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const moviesCopy = moviesArray.map((movie) => movie.title);

    moviesCopy.sort((a, b) => {
         if (a.toLowerCase() > b.toLowerCase()) return 1
        else if (a.toLowerCase() < b.toLowerCase()) return -1
        else return 0;
    })

    return moviesCopy.splice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const moviesCopy = moviesArray.map((movie) => movie);
    for (let i = 0; i < moviesCopy.length; i++) {
        let timeParts = moviesCopy[i].duration.split(/h|' '|min/);
        moviesCopy[i].duration = (Number(timeParts[0]) * 60 + Number(timeParts[1]));
    };
    return moviesCopy;
  } 
  

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
