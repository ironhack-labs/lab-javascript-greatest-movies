/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array){
    const newArray = array.map(obj => obj);
    return newArray.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title))
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
const howManyMovies = (array) => {
    return array.filter(elem => elem.genre.indexOf("Drama") >= 0 && elem.director === "Steven Spielberg").length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
//map sort slice
const orderAlphabetically = (arreglo) => {let newArr = [...arreglo]
    newArr.sort((a, b) => 
    ("" + a.title).localeCompare(b.title))
    return newArr.slice(0, 20).map(elem => elem.title)
    }



// Iteration 4: All rates average - Get the average of all rates with 2 decimals
//reduce
const ratesAverage = arr => {
    const sumAvg = arr.reduce((acumulator, number) =>{
        return acumulator + Number (number.rate)
    },0) /arr.length
    return parseFloat(sumAvg.toFixed(2))
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies){
    let dramaMovies = [];
    movies.map(movie => {
        if(movie.genre.includes("Drama")){
            dramaMovies.push(movie);
        }
        return dramaMovies;
    });
    if(dramaMovies.length === 0) return 0;
    let averageRateDrama = dramaMovies.reduce(
    (accum, currentValue) => {
        return accum + currentValue.rate;
    }, 0) / dramaMovies.length;
    return Number(averageRateDrama.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
