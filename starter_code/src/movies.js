
/* eslint no-restricted-globals: 'off' */
/*------------jasmine, how you dare?------------*/

// Turn duration of the movies from hours to minutes--------------------------------- 
function turnHoursToMinutes(moviesArray) {
  var turnDurationInMin = moviesArray.map(function (movie) {
    // if includes h and min replace for nothing y remove space
    if (movie.duration.includes('h') && movie.duration.includes('min')) {
      var removeHourMin = movie.duration.replace('h', '').replace('min', '').split(' ');
      var stringToNumber = parseInt(removeHourMin[0] * 60) + parseInt(removeHourMin[1]);

      //return new object
      return Object.assign({}, movie, { duration: stringToNumber });
    } else {
      //else check if includes h and remove it
      if (movie.duration.includes('h')) {
        var removeHour = parseInt(movie.duration.replace('h', '') * 60);

        return Object.assign({}, movie, { duration: removeHour })
        //if not includes h remove the min
      } else {
        var removeMin = parseInt(movie.duration);

        return Object.assign({}, movie, { duration: removeMin });
      }

    }

  });

  return turnDurationInMin
}



// Get the average of all rates with 2 decimals---------------------------------
function ratesAverage(moviesArray){
  var averageMovie = moviesArray.reduce(function(sum, movie){ //sum: accumulator, movie: every object-movie in the array
    return sum + parseFloat(movie.rate); //not works until only movie.rate has parseFloat, not both!
  }, 0); 
  var result = averageMovie / moviesArray.length;
  return parseFloat(result.toFixed(2)); //rounded to 2 decimals 
} //I have to put parseFloat everywhere , don't know why


// Get the average of Drama Movies---------------------------------
function dramaMoviesRate(moviesArray) {
  var obj = Object.assign(moviesArray);
  obj = moviesArray.filter(function (movie) {
    return movie.genre.includes('Drama') //take genre with 'Drama'
  });
  var averageMovie = obj.reduce(function (sum, movie) { //take movies with 'Drama'
    return sum + parseFloat(movie.rate);
  }, 0);
  var result = averageMovie / obj.length; //dramaMovies.length, not moviesArray!
  return parseFloat(result.toFixed(2)); 
}


// Order by time duration, in growing order---------------------------------

function orderByDuration(moviesArray) {
  var obj = Object.assign(moviesArray);
  obj = moviesArray.sort(function (movieA, movieB) {
    if(movieA.duration === movieB.duration){
      return movieA.title < movieB.title ? -1 : 1;
    } else{
      return movieA.duration - movieB.duration;
    }
  })
  return obj;

}




// How many movies did STEVEN SPIELBERG---------------------------------
function howManyMovies(moviesArray) {
  var spielbergMovies = moviesArray.filter(function(movie){
    return (movie.director.includes('Steven Spielberg') && movie.genre.includes('Drama'));
  });
  if (moviesArray.length !== 0) {
    return 'Steven Spielberg directed ' + spielbergMovies.length + ' drama movies!';
  }
}

// Order by title and print the first 20 titles---------------------------------
function orderAlphabetically(moviesArray) {
  var abcMovies = moviesArray.sort(function (movieOne, movieTwo) { //order by comparation
    if (movieOne.title > movieTwo.title) {return 1;}
    if (movieOne.title < movieTwo.title) {return -1;}
    else {return 0;}
  });

  var only20 = abcMovies.slice(0, 20); //var that storages only 20 movies objects

  var onlyTitles = [] //empty array for the title of the 20 movies

  only20.forEach(function (movie) { //.push of the titles value of the 20 movies into the empty array
    onlyTitles.push(movie.title);
  }); 
  return onlyTitles;
}


// Best yearly rate average

