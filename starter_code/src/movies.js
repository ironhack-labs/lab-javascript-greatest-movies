/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr){
  var timeString;
  var timeStringSplited;
  var hours
  var minutes
  var total=0;
  var finalArray = arr.map(function(element){
    timeString=element.duration
    timeStringSplited=element.duration.split(" ")
    hours=0;
    minutes=0;
    total=0;
    console.log(timeStringSplited)
    if (timeStringSplited[0].charAt(1)==='h'){
      hours =  parseInt(timeStringSplited[0].replace(/(?![0-9])\w+/g,""));
      if(timeStringSplited.length>1 && timeStringSplited[1].indexOf('m')>-1){
        minutes = parseInt(timeStringSplited[1].replace(/(?![0-9])\w+/g,""));
        total=hours*60+minutes
      }else{
        total=hours*60
      }
    }else{
      minutes = parseInt(timeStringSplited[0].replace(/(?![0-9])\w+/g,""));
      total=minutes
    }
   element.duration=total
   return element
  });
  return finalArray
  console.log(finalArray)
}

turnHoursToMinutes(movies)

// Get the average of all rates with 2 decimals

function ratesAverage(movies) {
  var rankSum = movies.reduce(function(accumulator, movies) {
    return accumulator + movies.rate;
  }, 0);
  var media = rankSum / movies.length;
  return (Math.round(media*100)/100);
}

// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  var dramaRate = movies.filter(function(movie) {
    return movie.genre.indexOf("Drama") !== -1;
  });
  if (isNaN(ratesAverage(dramaRate))) {
    return undefined;
  }
  return (ratesAverage(dramaRate));
}

console.log("The average drama rate is "+dramaMoviesRate(movies))

// Order by time duration, in growing order

function orderByDuration(movies){

return movies.sort();

}


// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){
    if (movies.length===0){
        return undefined;
    }
    var spielbergFilms=movies.filter(function(movie){
        if (movie.genre.indexOf("Drama") !=-1 && movie.director.indexOf("Steven Spielberg")!=-1){
            return movie
        }
    });
    return  "Steven Spielberg directed "+spielbergFilms.length+" drama movies!"
}


// Order by title and print the first 20 titles

function orderAlphabetically(movies){
    var auxMovies = movies.map(function(element){
          return element.title
    });

    auxMovies.sort();
    var result;
    
    if(auxMovies.length>=20){
        result = auxMovies.slice(0,20);
    }else{
        result=auxMovies;
    }
    return result;
}


// Best yearly rate average


