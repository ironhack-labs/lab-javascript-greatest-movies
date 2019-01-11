/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arr){
    var copy = arr.map(function(movie){
        var minTotal = 0;
        if(typeof(movie.duration) == "number"){
            minTotal = movie.duration;
        }
        else{
            if(movie.duration.length < 4){
                minTotal = parseInt(movie.duration) * 60;
            }
            else if(movie.duration.length > 5){
                var splitted = movie.duration.split(" ");
                minTotal = (parseInt(splitted[0])*60) + parseInt(splitted[1]);
            }
            else{
                minTotal = parseInt(movie.duration);
            }
        }        
        var newMovies = Object.assign({},movie,{duration:minTotal});
        return newMovies;
    });
    return copy;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arr){
    var avg = arr.reduce(function(ac,movie){
      return ac += movie.rate;  
    },0);
    return parseFloat(avg/arr.length);
}

// Get the average of Drama Movies
function dramaMoviesRate(arr){
    var filter = arr.filter(function(movie){
        if(movie.genre.indexOf("Drama") > -1) return true;
        return false;
    });
    var avg = filter.reduce(function(ac,dramaMovie){
        if(dramaMovie.rate) return ac += parseFloat(dramaMovie.rate);
        return ac;
    },0);
    if(filter.length == 0) return undefined;
    return parseFloat(avg/filter.length);
}

// Order by time duration, in growing order
function orderByDuration(arr){
    var minuteArr = turnHoursToMinutes(arr);
    minuteArr.sort(function(a,b){
        if (a.duration > b.duration) return 1;
        else if (a.duration < b.duration) return -1;
        else{
            if(a.title > b.title) return 1;
            else if(a.title < b.title) return -1;
        }
    });
    return minuteArr;
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr){
    if(arr.length == 0) return undefined;
    var filter = arr.filter(function(movie){
        if(movie.genre.indexOf("Drama") > -1 && movie.director == "Steven Spielberg") return true;
        return false;
    });
    return "Steven Spielberg directed " + filter.length + " drama movies!";
}

// Order by title and print the first 20 titles
function orderAlphabetically(arr){
    arr.sort(function(a,b){
        if(a.title > b.title) return 1;
        else if(a.title < b.title) return -1;
    });
    arr.splice(20);
    var onlyNames = [];
    for(var i = 0; i < arr.length; i++){
        onlyNames.push(arr[i].title);
    }
    return onlyNames;
}

// Best yearly rate average
function bestYearAvg(arr){
    var newArray = [];
    if(arr.length == 0) return undefined;
    arr.sort(function(a,b){
        if(a.year > b.year) return 1;
        else if(a.year < b.year) return -1;
    });

    var arrYear = [];
    
    arr.forEach(function(element){
        arrYear.push(element.year); 
    });

    arrYear = arrYear.unique();
    
    for(var z = 0; z < arrYear.length; z++){
        year = arr.filter(function(movie){
            if(movie.year == arrYear[z]) return true;
            return false;
        });
        avg = year.reduce(function(ac, movieYear){
            return ac += parseFloat(movieYear.rate);  
        },0);
        newArray.push({year:arrYear[z],avg:parseFloat(avg/year.length)}); 
    }
    console.log(newArray)
    newArray.sort(function(a,b){
        if(a.avg > b.avg) return -1;
        else if(a.avg < b.avg) return 1;
        else{
            if(a.year > b.year) return 1;
            else if(a.year < b.year) return -1;
        }
    });
    console.log(newArray);
    return "The best year was " + newArray[0].year +" with an average rate of " + newArray[0].avg;
}



Array.prototype.unique=function(a){
    return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});





