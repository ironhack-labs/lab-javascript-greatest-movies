/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
 
function turnHoursToMinutes(array) {
 var newArray = []; 

  newArray = array.map(function (elem) {
    var newElem = Object.assign({}, el);
    if(newElem.duration.search('h') < 0){
        newElem.duration = newElem.duration.replace('min','');
       
    }else{
        var newDuration = newElem.duration.replace('h','').replace('min','').split(' ');
        newElem.duration = ((Number(newDuration[0])* 60) + Number(newDuration[1])).toString();
    }
  });

  return newArray;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(array) {

    var sumRates = array.reduce(function(acc, elem, index){
        acc += Number(elem.rate);
        if(index == array.length - 1){
            acc /= array.length.toFixed(2);
        }
    }, 0);

    return acc;
}



// Get the average of Drama Movies

function dramaMoviesRate(array){

    var dramaMovies = array.filter(function(elem){
        if(elem.genre.indexOf("Drama") > 0){
            return elem;
        }else{
            return false;
        }
    });

    dramaMovies.reduce(function(acc, elem, index){
        acc += Number(elem.rate);
        if(index == array.length - 1){
            acc /= array.length.toFixed(2);
        }
    }, 0);

    return acc
}


// Order by time duration, in growing order

function orderByDuration(array){
 var ordered = turnHoursToMinutes(array);
    ordered.map(function(elem){
        return {elem: title.toLowerCase(), elem: duration};
    })
    ordered.sort(function(a, b){
        if (a.duration > b.duration) {
            return 1;
        }
        if (a.duration < b.duration) {
           return -1; 
        } else if (a.title > b.title){
            return 1;
        } else {
            return -1;
        } 

    });

    return ordered;

}


// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
    var spielbergDramas = array.filter(function(elem){
        if(elem.genre.indexOf("Drama") > 0 && elem.director.indexOf('Steven Spielberg') > 0){
            return elem;
        }else{
            return false;
        }
    });

    return spielbergDramas;


}



// Order by title and print the first 20 titles

function orderAlphabetically(array) {
    var orderedByTitle = [];

    orderedByTitle = array.map(function (elem, i) {
        var element = Object.assign({}, el);
       if (i === 20){ break; }
            element = element.title.toLowerCase();
         
     });
        
     orderedByTitle.sort();
       

    return orderedByTitle;

}


// Best yearly rate average
