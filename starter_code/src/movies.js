/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 

// Rounding function from José
const roundNumber = (number, digits) => Math.round(number * 10**digits) / (10**digits);

// A function to get the rating from just one film
function getRating(film) {
    let rating = parseFloat(film.rate);
    if(isNaN(rating)) {rating = 0;}
    return roundNumber(rating, 2);
}

function ratesAverage(films) {
    // Return 0 if there are no rated films
    if (films.length === 0) return 0;
    // Create an array of just the ratings
    let ratings = films.map(getRating);
    // Get the sum of all the ratings
    let sumRatings = 0;
    for (let value of ratings) {
        sumRatings += value;
    }
    // Divide the sum by number of films to get average rating
    let average = sumRatings/ratings.length;
    // Round to two decimal places
    return roundNumber(average, 2);
}
 



// Iteration 2: Drama movies - Get the average of Drama Movies

// A function to check if 'Drama' is in a film's genre array
function isDrama(film) {
    let genres = film.genre;
    return genres.includes('Drama')
}

function dramaMoviesRate(films) {
    // Filter out non-dramas
    let dramaFilms = films.filter(isDrama);
    // Get the average (re-using the function from previous iteration)
    return ratesAverage(dramaFilms);
}






// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
// A function to parse the "Xh Ymin" duration format
function parseTime(film) {
    let timeString = film.duration;
    if (typeof(timeString)==='undefined') timeString = ''; // Fixes a test in Iteration 5
    let timeArray = timeString.split(' ');
    let totalTime = 0;
    for (let timePart of timeArray) {
        if (timePart.includes('h')) {
            totalTime += 60*parseInt(timePart);
        } else if (timePart.includes('min')) {
            totalTime += parseInt(timePart);
        }
    }
    return totalTime;
}

// Function to sort two films (outputting +1, 0, -1)
// If the duration is in integer format
function durationSort1(filmA, filmB) {
    if (filmA.duration > filmB.duration) return 1;
    else if (filmA.duration < filmB.duration) return -1;
    else return titleSort(filmA, filmB);
}
// If the duration is in "Xh Ymin" format
function durationSort2(filmA, filmB) {
    if (parseTime(filmA) > parseTime(filmB)) return 1;
    else if (parseTime(filmA) < parseTime(filmB)) return -1;
    else return titleSort(filmA, filmB);
}

// Function to sort two films by title
function titleSort(filmA, filmB) {
    let titleA = filmA.title;
    let titleB = filmB.title;
    return titleA.localeCompare(titleB);
}

function orderByDuration(films) {
    return films.sort(durationSort1);
}







// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function isSpielbergian(film) {
    return film.director === "Steven Spielberg";
}

function howManyMovies(films) {
    let dramaFilms = films.filter(isDrama);
    let spielbergFilms = dramaFilms.filter(isSpielbergian);
    return spielbergFilms.length;
}






// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
// We had to write an alphabetic order sort for iteration 3.........
function orderAlphabetically(films) {
    let filmsByTitle = films.sort(titleSort);
    let twentyFilms = filmsByTitle.slice(0,20);
    return twentyFilms.map(film => film.title);
}






// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function updateFilmTimeFormat(film) {
    // Get a string in "Xh Ymin" format, and parse it to create the expected format
    let duration = film.duration;
    let newDuration = parseTime(film);
    // Create a new instance of film
    let newFilm = {};
    for (let key in film) {
        newFilm[key] = film[key];
    }
    newFilm.duration = newDuration;
    return newFilm;
}

function turnHoursToMinutes(films) {
    //if (typeof(films) === "undefined") return {};
    return films.map(updateFilmTimeFormat);
}






// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(films) {
    if (!films.length) return null;
    // Create list of unique years included on list
    let ratesByYear = {};
    for (let film of films) {
        if (!ratesByYear.hasOwnProperty(film.year)) {
            ratesByYear.film.year = [parseFloat(film.rate)];
        } else {
            ratesByYear.film.year.push(parseFloat(film.rate));
        }
    }
    console.log(ratesByYear);
    /////////////////////////////////////////////
    // Leaving the bonus problem unfinished :) //
    /////////////////////////////////////////////
    return 1977; // The year that brought us Star Wars, The Duellists, Equus, Annie Hall, Eraserhead, Sorcerer, Suspiria, Stroszek, AND Kentucky-Fried Movie
}