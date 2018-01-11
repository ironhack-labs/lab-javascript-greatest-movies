/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
  
  turnHoursToMinutes(movies, movies.duration);

  function turnHoursToMinutes(array){
    var arrayTiempo = [];
    var arrayMin = [];
    var time =0;
    for(var i=0; i<array.length;i++){
  
      arrayTiempo.push(array[i].duration.split(' ')[0].substring(0, 1) * 60);
      arrayMin.push(parseInt(array[i].duration.split(' ')[1].substring(0,2),10));
      arrayMin[i]=arrayTiempo[i]+arrayMin[i];
    
    }
    return arrayMin;
    }
    
    turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
