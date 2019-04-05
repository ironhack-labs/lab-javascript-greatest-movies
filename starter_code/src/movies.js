/* eslint no-restricted-globals: 'off' */

//--------------------------------------------------
// Turn duration of the movies from hours to minutes 
// -------------------------------------------------
function turnHoursToMinutes(array) {
  for (i=0; i< array.length; i++) {
    let durations = array[i].duration.split(' ');
    let hours = Number(durations[0].replace('h',''));
    let minutes = 0; 
    if(durations[1]){
      minutes = Number(durations[1].replace('min',''));
    }
    array[i].duration = hours*60+minutes;
  }
  return array
}

          // function turnHoursToMinutes(array) {
            
          //   let newArray = array.map((movie)=>{
          //     let durations = movie.duration.split(' ');
          //     let hours = Number(durations[0].replace('h',''));
          //     let minutes = 0; 
          //     if(durations[1]){
          //        minutes = Number(durations[1].replace('min',''));
          //     }
          //     return {...movie, duration:hours*60+minutes}
          //   })
          //   console.log(newArray)
          //   return newArray
          // }

//---------------------------------------------
// Get the average of all rates with 2 decimals 
//---------------------------------------------
function ratesAverage(array) {
  var total = 0;
  for(i = 0; i < array.length; i++) {
      total += array[i].rate;
  }
  var avg = (total / array.length).toFixed(2);
  return Number(avg);
}
// const ratesAverage = (arr) => {
//   let arrRate = arr.map((val) => {return val.rate})
//   let promedy = arrRate.reduce((acc, val) => {return acc + Number(val)}, 0)
//   return promedy / arr.length
// }

//--------------------------------
// Get the average of Drama Movies
//--------------------------------
function dramaMoviesRate(array) {
  var dramaMovies = array.filter(movies => movies.genre.includes("Drama"));
  if (dramaMovies.length === 0) return undefined;
  var total = 0;
  for (i=0; i<dramaMovies.length; i++) {
    total += dramaMovies[i].rate; 
  }
  var avg = Number(total / dramaMovies.length);
  return avg;
}

//-----------------------------------------
// Order by time duration, in growing order
//-----------------------------------------
function orderByDuration(array) {
  array.sort((a, b) => {return a-b})
  return (array);
}
// const orderByDuration = (arr) => {
//   arr.sort((a, b) => (a.duration !== b.duration) ? (a.duration - b.duration) : a.title.localeCompare(b.title))
//   return arr
// }

//-------------------------------------
// How many movies did STEVEN SPIELBERG
//-------------------------------------

function howManyMovies(array) {
  if (array.length === 0) {
    return undefined; 
  } 
  var movieCount = 0;
  for (i=0; i<array.length; i++) 
  if (array[i].director === "Steven Spielberg") {
    movieCount += 1;
  }

  return String(movieCount);
}

// const howManyMovies = (arr) => {
//   if (arr.length === 0) return undefined
//   let filterArr = arr.filter(movie => (movie.genre.includes('Drama')) && (movie.director === 'Steven Spielberg'))
//   return `Steven Spielberg directed ${filterArr.length} drama movies!`
// }

// Order by title and print the first 20 titles


// Best yearly rate average
