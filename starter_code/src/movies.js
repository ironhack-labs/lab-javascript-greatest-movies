/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
//reduce method?
function turnHoursToMinutes(obj){

  obj.map((obj)=>{
    var durationArray = obj.duration.split(' ');
    var hours= durationArray[0][0];
    hoursToMinutes = obj.duration.substr(0, 1)*60;
    let howManyDigitsMinutes =  durationArray[1].length - 3
    let minutes = durationArray[1].substr(0,   howManyDigitsMinutes)
    let answer = Number(hoursToMinutes) + Number(minutes);
    let newMovie = obj;
    newMovie.duration = answer.toString();
    console.log(newMovie);
  })
  
}

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
