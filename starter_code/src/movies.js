/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {

    var totalMinutes, h, hour, min, minute;
    var durationArray = movie.duration.split(" ");
    if (durationArray[0].indexOf("h") !== -1 && durationArray[1].indexOf("min") !== -1){
      
      h = durationArray[0].replace("h","");
      hour = parseInt(h)*60;
      min = durationArray[1].replace("min","")
      minute = parseInt(min)
      console.log(hour)
      totalMinutes = hour + minute;

     } else if (durationArray[0].indexOf("min") !== -1){

      min = durationArray[0].replace("min","")
      minute = parseInt(min)
      totalMinutes = minute;
      console.log(minute)

    } else if (durationArray[0].indexOf("h") !== -1 && durationArray[1].indexOf("min") === -1) {
      
        h = durationArray[0].replace("h","");
        hour = parseInt(h)*60;
  
        console.log(hour)
        totalMinutes = hour;
  }
    /*
    var h = movie.duration.indexOf("h") 
    var minutes = movie.duration[h-1] * 60;
    
    var minu = movie.duration.indexOf("min") 
    var minutes = movie.duration[minu-1];
    var minutes10 = movie.duration[minu-2] * 10;
    */
    var obj = {
      title: movie.title,
      year: movie.year,
      director: movie.director,  
      duration: totalMinutes,
      genre: movie.genre,
      rate: movie.rate
    }
    console.log(obj)
    return obj
  }
)}

//if duration contiene h lo anterior a h * 60
//if duration no contiene h return lo anterior a Min 
//if duration contiene h y m suma ambas

// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
