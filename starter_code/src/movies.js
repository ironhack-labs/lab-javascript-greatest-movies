/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 
///////////////////////////////////////////
//////////  Iteration 1  //////////////////
/////////////////////////////////////////


var encuentraMin =movies.map(function(horas){
  
    return parseInt(horas.duration.split(" ")[0].split("")[0]) ;
  });
  
  
  var minutos= encuentraMin.map(function(hora){
    return hora * 60;
  });
  
  var horas =movies.map(function(horas){
    if(horas.duration.split(" ").length > 1){
      return parseInt(horas.duration.split(" ")[1]);
    } else{return 0}
  });
  
  var horasMinutosSuma = [];
  
  for(i = 0; i < minutos.length; i++){
    horasMinutosSuma[i] =minutos[i]+horas[i];
  }
  
  for(a = 0 ; a < movies.length ; a++){
    movies[a].duration = horasMinutosSuma[a];
    
  }

// Get the average of all rates with 2 decimals 
///////////////////////////////////////////
//////////  Iteration 2  //////////////////
///////////////////////////////////////////

var ratesArray=[];

var rates = movies.map(function(calif){
  return ratesArray.push(parseFloat(calif.rate)) ;
});



var total = 0;

for(var i = 0; i < movies.length; i++) {
    total += ratesArray[i];
}
var avg = total / movies.length;



// Get the average of Drama Movies
///////////////////////////////////////////
//////////  Iteration 3  //////////////////
///////////////////////////////////////////

var ratesDrama=[];

var genreDrama = movies.map(function(drama){
  if(movies[movies.indexOf(drama)].genre.includes("Drama") === true){
    return ratesDrama.push(parseFloat(drama.rate)) ;
}
});

console.log(ratesDrama);

var totalDrama = 0;

for(var i=0; i<ratesDrama.length; i++) {
  totalDrama += ratesDrama[i];
}

var avgDrama = totalDrama / ratesDrama.length;

//console.log(avgDrama.toFixed(2));

/*
if(movies.genre.includes("Drama") === true){
  console.log(movies.rate);
}
*/

// Order by time duration, in growing order
///////////////////////////////////////////
//////////  Iteration 4  //////////////////
///////////////////////////////////////////

/*
var peliculasEnOrden[];

var durationList = movies.map(function(drama){
  
    return ratesDrama.push(parseFloat(drama.rate)) ;
}
});
*/



// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average
