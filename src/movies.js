// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movieArr) {
    const allDirectors =
        movieArr
            .map(elm => {
        // have to return it so it show values of director, otherwise it would just return an array of undefined values
        return elm.director;
            })
        //     .filter(elm => {
        // return elm.director = true;
        //     })
    
    return allDirectors;
}



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArr) {
    const StevenDramaMovies = movieArr.filter(elm => {
        // first select steven spielberg, then inside the array of genre the word drama
        // since its an array that returns, use length to see through each array
        if (elm.director === 'Steven Spielberg' && elm.genre.includes('Drama')) {
            return true;
        }
    }).length;
    return StevenDramaMovies;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArr) {
    if (movieArr.length === 0) {
        return 0;
    }

    // const movieNotRating = movieArr.map(elm => {
    //     if (!elm.rate) {
    //         return elm.rate = 0;
    //     } else {
    //         return elm.rate;
    //     }
    // });

    const rates = movieArr
        .reduce((acc, elm) => {
        return acc + elm.rate;
        }, 0)
        // .map(elm => {
        //     if (!elm.rate) {
        //         return elm.rate = 0;
        //     } else {
        //         return elm.rate;
        //     }
        // })

    // return parseFloat((rates / movieArr.length).toFixed(2));
    return Math.round((rates / movieArr.length) * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArr) {

    const dramaMovies = movieArr.filter(elm => {
        return elm.genre.includes('Drama');
    })
    const dramaRates = dramaMovies.reduce((acc, elm) => {
        return acc + elm.rate;
    }, 0)
    return parseFloat((dramaRates / dramaMovies.length).toFixed(2));;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArr) {
    const moviesOrderByYear = [...movieArr];
    const moviesOrderByYearCopy = moviesOrderByYear.sort((a, b) => {
        if (a.year !== b.year) {
            return a.year - b.year;
        } else if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        }
    })
    return moviesOrderByYearCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArr) {
    const orderAlpha = [...movieArr];
    const orderAlphaCopy = orderAlpha.sort((a, b) => {
        if (a.title > b.title) {
            return 1;
        } else if (a.title < b.title) {
            return -1;
        }
    });

    const titles = orderAlphaCopy.map(elm => {
            return elm.title;
    })

    return titles.slice(0, 20);
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// function turnHoursToMinutes(movieArr) {
//     const hourToMinutes = [...movieArr];
//     const hourToMinutesCopy = hourToMinutes.map(elm => {
//         let hours = (num / 60);

//     })
// }

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
