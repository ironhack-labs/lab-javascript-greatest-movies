/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies){
    var newArray = movies.map(function(movie){
    var time = movie.duration.split(" ")
    if (time.length === 1){
        if(time[0].indexOf("h") === -1){
// Aqui entran minutos
          var time = parseInt(time[0])
   
        }else if(time[0].indexOf("m") === -1){

// Aqui entran las horas
            var time = parseInt(time[0]) * 60

           
            
        }
    }else{ 
      
        // time = ["3h","20min"]
        console.log(time)
        var total= parseInt(time[0]) * 60 + parseInt(time[1])
        //var total = parseInt(time1 + time2)
      
        
    }
    
    return Object.assign({},movie, {duration: total})
     
})

return newArray;

}




// Get the average of all rates with 2 decimals 
function ratesAverage(elm){

}


// Get the average of Drama Movies
function dramaMoviesRate(){

}
// Order by time duration, in growing order
function orderByDuration(){

}

// How many movies did STEVEN SPIELBERG
function howManyMovies(){

}

// Order by title and print the first 20 titles
function orderAlphabetically(){

}

// Best yearly rate average
function bestYearAvg(elm){
    return movies
}