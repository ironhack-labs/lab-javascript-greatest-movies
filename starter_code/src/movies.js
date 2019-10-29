/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending( in growing order)


function orderByYear(arr) {

    let moviesCopy = [...arr];

    moviesCopy.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        }
        if (a.year < b.year) {
            return -1;
        }
        if (a.year === b.year) {
            if (a.title < b.title) {
                return -1
            }
            if (a.title > b.title) {
                return 1
            }
        }
    })
    // console.log(moviesCopy);
    return moviesCopy
}

orderByYear(movies);



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {
    // console.log(arr)
    let moviesCopy = [...arr];
    const spielbergMovies = moviesCopy.filter(elm => elm.director.includes("Steven Spielberg") && elm.genre.includes("Drama"));
    const spielbergValue = spielbergMovies.length
    return spielbergValue;
    // console.log(spielbergMovies);
    // console.log(spielbergValue);
}
howManyMovies(movies)
// const spielbergDramas = moviesCopy.filter(elm => elm.director.includes("Steven Spielberg" && elm.genre.includes("Drama")))
// const spielbergDramas = spielbergMovies.filter(elm => elm.genre.includes("Drama"));
// Let spielbergTheBest = [];
// console.log(spielbergDramas);
// if ()
// const spielberg = moviesCopy.filter()



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

    let moviesCopy = [...arr];


    // console.log(alphabetical);
    const alphabetical = moviesCopy.sort(function (a, b) {
        if (a.title > b.title) {
            return 1;
        }
        if (a.title < b.title) {
            return -1;
        }
    })

    const order = alphabetical.map(elm => elm.title);
    // console.log(order);
    const extract = order.slice(0, 20);
    // console.log(extract);
    return extract;

}

orderAlphabetically(movies);

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    // console.log(arr);
    let moviesCopy = [...movies];
    const filterRate = moviesCopy.reduce((acc, elm) => {
        return acc + elm.rate
    }, 0);
    const divisor = moviesCopy.length
    const average = (filterRate / divisor).toFixed(2);
    console.log(average);
    return parseFloat(average);
    // const addRate = filterRate.reduce((acc, elm) => {
    // return acc + elm.rate
    // });
    //.reduce((acc, elm) => {
    // return acc + elm.rate
    // }); //moviesCopy.filter(elm => elm.rate);
    console.log(filterRate);
    // return filterRate;
    console.log(typeof (filterRate));
    // const moviesRate = moviesCopy.reduce((acc, elm) => {
    // return acc + elm.rate;
    // }, 0);
    // const movieLength = moviesCopy.length
    // const decimal = moviesRate //.toFixed(2);
    // console.log(decimal);
}
// let moviesValue = moviesNumber.length;
// const moviesNumber = moviesCopy.map(elm => elm.rate);
// console.log(arr);
// console.log(movieLength);
// +let changeDecimal = 0;

// +function change(str, base) {
// changeDecimal = parseInt(str, base);
// +}
// +change(decimal, 10);
// +let average = changeDecimal / movieLength;
// changeDecimal = Number.parseFloat(str).toFixed(2);
// const transformer = parseInt(decimal, 10);
// console.log(changeDecimal);
// console.log(typeof (changeDecimal));
// console.log(typeof (decimal));
// console.log(decimal);



// console.log(moviesNumber)
// }
ratesAverage(movies);

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average