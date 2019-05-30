/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(movies) {
    copie=Object.assign(movies);
    copie.map (movie => {
    num=movie.duration.match(/\d+/g).map(Number)
    if (num.length==1 && num[0]<=3){movie.duration=num[0]*60}
    if (num.length==1 && num[0]>3){movie.duration=num[0]}
    else if (num.length>1){movie.duration=num[0]*60+num[1]}
    }
    ) ;
    return copie
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
