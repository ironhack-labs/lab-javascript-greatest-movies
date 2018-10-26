/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  var array = [];
  var stringHours = 0;

  return movies.map(function(movie) {
    array = movie.duration.split(" ");

    var hours = 0;
    var min = 0;

    if (array.length === 1) {
      //horas o minutos
      if (array[0].indexOf("h") === -1) {
        //no tiene h, tiene min
        stringHours = parseInt(array[0]);
      } else {
        //tiene h
        stringHours = parseInt(array[0]) * 60;
      }
    } else {
      //tiene h y min

      hours = parseInt(array[0]) * 60;
      min = parseInt(array[1]);

      stringHours = hours + min;
    }

    return Object.assign({}, movie, {
      duration: stringHours
    });
  });
}

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  average = 0;
  var total = movies.reduce(function(accumulator, current, actual, origin) {
    if (current.rate !== "") {
      average = accumulator + parseFloat(current.rate);
    }

    return average;
  }, 0);

  average = (total / movies.length).toFixed(2);

  return parseFloat(average);
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  var dramaMovies = movies.filter(function(movie) {
    if (movie.genre.indexOf("Drama") !== -1) {
      return movie;
    }
  });

  if (dramaMovies.length === 0) {
    return undefined;
  }

  return ratesAverage(dramaMovies);
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  var moviesSorted = movies.sort(function(a, b) {
    if (a.duration > b.duration) {
      return -1;
    }

    if (a.duration < b.duration) {
      return 1;
    }

    return 0;
  });

  return moviesSorted.reverse();
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(movies) {

   if(movies.length === 0){
       return undefined;
   }
    
  var moviesSpielberg = movies.filter(function(movie) {
    return (movie.director === "Steven Spielberg" &&movie.genre.indexOf("Drama") !== -1);
  });

  
    return `Steven Spielberg directed ${moviesSpielberg.length} drama movies!`;
  }

  

// Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  var moviesFirstTwenty;

  if (movies.length < 20) {
    moviesFirstTwenty = movies.splice(0, movies.length);
  } else {
    moviesFirstTwenty = movies.splice(0, 20);
  }

  var moviesSorted = moviesFirstTwenty.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }

    if (a.title < b.title) {
      return -1;
    }

    return 0;
  });


  var moviesSortedTitle = moviesSorted.map(function (movie) {
    return movie.title;
  });

  moviesSorted = moviesSortedTitle;
  return moviesSorted;
}

// Best yearly rate average
function bestYearAvg(movies){

  if(movies.length === 0){
    return;
  }

  maxArevage=0;
  bestYear = 0;
   var moviesYear = movies.map(function(movie){
       return  movie.year;
   });

   var yearMoviesUniqui = uniquifyArray(moviesYear);

 yearMoviesUniqui.forEach(function (yearMovie){
   var moviesForYear = movies.filter(function (movie) {
     
       if(movie.year === yearMovie){
         return movie;
       }
   },0);

     var average = ratesAverage(moviesForYear);

     if(average > maxArevage){
         maxArevage = average;
         bestYear = moviesForYear[0].year;
     }else if(average === maxArevage){
        if(parseInt(bestYear)> parseInt(moviesForYear[0].year)){
          bestYear = moviesForYear[0].year;
        }
     }

 });
   
   return `The best year was ${bestYear} with an average rate of ${maxArevage}`;
}

function uniquifyArray(array){
 var newArray=[];
 var cont = 0;

 if (array.length === 0) {
   return undefined;
 }

 for (var i = 0; i < array.length; i++) {
   if((newArray.indexOf(array[i]) === -1)){
     newArray.push(array[i]);
   }
 }

 return newArray;
}