// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(array) {

    const directors = array.map(movie => movie.director);
    return directors;
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. 
//          How could you "clean" a bit this array and make it unified (without duplicates)?

function getUniqueDirectors(array) {

    const uniqueDirectors = array.map(movie => movie.director);
    let uniqueDirectorsArray = uniqueDirectors.filter((director, index) => uniqueDirectors.indexOf(director) === index)
    return uniqueDirectors;

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {

    const directorToSearch = 'Steven Spielberg'
    const genreToSearch = 'Drama'

    const spielbergMovies = array.filter(movie => {
        if (movie.director === directorToSearch && movie.genre.includes(genreToSearch))
            return movie
    })

    return spielbergMovies.length;
}


// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array) {

    const movieAvg = array.reduce((total, movie) => {
        return movie.rate ? total + movie.rate : total;
    }, 0)

    let avgCalc = !array.length ? 0 : movieAvg / array.length

    return Math.round((avgCalc * 100)) / 100;
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array) {
    const genreToSearch = 'Drama'
    const dramaMovies = array.filter(movie => movie.genre.includes(genreToSearch));
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array) {

    const newArray = [...array];

    const newArray2 = newArray.sort((a, b) => {
        return a.year === b.year ? a.title.localeCompare(b.title) : a.year - b.year;
    })

    return newArray2;

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
    const titleArray = array.map(movie => movie.title).sort((a, b) => a.localeCompare(b));
    return titleArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array) {

    return array.map(movie => {

        let hourSearchChar = "h"
        let minSearchChar = "min"
        let arrayHoursMin = movie.duration.split(" ");
        let duration = 0;

        if (arrayHoursMin.length == 2) {
            let hours = (Number(arrayHoursMin[0].replace(hourSearchChar, "")) * 60);
            let minutes = (Number(arrayHoursMin[1].replace(minSearchChar, "")));
            duration = Number(hours + minutes);
        } else if (arrayHoursMin[0].indexOf(hourSearchChar) != -1) {
            duration = (Number(arrayHoursMin[0].replace(hourSearchChar, "")) * 60);
        } else {
            duration = Number(arrayHoursMin[0].replace(minSearchChar, ""));
        }
        let newMovie = {...movie }
        newMovie.duration = duration;
        return newMovie

    });
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average