/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 

function ratesAverage(movieList) {
    var totalRates = movieList.reduce ( function (acc, oneRate) {
        return acc + Number(oneRate.rate);
    }, 0);

    return Number((totalRates / movieList.length).toFixed(2));

};

// ______________________________________________________

function dramaMoviesRate(array) {
    var filtered = array.filter( function (oneMovie) {
        return oneMovie.genre.includes('Drama');
    });

    if (filtered.length === 0) {
        return undefined;
    }
    else {
        return ratesAverage(filtered);
    }
};

// ______________________________________________________

function turnHoursToMinutes (array) {
    var newArray = [];
    array.forEach ( function(oneMovie) {
        var durationArray = oneMovie.duration.split(" ");

        if (durationArray.length === 1 && durationArray[0].includes("min")) {
            var hr = 0;
            var min = parseInt(durationArray[0]);
        }
        else {
            var hr = parseInt(durationArray[0]);
            var min = parseInt(durationArray[1]);
        }

        if (isNaN (min)) {
            min = 0;
        }

        var oneDuration = hr*60 + min;
        newArray.push ({
            title : oneMovie.title,
            year : oneMovie.year,
            director : oneMovie.director,
            duration : oneDuration,
            genre : oneMovie.genre,
            rate : oneMovie.rate,
        });
    });
    return newArray;
};

// ______________________________________________________


function orderByDuration (array) {
    
    var durationArray = turnHoursToMinutes(array);
    durationArray.forEach (function (durationObj) {
        durationObj.duration.sort( function (argA, argB) {
            if (argA < argB) {
                return -1;
            }
            else {
                return 1;
            }
        });
    });    
    return durationArray;
};
























// Drama is the genre that repeats the most on our array, apparently, people love drama! 👀

// Create a dramaMoviesRate that receive an array as a parameter to get the average rate of all drama movies! 
// Let's see if it is better than the general average.

// Again, rounded to 2 decimals!

// Print on the console the result!










// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
