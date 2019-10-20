/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(movies) {
    let ratesTotal = movies.reduce(function (accumulator, currentValue) {
        if (!currentValue.rate) {
            return accumulator + 0;
        }
        return accumulator + parseInt(currentValue.rate, 10);
    }, 0);
    let ratesAv = ratesTotal / movies.length;
    return Math.round(ratesAv * 100) / 100;
}

// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movies) {
    dramaMovies = movies.filter( // Need to make movies a new array of JUST drama objects/movies
        function (movie) {
            if (movie.genre.indexOf("Drama") !== -1) {
                return true;
            }
        }
    );
    if (!dramaMovies.length) return 0;
    return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByYear(movies) {
    sortedMovies = movies.sort(
        function (a, b) {
            if (a.year !== b.year) {
                return a.year - b.year;
            } else {
                return a.title.localeCompare(b.title);
            }
        }
    );
    return sortedMovies;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct (that are dramas)
function howManyMovies(movies) {
    let stevenMovies = movies.filter(function (movie) {
        return ((movie.director === "Steven Spielberg") && (movie.genre.includes("Drama")))
    })
    return stevenMovies.length;
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    sortedTitles = movies.sort(
        function (a, b) {
            return a.title.localeCompare(b.title);
        }
    )
    let sortedTwenty = sortedTitles.slice(0, 20);
    let finalTwenty = [];
    sortedTwenty.forEach(
        function (titles) {
            finalTwenty.push(titles.title)
        }
    )
    return finalTwenty;
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
    movieMins = movies.map(
        function (movie) {
            let hrIndex = movie.duration.search("h");
            let hrsStr = "";
            let minsStr = "";
            if (hrIndex >= 0) {
                hrsStr = movie.duration.slice(hrIndex - 1, hrIndex);
            }
            let minIndex = movie.duration.search("m");
            if (minIndex >= 0) {
                minsStr = movie.duration.slice(minIndex - 2, minIndex);
            }
            let hr = Number(hrsStr);
            let min = Number(minsStr);
            let movieDurMins = hr * 60 + min;
            return {
                title: movie.title,
                year: movie.year,
                director: movie.director,
                duration: movieDurMins,
                genre: movie.genre,
                rate: movie.rate
            };
        }
    )
    return movieMins;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies) {
    if (movies.length === 0) {
        return null;
    }
    let bestRatedYear = 0;
    let bestRating = 0;
    for (let i = 1800; i < 2020; i++) { // Looping between expected years of the movies. Could also implement an automation function to search the oldest year of all movies and make i equal to that.
        iMovies = movies.filter( // Need to make a new array which will hold all the movies of the (i) year
            function (movie) {
                if (movie.year.search(i) !== -1) {
                    return true;
                }
            }
        );
        let iMoviesRatingSum = iMovies.reduce( // Reduce method to get the total sum of all the (i) year ratings
            function (accumulator, currentMovie) {
                return accumulator + Number(currentMovie.rate);
            }, 0
        );
        iMoviesRatingAv = iMoviesRatingSum / iMovies.length; // Simply taking the total sum of (i) year ratings and turning it into an average
        if (iMoviesRatingAv > bestRating) { // This is what allows us to iteratively store the Best Year and its Rating in the declared variables
            bestRating = iMoviesRatingAv;
            bestRatedYear = i;
        }
    }

    // For troubleshooting my code in console...
    // console.log("The best year was " + bestRatedYear + " with an average rate of " + bestRating)

    return "The best year was " + bestRatedYear + " with an average rate of " + bestRating;
}