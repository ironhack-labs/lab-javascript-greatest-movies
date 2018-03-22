/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
        var hours = 0;
        var minutes = 0;
        if (elem.duration.indexOf('h') !== -1) {
            hours = parseInt(elem.duration[0], 10) * 60;
        }
        if (elem.duration.indexOf('min') !== -1) {
            minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
        }
        return Object.assign({}, elem, { duration: hours + minutes });
    });
}
turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals 

function ratesAverage(moviesArray){
    var sumTotal = moviesArray.reduce(function (acc,elem) {
        return acc + parseFloat(elem.rate);
    },0)
    return sumTotal / moviesArray.length;

}
ratesAverage(movies);


// Get the average of Drama Movies

function dramaMoviesRate(moviesArray){
    var filmDramas = moviesArray.filter(function (elem) {
        for( var i = 0; i < elem.length; i++){
            if(elem.genre[i] === "Drama"){
                return 1;
            }else{
                

            }

        }
    })


}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average


