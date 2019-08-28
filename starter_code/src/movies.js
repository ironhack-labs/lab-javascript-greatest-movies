/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(array) {
    const mappedArr = array.map(rates => parseFloat(rates.rate));
    const sum = (sumarizer, currentElement) => sumarizer + currentElement;
    let avg = parseFloat(((mappedArr.reduce(sum)) / mappedArr.length).toFixed(2));
    return avg;
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const dramaMovies = array.filter(element => element.genre == "Drama");
    console.log(dramaMovies);
    if (dramaMovies.length === 0) {
        return 0;
    }
    const mapDramaMovies = dramaMovies.map(rates => rates.rate);
    mapDramaMovies.forEach(function (element, index) {
        if (element === "") {
            mapDramaMovies[index] = "0";
        }
    })
    console.log(mapDramaMovies);
    const sum = (sumarizer, currentElement) => parseFloat(sumarizer) + parseFloat(currentElement);
    console.log(sum);
    let avg = parseFloat(((mapDramaMovies.reduce(sum)) / mapDramaMovies.length).toFixed(2));
    console.log(avg);
    return avg;
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
