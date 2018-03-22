var movies = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: '8.45'
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h 55min',
      genre: ['Crime', 'Drama'],
      rate: '17.15'
    }]

/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(function (elem) {
      var hours = 0;
      var minutes = 0;
      if (elem.duration.indexOf('h') !== -1) {
        hours = parseInt(elem.duration[0], 10) * 60;
      }
      if (elem.duration.indexOf('min') !== -1) {
        minutes = parseInt(elem.duration.substring(elem.duration.length - 5, elem.duration.length - 3), 10);
      }
      return Object.assign({}, elem, { duration: hours + minutes });
    });
  }
  console.log(turnHoursToMinutes(movies));




// Get the average of all rates with 2 decimals 
  function ratesAverage(array) {
      return Math.round((array.reduce(function(acumulador,e){

        if (e.rate.length === 0)
          return 0;
        var int =  parseFloat(e.rate);
        var rest = 0

        
        return int + rest + acumulador;
      },0) / array.length)*100 ) /100;      
  }
 console.log(ratesAverage(movies));


// Get the average of Drama Movies

function dramaMoviesRate(array) {
  var cont = 0;
  var drama = (array.reduce(function(acumulador, e){
    for (let i = 0; i < e.genre.length; i++) {
      if (e.genre[i] === "Drama"){
        cont ++;
          if (e.rate.length === 0){            
            return  acumulador;}
        return acumulador + parseFloat(e.rate); }     
    }
    return acumulador;
  },0) )
  if (drama === 0)
    return undefined;
  else{
    
    return Math.round((drama/cont) * 100)/100;}
  
}
console.log(dramaMoviesRate(movies));
// Order by time duration, in growing order
function orderByDuration(array) {

     
    array = array.sort(function(a,b){
      return a.duration - b.duration;
    });
    console.log(array);
    return array.sort(function(a,b){
      if (a.duration === b.duration)
      return a.title > b.title;
    })    
  

  
  
  
}
console.log(orderByDuration([{ title: 'abc', duration: 180 }, { title: 'bac', duration: 90 }, { title: 'aab', duration: 90 }]));
// How many movies did STEVEN SPIELBERG
function howManyMovies(array) {   //No se porque me da error.
  var cont = 0;
  if (array.length === 0){
    return undefined;
  }
  for (let i = 0; i < array.length; i++) {
    if( array[i].director === "Steven Spielberg"){
      for (let j = 0; j < array[i].genre.length; j++) {
        if (array[i].genre[j] === 'Drama') {
          cont++;
        };
        
      }
          }
  }
  return "Steven Spielberg directed " + cont + " drama movies!"
}

console.log(howManyMovies(movies));
// Order by title and print the first 20 titles
function orderAlphabetically(array) {
  array = array.sort(function(a, b){
    
  })
  console.log();
  
}

// Best yearly rate average
