/* eslint no-restricted-globals: 'off' */

//let movies = require('./data.js');
//let movies = [];

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

function ratesAverage(movies) {
    let sumMoviesRates = movies.reduce((totalRates, individualRate) => {
        return totalRates + parseFloat(individualRate.rate)
    }, 0);
    let averageMoviesRate = sumMoviesRates / movies.length;
    return parseFloat(averageMoviesRate.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    let dramaRates = array.filter((movie) => {
        return movie.genre.indexOf('Drama') !== -1;
    })
    console.log(dramaRates);
    if (dramaRates.length === 0) {
        return 0;
    } else {
        let sumDramaRates = dramaRates.reduce((totalRates, individualRate) => {
            if (individualRate.rate !== '') {
                return totalRates + parseFloat(individualRate.rate);
            } else {
                return totalRates;
            }
        }, 0);
        let averageDramaRates = sumDramaRates / dramaRates.length;
        console.log(averageDramaRates);
        console.log(parseFloat(averageDramaRates.toFixed(2)));
        return parseFloat(averageDramaRates.toFixed(2));
    }
}

dramaMoviesRate(movies);

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByDuration(array) {
    const reorderMoviesByDuration = JSON.parse(JSON.stringify(array));
    let moviesAscendingDuration = reorderMoviesByDuration.sort((a, b) => {
        if (a.duration.localeCompare(b.duration) !== 0) {
            return a.duration.localeCompare(b.duration);
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    console.log(moviesAscendingDuration);
    return moviesAscendingDuration;
}

orderByDuration(movies);

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
    if (array.length === 0) {
        return 0;
    }
    let spielbergDramaMovies = array.filter(movie => {
        return movie.genre.indexOf('Drama') !== -1 && movie.director.indexOf('Steven Spielberg') !== -1;
    })
    let sumSpielbergDramaMovies = null;
    if (spielbergDramaMovies.length !== 0) {
        sumSpielbergDramaMovies = spielbergDramaMovies.length;
    } else {
        sumSpielbergDramaMovies = 0;
    }
    console.log(sumSpielbergDramaMovies);
    return sumSpielbergDramaMovies;
}

howManyMovies(movies);

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const reorderMoviesByAlphabet = JSON.parse(JSON.stringify(array));
    if (reorderMoviesByAlphabet.length >= 20) {
        let moviesAlphabeticOrder = reorderMoviesByAlphabet.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        let top20Movies = moviesAlphabeticOrder.slice(0, 20).map(movie => movie.title);
        console.log(top20Movies);
        return top20Movies;
    } else {
        let moviesAlphabeticOrder = reorderMoviesByAlphabet.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        let top20Movies = moviesAlphabeticOrder.slice(0, moviesAlphabeticOrder.length).map(movie => movie.title);
        console.log(top20Movies);
        return top20Movies;
    }
}

orderAlphabetically(movies);

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {
    const finalDurationArray = JSON.parse(JSON.stringify(array));
    //let filterByDuration = moviesTest.map(movie => movie.duration);
    let numberofHours = 0;
    let numberofMinutes = '';
    let convertMinutes;
    let movieDurationInMinutes;
    for (let majorCounter = 0; majorCounter < finalDurationArray.length; majorCounter += 1) {
        convertMinutes = finalDurationArray[majorCounter].duration;
        for (let counter = 0; counter < convertMinutes.length; counter += 1) {
            if (counter === 0) {
                numberofHours = Number(convertMinutes[counter]);
            } else {
                if (convertMinutes[counter] >= 0) {
                    numberofMinutes += convertMinutes[counter];
                }
            }
            movieDurationInMinutes = numberofHours * 60 + Number(numberofMinutes);
            if (movieDurationInMinutes !== NaN) {
                finalDurationArray[majorCounter].duration = movieDurationInMinutes;
            } else {
                movieDurationInMinutes = Number(numberofMinutes);
                finalDurationArray[majorCounter].duration = movieDurationInMinutes;
            }
        }
    }
    return finalDurationArray;
}

turnHoursToMinutes(movies);

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(array) {
    if (array.length === 0) {
        return null;
    }
    let sumofYearRates = 0;
    const moviesYears = [];
    array.forEach((movie, index) => {
        if (index === 0) {
            moviesYears.push(movie.year);
        } else if (moviesYears.indexOf(movie.year) === -1) {
            moviesYears.push(movie.year);
        }
    });
    moviesYears.sort((a, b) => {
        return a - b;
    })
    const moviesRates = [];
    moviesYears.forEach((year, index) => {
        if (year[index] === array[index].year) {
            sumofYearRates = array[index].rate;
            moviesRates.push(sumofYearRates);
        }
    });

    console.log(moviesYears);
    console.log(moviesRates);
    return moviesYears && moviesRates;
}


bestYearAvg(movies);