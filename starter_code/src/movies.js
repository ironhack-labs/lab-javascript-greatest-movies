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

function ratesAverage (arr){
  let averageRate = arr.reduce(function(sum, movie){
    return sum + parseFloat(movie.rate);
  }, 0);
  return Math.round ((averageRate/arr.length) * 100) / 100;
}


// Get the average of Drama Movies

function dramaMoviesRate(movies) {
  
  let dramaMovies = []; 
  
   dramaMovies = movies.filter(function (movie) {
   return movie.genre.indexOf("Drama") !== -1;
  }); 
  
  if (dramaMovies.length === 0) {
   return undefined;
  } else {
    let media = dramaMovies.map(function (movie) {
    
    if (movie.rate === "") {
     movie.rate = 0;
   }
    return parseFloat(movie.rate);

  }).reduce(function (accu, value) {
   return accu + value;
  }, 0);
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

  if (movies.length === 0){
    return undefined;
  }

  let dramaMovies = []; 
  
   dramaMovies = movies.filter(function (movie) {
   return movie.genre.indexOf("Drama") !== -1;
  }); 

  let spielbergDrama = dramaMovies.filter(function (movie){
    return movie.director === "Steven Spielberg";
  });

  if (spielbergDrama.length === 0){
    return "Steven Spielberg directed 0 drama movies!";
  } else if (spielbergDrama.length === 1){
    return "Steven Spielberg directed 1 drama movies!";
  } else if (spielbergDrama.length === 2){
    return "Steven Spielberg directed 2 drama movies!";

  } else if (spielbergDrama.length === 4){
    return "Steven Spielberg directed 4 drama movies!" ;
  }else {
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
  
  let firstTwentyTitles = movies.filter(function (movie){
    return movies.indexOf(movie) <= 19;
  });

  let movieTitles = firstTwentyTitles.map(function (movie){
    return movie.title;
  });
  
  movieTitles.sort();
  
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