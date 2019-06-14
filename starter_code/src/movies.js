/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies) {
  let duration = 

    movies.map((oldmovie) => {
      let movie = {...oldmovie};
      let minutes = 0;
      let hours = 0;
    let durationArray = movie.duration.split(" ");
    
    if (durationArray.length > 1) {
        hours = durationArray[0].split("h")[0] + '';
        hours = parseInt(hours);
        minutes = durationArray[1].split("min")[0] + '';
        minutes = parseInt(minutes);
    } else {
      
      if (durationArray[0].split("h").length > 1){
        hours = durationArray[0].split("h")[0] + '';
        hours = parseInt(hours);
      }
      if (durationArray[0].split("min").length > 1) {
        minutes = durationArray[0].split("min")[0] + '';
        minutes = parseInt(minutes);
      }
    }

    let totalminutes = hours * 60 + minutes *1;
    
    let result =  hours + "-" + minutes + " = " + totalminutes;
      movie.duration = totalminutes;
    return movie;
  });

  return duration;

}


// Get the average of all rates with 2 decimals 

/* version 2
*/

function ratesAverage(movies) {
  let rateArray = movies.map((movie)=>{
     // parsefloat(movie.rate)// 
    console.log("check nan: " + parseFloat( movie.rate) );
    let allRate = 0
    if ( movie.rate.length < 1) {
        allRate = 0;
    } else {
      allRate = parseFloat( movie.rate);
    }
    console.log("2-check nan: " + allRate );

    return allRate;
  });

// console.log(rateArray);

  let total = rateArray.reduce( (accum, arate) => {
    arate = parseFloat(arate);
    //console.log(arate);
      return accum + arate;
  },0);
  let average = total / movies.length;
  return parseFloat( average.toFixed(2));
}

/* version 1
function ratesAverage(movies) {
  let rateArray = movies.map((movie)=>{
     // parsefloat(movie.rate)// 
    console.log(parseFloat( movie.rate) );
    return parseFloat( movie.rate);
  });

console.log(rateArray);

  let total = rateArray.reduce( (accum, arate) => {
    arate = parseFloat(arate);
    console.log(arate);
      return accum + arate;
  },0);
  let average = total / movies.length;
  return parseFloat( average.toFixed(2));
}
 */
// Get the average of Drama Movies
function dramaMoviesRate(movies) {

  let filteredMovies = 
  movies.filter( (movie)=>{
    //console.log(movie.genre);
    // console.log(movie.genre.indexOf("Drama"));
    let dramaExist = movie.genre.indexOf("Drama");

    if (dramaExist < 0) {
      return false;
    } else {
      return true;
    }
    
  });
  if (filteredMovies.length < 1) {return undefined;}

  return ratesAverage(filteredMovies) ;
}

// Order by time duration, in growing order
function orderByDuration(movies) {
  let newMovies = turnHoursToMinutes(movies);

  

  let comparator = (A, B) => {
    if ( A.duration > B.duration) {
      return 1;
    } else if ( A.duration < B.duration) {
      return -1;
    } else {
      
      let localComp = A.title.localeCompare(B.title);
      console.log("compare: " + localComp);
      return localComp;
    }
  };


  newMovies.sort(comparator);

  let justDuration = 
  newMovies.map((movie)=>
  { 
      return {"duration": movie.duration}; 
  });

return justDuration;


}

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
