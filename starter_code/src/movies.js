/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
    var returnArray = 
    array.map(function(movie){
        if (movie.duration.length === 8){
            var newtime = parseFloat(movie.duration[0])*60 + parseFloat(movie.duration.slice(3,5));
        } else if (movie.duration.length === 2){
            var newtime = parseFloat(movie.duration[0]*60);
        } else if (movie.duration.length === 5){
            var newtime = parseFloat(movie.duration.slice(0,2));
        };
        //duration: '2h 55min',
        var newmovie =  {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: newtime,
            genre: movie.genre,
            rate: movie.rate,
        }
        return newmovie;
    }, 0);
    return returnArray;
}


// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var num = 
        array.reduce(function(sum, current){
            return sum += parseFloat(current.rate);
        }, 0);
    var average = parseFloat((num / array.length).toFixed(2));
    return average;
}

// Get the average of Drama Movies
function dramaMoviesRate(array){
    var dramaArray = array.filter(function(movie){
        return (movie.genre.indexOf("Drama") !== -1 || movie.genre === "Drama");
    });
    counter = 0;
    for (var i = 0; i < length.dramaArray; i++){
        if(dramaArray.rate === ''){
            dramaArray.rate = 0;
            counter += 1;
        };
    }

    if (dramaArray === []){
        return undefined;
    };
    return ratesAverage(dramaArray);

    var num = 
        dramaArray.reduce(function(sum, current){
            return sum += parseFloat(current.rate);
        }, 0);
    var average = parseFloat((num / (dramaArray.length - counter).toFixed(2)));
    return average;
}

// Order by time duration, in growing order
function orderByDuration(array){
    var newArray = turnHoursToMinutes(array);
    newArray.sort(function(a, b){
        if (a.duration === b.duration){
            return a.title.toLowerCase() - b.title.toLowerCase()
        }
        return a.duration - b.duration;
    });
    console.log(newArray)
    return newArray;
}


// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
    if (array.length === 0){
        return undefined;
    }
    counter = 0;
    for (var i = 0; i < array.length; i++){
        if ((array[i].director === 'Steven Spielberg') 
        /* && (movie.genre.indexOf("Drama") !== -1  *//* || movie.genre === "Drama") */){
            counter += 1;
        };
    }
    return ("Steven Spielberg directed " + counter + " drama movies!")

   /*  var newMovies = 
    array.filter(function(movie){
        return (movie.director === 'Steven Spielberg') && (movie.genre.indexOf("Drama") !== -1 || movie.genre === "Drama")
    });
    return newMovies; */
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var newArray = array.sort(function(a, b){
        return a.title.toLowerCase() - b.title.toLowerCase();
    });
    return newArray.splice(0, 20);
}

