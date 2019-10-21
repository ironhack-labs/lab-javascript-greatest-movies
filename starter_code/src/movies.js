/* eslint no-restricted-globals: 'off' */

// I had a really hard time with this lab! Also in general I think I am struggling
// with JS. This is why I decided to hand in this assignment unfinished - so this is
// a representation of how far I can get (or not) without googling similar cases 
// or asking people for help. I spent at least 5 hours on this.

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
const ratesAverage = (arr) => {
    const average = arr.reduce(function (total, movie) {
        return (total + parseFloat(movie.rate));
    }, 0) / arr.length;
    return Number(average.toFixed(2));
};

// Iteration 2: Drama movies - Get the average of Drama Movies

// I don't really understand why this idea does not work:
// const dramaMoviesRate = (arr) => {
//     const dramaAverage = arr.reduce(function (total, movie) {
//         counter = 0;
//         if (movie.genre.includes("Drama")) {
//             counter++;
//             return (total + parseFloat(movie.rate));
//         }
//     }, 0 / counter);
//    return Number(total.toFixed(2));
// };

// This one works at least partially:
const dramaMoviesRate = (arr) => {

    const onlyDrama = arr.filter(function (movie) {
        return (movie.genre.includes("Drama"));
    });

    const dramaAvg = onlyDrama.reduce(function (sum, drama) {
        return sum + parseFloat(drama.rate);
    }, 0) / onlyDrama.length;
    return Number(dramaAvg.toFixed(2));
};

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
const orderByYear = (arr) => {
    const sortedByYear = arr.sort(function (a, b) {
        if (parseFloat(a.year) !== parseFloar(b.year)) {
            return parseFloat(a.year) - parseFloat(b.year);
        }
        return b.title[0] - a.title[0];
    })
    return sortedByYear;
};

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
const howManyMovies = (arr) => {
    const spielberg = arr.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return movie.director === "Steven Spielberg";
        }
    })
    return spielberg.length;
};

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {
    const alphaArray = arr.sort(function (a, b) {
        if (a.title[0] > b.title[0]) {
            return -1;
        }
        if (a.title[0] < b.title[0]) {
            return 1;
        }
        if (a.title[0] === b.title[0]) {
            return 0;
        }
    })
    return alphaArray;
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {

    const onlyMinutes = arr.map(function (movie, index) {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: movie.duration * Number(String(parseFloat(movies[index].duration.split(" ")[0]) * 60)) + Number(String(parseFloat(movies[index].duration.split(" ")[1]))),
            // I unfortunately have no idea how to transform this into just numbers since parseFloat does not seem to work. I was thinking string methods but could not figure it out:
            // Number(String(parseFloat(movies[index].duration.split(" ")[0])*60)) + Number(String(parseFloat(movies[index].duration.split(" ")[1]))),
            // (On Codepen, when I pass in a specific index this works! "2h 28min" gives me 148. )
            genre: movie.genre,
            rate: movie.rate
        }
    })
    return onlyMinutes;
};

// BONUS Iteration: Best yearly rate average - Best yearly rate average
const bestYearAvg = (arr) => {
    if (arr.length <= 0) return null;
}