/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movieArray) {
    return +(movieArray.reduce((ac, cu) => ac + cu.rate, 0) / movieArray.length).toFixed(2);
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movieArray) {
    const dramaMovies = [...movieArray.filter(movie => movie.genre.includes('Drama'))];

    if (dramaMovies.length === 0) return 0;
    return +(dramaMovies.reduce((ac, cu) => ac + cu.rate, 0) / dramaMovies.length).toFixed(2);
}

/// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movieArray) {
    const moviesDuration = movieArray.sort((a, b) => {
        /*
        if (a.duration === b.duration) {
            return a.title < b.title ? -1 : 1;
        }
        return a.duration - b.duration
         */

        if (a.duration !== b.duration) return a.duration - b.duration
        return a.title.localeCompare(b.title);
    });

    return moviesDuration;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movieArray) {
    const dramaMovies = [...movieArray.filter(movie => movie.genre.includes('Drama'))];
    const directedBySteven = [...dramaMovies.filter(movie => movie.director.includes('Steven Spielberg'))];

    if (directedBySteven.length === 0) return 0;

    return directedBySteven.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
    const sortedMovies = movieArray.sort((a, b) => {
        if (a.title.length !== b.title.length) return a.title - b.title;
        return a.title.localeCompare(b.title);
    }).map(movie => movie.title);;

    return sortedMovies.length < 20 ? sortedMovies 
    : sortedMovies.length >= 20 ? sortedMovies.slice(0, 20) : null
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movieArray) {
    return movieArray.map(movieDuration => {   
        const durationSplit = movieDuration.duration.split(" ");
        const hours = parseInt(durationSplit[0]);
        const minutes = parseInt(durationSplit[1]);

        let newDuration;
        if (movieDuration.duration.length >= 7) {
            newDuration = +hours * 60 + minutes;
        } else if (movieDuration.duration.length <= 3) {
            newDuration = +hours * 60;
        } else newDuration = +hours;

        return { ...movieDuration, duration: newDuration };
    });
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
