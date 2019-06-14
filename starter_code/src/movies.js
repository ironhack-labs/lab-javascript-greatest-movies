/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (moviesArray){

  let newMoviesArray = moviesArray.map((movie)=>{

     let editedMovie={};

     Object.assign(editedMovie,movie);
     if(editedMovie.duration.includes("h") && editedMovie.duration.includes("min")){
 
        editedMovie.duration = editedMovie.duration.replace("h","");
        editedMovie.duration = editedMovie.duration.replace("min","");
        let arrayDuration = editedMovie.duration.split(" ");
        editedMovie.duration = Number(arrayDuration[0] * 60) + Number(arrayDuration[1]);

        return editedMovie;

     }else if(editedMovie.duration.includes("h")){
  
        editedMovie.duration = editedMovie.duration.replace("h","");
        let arrayDuration = editedMovie.duration.split();
        editedMovie.duration = Number(arrayDuration[0] * 60);

        return editedMovie;

     }else{

        editedMovie.duration = editedMovie.duration.replace("min"," ");
        let arrayDuration = editedMovie.duration.split();
        editedMovie.duration = Number(arrayDuration[0]);

        return editedMovie;

     }
     
     
  })

  return newMoviesArray;
}

function ratesAverage(){

  let arr = turnHoursToMinutes(movies);

  total = arr.reduce((a, b) => {return a + b.duration}, 0);

  return total/movies.length;
}

function ratesAverage (moviesArray){

  let ratesArray = moviesArray.map((movie)=>{

     return Number(movie.rate)
     
  })

  let totalRates = ratesArray.reduce((a, b) => (a+b));

  return Math.round((totalRates/ratesArray.length)*100)/100;
  
}

function dramaMoviesRate (){
  
}

function dramaMoviesRate (movies){

  let ratesDrama = movies.filter(movie => movie.genre.includes("Drama"));
  
  if(ratesDrama.length===0){
    return;
  }

  let ratesArray = ratesDrama.map((movie)=>{

    return Number(movie.rate);
    
  })

  let totalRates = ratesArray.reduce((a, b) => (a+b));

  return Math.round((totalRates/ratesDrama.length)*100)/100;

}


// function orderByDuration(movies){
//   if(movies.length===1)
//     return movies;
//   else{
//     movies.sort((a,b)=>a.title > b.title);
//   return  movies.sort((a,b)=>a.duration - b.duration);
//   }
// }
function orderByDuration(movies){

  movies.sort((a,b)=>{
    if(a.duration < b.duration){
    return -1}
    else if(a.duration===b.duration){
      if (a.title < b.title){
        return -1;
      }else if(a.title === b.title){
        return 0;
      }else{
        return 1;
      }
     return 0;
    }else{
      return 1;
    }
  });
   return movies;
  }
function howManyMovies(arrayMovies){
 if(arrayMovies.length === 0){
   return;
 }
  return arrayMovies.length.toString(); 
}


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
