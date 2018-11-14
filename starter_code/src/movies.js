/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//This function accepts a string and converts the string to minutes -- returns minutes
const convertToMinutes = timeString => {
  //Check string and determine if it has both hours and minutes
  if (timeString.includes("h") && timeString.includes("min")){   
      let timeItems = timeString.split(' ');
      let minutes = Number.parseInt(timeItems[1]);
      let hours = Number.parseInt(timeItems[0]);
      return minutes + hours * 60;
    }
  //if it only has hours then convert to it and multiply times 60
 else if (timeString.includes("h")){   
      let hours = Number.parseInt(timeString);
      return hours * 60;
    }
  //If it only has minutes
 else {
      const minutes = Number.parseInt(timeString);
      return minutes;
    }}
//Take array and update duration key so it is by minutes
const turnHoursToMinutes = (array)=> array.map((elem)=>{
    const duration = convertToMinutes(elem.duration); 
    return {...elem, duration:duration};
  })

// Get the average of all rates with 2 decimals 
  const ratesAverage = (movies) => {
    //Reading the rate from the movies array and converting it to float before it is added to accumulator
    let averageRating = movies.reduce((accum,movie)=> accum + Number.parseFloat(movie.rate),0); 
    //Rounding result to 2 decimals
    averageRating = averageRating.toFixed(2);   
    //Getting average by dividing it by the length of array 
    averageRating = (averageRating/movies.length);    
    console.log(averageRating);
    return (averageRating);
  }
// Get the average of Drama Movies
  const dramaMoviesRate = (movies) =>{    
    let  dramaMovies = movies.filter(genero => genero.genre.includes('Drama'));
    if (dramaMovies.length ===0) {
      return undefined;
    }
    else {
      average = dramaMovies.reduce((accum,movie)=> accum + parseFloat(movie.rate),0);
      average = average.toFixed(2);   
      average = average/dramaMovies.length;
      average = average.toFixed(2);
      console.log(average);
      return Number.parseFloat(average);
    }
  }


// Order by time duration, in growing order
  


// How many movies did STEVEN SPIELBERG
  const howManyMovies = (movies)=>{
    let howMany = "";
    let spielbergMovies = movies.filter(director => (director.director === "Steven Spielberg" && director.genre.includes("Drama")))
    let total = spielbergMovies.length;    
    howMany = `Steven Spielberg directed ${total} drama movies!`;
    return howMany;    
  }


// Order by title and print the first 20 titles


// Best yearly rate average
