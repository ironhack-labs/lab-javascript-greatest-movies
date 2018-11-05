/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
// function turnHoursToMinutes(movie){

//   var newMoviesArray = movies.map(function(movie){
//     arr = movie.duration.split(" ");
//     //[Xh, Xmin]
//     hour = arr.filter(function(el) {
//       return el.indexOf("h") !== -1;
//     })
//     //console.log(hour);
//     if (hour.length > 0) {
//       hour = hour[0].slice(0, hour[0].length-1);
//     }
//     else {
//       hour = 0;
//     }
//     minutes = arr.filter(function(el) {
//       return el.indexOf("m") !== -1;
//     })
//     //console.log(minutes);
//     if (minutes.length > 0) {
//       minutes = minutes[0].slice(0, minutes[0].length-3);
//     }
//     else {
//       minutes = 0;
//     }
//     result = parseInt(hour*60) + parseInt(minutes);
//     nuevo = Object.assign({}, movie);
//     nuevo.duration = result;
//     return nuevo;

//   })
// }

function turnHoursToMinutes( movies ){
  let hoursToMinutes = movies.map(function(movies){
    let newArray = movies.duration.split(" ");
    //console.log(newArray);

    let hour = newArray.filter(function(element){
      return  element.indexOf("h") !== -1
    })
    if(hour.length > 0){
      hour = hour[0].slice(0, hour[0].length-1)
      //console.log(hour)
    } else{
      hour = 0;
    } 

    let minutes = newArray.filter(function(minute){
      return minute.indexOf("m") !== -1
    })
    //console.log(minutes)
    if(minutes.length > 0){
      minute = minutes[0].slice(0, minutes[0].length-3)
      //console.log(minute)
    } else{
      minute = 0;
    }

    result = parseInt(hour * 60) + parseInt(minute);
    console.log(result)
    updatedArray = Object.assign({}, movies);
    updatedArray.duration = result;

    return updatedArray
  })
  return hoursToMinutes
}

var hoursToMinutes = turnHoursToMinutes(movies)


function ratesAverage(movies){

  let totalRate = movies.reduce(function(sum, individualRate){
    return sum + parseFloat(individualRate.rate)
  }, 0)
  //console.log(totalRate)

  let averageRate = totalRate / movies.length;

  //console.log(averageRate)
  return averageRate
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies

function dramaMoviesRate(movies){
  let onlyDramaMovies = movies.filter(function(movie){
    if(movie.genre.includes("Drama")){
      return movie.genre
    } else if(movie.genre.includes("Drama") === false){
      return
    }
  })

  let totalDramaRate = onlyDramaMovies.reduce(function(sum, individualRate){
    return sum + parseFloat(individualRate.rate)
  }, 0)
  //console.log(totalDramaRate)

  let averageDramaRate = totalDramaRate / onlyDramaMovies.length;
  averageDramaRate.toFixed(2)

  return averageDramaRate
}


// Order by time duration, in growing order

function orderByDuration(movies){
  var sortedMovies = turnHoursToMinutes(movies)

  sortedMovies.sort(function(a,b) {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    }
    return 0;
  })
  sortedMovies.sort(function(a, b){
    return a.duration - b.duration
  })
  
  return sortedMovies
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(movies) {
  if (movies.length === 0) {
    return undefined;
  }
  else {
    var stevie = movies.filter(function(movie){
      return movie.director === "Steven Spielberg";
    })
    var onlyDrama = stevie.filter(function(movie){
      return movie.genre.indexOf("Drama") !== -1;
    })
    var result = onlyDrama.length;
    //console.log(result)
  }
  return "Steven Spielberg directed " + result + " drama movies!";
}



// Order by title and print the first 20 titles

function orderAlphabetically(movies){
  movies.sort(function(a, b){
   if (a.title > b.title) {
      return 1;
    }
    
    else if (a.title < b.title) {
      return -1;
    }
    return 0;
  })
  if (movies.length >= 20) {
    movies.splice(20);
  }

  var onlyTitles = movies.map(movie => movie.title);
  return onlyTitles;
}

// Best yearly rate average
