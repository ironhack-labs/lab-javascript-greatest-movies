/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
var durationCorrectedArray = []
var turnHoursToMiutes = movies.map(function(m){
    durationIteration = m.duration

    durationCorrection = function correction() {
        //h+m 7 y 8
        if (durationIteration.length > 6) {
            newDuration =durationIteration[0]*60 + (durationIteration.length);

        }
        //h 2 o 3
        else if (durationIteration.length <= 3) {

        }
        //m 4 -6
        else if (durationIteration.length >= 4 && durationIteration.length <= 6) {

        }

    }
    return 
})
// Get the average of all rates with 2 decimals 
function ratesAverage(mov){
    var objectArr = mov.map(function(mov){
        return rateIteration = parseFloat(mov.rate)});
    
    var rateSum = objectArr.reduce(function(a, b){
    return (a+b)});;
    
     return parseFloat((rateSum / mov.length).toFixed(2))}
// Get the average of Drama Movies
function dramaMoviesRate(mov){

    var dramaCheck = mov.filter(function(mov){
        if ((mov.genre).includes('Drama')) {
          return (mov.genre).includes('Drama')
        } else {
        }
    })

    var objectArr = dramaCheck.map(function(dramaCheck){
        return rateIteration = parseFloat(dramaCheck.rate)});
    
    var rateSum = objectArr.reduce(function(a, b){
    return (a+b)});;
    
     return parseFloat((rateSum / dramaCheck.length).toFixed(2))}

// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG
function howManyMovies(mov){

    var howManyMovies = mov.filter(function(mov){
        if ((mov.director).includes('Steven Spielberg')) {
            if ((mov.genre).includes('Drama')) {
                return (mov.genre).includes('Drama')
            }
          
        } else {
        }
    }) 
    return ("Steven Spielberg directed " + howManyMovies.length + " drama movies!");
}

howManyMovies(movies);

// Order by title and print the first 20 titles


// Best yearly rate average