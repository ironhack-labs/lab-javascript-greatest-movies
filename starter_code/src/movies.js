/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


function ratesAverage(elements){
    var sum = elements.reduce(function(accumulator,item){
        return accumulator + parseFloat(item.rate);
    }, 0);
    
   return Math.round(sum / elements.length*100)/100;
};
// Get the average of Drama Movies

function dramaMoviesRate(elements){
    var count = 0;
    var sum = elements.reduce(function(accumulator,item){
        if(Number(item.rate) === 0){
            count++;
        }
        if(item.genre.includes('Drama') <= 0){
            count++;
            return accumulator + parseFloat(item.rate);
        }
        else{
            return accumulator;
        }
        
    }, 0);
    
   return Math.round(sum / count*100)/100;
};
// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
