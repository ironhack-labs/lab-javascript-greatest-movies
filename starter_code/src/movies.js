/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
	var moviesMinutes = movies.map(function(m){
    var hora = m.duration.slice(0,1);
    var min = m.duration.slice(3,5);
    var horaNum = parseInt(hora*60);
    var minNum = parseInt(min);
    if (horaNum == 0) m.duration = minNum;
    m.duration = horaNum + minNum;
  
    return m
  });
  console.log(moviesMinutes);
}

parse

turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
function rateAverage(movies){
  var ratAVG = movies.map(function(m){
    var ratNum = parseFloat(m.rate);
  m.rate = ratNum;
  return m
  });
  
  var avg = movies.reduce(function(acc,l){
    return acc + l.rate/movies.length;
  },0);
}
rateAverage(movies);

// Get the average of Drama Movies
function dramaMoviesRate (movies){
  var dramaM = movies.filter(function(h){
    return h.genre.includes("Drama")
  })
  
  
  var ratAVG = dramaM.map(function(m){
    var ratNum = parseFloat(m.rate);
  m.rate = ratNum;
  return m
  });
  
  var avg = dramaM.reduce(function(acc,l){
    return acc + l.rate/dramaM.length;
  },0);
  console.log(avg);
  }
  
  dramaMoviesRate(movies)

// Order by time duration, in growing order
function orderByDuration (movies){
  var moviesMinutes = movies.map(function(m){
    var hora = m.duration.slice(0,1);
    var min = m.duration.slice(3,5);
    var horaNum = parseInt(hora*60);
    var minNum = parseInt(min);
    if (horaNum == 0) m.duration = minNum;
    m.duration = horaNum + minNum;
  
    return m
  });
  
  var orden = movies.sort(function(a,b){
    if (a.duration>b.duration) return 1;
    if (a.duration<b.duration) return -1;
    if (a.duration === b.duration) return 0;
  });
  console.log(orden);
  }
  
  orderByDuration(movies);
// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles
function orderAlphabetically (movies){
  var orden = movies.sort(function(a,b){
    if (a.title>b.title) return 1;
    if (a.title<b.title) return -1;
    if (a.title === b.title) return 0;
  });
  
  for (i=0; i<20; i++){
    console.log(orden[i].title);
  }
  }

orderAlphabetically (movies)


// Best yearly rate average
