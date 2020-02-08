/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let sortedArray = moviesArray.sort(function (a, b) {
        if (a.year > b.year) {
            return 1;
        } else {
            return -1;
        }
    });
    return sortedArray;
}

orderByYear(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(moviesArray) {
    let onlyDrama = moviesArray.filter(function (movie) {
        return (
            movie.genre.includes("Drama") && movie.director === "Steven Spielberg"
        );
    });
    return onlyDrama.length;
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {
    let copyMovies = moviesArray.slice()
    let sortedTitles = copyMovies.sort(function (a, b) {
        if (a.title > b.title) {
            return 1
        } else {
            return -1
        }

    });

    let titles = sortedTitles.map(movie => {
        return movie.title
    })
    return titles.slice(0, 20)

}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArray) {
    let totalRate = moviesArray.reduce(function (sum, movie) { return sum + movie.rate }, 0)
    let avarage = totalRate / moviesArray.length


    roundedRate = parseFloat((Math.round(avarage * 100) / 100).toFixed(2))
    return roundedRate
}

ratesAverage(movies)

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArray) {

    let dramaMovies = moviesArray.filter(function (movie) {
        return (movie.genre.includes("Drama"))
    })

    ratesAverage(dramaMovies)

   /* let sumRates = dramaMovies.reduce(function (sum, movie) { return sum + movie.rate }, 0)

    let average = sumRates / dramaMovies.length

    return average
    
    
    */

}










// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average

