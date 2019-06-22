/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(arrayOfMovies){
    let newArray = arrayOfMovies.map((eachMovie)=>{
       let newMovieObject = {...eachMovie};
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
    })
    return newArray;
  }


// Get the average of all rates with 2 decimals 
function ratesAverage(arrayOfMovies){
  let total = arrayOfMovies.reduce((accum, eachMovie) => {
    return accum + parseFloat(eachMovie.rate)
  }, 0)
  return (total/arrayOfMovies.length)
}

ratesAverage(movies)

// Get the average of Drama Movies
  
  function dramaMoviesRate(movieArray){
    let newDramaArray = movieArray.filter((singleMovie) => {
      return singleMovie.genre.includes('Drama')
    })

    if(newDramaArray.length === 0) {
      return undefined
    }
    return ratesAverage(newDramaArray);
  }
 

// Order by time duration, in growing order
function orderByDuration(arrayOfmovies){
  let arrayToUse = [...arrayOfmovies]
  if(typeof arrayOfmovies[0].duration === 'string'){
    arrayToUse = turnHourstoMinutes(arrayToUse);
  }
  arrayToUse.sort((a,b) =>{
    if(a.duration < b.duration){
      return -1
    } else if (a.duration > b.duration){
      return 1;
    } else{ //this only happens if the have the same duration
        if(a.title<b.title){
          return -1
        } else if(b.title<a.title) {
            return 1
        } 
      }
      return 0;
    
  });
  return arrayToUse;
}

// How many movies did STEVEN SPIELBERG
function orderAlphabetically(bunchOfMovies) {
  let arrayToUse=[...bunchOfMovies];
  arrayToUse.sort((a,b) =>{
    if(a.title < b.title) {
      return 1;
    } else if(b.title < a.title){
      return 1
    }
    return 0;
  })

// Order by title and print the first 20 titles

 let blah = arrayToUse.slice(0,20);
 let titlesOnly = blah.map((eachMovieObject) => {
   return eachMovieObject.title;
 })
return titlesOnly;
}



// Best yearly rate average
function bestYearAvg(arrayOfmovies){
  let trackerThing ={};
  arrayOfmovies.forEach((eachMovie)) => {
    if(trackerThing[eachMovie.year]){
      trackerThing[eachMovie.year.number +=1;
      trackerThing[eachMovie.year].totalRate += Number(eachMovie.rate)
      }
      else {
      trackerThing[eachMovie.year] = {number: 1, totalRate: Number(eachMovie.rate)};
      //trackerThing[eachMovie.year].avg = trackerThing
    }
  })
let biggest =0;
let year =" "
for (let yearKey in trackerThing) {
   if(trackerThing[yearKey].totalRate / trackerThing[yearKey].number > biggest){
     biggest = trackerThing[yearKey].totalRate / trackerThing[yearKey].number
     year = yearKet
   }
 }
 console.log(trackerThing);
 return ``The best year was ${year} with an average rate of ${biggest}`
}

