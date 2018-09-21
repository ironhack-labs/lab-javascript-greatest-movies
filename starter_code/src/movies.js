/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(item){
    var sum = item.reduce(function(acc, currentValue){
        return acc += parseFloat(currentValue.rate);
    }, 0);
    return sum/item.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(item){    
    if(item.length === 0){
        return undefined;   
    } else{
        var dramaMovies = item.filter(function(movie){
            return movie.genre.find(function(singleGender){
                return singleGender === 'Drama';
            });
        });
        if(dramaMovies.length){
            return ratesAverage(dramaMovies);
        } else{
            return undefined;
        }
    }
}

// Order by time duration, in growing order
function orderByDuration(item){
    var durationArray = [];
    console.log(item[0].duration);
   if(item.length === 1){
       return item;
   } else{
       durationArray = item.sort(function(a, b){
           return a.duration - b.duration;
       });
        return durationArray;
   }
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(item){
    var filteredFilms = [];
    var films = [];
    if(!item){
        return undefined; 
    } else{
        filteredFilms = item.find(function(element){
            return element === 'Drama';
        });
        films = filteredFilms.filter(spielbergDramaFilms);
        if(filteredFilms.length === 0){
            return 'Steven Spielberg directed 0 drama movies!';
        }
    }
}

function spielbergDramaFilms(item){
    return item.director === 'Steven Spielberg';
}

// Order by title and print the first 20 titles


// Best yearly rate average
