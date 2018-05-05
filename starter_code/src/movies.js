
  
  //Ejercicio 1
  
  function turnHoursToMinutes(movies) {
  
    var allMinutes = movies.map(function(movie) {
      movie = Object.assign({}, movie);
      var durationSplit = movie.duration.split(' ');
      var hoursToMin = 0;
      var newMin = 0;
  
      if (durationSplit[0].indexOf("h") !=-1){
        hoursToMin = Number(durationSplit[0].replace("h",""))*60;
      } else {
        hoursToMin = Number(durationSplit[0].replace("min",""));
      }
  
      if (durationSplit[1]){
        newMin = Number(durationSplit[1].replace("min",""));
      }
  
      var totalMin = hoursToMin + newMin;
      
      movie.duration = totalMin;
      return movie;
  
      // return creator(durationSplit)
    });
  
    console.log(allMinutes)
  
  }
  
  turnHoursToMinutes(movies)
 
  

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
