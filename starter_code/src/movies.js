/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

    arr.sort(function (film1, film2) { // Two given objects inside the array
        if (film1.year > film2.year) return 1;
        return -1;
    })

    return arr.flat(); // ¿por qué?
}

orderByYear(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {

    arr = arr.filter(film => film.director === "Steven Spielberg" && film.genre.includes('Drama'));
    return arr.length;
}

howManyMovies(movies);


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {

    let newArr = [];

    arr.forEach(film => {
        newArr.push(film.title)
    })

    newArr.sort((title1, title2) => {
        return title1.localeCompare(title2);
    })

    newArr = [...newArr.slice(0, 20)];

    console.log(newArr)
    return newArr;
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
// Create a ratesAverage() function that receives an array as a parameter and solves the challenge and return the average rate of all movies

// The rate must be returned rounded to 2 decimals!
// 💡 Maybe you want to "reduce" the data to a single value. 😉

function ratesAverage(arr) {

    let ratesArr = [];

    arr.forEach(film => {
        if(typeof film.rate === 'number'){
            ratesArr.push(film.rate);

        } else{
            ratesArr.push(0);

        }
    })

    if (ratesArr.length === 0) {
        return 0;
    }

    let avg = ratesArr.reduce((ac, rate) => ac + rate) / ratesArr.length;
    avg = parseFloat(avg.toFixed(2));

    console.log(avg)
    return avg;
}

ratesAverage(movies);


// Iteration 5: Drama movies - Get the average of Drama Movies
// Drama is the genre that repeats the most on our array. Apparently, people love drama! 
// Create a dramaMoviesRate() function that receives an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.
// Again, rounded to 2 decimals!

function dramaMoviesRate(arr) {

    let dramaRates = [];

    let dramaFilms = arr.filter(film => film.genre.includes('Drama'))

    if (dramaFilms.length === 0) {
        return 0;
    }

    dramaFilms.forEach(dramaFilm => {
        dramaRates.push(dramaFilm.rate);
    })

    let avg = dramaRates.reduce((ac, cu) => ac + cu) / dramaFilms.length;
    avg = parseFloat(avg.toFixed(2));

    console.log(avg);
    return avg;
}

dramaMoviesRate(movies);


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
// Create a turnHoursToMinutes() function that receives an array as parameter, and with some magic implemented by you - replaces the duration info of each of the movies for its equivalent in minutes. For example:

function turnHoursToMinutes(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));

    newArr.map(film => {
        let time = film.duration;

        time = time.split(" ");
        
        if (time.length < 2) {
            if(time[0].includes("min")){
                time[0] = time[0].replace("min", "");
                time[0] = parseInt(time[0]);

            } else {
                time[0] = time[0].replace("h", "");
                time[0] = parseInt(time[0])*60;
            }

        } else {
            time[0] = time[0].replace("h", "");
            time[0] = parseInt(time[0])*60;
            time[1] = time[1].replace("min", "");
            time[1] = parseInt(time[1]);
        }        

        time = time.reduce(function(ac, cu) {
            return ac + cu;
        },0)

        film.duration = time;
        return film
    })

    return newArr;
}

let arr = [
    { duration: "2h" },
    { duration: "54min" },
    { duration: "2h 30min" },
    { duration: "5h 41min" }
]

turnHoursToMinutes(arr);


// BONUS Iteration: Best yearly rate average - Best yearly rate average
