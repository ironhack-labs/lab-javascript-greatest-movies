/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  for(i=0; i<movies.length;i++){
    var palabra = movies[i].duration.split(" ");
    var h = palabra[0].substr(0,1)
    if(palabra[1].length === 5){
    var m = palabra[1].slice(0,2)
    }
    if(palabra[1].length=== 4){
    var m = palabra[1].slice(0,1)
    }
    var hours = h*60
    palabra[0]= hours
    palabra[1]= parseFloat(m)

    var newduration = hours + palabra[1];
    movies[i].duration=newduration;
    console.log(movies)
  }
}


turnHoursToMinutes(movies)
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
