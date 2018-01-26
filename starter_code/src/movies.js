/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
var moviess = [{ title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }, { title: 'aab' }, { title: 'bab' }, { title: 'acb' }];


function turnHoursToMinutes(array){
    
    var newArray = array.map(function(value){
        var min, hrs;
        if(value.duration.indexOf("h") === -1)
            hrs = 0;
        else 
            hrs = parseInt(value.duration.slice(0,value.duration.indexOf("h"))) * 60;
        if(value.duration.indexOf("min") === -1)
            min = 0;    
        else
            min = parseInt(value.duration.slice(value.duration.indexOf("min") - 2,value.duration.indexOf("min")));
        return Object.assign({}, value, {duration: (min+hrs)})
    });
    return newArray;
}



function ratesAverage(array){
    var totalRate = array.reduce(function(acc, elem){
        console.log(elem.hasOwnProperty("rate"));
        if (elem.hasOwnProperty("rate") && elem.rate.length !== 0) 
            return acc + parseFloat(elem.rate);
        else    
            return acc;
    }, 0)
    return parseFloat((totalRate / array.length).toFixed(2));
}

function dramaMoviesRate(array){
    var dramaMovieCounter = 0;
    var result;
    if(array.length === 0)
        return 0;
    var rate = 0.0;
    rate = array.reduce(function(acc, movie){
        for(var i = 0; i < movie.genre.length; i++){
            if(movie.genre[i] === "Drama" && movie.hasOwnProperty("rate") && movie.rate.length !== 0){   
                dramaMovieCounter++;
                return acc + parseFloat(movie.rate);
                break;
            }
        }
        return acc;
    }, 0)
    console.log(dramaMovieCounter);
    result = parseFloat((rate / dramaMovieCounter).toFixed(2));
    if(result === 0)
        return undefined;
    else    
        return result;
}


function compareDramatoAll(){
    if(dramaMoviesRate(movies) > ratesAverage(movies)){
        console.log("The drama movies have the higher average rating that all movies.");
    }
    else if(dramaMoviesRate(movies) < ratesAverage(movies)){
        console.log("All movies have the higher average rating than the drama movies.");
    }
    else 
        console.log("The rating for Drama movies and All movies are the same");
}
// console.log("All rates: " + ratesAverage(movies));
// console.log("Drama rates: " + dramaMoviesRate(movies));
// console.log(compareDramatoAll());

//Ordering by the duration
function orderByDuration(array){
    var sortedArray = array.sort(function(a,b) {
            return a.duration - b.duration;
          });
    return sortedArray;
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    var filteredArray;
    filteredArray = array.filter(function(movie){
        return movies.director === "Steven Spielberg";
    })
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var counter = 0;
    var sortedArray = array.sort(function(a,b) {
        return a.title - b.title;
      });
    return sortedArray.slice(0, 20);
}

console.log(orderAlphabetically(moviess));

// Best yearly rate average
