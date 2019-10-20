/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
    const avg =
        arr.reduce(function (accumulator, movie) {
            return accumulator + parseFloat(movie.rate);
        }, 0) / arr.length;
    return parseFloat(avg.toFixed(2));
}

// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
    const dramaFilms = arr.filter(function (movie) {
        if (movie.genre.includes("Drama")) {
            return true;
        }
    });

    if (dramaFilms.length === 0) {
        return 0;
    }

    const dramaAvg =
        dramaFilms.reduce(function (total, movie) {
            return total + parseFloat(movie.rate || 0);
        }, 0) / dramaFilms.length;
    return parseFloat(dramaAvg.toFixed(2));
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)

function orderByYear(arr) {
    arr.sort(function (movie, movie2) {
        if (movie.year > movie2.year) {
            return 1;
        } else return -1;
    });
    return arr;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    const steven = arr.filter(function (movie) {
        if (
            movie.director === "Steven Spielberg" &&
            movie.genre.includes("Drama")
        ) {
            return true;
        }
    });
    return steven.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
    const alph = arr.sort(function (movie, movie2) {
        // return movie2.title - movie.title;  WHY DOESN'T THIS ONE WORK??
        if (movie.title < movie2.title) {
            return -1;
        } else return 1;
    });
    alphaRay = alph.map(function (movie, index) {
        return movie.title;
    });
    return alphaRay.slice(0, 20);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
const timeArray = [];

function turnHoursToMinutes(arr) {
    let finalCount;
    arr.forEach(function (movie) {

        let hour = parseInt(movie.duration.slice('h'));

        let min = parseInt(movie.duration.slice(3) || 0);

        finalCount = hour * 60 + min;
        return finalCount;
    });
    const newArr = arr.map(function (movie) {
        return {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: finalCount,
            genre: movie.genre,
            rate: movie.rate
        }
    });

    return newArr;
}


// BONUS Iteration: Best yearly rate average - Best yearly rate average

// function bestYearAverage(arr) {

//     for (let year=1900; year<2020; year++)

//                 let sum = 0;
//                 let ultimateAvg = {};
//                 let biggest = 0;

//                let yearArr = arr.filter(function (movie){
//                     if (movie.year == year)
//                     return true;
//                     });
//                   //  console.log(yearArr); 

//                     yearArr.forEach(function (movie) {
//                         sum += movie.rate;
//                         let averageRate = sum / yearArr.length;
//                         ultimateAvg.push({
//                             movie: movie.year,
//                             averageRate: averageRate
//                         })
//                     });

//                 ultimateAvg.forEach(function (movie) {
//                     if (movie.averageRate > biggest) {
//                         biggest = averageRate;
//                     }
//                     return biggest;
//                 })
//                 ultimateAvg.filter(function (movie) {
//                     if (movie.averageRate == biggest) {
//                         return true;
//                     }
//                 });
//             }