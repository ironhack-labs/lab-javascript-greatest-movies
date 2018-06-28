/* eslint no-restricted-globals: 'off' */

// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
    var turnedTime = movies.map(function(element){
       var totalDuration = element.duration
       var finalHour;
       var finalMinutes1;
       var finalMinutes2;
       var finalMinutes3;
       var endMinutes;
       for (i=0; i<totalDuration.length; i++){
           if(totalDuration.charAt[i]==='h'){
            finalHour=totalDuration.charAt[i-1];
           }
           if(totalDuration.charAt[i]==='m'){
            finalMinute1=totalDuration.charAt[i-1];
            finalMinute2=totalDuration.charAt[i-2];
            finalMinutes3=finalMinutes1.toString()+finalMinutes2.toString();
           }
       }
       endMinutes=finalHour*60+finalMinutes3;
       element.duration=endMinutes;
    });
    return turnedTime

}

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


/*

var movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    director: 'Frank Darabont',
    duration: '2h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.3'
  },
  {
    title: 'The Godfather',
    year: '1972',
    director: 'Francis Ford Coppola',
    duration: '2h 55min',
    genre: ['Crime', 'Drama'],
    rate: '9.2'
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    director: 'Francis Ford Coppola',
    duration: '3h 22min',
    genre: ['Crime', 'Drama'],
    rate: '9.0'
  }
]


function turnHoursToMinutes(movies) {
  var newArray = movies.map(function (element) {
    var totalDuration = element.duration
    var finalHour;
    var finalMinutes1;
    var finalMinutes2;
    var finalMinutes3;
    var endMinutes;
    console.log(totalDuration)
    for (var i = 0; i < totalDuration.length; i++) {
     // console.log(totalDuration.charAt(i))
      if (totalDuration.charAt(i) === 'h') {
        finalHour = totalDuration.charAt(i - 1);
        //console.log(finalHour)
      }
      if (totalDuration.charAt(i) === 'm') {
        finalMinute1 = totalDuration.charAt(i - 1);
        finalMinute2 = totalDuration.charAt(i - 2);
        finalMinutes3 = finalMinutes1.toString()+finalMinutes2.toString()
        console.log(finalMinute1)
        console.log(finalMinute2)
        console.log(finalMinutes3)
      }
    }
    return totalDuration
  });

  console.log(newArray)
}

turnHoursToMinutes(movies)



*/