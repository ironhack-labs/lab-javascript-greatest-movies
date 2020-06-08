// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {

    let directors = arr.map(elm => elm.director)

    return directors
}

// Iteration 2

function howManyMovies(movies) {

    let spielbergDramaMovies = movies.filter(elm => elm.director === "Steven Spielberg" && elm.genre.includes("Drama"))

    return spielbergDramaMovies.length;

}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

//******** Esta ha sido mi primera función pero no he conseguido que Jasmin la pillara entera, así que he utilizado la de una compañera (Laura Martinez) *******//

// function ratesAverage(arr) {

//     if (movies.length === 0) {
//         return 0
//     } else {


//         let totalReviews = arr.length

//         let sumReviews = arr.reduce((acc, elm) => acc + elm["rate"], 0)

//         let total = sumReviews / totalReviews

//         let rounded = Math.round(total * 100) / 100

//         return rounded
//     }

// }

function ratesAverage(movies) {
    let average = movies.reduce((acc, elm) => {
        if (elm.rate) {
            return elm.rate + acc
        } else {
            return acc
        }
    }, 0)
    if (movies.length === 0) {
        return 0
    }
    return Math.round((average / movies.length) * 100) / 100

}


// Iteration 4: Drama movies - Get the average of Drama Movies


function dramaMoviesRate(movies) {

    let dramaFilms = movies.filter(elm => elm.genre.includes("Drama"))

    let average = dramaFilms.reduce((acc, elm) => {
        if (elm.rate) {
            return elm.rate + acc
        } else {
            return acc
        }
    }, 0)
    if (dramaFilms.length === 0) {
        return 0
    }
    return Math.round((average / dramaFilms.length) * 100) / 100

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {

    let mappedArr = arr.map(elm => elm)

    mappedArr.sort(function (a, b) {
        if (a.year === b.year) {
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;
    });
    return mappedArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let allTitles = movies.map(function (elm) {
        return elm.title;
    });
    let top20 = allTitles.sort(function (a, b) {
        return a.localeCompare(b);
    });
    return top20.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average