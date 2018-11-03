/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array){
  let movie = array.map(elem => {
    let durationToMinutes = 0;
    if(elem.duration.includes('h') && elem.duration.includes('min')){
      //console.log('hr/min', elem.duration)
      let hoursAndMinutes = elem.duration.replace('h','').replace('min','').split(' ')
      durationToMinutes = 60 * parseInt(hoursAndMinutes[0]) + parseInt(hoursAndMinutes[1])
      //console.log('hours/minutes/convertion: ',hoursAndMinutes, durationToMinutes)
      //console.log(hoursAndMinutes)
    }else if(elem.duration.includes('h')){
      //console.log('hours', elem.duration)
      let justHours = elem.duration.replace('h', '');
      durationToMinutes = justHours * 60;
      //console.log('just hours convert', durationToMinutes)
    }else{
      let justMinutes = elem.duration.replace('min', '');
      console.log(justMinutes);
      //console.log('minutes', elem.duration)
    }
    return {title: elem.title, year: elem.year, director: elem.director, duration: durationToMinutes, genre: elem.genre, rate: elem.rate};
  }) 
  console.log(movie);
  return movie;

}







// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
