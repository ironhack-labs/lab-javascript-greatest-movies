// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(moviesArr) {
    let directorList = moviesArr.map(oneMovie => oneMovie.director);
    return directorList;
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function unifiedDirectors(moviesArr) {
    directorsList = getAllDirectors(moviesArr);
    let directorsArray = [];
    if (moviesArr.length === 0){
      return null;
    }
    directorsList.forEach (element => {
      if (directorsArray.indexOf(element) === -1) {
        directorsArray.push(element);
      }
    })
    return directorsArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movieArr) {
    let movieDirector = movieArr.filter(function (oneMovie) {
        return oneMovie.director === `Steven Spielberg`;
    });
    let movieGenre = movieDirector.filter(function (oneMovie) {
        return oneMovie.genre.includes(`Drama`);
    })
    let movieNumber = movieGenre.length;
    if (movieArr.length > 0) {
        return movieNumber;
    } else {
        return 0;
    }
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function roundNumber(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function ratesAverage(movieArr) {
    let movieTotal = movieArr.reduce(function (total, movie) {
        if (movie.rate) {
            return total + movie.rate;
        } else {
            return total;
        }
    }, 0);
    let movieAverage = movieTotal / movieArr.length;
    if (movieArr.length > 0) {
        return roundNumber(movieAverage);
    } else {
        return 0;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArr) {
    let dramaGenre = movieArr.filter(function (oneMovie) {
        return oneMovie.genre.includes(`Drama`);
    })
    if (dramaGenre.length === 0 || movieArr.length < 0) {
        return 0;
    }
    let dramaTotal = dramaGenre.reduce(function (total, movie) {
        return total + movie.rate;
    }, 0)
    let dramaAverage = dramaTotal / dramaGenre.length;
    return roundNumber(dramaAverage);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArr) {
    let newSortedYears = [...movieArr];
    newSortedYears.sort(function (el1, el2) {
        if (el1.year < el2.year) {
            return -1;
        } else if (el1.year > el2.year) {
            return 1;
        } else {
            if (el1.title < el2.title) {
                return -1;
            } else if (el1.title > el2.title) {
                return 1;
            }
        }
        return 0;
    });
    return newSortedYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieArr) {
    let newSortedAlphabetical = [...movieArr];
    newSortedAlphabetical.sort(function (el1, el2) {
        if (el1.title < el2.title) {
            return -1;
        } else if (el1.title > el2.title) {
            return 1;
        }
        return 0;
    });
    newSortedAlphabetical = newSortedAlphabetical.slice(0, 20);
    newSortedAlphabetical = newSortedAlphabetical.reduce(function(moviesArr, movie) {
        moviesArr.push(movie.title);
        return moviesArr;
    }, []);

    return newSortedAlphabetical;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
