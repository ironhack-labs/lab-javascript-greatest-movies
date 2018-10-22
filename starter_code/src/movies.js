/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movieArray){
    var newMovieArray = movieArray.map(function(movie){
        var duration = movie.duration;
        var hours = (duration.indexOf('h')>=0) ? duration.slice(duration.indexOf('h')-1, duration.indexOf('h')) : 0;
        var minutes = (duration.indexOf('min')>=0) ? duration.slice(duration.indexOf('min')-2, duration.indexOf('min')) : 0;
        var runtime = Number(minutes) + Number(hours)*60;
        // Create and return new object instead of using original object reference (that would lead to overwriting of original objects in the input array)
        return {...movie, duration: runtime}; // spread operator to get the contents of the original object
    });
    return newMovieArray;
}

procMovies = turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray) {
    if (moviesArray.length===0){
        return undefined;
    };
    return Number((moviesArray.reduce(function(sum, el){
        return sum+=Number(el.rate);
    }, 0)/moviesArray.length).toFixed(2));
}

var averageMovies = ratesAverage(procMovies);

// Get the average of Drama Movies
function dramaMoviesRate(array){
    var dramaMovies = array.filter((el) => el.genre.indexOf('Drama') >= 0);
    return ratesAverage(dramaMovies);
}
var averageDramaMovies = dramaMoviesRate(procMovies);

// Order by year, in growing order
function orderByDuration(array){
    return array.sort(function(a, b) {
        var compare = Number(a.duration) - Number(b.duration);
        return (compare!==0) ? compare : ((a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : -1);
    });
}
var sortedDurationMovies = orderByDuration(procMovies);

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    var dramaMovies = array.filter((el) => el.genre.indexOf('Drama') >= 0);
    if (dramaMovies.length === 0) {
        return undefined;
    }
    return "Steven Spielberg directed " +
        (dramaMovies.filter(el => el.director==='Steven Spielberg').length) +
        " drama movies!";
}
var StevenSpielbergMovies = howManyMovies(procMovies);

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    return array.sort((a, b) => ((a.title.toLowerCase() > b.title.toLowerCase())) ? 1 : -1)
        .splice(0,20).map(el => el.title);
};
var sortedTitleMovies = orderAlphabetically(procMovies);

// Best yearly rate average
function bestYearAvg(array){
    if (array.length===0){
        return undefined;
    }
    // Gather years list
    yearsList = enumerateYears(array);
    // Calculate averages
    var averages = [];
    yearsList.forEach(function(year, idx){
        averages[idx] = ratesAverage(array.filter(el => Number(el.year)===year));
    });
    // Find index of maximum average
    var resultIdx = findMaximumYear(averages);
    return ['The best year was',
        yearsList[resultIdx],
        'with an average rate of',
        averages[resultIdx]].join(" ");
}

function enumerateYears(array){
    var years = [];
    array.forEach(function(el){
        var year = Number(el.year);
        if (years.indexOf(year) < 0){
            years.push(year);
        };
    });
    return years;
}

function findMaximumYear(array){
    var maxAvg = Math.max(...array);
    var resultIdx = [];
    array.forEach(function(el, idx){
        if(el===maxAvg){
            resultIdx.push(idx);
        };
    });
    return Math.max(...resultIdx);
}

var bestYearForCinema = bestYearAvg(procMovies);