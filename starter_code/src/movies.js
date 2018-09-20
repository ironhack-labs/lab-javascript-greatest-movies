/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var sum = array.reduce(function(acc, currentValue){
        return acc + currentValue.rate
    }, 0);
    return sum/array.length
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
        var dramaMovies = array.filter(function(movie){
            return movie.genre.find(function(sinGen){
                return sinGen === "Drama"
        });
    });
    if(!dramaMovies){
        return undefined;
    }
    else{
        return Math.round(ratesAverage(dramaMovies) * 100)/100;
    }
};


// Order by time duration, in growing order
function orderByDuration(array){

}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    var spielberg = array.filter(function(movsofspi){
        return movsofspi.director === "Steven Spielberg";
    });
    var dramasOfSpielberg = spielberg.filter(function(dramas){
        return dramas.genre.find(function(drama){
            return drama === "Drama";
        });
    });
    var totalDrama = dramasOfSpielberg.map(function(total){
        return total.title;
    })
    if(totalDrama.length == 1){
        return "Steven Spielberg directed 1 drama movies!"
    }
    else if(totalDrama.length == 2){
        return "Steven Spielberg directed 2 drama movies!"
    }
    else if(totalDrama.length == 3){
        return "Steven Spielberg directed 3 drama movies!"
    }
    else if(totalDrama.length == 4){
        return "Steven Spielberg directed 4 drama movies!"
    }
    else if(!totalDrama){
        return "Steven Spielberg directed 0 drama movies!"
    }else{
        return "Debe haber otra forma de hacer esto que sea automática, pero no se me ocurre"
    }
};

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var movieTitles = array.map(function(titles){
        return titles.title;
    })
    var titlesOrdered = movieTitles.sort();
    for(var i = 0; i < 20;i++){
        console.log(titlesOrdered[i]);
    }
}

// Best yearly rate average
