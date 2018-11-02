/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
function turnHoursToMinutes(array){
  var timeMin = array.map(function(elem){
    var hora = elem.duration.split("h ");
    //var min = hora[1].split("");
    var min = hora[1].split("min");
  
    if(hora[1]===""){
      elem.duration=parseInt(hora[0])*60;
    }else{
      elem.duration=parseInt(hora[0]*60) +parseInt(min);
    }
    return elem
  })
  return timeMin;
}
console.log(turnHoursToMinutes(movies))


// Get the average of all rates with 2 decimals 

var reduceRate = movies.reduce (function(acc,elem){
  return acc += parseFloat(elem.rate);
},0)


var ratesAverage = (reduceRate / movies.length).toFixed(2);
console.log(ratesAverage)

// Get the average of Drama Movies

function dramaMoviesRate(array){
  var filterDrama = array.filter(function(elem){
    return elem.genre.includes("Drama");
  })
  var sum = filterDrama.reduce(function(a, calif){
    return a + Number(calif.rate);
  }, 0);

  result = sum / filterDrama.length;
  return Number(result.toFixed(2));
}
console.log(dramaMoviesRate(movies));

// Order by time duration, in growing order



// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
  var filterDrama2 = array.filter(function(elem){
    return (elem.genre.includes("Drama"));
  });
  var filterSteven = filterDrama2.filter(function(elem){
    return (elem.director.includes("Steven Spielberg"));
  });
  return filterSteven;
}

console.log(howManyMovies(movies))

// Order by title and print the first 20 titles



// Best yearly rate average
