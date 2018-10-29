function turnHoursToMinutes(arr) {
  
  return arr.map(movie => {
     if (movie.duration.charAt(1) === "h") {
       let tempDuration = movie.duration;
      let hours = parseInt(tempDuration, 10) * 60;
      movie.duration = hours;     
        if (parseInt(tempDuration.substr(2), 10)) {
        let minutes = parseInt(tempDuration.substr(2), 10);
        movie.duration += minutes;
       }
      return movie
    } else {
      movie.duration = parseInt(movie.duration, 10);
      return movie
    }
  });
 }



function ratesAverage(array){
  var sum = array.reduce(function(accum, current){
    accum = accum + current.rate
    return accum
  },0)
  
  return sum / array.length 
}



function dramaMoviesRate(movies){
  var dramaMovies =  movies.filter(function(item){
     return item.genre.includes("Drama")
 }) 
 
 if(dramaMovies.length > 0){
 return ratesAverage(dramaMovies)
}
}
function orderAlphabetically(arr) {
  let resultArray = arr.sort((a, b) => {
    if (a.title > b.title) {
        return 1;
    }
    if (a.title < b.title) {
      return -1
    } 
   return 0;
   
})
   let titleArray = resultArray.map(x => {
    return x.title;
  });
  return titleArray.slice(0, 20);
} 




// Get the average of all rates with 2 decimals 

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
