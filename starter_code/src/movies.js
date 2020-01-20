/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
    // sort method returns the ORIGINAL array sorted (not a new one), so we can use the spread operator [...] in order to return a new sorted array:
    return [...movies].sort((a, b) => {
        if(a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else {
            if(a.title.localeCompare(b.title) < 0) {
                return -1;
            } else {
                return 1;
            }
        }
    });
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    let newArray = movies.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
    return newArray.length;
}


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    let titlesArr = movies.map(movie => movie.title);
    titlesArr.sort((a, b) => a.localeCompare(b) > 0 ? 1 : -1);
    return titlesArr.slice(0, 20);
}


// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movies) {
    if(movies.length === 0) {
        return 0;
    } else {
        let ratesTotal = movies.reduce((ac, cu) => {
            if(typeof cu.rate !== 'number') {
                cu.rate = 0;
            }
            return ac += cu.rate;
        }, 0);
        return +(ratesTotal / movies.length).toFixed(2);
    }
}


// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    let dramaMovies = movies.filter(movie => movie.genre.includes('Drama'));
    if(dramaMovies.length === 0) {
        return 0;
    } else {
        let ratesTotal = dramaMovies.reduce((ac, cu) => {return ac += cu.rate}, 0);
        return +(ratesTotal / dramaMovies.length).toFixed(2);
    }
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    let hours, minutes;
    let newArray = Array.from(movies);
    
    newArray.forEach(movie => {
        let durationArr = movie.duration.split(' ');
        if(durationArr.length === 2) {
            hours = durationArr[0].split('h');
            minutes = durationArr[1].split('min');
            minutes = parseInt(minutes[0]);
        } else {
            hours = durationArr[0].split('h');
            minutes = 0;
        }
        
        let durationInMinutes = parseInt(hours[0]) * 60 + minutes;
        movie.duration = durationInMinutes;
    });
    return newArray;
}




// BONUS Iteration: Best yearly rate average - Best yearly rate average
