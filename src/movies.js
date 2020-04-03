// eslint no-restricted-globals: 'off'

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

    // Make a shallow copy of the arr Array that we can modify as we wish. The original array stays unchanged.
    let newArr = Array.from(arr);

    let order = (a, b) => {  
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.year === b.year) {
            if (a.title.toUpperCase() > b.title.toUpperCase()) {
                return 1;
            } else {
                return -1;
            }
        }   
    };

    return newArr.sort(order);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {

    let newArr = Array.from(arr);

    let spielberg = (newArr) => {
        if (newArr.genre.indexOf("Drama") !== -1 && newArr.director === "Steven Spielberg") {
            return true;
        }
    };

    return newArr.filter(spielberg).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

    let newArr = Array.from(arr);
    let titlesArr = newArr.map(newArr => newArr.title);

    let order = (a, b) => {
        if (a.toUpperCase() > b.toUpperCase()) {
            return 1;
        } else {
            return -1;
        }
    };

    return titlesArr.sort(order).splice(0, 20);
}
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {

    let newArr = Array.from(arr);

    if(newArr.length == 0) {
        return 0;
    }
    
    function totalAverage(acc, movie) {
        if(movie.rate) {
            return acc + movie.rate;
        } else {
            return acc + 0; 
        }       
    }

    return parseFloat((newArr.reduce(totalAverage, 0) / newArr.length).toFixed(2));

}
// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {

    let newArr = Array.from(arr);

    let drama = (newArr) => {
        if (newArr.genre.indexOf("Drama") !== -1) {
            return true;
        }
    };

    let dramaMovies = newArr.filter(drama);

    return ratesAverage(dramaMovies);
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
    
    // Make a deep copy of the arr Array
    let newArray = JSON.parse(JSON.stringify(arr));

}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
