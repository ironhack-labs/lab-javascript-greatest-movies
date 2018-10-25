/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray){
    if(moviesArray.length === 0 ) return;

    var minutesMoviesArray=moviesArray.map(function(movie){
        
        var tiempoMinHours=movie.duration.split(" ");
        if(tiempoMinHours.length==2){

            var horas = parseInt(tiempoMinHours[0]);
            var min = parseInt(tiempoMinHours[1]);
            var tiempoMin= (horas*60) + min;

        }else{
            if(tiempoMinHours[0].endsWith('h')){
                
                var tiempoMin=  parseInt(tiempoMinHours[0])*60;

            }else {
                
                var tiempoMin=  parseInt(tiempoMinHours[0]);
            }
        }

        return Object.assign({},movie,{duration:tiempoMin})
    });
   
    return minutesMoviesArray;
}
/*
These are the best movies based on their rates, so supposedly all of them have an awesome rate. In this iteration, we want to know the average rate of all of them and display it on the console. Create a ratesAverage method that receive an array as a parameter and solve the challenge.

The rate must be returned rounded to 2 decimals! */

// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray){
    if(moviesArray.length === 0 ) return;
    var totalRate=moviesArray.reduce(function(acumulator,currentValue){
        return  (acumulator+currentValue.rate) ;
    },0);

    return Math.round(totalRate/moviesArray.length * 100) / 100 ;
}

// Get the average of Drama Movies

/**
 Drama is the genre that repeats the most on our array, apparently, people love drama! eyes

Create a dramaMoviesRate that receive an array as a parameter to get the average rate of all drama movies! Let's see if it is better than the general average.

Again, rounded to 2 decimals!

Print on the console the result!
 */
function dramaMoviesRate(moviesArray){
    if(moviesArray.length === 0 ) return;
    var newNewArray=moviesArray.filter(function(movie){
        return (movie.genre).includes('Drama');
    });
    if(newNewArray.length === 0 ) return;
    return ratesAverage(newNewArray)
}
// Order by time duration, in growing order

/**
We need to sort the movies in ascending order by their duration. This should be easy using one of the methods we just learn. Create a method orderByDuration that receives an array as parameter and return the sorted array. */

function orderByDuration(moviesArray){
   if(moviesArray.length === 0 ) return;
   var newFilmArray = [...moviesArray]; 
   newFilmArray.sort(function (item1, item2) {
    return (item1.duration - item2.duration)
   })
   return newFilmArray;
}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
