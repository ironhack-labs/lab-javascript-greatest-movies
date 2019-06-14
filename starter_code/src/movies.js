/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



function turnHoursToMinutes(item){
   
  let newArray = movies.map((eachMovie)=>{
    
    let newmovies = {};
    
    newmovies.title = eachMovie.title;
    newmovies.year = eachMovie.year;
    newmovies.director = eachMovie.director;
    newmovies.duration = eachMovie.duration;
    newmovies.genre = eachMovie.genre;
    newmovies.rate = newmovies.rate;
    


if(eachMovie.duration.includes('h')&& eachMovie.duration.includes("min")){

    let time = eachMovie.duration.split(" ");
     let hours = parseInt(time[0])*60;
     let  minutes = parseInt(time[1]);
     
    newmovies.duration = hours+minutes;
     
      return newmovies;
    
}

    else if( eachMovie.duration.includes("h")){

      let hours = parseInt(eachMovie.duration.slice(0,-1)*60);
      newmovies.duration = hours;
      return newmovies;
       
    } else if(eachMovie.duration.includes("min")){

     
     let minutes = parseInt(eachMovie.duration.slice(0,-3));
     newmovies.duration = minutes;
     return newmovies;
      
    }
   
    
  });
  
  return newArray;
  
  }   
 

//Get the average of all rates with 2 decimals 

function ratesAverage (items){
  
    let average  = items.reduce((a,b)=>{
      
      let newavg = Math.round((a + b.rate / items.length)*100)/100;
      
      return newavg;
      
    },0);
    
    return average;
    
    }

// Get the average of Drama Movies

function dramaMoviesRate(item){
    
    let dramaMovies = item.filter((movies)=>{
      if(movies.genre.indexOf("Drama") !==-1){
        return true;
      }else{
        return false;
      }
    });
    if(dramaMovies.length ===0){
      return undefined;
    }
    return ratesAverage(dramaMovies);
  }



// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
