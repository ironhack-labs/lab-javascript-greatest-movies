/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes (movies) {
  var a = 0;
  var b = 0;
  var minutes = movies.map(function(e){
    if (e.duration.includes('h')){
    a = e.duration.split('h');
    var aNum = parseInt(a[0]);
    }
    else{
     aNum = 0;
    }
    if (e.duration.includes('min')&&(a[0]=="")){
      b = a.split('min');
}
    else if (e.duration.includes('min')){
    b = a[1].split('min');
    var bNum = parseInt(b);
    }
    else {
     bNum= 0;
    }
    //console.log(b);
    var Minutos = (aNum*60) + (bNum);
    console.log(Minutos);
    
    return {
    title: e.title,
    year: e.year,
    director: e.director,
    duration: Minutos,
    genre: e.genre,
    rate: e.rate
    }
})
return minutes
}

// Get the average of all rates with 2 decimals 
function ratesAverage(movies){
  var average = movies.reduce(function(accumulator, e){
    return accumulator +  parseFloat((e.rate)/movies.length);
  }, 0)
  return Math.round(average*100)/100;
}


// Get the average of Drama Movies

function dramaMoviesRate (movies) {
  var dramaArray = movies.filter(function(e) {
    return e.genre.includes('Drama');
  });
  if(dramaArray.length == 0) {
    return
  }
  return ratesAverage(dramaArray);
}
  

// Order by time duration, in growing order
function orderByDuration (e){
  var yearNum = parseInt(e.duration);
  return yearNum.sort
};
orderByDuration(movies);

// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
