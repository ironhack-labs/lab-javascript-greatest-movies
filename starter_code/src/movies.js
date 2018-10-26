/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
    return arraMin=array.map(function(val){
        var durationMinutes=""
      if (val.duration.indexOf("h")==-1){
        durationMinutes=parseInt(val.duration);
      }
      else if(val.duration.indexOf("min")==-1){
        durationMinutes=parseInt(val.duration)*60;
      }
      else {
        durationMinutes=parseInt(val.duration.split(" ")[0]*60 + parseInt(val.duration.split(" ")[1]))
    }
    return Object.assign({},val,{duration:durationMinutes})
    })
  };

    
// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var sum= 0;
    var allRates=array.reduce(function(accumulator,current){
        sum++;
        return(accumulator + Number(current.rate))
    },0)
    var aveRate=allRates/sum;
    return parseFloat(aveRate.toFixed(2));
    };


// Get the average of Drama Movies
function dramaMoviesrate(array){
    var arrAver = array.reduce(function(sum, rate){
     ;
    });
  };


// Order by time duration, in growing order
function orderByDuration(array){

    array.sort(function(a, b){
        if (a.duration> b.duration){
            return 1;
        }
    
        if (a.duration < b.duration){
            return -1;
        }
    
        return 0;
    });
    };

// How many movies did STEVEN SPIELBERG
 
function howManyMovies(array){
    var spielbergMovies=array.filter(function(movie){
       return movie.director.indexOf("Steven Spielberg") && movie.genre.indexOf("Drama");
    });
    };

// Order by title and print the first 20 titles
function orderAlphabetically(array){

    array.sort(function(a, b){
        if (a.title> b.title){
            return 1;
        }

        if (a.title < b.title){
            return -1;
        }
        return 0;
    });
    
    console.log(array.slice(0,20));
    }

// Best yearly rate average

  
