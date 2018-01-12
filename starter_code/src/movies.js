/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


// Get the average of all rates with 2 decimals 


// Get the average of Drama Movies


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG


// Order by title and print the first 20 titles


// Best yearly rate average


// function turnHoursToMinutes(array) {
//   return array.map(function(e) {
//     var long = parseInt(e.duration.split("h")[0] * 60) + parseInt(e.duration.split("h")[1].split("min"));
//     console.log(long)
//     return Object.assign({}, e, { duration: long });
   
//   });
// }


function turnHoursToMinutes(array) {
  var long;
  return array.map(function(e) {
    if(e.duration.length < 3){
      long = parseInt(e.duration.slice(0,1) * 60);
      return Object.assign({}, e, { duration: long });
    } else if (e.duration.length < 6){
      long = parseInt(e.duration.slice(0,2));
      return Object.assign({}, e, { duration: long });
    } else {
      long = parseInt(e.duration.slice(0,1) * 60) + parseInt(e.duration.slice(3,-3));
      return Object.assign({}, e, { duration: long });
    }
  })
}
turnHoursToMinutes(movies)
// var newPeliculasMod = [];

// function turnHoursToMinutes(peliculas){ 
    
//     peliculas.forEach(function(pelicula){
    
//     newPeliculasMod.push(pelicula);
    
//   }); return [newPeliculasMod];
    
//   newPeliculasMod.map(function(newPelicula){

//     console.log(newPelicula.duration);
//   })

  
//   }
  
//   console.log(newPeliculasMod)


// //parseInt(duration[0])

// turnHoursToMinutes(movies);
  // queremos coger de un array(movies) 
  // el valor de duration que es una string

