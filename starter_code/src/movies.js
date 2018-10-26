/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function hoursToMinutes(hoursMinutes){
  var totalMins=0;
  var hIndex=hoursMinutes.indexOf("h");
  if (hIndex!=-1){
    totalMins+= 60*parseInt(hoursMinutes.substring(0,hIndex));
    console.log (hoursMinutes.substring(hIndex));
    hoursMinutes=hoursMinutes.substring(hIndex).replace("h","").replace(" ","")
  }
  minIndex=hoursMinutes.indexOf("min");
  if (minIndex!=-1){
    totalMins+= parseInt(hoursMinutes.substring(0,minIndex));
  }
  return totalMins;
  }


function turnHoursToMinutes(movies){
  return movies.map(function(movie){
    var newMovie={...movie,duration:hoursToMinutes(movie.duration)};
    return newMovie;
  });

}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  if (movies.length==0){
    return undefined;
  }
  return Math.round((movies.reduce(function(acc,movie){
     return acc + parseInt(movie.rate==''?0:movie.rate);
     },0)/movies.length)*100)/100;
   
 }
// Get the average of Drama Movies

function dramaMoviesRate(movies){

  return ratesAverage(movies.filter(function(movie){
    return movie.genre.indexOf("Drama")!=-1;
  }));
}
// Order by time duration, in growing order
function orderByDuration(movies){
  // var newMovies= {...movies};
  movies.sort(function (a,b){
    var order=a.duration>b.duration ;
    return (order==0?(a.title>b.title):order);
  })
  return movies;
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  if (movies.length==0) return undefined;
  var moviesCount=movies.filter(function(movie){
    return movie.genre.indexOf("Drama")!=-1 && movie.director=="Steven Spielberg";
  }).length;
  return `Steven Spielberg directed ${moviesCount} drama movies!`;
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var sortedTitles=[];
  movies.sort(function (a,b){
    return ((a.title>b.title)?1:-1);
  });
  for (i=0;i<20 && i<movies.length;i++){
      sortedTitles.push(movies[i].title);
  }
  return sortedTitles;
}

// Best yearly rate average
