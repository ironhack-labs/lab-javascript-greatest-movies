/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
    

}

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var sum = array.reduce(function(acc, currentValue){
        return acc += currentValue.rate
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
    var total = "Steven Spielberg directed " + dramasOfSpielberg.length + " drama movies!"
    if (!dramasOfSpielberg){
        "Steven Spielberg directed 0 drama movies!";
    }else{
        return total;
    }
    //Me iluminé (ni siquiera recordaba por qué había hecho el map) :D
};

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var movieTitles = array.map(function(titles){
        return titles.title;
    }).sort();
    for(var i = 0; i < 20;i++){
        console.log(movieTitles[i]);
    }
    //He limpiado un poco el código resumiéndolo en una única variable
}

// Best yearly rate average
