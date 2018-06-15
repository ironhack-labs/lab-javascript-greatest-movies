/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrMovies){
  var moviesCopy = [];
  var duracion = "";
  var durMin = 0;
  
  if (arrMovies.length > 0){
    moviesCopy = arrMovies.slice(0);
    for (var i=0 ; i < moviesCopy.length; i++){
      if (moviesCopy[i].duration.length > 2 && moviesCopy[i].duration.indexOf("h") > 0){
        duracion = moviesCopy[i].duration.split("h ");
        console.log(moviesCopy[i].duration);
        console.log(duracion[1])
        duracion[1] = duracion[1].split("min")[0];
        durMin = duracion[0]*60 +  parseInt(duracion[1]);
      }else if(moviesCopy[i].duration.indexOf("min")>0){
        duracion=moviesCopy[i].duration.split("min")
        durMin=duracion[0];
      }
      
      else {
        duracion = moviesCopy[i].duration.split("h")
        durMin = duracion[0]*60
      }
      moviesCopy[i].duration = durMin.toString();
    }
  } else {
    return undefined;
  }
  console.log()
  return [{duration:parseInt(moviesCopy[0].duration)}];
}

// Get the average of all rates with 2 decimals 
function ratesAverage(arrMovies){
  var avg = 0;
  if (arrMovies.length > 0){
    avg = arrMovies.reduce(function(acum, e){
      return acum + parseFloat(e.rate)/arrMovies.length;
    }, 0) 
  }
  else{
    return undefined;
  }
  console.log(avg.toFixed(2));
  return avg;
}

// Get the average of Drama Movies
function dramaMoviesRate(arrMovies){
 
  avg=arrMovies.reduce(function(a,e){
    return a+e.rate/arrMovies.length 
  
  },0)
  console.log(avg)
  return Number(avg.toFixed(2))
 
} 

// Order by time duration, in growing order
function orderByDuration(arrMovies){
  var arr=arrMovies.sort(function(a,b){
   if(a.duration === b.duration){
     return a.title > b.title
   }
   return a.duration - b.duration
  })
  
  return arr
 }

// How many movies did STEVEN SPIELBERG
function howManyMovies(arrMovies){
  arr=[]
  if (arrMovies.length > 0){
    arr=arrMovies.filter(function(e){
     return e.genre.indexOf("Drama") >=0 && e.director == "Steven Spielberg"
    })
  } else {
    return undefined;
  }
  console.log(arr)
 // str=arr.reduce(function(a,e){
  //  return a+""+e.title
  //},"")
  
  
  
  return 'Steven Spielberg directed '+ arr.length +' drama movies!';
}

// Order by title and print the first 20 titles
function orderAlphabetically(arrMovies){

  var arr=arrMovies.map(function(e){
    return e.title
  })
   var primerasVeinte=arr.sort()
   if(primerasVeinte.length>20){
     primerasVeinte=primerasVeinte.slice(0,20)
   }
  
  return primerasVeinte
}

// Best yearly rate average
