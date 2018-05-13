/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
    array.forEach(function(element) {
        var hour = parseInt(element.duration.substring(0,1));
        var minutes = parseInt(element.duration.split("min")[0].substring(2));
        element.duration = hour * 60;
    });
    return array;
}
    turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 

function ratesAverage(array){
    let averageMovie  = array.reduce(function(sum, movie){
        return sum = parseFloat(movie.rate);
    }, 0);
    return averageMovie / array.length;
}
        
        
// Get the average of Drama Movies
    -
function dramaMoviesRate(array){
    let genreDrama = array.filter(function(movie){
    
    for(i = 0; i < movie.genre.length; i){
        return movie.genre[i] === "genreDrama";
        }
    });
    return ratesAverage(genreDrama);
}
        
        
// Order by time duration, in growing order
        
function orderByDuration (array) {
    array.sort((a, b) => {
        if (a.duration === b.duration) {
            if (a.title > b.title) {
                return 1;
            }
        }
        return a.duration - b.duration;
    });
    return array;
}
        
// How many movies did STEVEN SPIELBERG
    -
function howManyMovies(array) {
    if (array.length === 0) {
        return undefined;
    }
    var howMany = array.filter(function(drama){
        for (i = 0; i < drama.genre.length; i){
            if (drama.genre[i] == "Drama") {
            return drama.director == 'Steven Spielberg' 
            }         
        }    
    });        
    return ("Steven Spielberg directed " + howMany.length + "drama movies!");  
}   

// Order by title and print the first 20 titles
        
function orderAlphabetically(array) {
    let titleArray = [];
    
    array.forEach(function(elem) {
        titleArray.push(elem.title);
    });
    
    titleArray.sort();
        if (titleArray.length >= 20) {
            titleArray = titleArray.slice(0.20);
        }
    return  titleArray;
}