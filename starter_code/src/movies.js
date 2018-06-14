/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
    return movies.map(function(curMovie){
        if(curMovie.duration.length===8){//hours and minutes
            return{
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration:(Number(curMovie.duration.charAt(0))*60+ Number(curMovie.duration.substring(3,5))),
                genre: curMovie.genre,
                rate: curMovie.rate
        }
        }
        else if(curMovie.duration.length===7){//hour and minutes
            return{
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration:(Number(curMovie.duration.charAt(0))*60+Number(curMovie.duration.substring(3,4))),
                genre: curMovie.genre,
                rate: curMovie.rate
        }
        }
        else if(curMovie.duration.length===3){//hour
            return{
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration:Number(curMovie.duration.charAt(0))*60,
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
        else if(curMovie.duration.length===5){//minutes
            return{
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration:Number(curMovie.duration.substring(0,2)),
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
        else{//minute
            return{
                title: curMovie.title,
                year: curMovie.year,
                director: curMovie.director,
                duration:Number(curMovie.duration.substring(0,1)),
                genre: curMovie.genre,
                rate: curMovie.rate
            }
        }
    })
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
