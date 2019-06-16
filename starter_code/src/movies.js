/* eslint no-restricted-globals: 'off' */


// Turn duration of the movies from hours to minutes 
function timeStringToMin(timeString) {
  let totalMinutes;
    if (timeString.indexOf('h') > -1 && timeString.indexOf('min') > -1) {
      let timeArray = timeString.split('h');
      timeArray[0] = parseInt(timeArray[0]);
      timeArray[1] = parseInt(timeArray[1]);
      totalMinutes = (timeArray[0]*60 + timeArray[1])
    } else if (timeString.indexOf('h') > -1) {
      let numberOfHours = parseInt(timeString);
      totalMinutes = (numberOfHours * 60)
    } else {
      totalMinutes = parseInt(timeString)
    }
  return totalMinutes;
} // translates 'h min' values to total number of minutes

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map((moviesClone)=>{
    let moviesFormatted = {...moviesClone};
      moviesFormatted.duration = timeStringToMin(moviesClone.duration);
    return moviesFormatted;
  })
} // clones 'movies' (an array of objects) with spread syntax...
  // then call the 1st function to edit all 'duration' key-values


// Get the average of all rates with 2 decimals 
function ratesAverage(moviesArray) {
  let totalSum =  moviesArray.reduce( (a,b) => 
    {return a + Number(b.rate);}, 0 )
  return Number( (totalSum / moviesArray.length).toFixed(2) );
} // uses reduce to find the total sum of all 'rate' key-values
  // then finds the average by dividing it by the number of ratings
  // .toFixed(2) rounds each value to the hundreths decimal place


// Get the average of Drama Movies
function dramaMoviesRate(moviesArray) {
  let onlyDramas = moviesArray.filter( (eachMovie) => 
    {return eachMovie.genre.includes('Drama');} )
    if (onlyDramas.length === 0) {return undefined};
  return ratesAverage(onlyDramas);
} // isolate all 'drama' key-values using filter
  // then return each movie that includes 'drama' in it
  // call the ratesAverage function to find the average of all drama ratings


// Order by time duration, in growing order
function orderByDuration(moviesArray) {
  let formatted = [...moviesArray];
    if (typeof formatted[0].duration === 'string') {
      formatted = turnHoursToMinutes(formatted);
    } // clone array with spread syntax...
      // if 'duration' key-value is a string, 
        // then call the function to edit all 'duration' key-values to total minutes
  return formatted.sort((a,b) => {
    if (a.duration < b.duration) {
      return -1;
    } else if (b.duration < a.duration) {
      return 1;
    } else {
      if (a.title < b.title){
        return -1
      } else if (b.title < a.title){
        return 1
      } else {
        return 0;
      }
    }
  }) // use sort method to compare each object by duration value (in total minutes)
}    // and if two objects have the same 'duration', sort them in alphabetical order


// How many movies did STEVEN SPIELBERG
function howManyMovies(moviesArray){
  if (moviesArray.length === 0) {return undefined}; 

  let spielbergDramas = moviesArray.filter(eachMovie => { 
  return eachMovie.genre.includes('Drama') && eachMovie.director === "Steven Spielberg"
      })
  return `Steven Spielberg directed ${spielbergDramas.length} drama movies!`
} // use the filter method to return each object whith includes 'Drama' AND whose 'director' is Steven Speilberg
  // in a sentence, return the number of dramas speilberg directed


// Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let alphabetical = moviesArray.sort((a,b) => {
    if (a.title < b.title){
      return -1
    } else if (b.title < a.title) {
      return 1;
    } else {
      return 0;
    }
  }) // use sort method to order movies alphabetically by title
  let first20 = alphabetical.slice(0,20);
  return first20.map( (eachMovieObject) => {return eachMovieObject.title;} )
} // use slice method to copy the first 20 objects in the array into 'first20'
  // use maps method to iterate through each element of 'first20' and return only their 'title's
