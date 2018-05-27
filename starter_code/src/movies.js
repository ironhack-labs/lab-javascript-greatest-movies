/* eslint no-restricted-globals: 'off' */

// DATA

  // Turn duration of the movies from hours to minutes 

  /*
a) primero saco todos los valores de horas, 
b) después quito la h y multiplico la hora por 60
c) le sumo lo que esté en minutos 
d) la vuelvo a meter en la array original
*/

function turnHoursToMinutes(movies){
    var moviesInMinutes = movies.map(function(movie){
      var timeArray = movie.duration.replace("h", "").replace("min", "").split(" ");
      if (timeArray[1] != null) {
          timeArray= parseInt(timeArray[0])*60 + parseInt(timeArray[1]);
          movie.duration = timeArray;
        } 
      else{
          timeArray= parseInt(timeArray[0]*60);
          movie.duration = timeArray;
    }
    
      return movie;
  
    })
    return moviesInMinutes
  }
  
  console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  var average = movies.reduce(function (sum, movie) {
      sum += movie.rate / movies.length;
      return sum;
      },0)
      return average.toFixed(2);
}
console.log(ratesAverage(movies));



// Get the average of Drama Movies

function dramaMoviesRate(movies){
  var obj = Object.assign(movies);
  obj = movies.filter(function (movie){
    return movie.genre.includes("Drama");
  })
  var average = obj.reduce(function(sum, movie){
    sum += movie.rate / obj.length;
    return sum;
  },0)
  return average.toFixed(2);
}

console.log(dramaMoviesRate(movies));



// Order by time duration, in growing order

function orderByDuration(movies){
  var obj = Object.assign(movies);
  obj = movies.sort(function(a, b){
    return a.duration - b.duration;
  })
  return obj;
}

console.log(orderByDuration(movies));


// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
  var obj = Object.assign(movies);
  obj = movies.filter(function (movie){
    return movie.genre.includes("Drama");
  })
 var obj2 = Object.assign(movies);
 obj2 = obj.filter(function(movie){
   return movie.director === 'Steven Spielberg';
 }); return obj2.length;
 }
console.log(howManyMovies(movies));


// Order by title and print the first 20 titles

function orderAlphabetically(movies){
  var obj = Object.assign(movies);
  obj = movies.sort(function(a, b){
    if (a.title < b.title){
        return -1;
    }

    if (a.title > b.title){
        return 1;
    }

    return 0;
});

  var top20 = obj.map(function(movie){
    return movie.title;
  })
  top20.splice(20);
  
  return top20;
}

console.log(orderAlphabetically(movies));


// Best yearly rate average
