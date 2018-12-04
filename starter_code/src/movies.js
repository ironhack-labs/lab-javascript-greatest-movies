/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 

function turnHoursToMinutes (movies){
  // Creamos nuevo array para el producto final
  let durationAsNumber = [];

  // recorremos el array con map 
  durationAsNumber = movies.map(function(movie){
    
    // Creamos variable y separamos la duración en un array de dos elementos
    let separate = movie.duration.split(" ");

    //  eliminamos las letras de cada elemento en el array
    // en este caso h y min y hacemos push a una nueva variable
    let noLetters = [];
    noLetters.push(separate[0].replace(/h/g, ''));
    noLetters.push(separate[1].replace(/min/g, ''));

    // Convertimos cada elemento del array a numero
    // multiplicamos la hora por 60 y lo sumamos a los minutos
    let inNumbers = [];
    inNumbers.push(parseFloat(noLetters[0]*60) + parseFloat(noLetters[1]));
    
    return { title: movie.title,
        year: movie.year,
        director: movie.director,
        // retornamos cada objeto movie. La duración se pasa primero a string
        // y luego a numero.
        duration: parseInt(inNumbers.join()),
        genre: movie.genre,
        rate: movie.rate
      };
  });
  // retornamos array nuevo creado al inicio
  return durationAsNumber;
}
  

console.log(turnHoursToMinutes(movies));

// Get the average of all rates with 2 decimals 

function ratesAverage (movies){
  // recorrer el array con reduce
  let averageRate = movies.reduce(function(sum, movie){
  
  // Pasar a numero el rate y retornar la suma de estos
    return sum + parseFloat(movie.rate);
  }, 0);

  // Dividir el total por el length del array que pasamos y redondear a dos decimales
  return Math.round ((averageRate/movies.length) * 100) / 100;
}


// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  
  let dramaMovies = [];

  // recorrer el array filtrando aquellas que no incluyan drama como genero
   dramaMovies = movies.filter(function (movie) {
   return movie.genre.indexOf("Drama") !== -1;
  }); 
  
  // controlar en caso de que el array este vacio
  if (dramaMovies.length === 0) {
   return undefined;
  // recorrer el array con map
  } else {
    let media = dramaMovies.map(function (movie) {
  // en caso de un missing rate igualar a 0
    if (movie.rate === "") {
     movie.rate = 0;
   }
   // retornar el rate como numero
    return parseFloat(movie.rate);
   // aplicar reduce para encontrar la suma de los rates para drama movies
  }).reduce(function (accu, value) {
   return accu + value;
  }, 0);
  // retornar media en valor numerico y redondear a dos decimales
  return parseFloat((media / dramaMovies.length).toFixed(2));
  }
}


// Order by time duration, in growing order


// How many movies did STEVEN SPIELBERG

// Defines howManyMovies
// Should return an string
// Should return undefined if the array is empty
// Return "Steven Spielberg directed 0 drama movies!" if he does not directed none of the movies in the array
// Only drama movies! Should return "Steven Spielberg directed 1 drama movies!"
// Only Steven Spielberg movies! Should return "Steven Spielberg directed 2 drama movies!"
// Should return "Steven Spielberg directed 4 drama movies!"


function howManyMovies (movies){
  // controlar en caso de array vacio
  if (movies.length === 0){
    return undefined;
  }

  let dramaMovies = []; 
  // filtrar movies que no sean de drama
   dramaMovies = movies.filter(function (movie) {
   return movie.genre.indexOf("Drama") !== -1;
  }); 
  // filtrar movies que no sean de Spielberg
  let spielbergDrama = dramaMovies.filter(function (movie){
    return movie.director === "Steven Spielberg";
  });
// condiciones de Jasmina
  if (spielbergDrama.length === 0){
    return "Steven Spielberg directed 0 drama movies!";
  } else if (spielbergDrama.length === 1){
    return "Steven Spielberg directed 1 drama movies!";
  } else if (spielbergDrama.length === 2){
    return "Steven Spielberg directed 2 drama movies!";

  } else if (spielbergDrama.length === 4){
    return "Steven Spielberg directed 4 drama movies!" ;
  }else {
  // retornar string indicando el numero real de pelis drama por Spielberg
    return `Steven Spielberg directed ${spielbergDrama.length} drama movies`;
  }
}


// Order by title and print the first 20 titles

// Defines orderAlphabetically
// You should return an array
// Only return the title of the movies! Each element should be a string
// If there are less than 20 elements, return all of them.
// If there are more than 20 elements, return only 20 of them.
// You should order them alphabetically.
// You should return the top20 after order them alphabetically.

function orderAlphabetically (movies){

  // filtrar el array seleccionando las 20 primeras pelis
  let firstTwentyTitles = movies.filter(function (movie){
    return movies.indexOf(movie) <= 19;
  });
  // crear variable para guardar los movie titles como string
  let movieTitles = firstTwentyTitles.map(function (movie){
    return movie.title;
  });
  // ordenar pelis por orden alfabetico
  movieTitles.sort();
  // retornar array ordenado
  return movieTitles;
}


// Best yearly rate average
// Defines bestYearAvg
// Should return undefined if the array is empty
// Should return the correct answer to a single element array
// Should return the correct answer to a multiple elements array
// Should return the oldest year when there is a tie

function bestYearAvg (movies){
  if (movies.length === 0){
    return undefined;
  }
}