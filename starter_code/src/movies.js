/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
    array.forEach(function(movie){
     var mins = parseInt(movie.duration.substring(0, 1)) * 60;
     if(movie.duration.includes("min")){
     var total= parseInt(movie.duration.substring(3,5)) + mins;
     movie.duration = total;
     } else {
       movie.duration = mins;
     }
   });
   return array;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
    var average = array.reduce(function(sum, movie){
      return sum += parseFloat(movie.rate);
    }, 0);
    return average/array.length;
} 

// Get the average of Drama Movies
function dramaMoviesRate(array){
    var drama = array.filter(function(movie){
      for(var i = 0; i < movie.genre.length; i++){
      return movie.genre[i] === "Drama";
      }
    });
    return ratesAverage(drama);
  }


// Order by time duration, in growing order
function orderByDuration(array){
    var minArray = turnHoursToMinutes(array);
    
    minArray.forEach(function(movie){
      movie.duration = parseInt(movie.duration.replace("min", ""));
    });
    
    minArray.sort(function(a, b){
      return a.duration - b.duration
    });
    
    return minArray;
  }

// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {
    var number = array.filter(function(movie){
      return movie.director === "Steven Spielberg"
    });
     return number;
  }

// Order by title and print the first 20 titles
function orderAlphabetically(array){
    var peliculas = array.map(function(movie){
      return movie.title;
    });
    
    peliculas.sort();
    
    return peliculas.slice(0,20);
}

// Best yearly rate average
function uniquifyArray(array){
    if (array.length===0){
      return;
    }
    for (var i=0; i<array.length; i++){
      for (var j=i+1; j<array.length; j++){
        if( array[i]===array[j]){
          array.splice(j,1);
          j--;
        }
      }
    }
    return array;
  }

  function bestYearAvg(array){
    //Crea la variable years que guarda un array con todos los años que se encuentran en movies
    var years = array.map(function(movie){
      return movie.year;
    });
    
    //Elimina los años que se encuentran duplicados dentro del arreglo years 
    years = uniquifyArray(years);
    
    //Variable que va a contener los averages por años y el contador
    best = [0];
    count = 0;
    
    //Se recorre cada elemento del arreglo years
    years.forEach(function(year){
      //Se filtra el arreglo movies para que recorra cada objeto del arreglo
      var y = array.map(function(movie){
      return movie.year;
      });
      //Se asigna el avg rate  a una var
      var ans= ratesAverage(y)
      //Se inserta el valor de avg en un arreglo
      best.push(ans);
      //Si el valor del avg del año es mayor que count, se le asigna ese valor a count
      if (ans > count){
        count = ans}
    });
      
      //Se obtiene el indice del elemento que tuvo el mayor avg
      best.indexOf(count);
    
    //Regresa el año con el mayor avg
    return years[count];
    
  }
  
  console.log(bestYearAvg(movies));

