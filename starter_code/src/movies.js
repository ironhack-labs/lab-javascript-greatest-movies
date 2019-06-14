/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
  let newMinutes = [];
 newMinutes = array.map(function(movie){
let newMov = {};

let hoursToMinutes = movie.duration.split(' ');
let hours=0;
let minutes=0;

if(hoursToMinutes.length ==2) {
    hours = parseInt(hoursToMinutes[0])*60;
    minutes= parseInt(hoursToMinutes[1]);
}else if(hoursToMinutes.length ==1){
  if(hoursToMinutes[0].includes("h")){
    hours = parseInt(hoursToMinutes[0])*60;
  }else minutes = parseInt(hoursToMinutes[0]);
}
newMov.title= movie.title; 
newMov.year = movie.year;
newMov.director=movie.director;
newMov.duration = minutes+hours;
newMov.genre = movie.genre;
newMov.rate=movie.rate;

return newMov;
});
return newMinutes;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(array){
  let origArray = array;
  //console.log(origArray);
    let sum = origArray.reduce((accumulator,currentvalue)=>{
       let stringToFloat = parseFloat(accumulator);
       let stringToFloat2 = parseFloat(currentvalue.rate);
        
        return stringToFloat + stringToFloat2;  
    },0)
    let avg = (sum/array.length).toFixed(2);
    return parseFloat(avg);
  }
// Get the average of Drama Movies
function dramaMoviesRate(array){
  
  let onlyDramas= array.filter(function(singleMovie){   
    return singleMovie.genre.includes('Drama')&&singleMovie.rate != undefined&&singleMovie.rate != 0;
  });  
  if(onlyDramas.length ==0){return undefined;}
  return ratesAverage(onlyDramas);
}

// Order by time duration, in growing order
function orderByDuration(array){
  return array.sort(function(a,b){
     if(a.duration>b.duration){
       return 1;
     }else if(b.duration>a.duration){
       return -1;
     }else if(b.duration == a.duration){
      if(a.title>b.title){
        return 1;
      }else if(b.title>a.title){
        return -1; }
      }
  });
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(array){
  let count;
  let moviesByAuthor = array.filter(function(singleMovie){
  return singleMovie.director == 'Steven Spielberg' && singleMovie.genre.includes("Drama");
  });
  count = moviesByAuthor.length;
  if(count ==0){
  return "Steven Spielberg directed 0 drama movies!";
  }else {
  return "Steven Spielberg directed "+ count+ " drama movies!";}
}

// Order by title and print the first 20 titles
function orderAlphabetically(array){
  let count=0;
  let sortedMovies = array.sort(function(a,b){
    count++;
    
     if(a.title>b.title){
        return 1;
      }else if(b.title>a.title){
        return -1;
      }
    
  });
  let sortedTitles =[];
  for(var a=0;a<sortedMovies.length;a++){
    if(a==20)break;
    sortedTitles[a]=sortedMovies[a].title; 
  }
  return sortedTitles;
}

// Best yearly rate average
