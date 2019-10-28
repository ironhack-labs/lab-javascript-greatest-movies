/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
    let newMovies = [...arr];
    newMovies.sort(function (movie1, movie2) {
        if (movie1.year > movie2.year) {
            return 1
        } else {
            return -1
        }
    })
    return newMovies;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    return arr.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length;

}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    let moreMovies = [...arr];
    moreMovies = moreMovies.sort(function (movie1, movie2) {
        return movie1.title.localeCompare(movie2.title)
    }).map(function (movie) {
        return movie.title;
    });
    return moreMovies.splice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    if (arr.length === 0) return 0;

    let average = arr.reduce((ac, curr) => {
        if (typeof (curr.rate) !== "number") curr.rate = 0;
        return ac + curr.rate
    }, 0) / arr.length;
    console.log(average);
    return +(average.toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaArr = arr.filter(movie => movie.genre.includes("Drama"));
    if (dramaArr.length === 0) return 0;
    let dramaAvg = dramaArr.reduce((ac, curr) => {
        if (typeof (curr.rate) !== "number") curr.rate = 0;
        return ac + curr.rate
    }, 0) / dramaArr.length;
    console.log(dramaAvg);
    return +(dramaAvg.toFixed(2))

}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));

    newArr.forEach(movie => {
        let times = movie.duration.split(" ");
        // console.log(times);
        let minutes;
        if (times.length === 1) {
            if (times[0].includes("min")) {
                minutes = parseFloat(times[0]);
            } else {
                minutes = parseFloat(times[0]) * 60;
            }
        } else {
            minutes = parseFloat(times[0]) * 60 + parseFloat(times[1])
        }
    console.log(minutes);
        movie.duration= minutes;

    }); 
    
console.log(newArr)
    return newArr;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average