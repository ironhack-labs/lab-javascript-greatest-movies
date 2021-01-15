// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr) {
    return moviesArr.map(function(movie) {
        return movie.director;
    });
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
// iterate over the array, if the element's current position is not the same as the indexOf()
// which means that the element has occurred before.
function uniqueDirectorList(moviesArr) {
    let allDirectors = getAllDirectors(moviesArr);
    return allDirectors.filter(function(director, pos) {
        return allDirectors.indexOf(director) == pos;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArr) {
    return moviesArr.filter(function(movie) {
        if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
            return true;
        }
    }).length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(moviesArr) {
    if (moviesArr.length === 0) {
        return 0;
    }
    let avgRate = moviesArr.reduce(function(sumRate, movie) {
        let rate = 0;
        if (movie.rate) {
            rate = movie.rate;
        }
        return sumRate + rate;
    }, 0) / moviesArr.length;
    return Math.round(avgRate * 100)/100; // can't use toFixed here, because (1/3).toFixed(2) will return a string
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(moviesArr) {
    return ratesAverage(moviesArr.filter(function(movie) { return movie.genre.includes("Drama")}));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArr) {
    if (moviesArr.length === 1) {
        return moviesArr;
    }
    let copiedMoviesArr = moviesArr.slice();
    copiedMoviesArr.sort(function(movie1, movie2) {
        if (movie1.year > movie2.year) {
            return 1;
        } else if (movie1.year < movie2.year) {
            return -1;
        } else {
            return movie1.title.localeCompare(movie2.title);
        }
    })
    return copiedMoviesArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArr) {
    let listOfMoviesName = moviesArr.map(function(movie) { return movie.title });

    return listOfMoviesName.sort(function(name1, name2) {
        return name1.localeCompare(name2);
    }).slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArr) {
    let copiedMoviesArr = JSON.parse(JSON.stringify(moviesArr));
    let formattedMovies = copiedMoviesArr.map(function(movie) {
        if (!movie.duration) {
            return movie;
        }
        let timeString = movie.duration;
        let extractedNumberList = timeString.replace(/[\D]/g,' ').split(' ').filter(Boolean);
        if (extractedNumberList.length === 1) {
            // no movies that long hour duration, no movies that short duration of minutes
            if (extractedNumberList[0] > 10) {
                movie.duration = Number(extractedNumberList[0]);
            } else {
                movie.duration = Number(extractedNumberList[0]) * 60;
            }
        } else {
            movie.duration = Number(extractedNumberList[0]) * 60 + Number(extractedNumberList[1]);
        }
        
        return movie;
    })
    return formattedMovies
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArr) {
    if (moviesArr.length === 0) {
        return null;
    }
    let copiedMoviesArr = JSON.parse(JSON.stringify(moviesArr));
    let listOfYears = [];
    for (let movie of copiedMoviesArr) {
        if (!listOfYears.includes(movie.year)) {
            listOfYears.push(movie.year);
        }
    }
    // reverse the listOfYears
    listOfYears.reverse();
    let bestYear = copiedMoviesArr[0].year;
    let highestAvgRate = 0;
    for (let year of listOfYears) {
        let moviesInTheYear = copiedMoviesArr.filter(function(movie) {return movie.year === year});
        let avgRate = ratesAverage(moviesInTheYear);
        if (avgRate > highestAvgRate) {
            bestYear = year;
            highestAvgRate = avgRate;
        }

    }
    return `The best year was ${bestYear} with an average rate of ${highestAvgRate}`;
    
}