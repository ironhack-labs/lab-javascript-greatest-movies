/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function minutesCalc(str) {
    var newArr = str.split(" ");
    var hours = Number((newArr[0].split("h"))[0]);
    if (newArr.length > 1) {
        var duration = hours * 60 + Number((newArr[1].split("min"))[0]);
    } else {
        var duration = hours * 60;
    }
    return duration;
}

function turnHoursToMinutes(arr) {
    var converMovies = arr.map(function (a) {
        var b={};
        for(key in a){
            b[key] = a[key]                      
        }
        b.duration = minutesCalc(a.duration);          
        return b;
    })
    return converMovies;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr) {
    var total = arr.reduce(function (accumulator, item) {
        return accumulator + Number(item.rate);
    }, 0);
    return parseFloat((total / arr.length).toFixed(2));
};

// Get the average of Drama Movies
function dramaMoviesRate(arr) {
    var dramaMovies = arr.filter(function (item) {
        return item.genre.find(function (a) {return a === "Drama";}) 
        === "Drama";
    });
    if (dramaMovies.length > 0) {
        return ratesAverage(dramaMovies);
    }
}

// Order by time duration, in growing order
function orderByDuration(arr) {
    //var newArr = turnHoursToMinutes(arr); <--- What?
    return arr.sort(function(a,b) {
        if (a.duration > b.duration) {
            return 1;
        }
        else if (b.duration > a.duration) {
            return -1;
        } 
        else {
            if (a.title > b.title) {
                return 1;
            } else if (b.title > a.title) {
                return -1;
            } else {
                return 0;
            }
        }
    });
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(arr) {
    var directedMovies = arr.filter(function(element) {
        return (element.director === 'Steven Spielberg' && element.genre.indexOf('Drama') > -1);
    })
    if (arr.length > 0) {
        return 'Steven Spielberg directed ' + directedMovies.length + ' drama movies!';
    }
    
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
    arr.sort(function(a,b) {
        if(a.title > b.title) {
            return 1;
        } 
        else if(b.title > a.title) {
            return -1;
        } else {
            return 0;
        }
    });
    return arr.reduce(function(accumulator, item, index) {
        if (index < 20) {
            accumulator.push(item.title);
            return accumulator;
        } else {
            return accumulator;
        }
        
    }, []);
}

// Best yearly rate average

function bestYearAvg(arr) {
    var yearArr = {};
    var bestYear = {
        year: '1900',
        average: '0'
    }
    arr.forEach(function(el){
        var thatYearMovies = arr.filter(function(a){
            return a.year===el.year;
        });
        if(!yearArr.hasOwnProperty(el.year)){
            yearArr[el.year] = thatYearMovies;
        }
    });

    for (key in yearArr){
        var thatYearAvg=ratesAverage(yearArr[key])
        if(thatYearAvg>bestYear.average){
            bestYear.year=key;
            bestYear.average=thatYearAvg;
        }
    }
    if (arr.length > 0) {
        return 'The best year was ' + bestYear.year + ' with an average rate of ' + bestYear.average;
    }
    

}