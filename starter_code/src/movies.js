/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(movies){
  return movies.map(function (movie){
    var newEl = Object.assign({}, movie)
    var splitedTime = newEl.duration.split(' ');
    if (splitedTime.length == 1){
      if (splitedTime[0].length > 2){
        splitedTime.unshift(0 + "h");
      } else{splitedTime.push(0 + "min");} 
    } 
    var hours = parseFloat(splitedTime[0]) * 60;
    var minutes = parseFloat(splitedTime[1]);
    newEl.duration = hours + minutes;
    return newEl;
  }); 
}

// Get the average of all rates with 2 decimals 

function ratesAverage(movies){
  var total = movies.reduce(function(acc, film){
  parseFloat(movies.rate) //pasamos de string a number, para poder sumarlos con reduce
  return acc + film.rate / movies.length
  },0);
  var totalDecimal = total.toFixed(2) //redondeamos a 2 decimales
  var totalNumber = parseFloat(totalDecimal)
  return totalNumber;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies){
  var dramaFilms = []
for (var i = 0; i < movies.length; i++){
  for (var j = 0; j < movies[i].genre.length; j++){
    if (movies[i].genre[j] === 'Drama'){
      dramaFilms.push(movies[i])
    }
  }
}
if (dramaFilms == 0){} else {return ratesAverage(dramaFilms);}
}


// Order by time duration, in growing order
function orderByDuration(movies){
 // var newMovies = turnHoursToMinutes(movies); //Jasmine de que va???!!!
  var orderMovies = movies.sort(function(a,b){
     if (a.duration > b.duration) {
    return 1;
  }
  else if (a.duration < b.duration) {
    return -1;
  } else {
    if (a.title > b.title){
      return 1
    } else {return -1}
  }
  })
  return orderMovies;
}
// How many movies did STEVEN SPIELBERG
function howManyMovies(movies){
  if (movies == 0){}
  else {
  var dramaFilms = [];
  for (var i = 0; i < movies.length; i++){
  for (var j = 0; j < movies[i].genre.length; j++){
    if (movies[i].genre[j] === 'Drama'){
      dramaFilms.push(movies[i])
    }
  }
}
  var stevenFilms = dramaFilms.filter(function(elm){
    return elm.director == 'Steven Spielberg';
  });
  return 'Steven Spielberg directed ' + stevenFilms.length + ' drama movies!'
}
}
// Order by title and print the first 20 titles
function orderAlphabetically(movies){
  var orderMovies = movies.sort(function(a,b){
       if (a.title > b.title) {return 1;}
       else if (a.title < b.title) {return -1;} 
       else {return 0;}
       });
  var newArray = [];
  orderMovies.forEach(function(orderMovies) {
    newArray.push(orderMovies.title);
  });
 return newArray.slice(0,20);
}

// Best yearly rate average
