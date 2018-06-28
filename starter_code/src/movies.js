/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes(array) {
  
  var newMovies = array.map(function(element){
    var time = element.duration;
    var timeAux = time.split(' ');
    
    var hours = 0;
    var minutes = 0;
   
    var total = 0;
    if(timeAux[0].indexOf('h') > -1){
      
      timeAux[0].replace(/(?![0-9])\w+/g,"");
      hours = parseInt(timeAux[0]);      

      if(timeAux.length > 1 && timeAux[1].indexOf('m') > -1){
        timeAux[1].replace(/(?![0-9])\w+/g,"");
        minutes = parseInt(timeAux[1]);
        total   = (hours * 60) + minutes;
      } else {
        total = hours * 60;
      }
    } else {
      total = parseInt(timeAux[0]);
    }
    
    element.duration = total;   

    return element;
  });
  return newMovies;
}


// Get the average of all rates with 2 decimals 

function ratesAverage(array) {
  var num = array.reduce(function(acum, currentValue){       
    return parseFloat(acum) + parseFloat(currentValue.rate);    
  },0) 

  return Math.round((num / array.length)*100)/100;
}

// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var drama = array.filter(function(element,index,arr) {
    if (element.rate === '') {
      element.rate = 0;
    }
    return element.genre.includes('Drama');    
  })

  if(!drama.length){
    return;
  }
  return ratesAverage(drama);
} 

// Order by time duration, in growing order

function orderByDuration(array) {
  var movies = turnHoursToMinutes(array);

  var aux = array.map(function(element){
    return element;
  })
  
  var moviesAlpha = movies.sort(function(movie1, movie2) {
    
    if (movie1.title > movie2.title) {
      return 1;
    }
    if (movie1.title < movie2.title) {
      return -1;
    } 
    return 0;
    });

  moviesAlpha.sort(function(movie1, movie2) {
    return movie1.duration - movie2.duration;
  })

  return moviesAlpha;
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array) {
  if(!array.length){    
    return;
  }
  var drama = array.filter(function(element,index,arr) {    
    return element.genre.includes('Drama') && element.director.includes('Steven Spielberg');    
  });

  var movies = 0;
  drama.forEach(function(element){
    movies++;
  });

  var result = "Steven Spielberg directed " + movies + " drama movies!";  

  return result;
}

// Order by title and print the first 20 titles

function orderAlphabetically(array) {
  
  var aux = array.map(function(element){
    return element.title;
  })
  
  aux.sort();

  if (aux.length > 20) {
    var result = aux.slice(0,20);
  }
  else {
    var result = aux;
  }
  
  return result;
}


// Best yearly rate average
