/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  let arr = movies.map(element => {
    let durationConvertion = 0; // use later to built duration-convertion to minutes
    let { title, year, director, duration, genre, rate } = element; // decustruct object... ease of use

    // parse hour and minutes and solve accordingly...
    let MovieHours = 0;
    let MovieMinutes = 0;
    let durationSplit = [];
    let hours = 0;
    let minutes = 0;

    //split duration property,
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
    // convert duration to hour or minute or both accordintly 
    if (hours) {
      if (hours => 2) {
        durationConvertion += parseInt(hours, 10) * 60;
      } else if (hours => 1) {
        durationConvertion += 60;
      } else {
        durationConvertion += parseInt(hours, 10);
      }
    }

    if (minutes) {
      durationConvertion += parseInt(minutes, 10);
    }

    // overide duration value with converted value
    duration = durationConvertion;
    // return object to map function..
    return { title, year, director, duration, genre, rate };
  });
  // return formated duration to minutes
  return arr;
}

// Get the average of all rates with 2 decimals

// Get the average of Drama Movies

// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
