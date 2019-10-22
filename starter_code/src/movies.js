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
            if (b.title > a.title) return -1;
            else return 1
        };
    })
    return arr;
}

console.log(orderByYear(movies))

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    if (!arr.length) return 0;
    const dramaMovies = arr.filter(film => film.genre.includes("Drama") && film.director.includes("Steven Spielberg"));
    return dramaMovies.length;
}

console.log(howManyMovies(movies));

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    arr.sort(function (a, b) {
        if (a.title >= b.title) return 1;
        if (a.title < b.title) return -1;
    })
    top20 = arr.slice(0, 20)
    return top20.reduce((accumulator, currentValue) => [...accumulator, currentValue.title], []);
}

console.log(orderAlphabetically(movies))

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    const copy = JSON.parse(JSON.stringify(arr));
    copy.forEach(movie => {
        let duration = 0;
        const splittedTime = movie.duration.split(" ");
        if (splittedTime.length === 1) {
            let hoursOrMinutes = splittedTime[0];
            if (hoursOrMinutes.includes("h")) {
                duration = parseFloat(hoursOrMinutes) * 60;
                movie.duration = duration;
                return;
            }
            if (hoursOrMinutes.includes("min")) {
                movie.duration = parseFloat(hoursOrMinutes)
                return;
            }
        }
        let hours = parseFloat(splittedTime[0]) * 60;
        let minutes = parseFloat(splittedTime[1]);
        movie.duration = hours + minutes;
    })
    return copy;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average
