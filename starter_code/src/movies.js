/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(moviesarr) {

    return moviesarr.map(function (moviesarr) {
        var timeRaw = moviesarr.duration; // "2h 22min"
        var arrayRaw = [];
        var mminutos = 0;
        var hminutos = 0;

        arrayRaw = timeRaw.split(" "); //["2h","22min"]
        if (arrayRaw.length === 1) {
            if (arrayRaw[0].includes("h")) { //["2h"]
                hminutos = parseInt(arrayRaw[0]) * 60;
            } else if (arrayRaw[0].includes("min")) { //["22min"]
                mminutos = parseInt(arrayRaw[0]);
            };
        } else if (arrayRaw.length === 2) { //["2h", "22min"]
            hminutos = parseInt(arrayRaw[0]) * 60;
            mminutos = parseInt(arrayRaw[1]);
        }
        newDuration = mminutos + hminutos;
        //calcular newDuration
        return Object.assign({}, moviesarr, {
            duration: newDuration
        })
    })

}

turnHoursToMinutes(movies);
// Get the average of all rates with 2 decimals 
function ratesAverage(moviesarr) {

    var sum = moviesarr.reduce(function (accumulator, current) {
        return accumulator + +current.rate; // + es lo mismo que parseInt(string)
    }, 0)
    console.log(sum)
    var avg = (sum / (moviesarr.length));
    return Math.round(avg * 100) / 100

}
ratesAverage(movies);

// Get the average of Drama Movies
function dramaMoviesRate(moviesarr) {
    var filter_drama = moviesarr.filter(function (moviesarr) {

        var drama = moviesarr.genre.includes("Drama");
        return drama;
    })
    if (!ratesAverage(filter_drama)) {
        return undefined;
    } else {
        return ratesAverage(filter_drama);
    }



}
dramaMoviesRate(movies);

// Order by time duration, in growing order
function orderByDuration(moviesarr){

}
orderByDuration(movies);
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average