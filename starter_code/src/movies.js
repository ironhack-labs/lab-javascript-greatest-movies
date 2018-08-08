/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(lista){
    var nuevainfo = lista.map(function(peli){
        var horasmin = peli.duration.split(" ");
        var horas = 0;
        var minutos = 0;
        horasmin.forEach(function(elemento){
            if (elemento.includes('h')){
                horas = elemento.replace("h",'');
            }
            if (elemento.includes('min')){
                minutos = elemento.replace('min','');
            }

        })
       
        var totalmin = parseInt(horas)*60 + parseInt(minutos);
        //peli.duration = totalmin;

        return Object.assign({},peli,{duration : totalmin})
    });
 return nuevainfo;
}

console.log(turnHoursToMinutes(movies));



// Get the average of all rates with 2 decimals 


 function ratesAverage(movies){
    var sum = movies.reduce(function (sum, current){
        return sum + parseInt(current.rate);        
    }, 0);
    return sum/movies.length;
 }

// Get the average of Drama Movies
function dramaMoviesRate(movies){
    if(!Array.isArray(movies) || movies.length == 0) return undefined;
    else {
    var movieDrama = movies.filter(function(film){  
      return film.genre.includes('Drama');
    });}
   
    if(!Array.isArray(movieDrama) || movieDrama.length == 0) return undefined;
    var sumRates = movieDrama.reduce(function(sum, film){  
    return sum + (film.rate);
    }, 0);
    var pre = (sumRates/movieDrama.length).toFixed(2);
    return parseFloat(pre);
}   

// Order by time duration, in growing order
function orderByDuration(movies){
    
    
    movies.sort(function(a,b){
    
        if(a.duration==b.duration){
            console.log(a.duration, b.duration);
            var x = a.title.toLowerCase();
            var y = b.title.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
            } 
        else {
            console.log(a.duration, b.duration);
            return a.duration - b.duration;
            }
    });
    return movies
}


// How many movies did STEVEN SPIELBERG



function howManyMovies(movies){
    if (movies.length==0){
        return undefined;
    } else {
        var howMany = 0;
        movies.filter(function(film){
            if (film.director === 'Steven Spielberg' && film.genre.includes('Drama')){
            howMany++;}
            return howMany
        });
            return 'Steven Spielberg directed ' + howMany + ' drama movies!';
    }
}


// Order by title and print the first 20 titles

function orderAlphabetically(movies){
    var arrTitles = movies.map(function(film){
      return film.title;
    });
    if (movies.length < 20)
       return arrTitles.sort();
    else
      return arrTitles.sort().splice(0,20);
   }


// Best yearly rate average*/
