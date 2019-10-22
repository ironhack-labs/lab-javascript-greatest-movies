/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    let sum = movies.reduce((accumulator, movie) => {
        accumulator += Number(movie.rate);
        return accumulator;
    }, 0);
    return Number((sum / movies.length).toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    let drama = movies.filter(movie => movie.genre.indexOf("Drama") >= 0);
    let sumDrama = drama.reduce((accumulator, movie) => {
        accumulator += Number(movie.rate);
        return accumulator;
    }, 0);
    if (sumDrama === 0) {
        return 0;
    }
    return Number((sumDrama / drama.length).toFixed(2));
}

console.log(dramaMoviesRate(movies));

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arr) {
    function sortYear(a, b) {
        if (a.year > b.year) {
            return 1;
        } else if (b.year > a.year) {
            return -1;
        } else {
            return 0;
        }
    }
    return arr.sort(sortYear);
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    let stevenDrama = movies.filter(movie => {
        return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    });
    return stevenDrama.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    function sortTitle(a, b) {
        if (a.title > b.title) {
            return 1;
        } else if (b.title > a.title) {
            return -1;
        } else {
            return 0;
        }
    }
    let sortedTitles = arr.sort(sortTitle);
    let sortedTwenty = sortedTitles.slice(0, 20);
    let sortedTwentyArr = sortedTwenty.reduce((accumulator, movie) => {
        accumulator.push(movie.title);
        return accumulator;
    }, []);
    return sortedTwentyArr;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    return arr.map(item => {
        const movieCopy = Object.assign({}, item);
        let durationSplitted = movieCopy.duration.split(" ");
        let hours = parseFloat(durationSplitted[0]) * 60;
        let minutes = parseFloat(durationSplitted[1]);
        movieCopy.duration = hours + minutes;
        return movieCopy;
    })
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average