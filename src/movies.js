// Iteration 1: All directors? - Get the array of all directors.
const getAllDirectors = (arr) => {
    const directors = arr.map(film => {
        return film.director;
    })
    return directors;
};

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
    const stevenDrama = arr.filter(movie => {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')) {
            return true;
        }
    })
    return stevenDrama.length;
};

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
const ratesAverage = (movies) => {
    if (movies.length === 0) {
        return 0;
    };

    const ratesSum = movies.reduce((acc, movie) => {
        if ( !(movie.rate) ) {
            return acc;
        }
        return acc + movie.rate;
    }, 0)
    
    let ratesAverage = Number((ratesSum / movies.length).toFixed(2))
    return ratesAverage;
};


// Iteration 4: Drama movies - Get the average of Drama Movies
// const dramaMoviesRate
const dramaMoviesRate = (movies) => {
    let dramas = movies.filter(movie => {
        return movie.genre.includes('Drama');
    });

    if (dramas.length === 0) {
        return 0;
    };

    const dramaRatesSum = dramas.reduce((acc, drama) => {
        if ( !(drama.rate) ) {
            return acc;
        }
        return acc + drama.rate
    }, 0);

    let ratesAverage = Number((dramaRatesSum / dramas.length).toFixed(2))
    return ratesAverage;
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
    const arrCopy = [...arr];
    const sorted = arrCopy.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        }
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        }
    })
    return sorted;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    const moviesCopy = [...movies]
    const alphabeticalTitlesOnly = moviesCopy.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        }
    }).map(movie => {
        return movie.title;
    })
    return alphabeticalTitlesOnly.slice(0, 20);
};

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
