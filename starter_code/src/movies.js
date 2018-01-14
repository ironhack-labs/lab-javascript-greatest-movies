/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  var newArray=[];
  
  newArray= movies.map(function (movie){
    var newObject={};
    var hours=0;
    var minutes=0;
    
    if (movie.duration.includes("h") && (movie.duration.includes("min")==false))
    {
      hours= parseInt(movie.duration.substring(0,1))
    }
    else if((movie.duration.includes("h")==false) && movie.duration.includes("min"))
    {
      minutes=parseInt(movie.duration.substring(0,3))
    }
    else{
      hours= parseInt(movie.duration.substring(0,1));
      minutes=parseInt(movie.duration.substring(3,5));
    }
    
    newObject.duration= hours*60 + minutes;
    newObject.title = movie.title;
    newObject.year=movie.year;
    newObject.director=movie.director;
    newObject.genre=movie.genre;
    newObject.rate=movie.rate;
    return newObject;
    
  })
  return newArray
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  var  total, averageString="";
  total=movies.reduce(function(sum, movie){
    if (movie.rate=="")
    {return(sum)}
    else {
      return (sum + parseFloat(movie.rate))
    }
  },0)
  averageString=(total/movies.length).toFixed(2);
  return parseFloat(averageString)
}
// Get the average of Drama Movies

function dramaMoviesRate(movies){
  var drama=[];
  drama= movies.filter(function(movie){
    return movie.genre.includes("Drama")==true
  });
  if (drama[0]==undefined){
    return undefined
  }
  else{
    return ratesAverage(drama)
  }
}

// Order by time duration, in growing order
function orderByDuration(movies){
  movies.sort(function(a,b){
    
    if (a.duration== b.duration){
      if ( a.title > b.title){
        return 1
      }
    }
    else {
      return a.duration - b.duration
    }
    
  });
  return movies
}
console.log(turnHoursToMinutes(movies));

//How many movies did STEVEN SPIELBERG
function stevenSpielberg(movies){
  return movies.filter(function(movie){
    return (movie.director==="Steven Spielberg");
  })
}

function dramaMovies (movies){
  return movies.filter(function(movie){
    return (movie.genre.includes("Drama"))
  })
}

function howManyMovies(movies){
  var n;
  if (movies.length==0)
  {
    return undefined;
  }
  else {
    if (stevenSpielberg(movies).length==0)
    {
      n=0
    }
    else if (stevenSpielberg(movies).length==movies.length)
    {
      n=dramaMovies(movies).length
    }
    else {
      n=dramaMovies(stevenSpielberg(movies)).length;
    }
    return ("Steven Spielberg directed " + n + " drama movies!");
  }
}

// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  movies.sort(function(a,b){
    if (a.title > b.title){
      return -1;
    }
    
    if (a.title < b.title){
      return 1;
    }
    
    return 0;
    
  });
  movies.reverse();
  var twentyMovies=movies.slice(0,20);
  var twentyTitles=[];
  for (var i=0; i< twentyMovies.length; i++){
    twentyTitles[i]=twentyMovies[i].title;
  }
  return twentyTitles;
}
// Best yearly rate average
function bestYearAvg(movies){
  if (movies.length===0){
    return undefined
  }
  else {
    
    var uniqueYear=[];
    for (var i=0; i< movies.length; i++){
      if (uniqueYear.indexOf(movies[i].year)==-1){
        uniqueYear.push(movies[i].year)
      }}
      
      var yearAndRate=[];
      for (var i=0; i<uniqueYear.length; i++){
        yearAndRate[i]={
          year: uniqueYear[i],
          rate: ratesAverage(movies.filter(function(movie){
          return movie.year==uniqueYear[i]
           }))
          }
        }
        yearAndRate.sort(function(a,b){
          if (a.rate===b.rate){
            return (parseInt(a.year)-parseInt(b.year))
          }
          else {
          return (b.rate - a.rate)
          }
        })
    return ("The best year was " + yearAndRate[0].year + 
    " with an average rate of " + yearAndRate[0].rate);
  }
}