/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

var turnHoursToMinutes = function(arr){
    var arrMod = arr.map(function(f){
        return {duration: durationInMinutes(f.duration)};
    });
return arrMod;
};

var durationInMinutes = function(s){
var h = 0;
var m = 0;
var hPos = s.indexOf("h");
var mPos = s.indexOf("min");

if (hPos != -1){
    h = parseInt(s[hPos -1])
}
if (mPos != -1){
    m = parseInt(s.slice(s.indexOf(" ") + 1, mPos))
}
    return h*60 + m;
};

// Get the average of all rates with 2 decimals 

var ratesAverage = function(arr){
    var av=0;
    var sumRates = arr.reduce(function(acc, elem){
        if(elem.hasOwnProperty("rate")) {
           if(elem.rate){
               return acc;} 
           return acc + parseFloat(elem.rate); 
        } else { 
            return acc;
        } 
    }, 0);
    return Math.round(sumRates/arr.length*100)/100;
}


// Get the average of Drama Movies

var dramaMoviesRate = function(arr){
    var dramaArr = arr.filter(function(f){
        return f.genre.indexOf("Drama") >= 0;    
    });

    return ratesAverage(dramaArr);
}
console.log(ratesAverage(dramaArr));

// Order by time duration, in growing order



// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
