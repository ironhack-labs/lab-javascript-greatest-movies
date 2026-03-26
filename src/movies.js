

/////////////

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    //create let
    //añadir map a la variable y crear la logica
    //logica: (movies) => {return movies.director}

    let directors = moviesArray.map((movie) => {
        return movie.director;
    });


    return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    // crear variable que cuente las peliculas de steven
    // añadir el filtro y crear logica
    // logica: 

    if (!moviesArray.length) return 0;

    let counterSteven = moviesArray.filter((movie) => {
        return movie.director === "Steven Spielberg" && movie.genre.includes('Drama');
        
    });

    return counterSteven.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    // crear variable de suma score que sume todos los score que hay en el array
    // crea variable Average que coja la sum y la divida
    if (!moviesArray.length) return 0;

    let sumScore = moviesArray.reduce((acc, movie) => {
        if (!movie.score) {
            return acc;
        }
        return acc + movie.score;
    }, 0);

    let average = sumScore / moviesArray.length;
    return Math.round(average * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    if (!dramaMovies.length) return 0;
    const sum = dramaMovies.reduce((acc, movie) => acc + (movie.score || 0), 0);
    return Math.round((sum / dramaMovies.length) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const orderByYear = moviesArray.slice().sort((a, b) => {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return orderByYear;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderAlphabetically = moviesArray.slice().sort((a, b) => a.title.localeCompare(b.title));
    const first20Titles = orderAlphabetically.slice(0, 20).map((movie) => movie.title);
    return first20Titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
