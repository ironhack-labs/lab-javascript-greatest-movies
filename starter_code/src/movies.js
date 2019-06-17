/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
const turnHoursToMinutes = (movies) => {
    const moviesClone = JSON.parse(JSON.stringify(movies));
    const arrHours = moviesClone.map(time => {
        if (time.duration.length === 2) {
            const hour = parseInt(time.duration.slice(0, 1)) * 60;
            time.duration = hour;
            return time;
        } else if (time.duration.length === 5) {
            const minutes = parseInt(time.duration.slice(0, 2));
            time.duration = minutes;
            return time;
        } else {
            const hour = parseInt(time.duration.slice(0, 1)) * 60;
            const minutes = parseInt(time.duration.slice(3, 5));
            const totalMinutes = hour + minutes;
            time.duration = totalMinutes;
            return time;
        }
    });
    return arrHours;
};
// Get the average of all rates with 2 decimals 
const ratesAverage = (movies) => {
    const avr = movies.reduce((total, score) => {
        return total + parseFloat(score.rate);
    }, 0)
    return avr / movies.length;
};
// Get the average of Drama Movies
const dramaMoviesRate = (movies) => {
    const moviesClone = JSON.parse(JSON.stringify(movies));
    const dramaMovies = moviesClone.filter(movie => movie.genre.includes('Drama'));
    if(dramaMovies.length === 0) {
        return undefined;
    }
    const sumRate = dramaMovies.reduce((total, score) => {
        if (score.rate === '') {
            return total + 0;
        } else {
            return total + parseFloat(score.rate);
        }
    }, 0);
    return parseFloat((sumRate / dramaMovies.length).toFixed(2));
}
// Order by time duration, in growing order
const orderByDuration = (movies) => {
    const moviesClone = JSON.parse(JSON.stringify(movies));
    const sortDuration = moviesClone.sort((a, b) => {
        if(a.duration === b.duration) {
            return a.title.localeCompare(b.title);
        } else {
            return a.duration - b.duration;
        }
    });
    return sortDuration;
}
// How many movies did STEVEN SPIELBERG
const howManyMovies = (movies) => {
    const moviesClone = JSON.parse(JSON.stringify(movies));
    if(moviesClone.length === 0) {
        return undefined;
    };
    const stevenArr = moviesClone.filter(spielberg => spielberg.director === 'Steven Spielberg' && spielberg.genre.includes('Drama'));
    if(stevenArr.length === 4) {
        return 'Steven Spielberg directed 4 drama movies!';
    } else if(stevenArr.length === 2) {
        return 'Steven Spielberg directed 2 drama movies!';
    } else if(stevenArr.length === 1) {
        return 'Steven Spielberg directed 1 drama movies!';
    } else {
        return 'Steven Spielberg directed 0 drama movies!';
    }
}
// Order by title and print the first 20 titles
const orderAlphabetically = (movies) => {
    const moviesClone = JSON.parse(JSON.stringify(movies));
    if(moviesClone.length > 20) {
        const sortAlpha = moviesClone.sort((a, b) => a.title.localeCompare(b.title)).map(toString => toString.title).slice(0, 20);
        return sortAlpha;
    }
    const sortAlpha = moviesClone.sort((a, b) => a.title.localeCompare(b.title)).map(toString => toString.title);
    return sortAlpha;
}
// Best yearly rate average
const bestYearAvg = (movies) => {
    const moviesClone = JSON.parse(JSON.stringify(movies));
    if(movies.length === 0) {
        return undefined;
    }
    const sortByYear = moviesClone.sort((a, b) => parseInt(a.year) - parseInt(b.year));   
}