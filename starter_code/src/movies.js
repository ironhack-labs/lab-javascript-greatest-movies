/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
movies.map(function turnHoursToMinutes(e){
    var dur = e.duration;
    var dur2 = dur.split("h");
    var hor = dur2[0] * 60;
    var min = dur2[1];
        min = min.split("min")[0];
        
    var oper = parseInt(hor) + parseInt(min);
    
    return oper; 
})


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
