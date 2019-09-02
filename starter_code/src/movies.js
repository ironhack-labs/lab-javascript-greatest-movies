/* eslint no-restricted-globals: 'off' */

const data = require("./data");

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    let sum = movies.reduce((accumulator, current) => {
        // console.log(accumulator, current.rate);
        return parseFloat(accumulator) + parseFloat(current.rate);
    }, 0);
    let avg = sum / movies.length;
    return avg;
}
// console.log(data.movies)
// console.log(ratesAverage(data.movies));
 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaInGenre(array) {
    let sum = 0;
    res = array.forEach((genre) => {
        if (genre == "Drama")
            sum++;
    })
    return !!sum;
}

function reducer(accumulator, current) {
    if (!dramaInGenre(current.genre) || !current.rate)
        return accumulator + 0;
    return accumulator + parseFloat(current.rate);
}

function getDramaMovies(movies) {
    let sum = 0;
    for (let i = 0; i<movies.length; i += 1) {
        if (dramaInGenre(movies[i]["genre"]))
            sum++;
    }
    return sum;
}

function dramaMoviesRate (movies) { 
    let sum = movies.reduce(reducer, 0);
    let num = getDramaMovies(movies);
    let avg = sum / num;
    if (num === 0)
        return 0;
    return parseFloat(avg.toFixed(2));
}

// console.log(dramaMoviesRate(data.movies));
 

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function sortByTitle(a, b) {
    if (a.title < b.title) {return -1;}
    if (a.title > b.title) {return 1;}
    return 0;
}

function sortByDuration(a, b) {
    if (a.duration < b.duration) {return -1;}
    if (a.duration > b.duration) {return 1;}
    return 0;
}

function orderByDuration(movies) {
    res = movies.sort(sortByTitle);
    return (res.sort(sortByDuration));
}

// orderByDuration(data.movies);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(movies) {
    res = movies.filter((movie) => {
        return movie.director == "Steven Spielberg" && dramaInGenre(movie.genre)
    });
    return res.length;
}

// console.log(howManyMovies(data.movies))

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    res = [];
    sortedMovies = movies.sort(sortByTitle);
    for (let i = 0; i < 20 || i > movies.length; i++) {
        res.push(sortedMovies[i]["title"]);
    }
    console.log(typeof(res));
    console.log(typeof(res[0]));
    console.log(res);
    return res;
}

orderAlphabetically(data.movies)

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
