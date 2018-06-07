/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// function turnHoursToMinutes(array) {
//     var transformation;
//     var addition;
//     var duration = array.map(function (element) {
//         var elmtcpy = Object.assign({}, element);
//         transformation = (elmtcpy.duration.includes('h')) ? elmtcpy.duration.split('h') : ['0', elmtcpy.duration];
//         transformation[1] = (transformation[1].includes('min')) ? transformation[1].replace('min', '') : 0;
//         var addition = parseInt(transformation[0]) * 60 + parseInt(transformation[1]);
//         elmtcpy.duration = addition;
//         return elmtcpy
//     })
//     return duration;
// }

function turnHoursToMinutes(array) {
    var result = array.slice(0).map(function (elmt) {
        var minutes = 0;
        var elmtcpy = Object.assign({}, elmt)
        if (typeof (elmtcpy.duration) === 'number')
            return elmtcpy;
        var parsedString = (elmtcpy.duration.indexOf('h') !== -1) ? elmtcpy.duration.split('h') : ['0', elmtcpy.duration];
        parsedString[0] = parseInt(parsedString[0]) * 60;
        if (parsedString[1]) {
            parsedString[1] = parseInt(parsedString[1]);
            elmtcpy.duration = parsedString[0] + parsedString[1];
        } else {
            elmtcpy.duration = parsedString[0];
        }
        return elmtcpy
    })
    return result;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    var calcAverage = 0;
    var average = array.map(function (element) {
        calcAverage += parseInt(element.rate);
    })
    return calcAverage / array.length;
}

function dramaMoviesRate(array) {
    var count = 0;
    var min = 0;
    var duration = turnHoursToMinutes(array).filter(function (element) {
        if (element.genre.includes("Drama")) {
            return element.genre.includes("Drama");
        } else {
            return undefined;
        }
    })
    var calc = duration.map(function (nested) {
        return count += nested.duration / duration.length;
    });
    return count
}


// Order by time duration, in growing order

function orderByDuration(array) {
    var ordrer = turnHoursToMinutes(array).sort(function (a, b) {
        if (a.duration !== b.duration) {
            return a.duration - b.duration;
        } else if (a.duration === b.duration) {
            return a.title.localeCompare(b.title)
        }
    })
    return ordrer;
}


// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
    var count = 0;
    var notDefined;
    var splielberg = array.filter(function (element) {
        if (element.director === "Steven Spielberg" && element.genre.includes("Drama")) {
            count += 1;
        }
    })
    if (count >= 0) {
        return `Steven Spielberg directed ${count.toString()} drama movies!`;
    }
}

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
    var order = array.sort(function (a, b) {
        return a.title.localeCompare(b.title);
    })
    var title = array.map(function (element) {
        return element.title;
    })
    if (title.length > 20) {
        title.splice(20, title.length);
    }
    console.log(title)
    return title;
}

// Best yearly rate average
function bestYearAvg(array) {
    var byYear = array.sort(function (a, b) {
        return a.year - b.year;
    })
    var rateAndYear = byYear.map(function (element) {
        return {
            year: element.year,
            rate: element.rate
        }
    })
    var uniqueYear =  rateAndYear.filter(function(element, index, array){
        return array.indexOf(element) === index;
     })     
    console.log(uniqueYear)
    return rateAndYear
}
