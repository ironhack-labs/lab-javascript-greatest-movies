const moviesArray = [{ year: 2007, score: 8 }];
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(m => m.director);
    // TODO hacer sin esto
    return [...new Set(allDirectors)];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

const isGenreDrama = (element) => element === 'Drama';

function howManyMovies(moviesArray) {
    return moviesArray.filter(m => m.director === 'Steven Spielberg' && m.genre.findIndex(isGenreDrama) !== -1).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const movieWithNumbers = moviesArray.filter(m => typeof m.score === 'number')
    // return 3
    if (moviesArray.length === 0) {
        return 0;
    }
    const avg = movieWithNumbers.reduce((s, m) => s + m.score, 0) / moviesArray.length;
    return Number(avg.toPrecision(3));
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(a => (a.genre.findIndex(isGenreDrama) !== -1));
    return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const year = [...moviesArray];
    year.sort((a, b) => {
        if (a.year < b.year) return -1;
        else if (a.year > b.year) return 1;
        else if (a.year === b.year) {
            if (a.title < b.title) return -1;
            else if (a.title > b.title) return 1;
            else if (a.title === b.title) return 0;
        }
    });
    return year;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const count = 20;
    const alph = moviesArray.map(m => m.title);
    alph.sort((a, b) => {
        if (a < b) return -1;
        else if (a > b) return 1;
        else if (a === b) return 0;
    });

    return alph.slice(0, count);
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const mvs = JSON.parse(JSON.stringify(moviesArray));
    mvs.map(m => {
        let hours = parseInt(m.duration.split(' ')[0]);
        let mins = parseInt(m.duration.split(' ')[1]);
        if (isNaN(mins)) mins = 0;
        // if (isNaN(hours)) hours = 0;
        let d = hours * 60 + mins;
        m.duration = d;
        return m;
    })

    return mvs;
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null;
    }

    const movies = [...moviesArray];
    const yearWithMovies = [];
    const years = [];
    const medias = [];
    for (const m of movies) {
        if (!years.includes(m.year)) {
            years.push(m.year);
            let auxMoviesOfThatYear = movies.filter(x => x.year === m.year);
            yearWithMovies.push({ year: m.year, movies: auxMoviesOfThatYear });
        }
    }

    for (const x of yearWithMovies) {
        medias.push({ year: x.year, media: scoresAverage(x.movies) });
    }

    medias.sort((a, b) => {
        if (a.media < b.media) return -1;
        else if (a.media > b.media) return 1;
        else if (a.media === b.media) {
            if (a.year < b.year) return 1;
            else if (a.year > b.year) return -1;
            else if (a.year === b.year) return 0;
        };
    });

    const bestYear = medias[medias.length - 1].year;
    const bestAverageScore = medias[medias.length - 1].media;
    return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
}
