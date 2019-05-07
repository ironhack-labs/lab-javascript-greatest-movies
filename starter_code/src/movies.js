//solucion 1

// function turnHoursToMinutes(movies){
//   return movies.map( original => {
//     let movie = {...original}
//     if (!movie.duration) movie.duration = ""
//     let min = 0
//     movie.duration.split(" ").forEach( el => {
//       if( el.includes('h')) min += parseInt(el) * 60
//       if ( el.includes('min')) min += parseInt(el)
//     })
//     movie.duration = min
//     return movie
//   })
//  }


//Solucion2
/*The JSON.stringify() method converts a JavaScript value to a JSON string.
The JSON.parse() method parses a JSON string, constructing the 
JavaScript value or object described by the string. 
This will allow us to create a deep copy of the array and not modify the original one*/

function turnHoursToMinutes(movies){
const moviesDeepCopy = JSON.parse(JSON.stringify(movies));

let newArray = moviesDeepCopy.map(movie =>{
  if(movie.duration.includes("h") && movie.duration.includes("min")){
  let hours = parseInt(movie.duration.slice(0, 1));
  let minutes = parseInt(movie.duration.slice(2, 5));
  hours*=60;
  minutes+=hours;
  movie.duration = minutes;
  }else if(movie.duration.includes("h")){
    let hours = parseInt(movie.duration.slice(0, 1));
    hours*=60;
    movie.duration = hours;
  }else if(movie.duration.includes("min")){
    let minutes = parseInt(movie.duration.slice(0, 5));
    movie.duration = minutes;
  }
  return movie;
  })
return newArray;
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  const sumRates = movies.reduce((sum, currentMovie)=>{
    //Ratings values are string so they have to be parsed into a float
    return sum + parseFloat(currentMovie.rate);
  },0);

  return sumRates/movies.length;
}

// // Get the average of Drama Movies
function dramaMoviesRate(movies){
  
  const dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))
  
  const total = dramaMovies.reduce((sum, currentMovie)=>{
    return parseFloat(sum + currentMovie.rate);
  },0);
  let average = total/dramaMovies.length;
 
  //To fixed keeps the number to two decimal places
  //The + sign at the begging converts the string back to a number
  return  +average.toFixed(2) || undefined;
}


// Order by time duration, in growing order
function orderByDuration(movies){
  //Orders the movies by their title first
  //by comparing the title property in each object
  movies.sort((movie1,movie2)=>{
    if (movie1.title > movie2.title){
        return 1;
    }
  
    if (movie1.title < movie2.title){
        return -1;
    }
  
    return 0;
  });
  
  //Compares the duration porperty of each movie object and
  //sorts them accordingly
  return movies.sort(function (movie1,movie2){
    
    return movie1.duration-movie2.duration
  });
   
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  // directed = false;
  // movies.forEach(element => {
  //   if(element.director ==="Steven Spielberg"){
  //     directed = true;
  //   }
  // });
  // if (directed === false){
  //   return "Steven Spielberg directed 0 drama movies!"
  // }
  
  //gets an array of Drama movies directed by steven spielberg
  const filteredMovies = movies.filter(movie=>{
    return movie.genre.includes("Drama") && movie.director === "Steven Spielberg";
  });
  
  if(filteredMovies.length === 0) {
    return undefined;}    

  return "Steven Spielberg directed " + filteredMovies.length + " drama movies!";
}


// Order by title and print the first 20 titles

function orderAlphabetically(movies){
  //create an array of movies of strings with the movie titles and 
  //sorts them by alphabetical order
  let movies20 = movies.map(movie => movie.title).sort();
  //if the array has less than 20 elements it will return them all
  //if the array has more than 20 elements it will only take the first 20 elements
  movies20 < 20 ?  movies20 = movies20 : movies20= movies20.slice(0,20);
  

  return movies20;
}


// Best yearly rate average
function bestYearAvg(movies){
  let moviesByYear = movies.sort((movie1,movie2)=>{
    return movie1.year - movie2.year;   
  })

  let moviesRating = moviesByYear.map(movie=>{
    
  })
}