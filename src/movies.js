// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
    let movieDirectors = arr.map((element) => element.director );
    return movieDirectors;
  }
  
  getAllDirectors(movies)

getAllDirectors ()
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies (arr) {
    let stevenSpielberg = arr.filter ( element =>
    element.director === "Steven Spielberg" && element.genre.includes("Drama")
    )
    return stevenSpielberg.length;
}

howManyMovies (movies);

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }

    let ratesArr = arr.filter(element => element.rate).map(element => element.rate)
    let ratesSum = ratesArr.reduce((acc, cur) => acc + cur);
    let rateAvg = (ratesSum/ratesArr.length).toFixed(2);
    return parseFloat(rateAvg) ;
    }
    
    ratesAverage(movies)

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (arr) {
    let dramaMovies = arr.filter ( element =>
        element.genre.includes("Drama"))


    let ratesArr = dramaMovies.map(element => element.rate)
    if (ratesArr.length === 0) {
        return 0;
    }
    let ratesSum = ratesArr.reduce((acc, cur) => acc + cur);
    let rateAvg = (ratesSum/ratesArr.length).toFixed(2);
    return parseFloat(rateAvg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {
    let result = array
        .map(film => film)
        .sort(function (a, b) {
            if (a.year > b.year) {
                return 1;
            } else if (b.year > a.year) {
                return -1;
            } else {
                if (a.title > b.title) {
                    return 1;
                } else if (b.title > a.title) {
                    return -1;
                }
                return 0;
            }
        });
    return result;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically (arr) {
    let titleArray = arr.map(element => element.title).sort();
    return titleArray;


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
