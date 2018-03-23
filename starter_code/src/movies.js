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
turnHoursToMinutes(movies);

// Get the average of all rates with 2 decimals 
//conseguir un array con todos los average => y luego lo sumamos con reduce 

function ratesAverage(array){
  //arrayRates => array que tiene en cada posición el rate de cada película
  var arrayRates =  array.map(function(element){
    if(isNaN(parseFloat(element.rate))){
      //caso por si la propiedad rate es rate: ""; 
      return 0.0;
    }
   
     return parseFloat(element.rate);
   });
 
   //total => variable que tiene el total de rates de todas las películas
   var total =  arrayRates.reduce(function(accumulator, current){
     
     return accumulator + current;
   }, 0);
 
  //se redondea a 2 decimales
   return  Math.round(((total/(array.length))) * 100) / 100;
 }
 

//buscamos las peliculas que tengan genero drama => devolvemos
//en un array con los objetos

function dramaMoviesRate (array){
  
  var dramaMoviesAvg = array.filter(function(movie){
    //hay que poner indexOf porque la propiedad genre es un array => genre: ["Drama", "Crime"]
    if(movie.genre.indexOf('Drama') != -1){
      return true;
    }else{
      return false;
    }
  
  });
  
  //dramaMoviesRate => es un array con las peliculas que tienen el 
  //genero drama
  console.log(dramaMoviesAvg);
  if(dramaMoviesAvg.length===0){
    // si no ha encontrado ninguna pelicula con ese genero => devuelve undefinde
    return undefined;
  }
  return ratesAverage(dramaMoviesAvg);
}



// Order by time duration, in growing order

function orderByDuration(array){
 var ordenado = array.sort(function(a,b) {
   if(a.duration - b.duration === 0){
     //misma duracion => hay que ordenarlo alfabeticamente segun titulo
     return a.title > b.title;
   }else{
     return a.duration - b.duration;
    }
  
});
 return ordenado; 
}

// How many movies did STEVEN SPIELBERG

function howManyMovies(array){
  var stevenMovies = array.filter(function(movie){
    if(movie.director ==="Steven Spielberg"  && movie.genre.indexOf('Drama')!= -1){
      return true;
    }else{
      return false;
    }
    return array.map
  
  });

if(array.length===0){
  //si no encuentra ninguna película => devuleve undefined
  return undefined;
  
}else{ 
  return "Steven Spielberg directed " + stevenMovies.length + " drama movies!";}

}

// Order by title and print the first 20 titles => solo hay que devolver las 20 primeras
//primero se ordena, luego se trunca el array

function orderAlphabetically (array){

  var titulosPeliculas =  array.map(function(element){
   
     return element.title;
   });

   return titulosPeliculas.sort().slice(0,20);
}

// Best yearly rate average

function bestYearAvg (array){
  //puedo calcular el avg con el método de arriba, para ello, tengo que conseguir tener un array con todas las 
  //peliculas de un año  
  var ordenado = array.sort(function(a,b) {
   return  a.parseInt(year) - b.parseInt(year);
  } );
}
