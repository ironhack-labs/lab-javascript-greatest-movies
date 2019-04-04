/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies){
 
    var minutesArray = movies.map((eachMovie)=>{ //looped through all movies
        let movie = eachMovie.duration.split(" ") //made the duration string into array 
        let totalMinutes = 0; 
        movie.forEach((m)=>{ //loop through array 
            if(m.includes('h')){  
                totalMinutes+=Number(m.replace('h',''))*60 //if has h do this math
            } 
            if(m.includes('min')){
                totalMinutes+=Number(m.replace('min','')) //if has min do this
            }
        })
        return {...eachMovie, duration: totalMinutes} //return all the old movie stuff with different duration

    })
   
    return minutesArray //return ENTIRE new ARRAY with durations 
    
}
//turnHoursToMinutes(movies)// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
