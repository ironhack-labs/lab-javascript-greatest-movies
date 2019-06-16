/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnTimeStringToMinutes(movieObject){
    let newMovieObject = {...movieObject};
    let stringOfTime = newMovieObject.duration;
    if(stringOfTime.includes('h') && stringOfTime.includes('min')){
    let arrayWithHoursAndMinutesSeparately = stringOfTime.split('h');
    let numberOfHours = parseInt(arrayWithHoursAndMinutesSeparately[0]);
    let numberOfMinutes = parseInt(arrayWithHoursAndMinutesSeparately[1]);
    newMovieObject.duration = numberOfHours*60 + numberOfMinutes;

    } else if (stringOfTime.includes('h')){
    let arrayWithHoursAndMinutesSeparately = stringOfTime.split('h');
    let numberOfHours = parseInt(arrayWithHoursAndMinutesSeparately[0]);
    newMovieObject.duration = numberOfHours*60
    } else {
      newMovieObject.duration = parseInt(stringOfTime);
    }
    return newMovieObject
}



  function turnHoursToMinutes(arrayOfMovies){

    let newArray = arrayOfMovies.map((eachSingleMovie)=>{
      return turnTimeStringToMinutes(eachSingleMovie)
    })
    return newArray;
  }






// Get the average of all rates with 2 decimals 
function ratesAverage(movieRatingArray){

let total = movieRatingArray.reduce((accum, eachMovie)=>{
return accum + eachMovie.rate;
}, 0)

return total/movieRatingArray.length;
}

// Get the average of Drama Movies

function dramaMoviesRate(dramaMovieArray){

let totalDramaArray = dramaMovieArray.filter((eachMovie)=>{

if(eachMovie['genre'].includes("Drama")){
  return eachMovie;
}else{
    return undefined;
}
})
if(totalDramaArray.length === 0){
return undefined;
}
return parseFloat(ratesAverage(totalDramaArray).toFixed(2));

}

// Order by time duration, in growing order
function orderByDuration(movieTime){
if(typeof movieTime.duration === 'string'){

let newMovieArray = turnHoursToMinutes(movieTime);
let orderedMovies = newMovieArray.sort((a, b)=>{

  if(a.duration < b.duration){
      return -1;
  }else if(b.duration < a.duration){
      return 1;
  }else{
    if(a.title < b.title){
        return -1;
    }else if(b.title < a.title){
        return 1;
    }else{
        return 0;
    }
  }
 }); 
 return orderedMovies;
}else{
let orderedMovies = movieTime.sort((a, b)=>{

    if(a.duration < b.duration){
        return -1;
    }else if(b.duration < a.duration){
        return 1;
    }else{
        if(a.title < b.title){
            return -1;
        }else if(b.title < a.title){
            return 1;
        }else{
            return 0;
        }
    }
   }); 
   return orderedMovies;
}
}

// How many movies did STEVEN SPIELBERG
function howManyMovies(stevenCounter){
let stevenSum = 0;

let totalStevenArray = stevenCounter.filter((eachMovie)=>{
if(eachMovie['genre'].includes("Drama") && eachMovie['director'].includes('Steven Spielberg')){
    stevenSum++;
  }
})
if(stevenCounter.length === 0){
    return undefined;
}
  return `Steven Spielberg directed ${stevenSum} drama movies!`;
}

// Order by title and print the first 20 titles

function orderAlphabetically(alphabeticArray){
let newArray = [];
  alphabeticArray.sort((a, b)=>{

   if(a.title < b.title){
    return -1
   }else if(b.title < a.title){
       return 1;
   }else{
       return 0;
   }
  })
  if(alphabeticArray.length > 20){
    for(let i = 0; i <= 19; i++){
newArray.push(alphabeticArray[i].title);
  }
  }else{
for(let i = 0; i <= alphabeticArray.length - 1; i++){
newArray.push(alphabeticArray[i].title);
  }
  }
  return newArray;
}


orderAlphabetically(test);

// Best yearly rate average

