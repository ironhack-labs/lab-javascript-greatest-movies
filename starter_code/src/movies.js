/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 


//Version terminada 2


// iteracion 1

function turnHoursToMinutes(movies) {

    var newArray = movies.map(function(elem){      
         //Obtener horas en el string
        var hours = elem.duration.slice(0, elem.duration.indexOf("h"));    
        // Para obtener minutos saltando el caracter "Espacion vacio"
        var minutes = elem.duration.slice(elem.duration.indexOf(" ") + 1, elem.duration.indexOf("min"));
        minutes = parseInt(minutes);
        hours = parseInt(hours);
        if (!elem.duration.includes("h")) {
            hours = 0
        }else if(!elem.duration.includes("min"))
        {
            minutes = 0
        }
         var finalTime =  minutes + (hours * 60);
        return {
            title: elem.title,
            year: elem.year,
            director: elem.director,
            duration:finalTime,
            genre: elem.genre,
            rate: elem.rate
          }
      })
      return newArray;
}


// Get the average of all rates with 2 decimals 
//Iteración 2
function ratesAverage(movies){

    var average = movies.reduce(function(acum, current){
        return ( parseFloat( acum )+ parseFloat (current.rate)) 
    },0);
    var result = average / movies.length;
    return result;
}


// Get the average of Drama Movies

function dramaMoviesRate (movies){
    var total = 0;
    var dramaFilter = movies.filter(function(e) {    
        return e.genre.includes("Drama");
      });
      dramaFilter.forEach(element => {
        if (element.rate === "") {      
            return
        }
          total +=  parseFloat ( element.rate);
      });
      if (dramaFilter.length > 0) {
      var result = (total / dramaFilter.length);
      result = Math.round(result * 100) / 100;
      return result;
      }else{
          return undefined;
      }
}

//Iteracion 3

// Order by time duration, in growing order
function orderByDuration(moviesInput){
  
    //Me confundí, tenemos que obtener la duracionConvertida o tenemos que trabajar con el input de las pruebas?
    var convertedArray = turnHoursToMinutes(movies);   
    
    
        var orderedArray = moviesInput.sort(function(a, b) {   
            return a.duration - b.duration;
        });
        var newArray = orderedArray.map(function(elem){  
            return{
            duration: elem.duration
            }
         });
       
      return newArray;
}

// How many movies did STEVEN SPIELBERG


function howManyMovies (moviesInput){
    var total = 0;


    var dramaFilter = moviesInput.filter(function(e) {    
        return e.genre.includes("Drama") && e.director.includes("Steven Spielberg");
      }); 

      var notSpielberg = moviesInput.filter(function(e) {    
        return e.genre.includes("Drama") && !e.director.includes("Steven Spielberg");
      }); 

      if(dramaFilter === []){
        return undefined;
      }
      else if (dramaFilter.length > 0) {
        return "Steven Spielberg directed " + dramaFilter.length + " drama movies!"

      }else if (notSpielberg.length > 0){
        return "Steven Spielberg directed 0 drama movies!";
      }

}


// Order by title and print the first 20 titles
function orderAlphabetically(moviesInput) {

    var sortedMovies = moviesInput.sort(function(a,b){
    if (a.title.toUpperCase()  < b.title.toUpperCase()  ){ 
      return -1;
    }
    else{
      return 1;
    }
    });
    var newMovies =  sortedMovies.map(function(movie){
        return movie.title
    });
    newMovies = newMovies.slice(0,20);
    return newMovies
  }

  