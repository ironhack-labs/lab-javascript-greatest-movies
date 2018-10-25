/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrayMovies) {

    return  arrayMovies.map(movie => {

        var hoursMinutes = 0;
        var minutes = 0;

        if (movie.duration.indexOf('h') === -1) {
            minutes = parseInt(movie.duration.split(' ')[0]);
        } else {
            hoursMinutes = (parseInt(movie.duration.split(' ')[0])) * 60;
            minutes = parseInt(movie.duration.split(' ')[1]);
        }

        if (!hoursMinutes) {
            return {...movie, duration: minutes};
        } else if (!minutes) {
            return {...movie, duration: hoursMinutes};
        } else {
            return {...movie, duration: hoursMinutes + minutes};
        }

    })

}

// Get the average of all rates with 2 decimals 


function ratesAverage(arrayMovies) {

     var count = 0;
     var newArray = arrayMovies.reduce(function(accumulator, movie){
        count ++;
        return (accumulator + +movie.rate);
      }, 0);
    
    return (newArray/count);


 


}


// Get the average of Drama Movies

function dramaMoviesRate(arrayMovies) {

    var dramaMovies = []

    var newArray = arrayMovies.filter(movie => {
      movie.genre.filter(genero => {
           if (genero === 'Drama') {
               dramaMovies.push(movie)
           }
         })
    })

    var result = ratesAverage(dramaMovies);

    if (!result) {
        return undefined;
    } else {
        return parseFloat(result.toFixed(2));
    }

    
    
}


// Order by time duration, in growing order


function orderByDuration(arrayMovies) {

    var newArray = turnHoursToMinutes(arrayMovies).sort(function(a,b) {

        if (a.duration > b.duration){
            return -1;
        }
    
        if (a.duration > b.duration){
            return 1;
        }
    
        return 0;
    });

    return newArray;


}


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
