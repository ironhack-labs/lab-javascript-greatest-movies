// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
    const directorsArr = moviesArr.map(function (movie) {
        return movie.director;
    })
    //Filter duplicates(Bonus)
    return directorsArr.filter(function (director, i) {
        return directorsArr.indexOf(director) === i
    })
}


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

//filter duplicated directors using set => [...new Set(directorsArr)]

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(moviesArr) {
    const stevenSpielbergDrama = moviesArr.filter(function (movie) {
        if (movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
            return true
    })
    return stevenSpielbergDrama.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(moviesArr) {
    if (moviesArr.length === 0) {
        return 0;
    }

    let ratesSum = moviesArr.reduce(function (total, movie) {
        //if movie.rate is undefined then it uses 0
        return total + (movie.rate || 0);

    }, 0);
    return Math.round((ratesSum / moviesArr.length) * 100) / 100;
    // other option to change string into a number 
    //Number(result.tofixed(2)) 
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(moviesArr) {
    const dramaMovies = moviesArr.filter(function (movie) {
        if (movie.genre.includes('Drama'))
            return true
    })
    return ratesAverage(dramaMovies);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArr) {
    //use slice to create new array
    const sortedByYear = moviesArr.slice().sort(function (a, b) {
        if (a.year != b.year) {
            return a.year - b.year;
        } else {
            return a.title.localeCompare(b.title);
        }
    });
    return sortedByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// first option gets not only the titles but the whole movie
// function orderAlphabetically(moviesArr) {

//     let newArray = [...moviesArr];

//     const sortedByTitle = newArray.sort(function (a, b) {
//         if (a.title > b.title) {
//             return 1;
//         } else {
//             return -1
//         }
//     })

//     const firstTwentyMovies = sortedByTitle.filter(function (movie) {
//         if (sortedByTitle.indexOf(movie) < 20) {
//             return true
//         }
//     })

//     const firstTwentyMoviesTitle = firstTwentyMovies.map(function (movie) {
//         return movie.title
//     })
//     return firstTwentyMoviesTitle
// }

function orderAlphabetically(moviesArr) {
    const ordered = movies.map(function (movie) {
        return movie.title
    }).sort(function (a, b) {
        return a.localeCompare(b);
    }).slice(0, 20);

    return ordered;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
    return movies.map(function (movie) {
        let convertedDuration = 0;
        if (movie.duration.includes('h')) {
            convertedDuration += Number(movie.duration.slice(0, movie.duration.indexOf('h'))) * 60;
        }
        if (movie.duration.includes('min')) {
            convertedDuration += Number(movie.duration.slice(movie.duration.indexOf(' ') + 1, movie.duration.indexOf('m')));
        }
        return { ...movie, duration: convertedDuration };
    });
}


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

const bestYearAvg = ar => {
    if (!ar.length) return null;
    const averageRatingsPerYear = [...new Set(ar.map(function (movie) {
        return movie.year
    }))].map(function (year) {
        return {
            year: year,
            rate: ratesAverage(ar.filter(function (movie) {
                return movie.year === year
            }))
        }
    });

    const best = averageRatingsPerYear.sort(function (a, b) {
        if (a.rate === b.rate) {
            return a.year - b.year
        }
        return b.rate - a.rate;
    })[0];
    return `The best year was ${best.year} with an average rate of ${best.rate}`;
}