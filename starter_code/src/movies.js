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
function roundTwoDecimals(num) {
  let numStr = num.toString();
  let start = numStr.indexOf('.')+2; 
  if (start < numStr.length-1){
    let numArray =numStr.split('')
    let roundNumArray = numArray.splice(0,start+1);
    let roundNum = roundNumArray.join('')
      return Number(roundNum)
  } else { return Number(num)}
}

function dramaMoviesRate(arrayOfMovies) {
  if (arrayOfMovies.length > 0) {
    var allDramaMovies = arrayOfMovies.filter((oneMovie)=>{
      return oneMovie.genre.includes("Drama");
    });
    if (allDramaMovies.length === 0){
      return undefined;
    } else {
    var sumOfRatings = allDramaMovies.reduce((total, eachMovie)=>{
      return total + Number(eachMovie.rate)
    },0) 
    return roundTwoDecimals(sumOfRatings/allDramaMovies.length)
  }  
  }
}

// Order by time duration, in growing order

function orderByDuration(arrayOfMovies){  
  // let arrayWithMinutes = turnHoursToMinutes(arrayOfMovies);
  // console.log(arrayWithMinutes)
  // let orderedMovies = arrayWithMinutes
  arrayOfMovies.sort((a,b)=> { 
   if(a.duration < b.duration) {return -1}
   if (b.duration < a.duration) {return 1}
   if(b.duration == a.duration) {
      if(a.title < b.title) {return -1}
      if (b.title < a.title) {return 1}
      if(b.title == a.title) {return 0}
    }
  })
 return arrayOfMovies //orderedMovies
 }


function howManyMovies(arrayOfMovies){
  if (arrayOfMovies.length === 0) {return undefined}
  else {
    var sumOfMovies = 0;
    var spilbergMovies = arrayOfMovies.filter((oneMovie)=>{
      return (oneMovie.genre.includes("Drama") & oneMovie.director.includes('Steven Spielberg'));
    }); 
    sumOfMovies = spilbergMovies.length; 
  }
  return "Steven Spielberg directed " +sumOfMovies + " drama movies!"  
}


// Order by title and print the first 20 titles
function orderAlphabetically(arrayOfMovies){  
  arrayOfMovies.sort((a,b)=> { 
      if(a.title < b.title) {return -1}
      if (b.title < a.title) {return 1}
      if(b.title == a.title) {return 0}
  })
  let arrayOfTitles = [];
  arrayOfMovies.forEach(oneMovie => {
    arrayOfTitles.push(oneMovie.title)
  });
  if (arrayOfTitles.length > 20) {
    arrayOfTitles.length =20;
  }
 return arrayOfTitles //orderedMovies
 }

// Best yearly rate average
