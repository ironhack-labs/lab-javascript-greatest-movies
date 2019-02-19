/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (object) {
    return object.map(function(item) {
        var duration = item.duration;
        if (duration.length == 2) {
            var hours = duration.split('h');
            var newDuration = parseInt(hours[0]) * 60;
        } else if (duration.length == 4 || duration.length == 5) {
            var minutes = duration.split('min');
            var newDuration = parseInt(minutes);
        } else {
            duration = duration.split(' ');
            var hours = duration[0].split('h');
            var minutes = duration[1].split('min');
            var newDuration = parseInt(hours[0]) * 60 + parseInt(minutes[0]);
        }
        item.duration = newDuration;
        return item;
    });
};

console.log(turnHoursToMinutes(movies));
// Get the average of all rates with 2 decimals 

function ratesAverage (object) {
    var rates =  object.map(function(item){
        var rate = parseFloat(item.rate);
        return rate;
    });

    var sum = rates.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });

    return parseFloat(sum / rates.length);

}

console.log(ratesAverage(movies));

// Get the average of Drama Movies

function dramaMoviesRate (object) {
    var dramaMovies = object.filter(function(item) {
        if (item.genre.indexOf('Drama') >= 0) {
            return item;
        }
    });

    var rates = dramaMovies.map(function(item){
        var rate = parseFloat(item.rate);
        return rate;
    });

    var sum = rates.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    });

    return parseFloat(sum / rates.length);
}

console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order

function orderByDuration (object) {
    var sortTime = object.sort(function(previous, current) {
        var previousMovieDuration = previous.duration;
        var currentMovieDuration = current.duration;
        var previousMovieName = previous.title;
        var currentMovieName = current.title;

        if (previousMovieDuration == currentMovieDuration) {
            if (previousMovieName < currentMovieName) {
                return -1;
            } else if (previousMovieName > currentMovieName) {
                return 1;
            }
        }
        return previousMovieDuration - currentMovieDuration;
    });
    
    return sortTime;
    }
    

console.log(orderByDuration(movies));

// How many movies did STEVEN SPIELBERG

function howManyMovies (object) {
    var dramaMovies = object.filter(function(item) {
        if (item.genre.indexOf('Drama') >= 0 && item.director == 'Steven Spielberg') {
            return item;
        }
    });

    var result = '';

    if (dramaMovies.length == 0) {
        result = undefined;
    } else {
        result = "Steven Spielberg directed " + dramaMovies.length + " drama movies!";
    }
    return result;
}

console.log(howManyMovies(movies));
// Order by title and print the first 20 titles

function orderAlphabetically (object) {
    var sortAlphabetically = object.sort(function(previous, current) {
        var previousMovieName = previous.title;
        var currentMovieName = current.title;

        if (previousMovieName < currentMovieName) {
            return -1;
        } else if (previousMovieName > currentMovieName) {
            return 1;
        }
        return 0;
    });

    var resultArray = [];

    if (sortAlphabetically.length > 20) {
        for (var i = 0; i < 20; i++) {
            resultArray.push(sortAlphabetically[i].title);
        }
    } else {
        for (var i = 0; i < sortAlphabetically.length; i++) {
            resultArray.push(sortAlphabetically[i].title);
        }
    }

    
    return resultArray;
}

console.log(orderAlphabetically(movies));
// Best yearly rate average

function bestYearAvg (object) {

    var allYears = object.map(function(item) {
        return item.year;
    });

    allYears.sort();

    var years = allYears.filter(function(item, index, array) {
        return (array.indexOf(item) == index);
    });

    var bestYearAvg = 0;
    var yearAvg = 0;
    var ano = '';

    for (var i = 0; i < years.length; i++) {
        var filter = object.filter(function(item) {
            return (item.year == years[i]);
        });

        var rate = filter.map(function(item) {
            return parseFloat(item.rate);
        });

        var sum = rate.reduce(function(accumulator, currentValue) {
            return accumulator + currentValue;
        });

        yearAvg = parseFloat(sum/rate.length);

        if (yearAvg > bestYearAvg) {
            bestYearAvg = yearAvg;
            ano = years[i];
        }

    }

    return ano;

}

console.log(bestYearAvg(movies));