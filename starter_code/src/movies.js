/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
    let newArr = [...arr];
    newArr.sort((a, b) => (a.year > b.year) ? 1 : (a.year === b.year) ? ((a.title > b.title) ? 1 : -1) : -1)
    if (!newArr) return 0;
    return newArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    let newArr = arr.filter(elem => elem.director === "Steven Spielberg").filter(x => x.genre.indexOf("Drama") > -1);
    if (!newArr) return 0;
    return newArr.length;
}




// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let newArr = [...arr];
    let result = [];
    newArr.sort((a, b) => (a.title > b.title) ? 1 : -1);
    if (newArr.length > 20)
        newArr.forEach((x, index) => { if (index < 20) result[index] = x.title });
    else
        newArr.forEach((x, index) => { result[index] = x.title });
    return result;

}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals




function ratesAverage(arr) {
    if (arr.legth === 0)
        return 0;
    else {
        let avg = (arr.reduce((accum, item) => {
            if (!item.rate) return accum;
            return accum + item.rate;
        }, 0)) / arr.length;
        let total = parseFloat(avg.toFixed(2));
        if (!total) return 0;
        else return total;
    }
}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
    let newArr = arr.filter(x => x.genre.indexOf("Drama") > -1);
    let total = ratesAverage(newArr);
    return total;
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {

    let newArr = arr.map(x => {
        let newMovie = Object.assign({}, x);
        let h = ((x.duration).indexOf('h') > -1) ? Number((x.duration).slice(0, x.duration.indexOf('h'))) : 0;
        let min = ((x.duration).indexOf('m') > -1) ? Number((x.duration).slice(x.duration.indexOf(' ') + 1, x.duration.indexOf('m'))) : 0;
        newMovie.duration = h * 60 + min;
        return newMovie;
    });

    return newArr;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average