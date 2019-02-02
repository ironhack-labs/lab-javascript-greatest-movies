/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies){
    var hours=0;
    var minutes=0;
    var totalDuration=0;
    var newMovies=movies;
    
    var movieList = newMovies.map(function(movie){
        
      
        if(movie.duration.indexOf('h')!=-1){
            var timeArray = movie.duration.split("h");
            hours=(parseInt(movie.duration.substring(0,1))*60);
            
            
            if(movie.duration.indexOf('min')!=-1){
                minutes=parseInt(timeArray[1]);
                //minutes=(parseInt(movie.duration.substring(movie.duration.lenght-6,movie.duration.lenght)));
                
                totalDuration=hours+minutes;
                
            } else{
                totalDuration=hours;
            }
        } else{
            minutes=(parseInt(movie.duration.substring(movie.duration.lenght-6,5)));
                
            totalDuration=minutes;
        }
        return {
            title:movie.title,
            year:movie.year,
            director:movie.director,
            duration:totalDuration,
            genre:movie.genre,
            rate:movie.rate
        };
    });
    return movieList;
    
    
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
    var ratesGeneral=0;
    var newMovies=movies.reduce(function(sum,movie){
        ratesGeneral= parseFloat((sum+parseFloat(movie.rate))).toFixed(2);
        
        return ratesGeneral;
        
    
    },0);

    console.log(newMovies/movies.lenght);
    

}

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
