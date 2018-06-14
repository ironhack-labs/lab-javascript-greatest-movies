/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


function turnHoursToMinutes(x){
  var horasAMin = x.map(function(elem){
    var hora = elem.duration.split("h");
    var minu = hora[1].split("min");
    if(hora[1] === "") {
      elem.duration = parseInt(hora[0]) * 60;
    }else {
    elem.duration = parseInt(hora[0]) * 60 + parseInt(minu);
  }
    return elem;
  })
  return horasAMin;
}
console.log(turnHoursToMinutes(movies));


// Get the average of all rates with 2 decimals 

function ratesAverage (y){
  
  var sumA = y.reduce(function(a, b){
    
    return a + parseFloat(b.rate) / y.length;

    
  }, 0)
return sumA.toFixed(2);
}


console.log(ratesAverage(movies));


// Get the average of Drama Movies

function dramaMoviesRate(z) {

  var dramatic = z.filter(function(elem){
    return elem.genre.includes("drama") || elem.genre.includes("Drama");
  });
  var aveRaiting = ratesAverage(dramatic);
  return aveRaiting;
}

console.log(dramaMoviesRate(movies));


// Order by time duration, in growing order

function orderByDuration(v) {

  var duraMas = v.sort(function(a, b){
    if(a.duration > b.duration) return 1; 
    if(a.duration < b.duration) return -1;
    if(a.duration === b.duration) {
      if(a.title > b.title){
        return 1;
    } else return -1;
  }});
  return duraMas;
}

console.log(orderByDuration(movies));


// How many movies did STEVEN SPIELBERG

function howManyMovies(r) {
  var dramatic = r.filter(function(elem){
    return elem.genre.includes("drama") || elem.genre.includes("Drama");
  }).filter(function(eleme){
    return eleme.director.includes("Spielberg");
  })
  ;
  return dramatic.length;
}

console.log("The movies Spielberd directed are: ", howManyMovies(movies));

// Order by title and print the first 20 titles

function orderAlphabetically(j) {
  var newArray = j.map(function(elem){
    return elem.title;
  });
  

  var orde = newArray.sort(function(a, b){
    if(a > b) return 1;
    if(a < b) return -1;
  });
  

  var ultimoAlph = [];

  for(var i =0; i < 20; i++) {
    ultimoAlph.push(orde[i]);
  }
  return ultimoAlph;

}

console.log(orderAlphabetically(movies));


// Best yearly rate average
