/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(arrayOfMovies){
  var durationHours;
  var durationMin;
  var durArray=[];
  var moviesInMinutes = arrayOfMovies.map((oneMovie)=> {
 
  if (oneMovie.duration.indexOf("h") === -1 ){
    durationHours = 0;
    durArray = oneMovie.duration.split("min")
    
    durationMin = Number(durArray[0]);
    oneMovie.newDuration = durationMin;
    
  }
  else if (oneMovie.duration.indexOf("m") === -1){
    durationMin = 0;
    durArray = oneMovie.duration.split("h")

    durationHours = Number(durArray[0]);
    console.log(durationHours)
    oneMovie.newDuration = durationHours * 60;
  }

  else{
    durArray = oneMovie.duration.split("h ")
    durArray[1]=durArray[1].slice(0, (0,durArray[1].length-3));
    durationHours =Number(durArray[0])*60;
    durationMin = Number(durArray[1]);
    oneMovie.newDuration = (durationHours + durationMin);
  }
  let updatedMovie = {
    title: oneMovie.title,
    year: oneMovie.year,
    director: oneMovie.director,
    duration: oneMovie.newDuration,
    genre: oneMovie.genre,
    rate: oneMovie.rate
  }
  return updatedMovie;
  })
  return moviesInMinutes;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(arrayOfMovies) {
  var sumOfRatings = arrayOfMovies.reduce((total, eachMovie)=>{
   return total + Number(eachMovie.rate)
  },0) 
  return sumOfRatings/arrayOfMovies.length
 }

// Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies){
  var allDramaMovies = arrayOfMovies.filter((oneMovie)=>{
    return oneMovie.genre.includes("Drama");
  });
  if (allDramaMovies.length === 0){
    return undefined;
  }
  var totalDramaRate = allDramaMovies.reduce((total,eachMovie)=>{
    total += Number(eachMovie.rate)
    return total;
  },0);

  var avDramaMoviesRate  = roundTwoDecimals(totalDramaRate/allDramaMovies.length);
  return avDramaMoviesRate;

}

function roundTwoDecimals(num) {
  let numStr = num.toString();
   console.log(numStr)
  let start = numStr.indexOf('.')+2; 
  console.log(start)
  if (start < numStr.length-1){
   let numArray =numStr.split('')
   console.log(numArray)
   let roundNumArray = numArray.splice(0,start+1);
   console.log(roundNumArray)
   let roundNum = roundNumArray.join('')
    console.log(roundNum)
    return Number(roundNum)
  } else { return num}
 }

// Order by time duration, in growing order
function orderByDuration(arrayOfMovies){
  // arrayOfMovies = turnHoursToMinutes(movies);
  arrayOfMovies.sort((a,b)=>{
    if(a.duration > b.duration){return 1}
    if(a.duration < b.duration){return -1}
    if (a.duration == b.duration){
      if(a.title > b.title){return 1}
      if(a.title > b.title){return -1}
      if(a.title > b.title){return 0}
    }
  })
 return arrayOfMovies 
}



// How many movies did STEVEN SPIELBERG

function howManyMovies(arrayOfMovies){
  var allDramaMovies = arrayOfMovies.filter((oneMovie)=>{
    return oneMovie.genre.includes("Drama");
  });
  // if (allDramaMovies.length === 0){
  //   return undefined;
  var dramasBySpielberg = allDramaMovies.filter((oneMovie)=>{
    return oneMovie.director = "Steven Spielberg";
    console.log(dramasBySpielberg)
  });
  var totalDramasBySpielberg = dramasBySpielberg.reduce((total,eachMovie)=>{
    total ++;
    // console.log(total)
  },0);
  
}



// Order by title and print the first 20 titles


// Best yearly rate average
