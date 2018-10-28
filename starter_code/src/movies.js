/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies) {
  return movies.map(function(movie) {
    var newDuration = "";

    if (movie.duration.indexOf("h") == -1) {
      newDuration = parseInt(movie.duration);
    } else if (movie.duration.indexOf("m") == -1) {
      newDuration = parseInt(movie.duration) * 60;
    } else {
      newDuration =
        parseInt(movie.duration.split(" ")[0]) * 60 +
        parseInt(movie.duration.split(" ")[1]);
    }

    return Object.assign({}, movie, { duration: newDuration });
  });
}












// Get the average of all rates with 2 decimals
function ratesAverage(movies) {

   

    var toNumber = movies.map(function(film){
      return film.rate = parseFloat(film.rate);
   })
   



   var averageRate = toNumber.reduce(function(sum, film){

    return sum + film.rate;

   })

   return parseFloat(averageRate / averageRate.length)


};



// Get the average of Drama Movies
function dramaMoviesRate(movies){

  var toNumber = movies.map(function(film){
    return film.rate = parseFloat(film.rate);
 })
 

  var averageDrama = toNumber.reduce(function(sum, film){


    if (film.genre.indexOf("Drama")){
      return sum + film.rate;
   }

  })
 
    console.log(parseFloat(averageDrama / averageDrama.length));
}








// Order by time duration, in growing order

function orderByDuration(movies){

  var films = turnHoursToMinutes(movies);
  
  var sortByTitle = films.title.sort()
  console.table(sortByTitle)

  var sortNumDuration = films.sort(function(a, b){



    if (a.duration > b.duration){
      return -1;
    }

    if (a.duration < b.duration){
        return 1;
    }
    else{
      return 0;

    }
    
    
    
  


  // console.table(sortNumDuration.title.sort())
  })
}




// How many movies did STEVEN SPIELBERG

function howManyMovies(movies){

  var SpielbergFilmsDrama = [];

  var SpielbergFilms =  movies.filter(function(film){

    SpielbergFilmsDrama.push(SpielbergFilms.genre.indexOf("Drama"))
    console.log(SpielbergFilmsDrama)

    // return film.director.indexOf('Spielberg');

  })




  if (SpielbergFilms === []){
    return undefined;

  }else if (SpielbergFilmsDrama === []){
    return "Steven Spielberg directed 0 drama movies!"
  }








    // Should return an string
    // Should return undefined if the array is empty
    // Return "Steven Spielberg directed 0 drama movies!" if he does not directed none of the movies in the array
    // Only drama movies! Should return "Steven Spielberg directed 1 drama movies!"
    // Only Steven Spielberg movies! Should return "Steven Spielberg directed 2 drama movies!"
    // Should return "Steven Spielberg directed 4 drama movies!"





}

// Order by title and print the first 20 titles

// Best yearly rate average
