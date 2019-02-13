/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (arraytest) {
    let out = arraytest.map( s => {
    let numHour=0;
    let numMin=0;
    let min="";
    let hours= s.duration.split('h');
    if (hours.length > 1 ) {
       numHour=Number(hours[0])*60;
       min= hours[1].split('min');
    }else 
       min=s.duration.split('min');
  
    if ( min.length > 1 ) {
        numMin=Number(min[0]);
    }
    return {
        title: s.name,
        year: s.year,
        director: s.director,
        duration:numHour+numMin ,
        genre: s.genre,
        rate: s.rate }
    });
    return out;
}



// Get the average of all rates with 2 decimals 


function ratesAverage (filmarray) {
    const out = filmarray.reduce(( sum, s) => {
            if ( parseFloat(s.rate)=== NaN ) 
               return sum ;
            else   
                return sum+ parseFloat(s.rate);
    },0);
    return parseFloat(out/filmarray.length).toFixed(2);
}

// Get the average of Drama Movies
/*
var numbers = [1, 2, 3, 4, 5, 6];

var evenNumbers = numbers.filter(function(number){
  return number % 2 === 0;
});
(number => number % 2 === 0)
*/
function dramaMoviesRate(filmarray){
    var dramaarray=filmarray.filter(film =>  {
        if (film.genre.array.indexOf('Drama') )
           return film;
    });
    let result=ratesAverage(dramarray);
    console.log(result);
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
