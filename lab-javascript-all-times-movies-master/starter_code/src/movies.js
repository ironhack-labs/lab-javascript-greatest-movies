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
   turnHoursToMinutes(movies);
   

// Get the average of all rates with 2 decimals 
function ratesAverage (arrayOfMovies){
    let sum = arrayOfMovies.reduce((accumulator, currentMovie)=>{ 
      return accumulator + Number(currentMovie.rate);
    },0)
    return  Number((sum/arrayOfMovies.length).toFixed(2));
    }
    
    ratesAverage(movies);

// Get the average of Drama Movies
function dramaMoviesRate(arrayOfMovies){
    let dramaGenre = arrayOfMovies.filter((eachMovie)=>{
      return eachMovie.genre.includes('Drama')
    });
 if (dramaGenre.length == 0){return undefined;}
 return ratesAverage(dramaGenre);
}

// Order by time duration, in growing order
function orderByDuration(movieTime){
  movieTime.sort((a,b) => {
    if (a.duration < b.duration) return -1;
    if (a.duration > b.duration) return 1
  });
  return orderByDuration(movieTime);
 }

// How many movies did STEVEN SPIELBERG
function howManyMovies(arrayMovies){
  if (arrayMovies.length === 0) return undefined
  let filtroSpiel = arrayMovies.filter(spiel=>{
    return spiel.director.indexOf("Steven pielberg") !== -1
  }).filter(m=>{
  return  m.genre.indexOf("Drama") !==-1
  })
  const numOfSpiel = filtroSpiel.length
  return `Steve directed ${numOfSpiel} movies`
}

// Order by title and print the first 20 titles

function orderAlphabetically(bunchaMovies){
  let arrayToUse = [...bunchaMovies];
  arrayToUse.sort((a,b)=>{
    if(a.title < b.title){
      return -1;
    } else if (b.title < a.title){
      return 1
    }
    return 0;
  })
  let blah = arrayToUse.slice(0,20);

  let titlesOnly = blah.map((eachMovieObject)=>{
    return eachMovieObject.title;
  })
  return titlesOnly;
}

// Best yearly rate average

function bestYearAvg(arrayMovies){

  

}