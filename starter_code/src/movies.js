/* eslint no-restricted-globals: 'off' */


// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(arr) {

    let sum = arr.reduce((accumulator, currentValue) => accumulator + parseFloat(currentValue.rate), 0);
    let average = sum / arr.length;
    let averageReduce = average.toFixed(2);
    return parseFloat(averageReduce);
}

console.log(ratesAverage(movies))

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaMovies = arr.filter(film => film.genre.includes("Drama"))
    console.log(dramaMovies)

    if (!dramaMovies.length) return 0;

    const sumRateDrama = dramaMovies.reduce((accumulator, currentValue) => { return accumulator += Number(currentValue.rate) }, 0);

    let averageDrama = sumRateDrama / dramaMovies.length;
    let averageReduceDrama = averageDrama.toFixed(2);
    console.log(parseFloat(averageReduceDrama))
    return parseFloat(averageReduceDrama);
}
dramaMoviesRate(movies);

// Iteration 3: Ordering by year - Order by time duration, ascending (in growing order)

function orderByYear(arr) {
    arr.sort(function (a, b) {

        if (a.year > b.year) return 1;
        if (a.year < b.year) return -1;
        if (a.year === b.year) {
            if (b.title > a.title) return -1
            else return 1
        };
    })
    return arr;
}

console.log(orderByYear(movies))

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
