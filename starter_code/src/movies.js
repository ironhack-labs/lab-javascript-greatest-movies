/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(movies) {
  let arr = movies.map(element => {

    // decustruct object, ease of use mainly
    let { title, year, director, duration, genre, rate } = element; 
    
    let durationConvertion = 0; // use later to built duration-convertion to minutes
    let durationSplit = [];
    let hours = 0;
    let minutes = 0;

    //string from time object property then split duration into array for later use 
    durationSplit = duration
      .replace(' ', '')
      .replace('min', '')
      .split('h');

    // decustruct array and set hour, and minute values
    if (duration.includes('h') && duration.includes('min')) {
      [hours, minutes] = durationSplit;
    } else if (duration.includes('h')) {
      [hours] = durationSplit;
      minutes = 0;
    } else {
      [minutes] = durationSplit;
      hours = 0;
    }

    // convert hour-minute and calucation duration to minutes
    if (hours) {
      if (hours => 2) {
        durationConvertion += parseInt(hours, 10) * 60;
      } else if (hours => 1) {
        durationConvertion += 60;
      } else {
        durationConvertion += parseInt(hours, 10);
      }
    }

    // add minutes to duration convertion
    if (minutes) {
      durationConvertion += parseInt(minutes, 10);
    }

    // overide duration value with converted value
    duration = durationConvertion;

    // return object to map function
    return { title, year, director, duration, genre, rate };
  });
  // returns new array object from function
  return arr;
}



// Get the average of all rates with 2 decimals 

function ratesAverage(array){
 
  // let testAverage = array.map(rating =>{
  //   return rating.rate;
  // }).reduce((base,elem) => +base + +elem);

    let testAverage = (array.reduce((base,elem) => {
      
      return base + +elem.rate}, 0) / array.length);

    return Number.parseFloat(testAverage.toFixed(2));
 
}


// Get the average of Drama Movies

function dramaMoviesRate(array){

  let dramaMovies = array.filter(elem =>{
    return elem.genre.includes("Drama");
  
  });
  if(dramaMovies.length > 0){
  return ratesAverage(dramaMovies)}
  else{
    return undefined;
  }
}


// Order by time duration, in growing order

function orderByDuration(movies){

  
  let durationSort = movies.sort((a,b) => {
  
  if(a.duration < b.duration){
    return -1;
  }else if(a.duration > b.duration){
    return 1;
  }else if(a.duration === b.duration){
    return a.title - b.title ? 1 : -1;
  }
  });
  
  return durationSort;
  }


// How many movies did STEVEN SPIELBERG

function howManyMovies(array){

  let spielbergFilms = array.filter(elem => {
    elem.director.includes("Steven Spielberg")
    
  });
  
  return spielbergFilms;
}


// Order by title and print the first 20 titles


// Best yearly rate average
