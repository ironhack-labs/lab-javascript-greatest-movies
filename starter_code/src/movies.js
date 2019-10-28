/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

    arr.sort(function (film1, film2) { 
        if (film1.year > film2.year) return 1;
        return -1;
    })

    return [...arr];
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr) {

    return arr.filter(film => film.director === "Steven Spielberg" && film.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    let newArr = [...arr];

    return newArr.map(film => film.title).sort((title1, title2) => {
        return title1.localeCompare(title2);
    }).slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
    let ratesArr = [...arr];
    if (ratesArr.length === 0) {
        return 0;
    }

    ratesArr = arr.map(film => {
        return typeof film.rate === 'number' ?  film.rate : 0;
    })
  
    let avg = ratesArr.reduce((ac, rate) => ac + rate) / ratesArr.length;
    return avg = parseFloat(avg.toFixed(2));
}

ratesAverage(movies);


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    let dramaRates = [];

    let dramaFilms = arr.filter(film => film.genre.includes('Drama'))

    if (dramaFilms.length === 0) {
        return 0;
    }

    dramaRates = dramaFilms.map(dramaFilm => dramaFilm.rate);

    let avg = dramaRates.reduce((ac, cu) => ac + cu) / dramaFilms.length;
    return avg = parseFloat(avg.toFixed(2));
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

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
// Create bestYearAvg() function that receives an array of movies and gives us an answer which year was the best year for cinema and what was its average rate.

function bestYearAvg(arr) {
    
    let newArr = JSON.parse(JSON.stringify(arr));
    if (newArr.length === 0){
        return null;
    }

    let years = newArr.map(film => film.year);

    let avgEveryYear = years.map(year => {
        let moviesByYear = newArr.filter(film => film.year === year);

        return{
            year : year,
            avg : ratesAverage(moviesByYear)
        }
    })

    let avgEveryYearSorted = avgEveryYear.sort((year1,year2) => {
        if ((year1.avg > year2.avg ) || (year1.year < year2.year)){
            return -1;
        }
        return 1;
    })

    let bestYear =  avgEveryYearSorted[0].year;
    let highestAvg = avgEveryYearSorted[0].avg;

    return `The best year was ${bestYear} with an average rate of ${highestAvg}`;
}

bestYearAvg(movies);