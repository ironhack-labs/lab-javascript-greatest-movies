/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes 



function turnHoursToMinutes(films){

    return films.map(function(film){
        
        var time;
        var min;
        time = film.duration.split(" ");
        if (time.length<2){
            if (time[0].includes("h")){
              time.push(0);
              min = parseInt(time[0])*60 + parseInt(time[1]);
            } else {
            time.unshift(0);
            min = parseInt(time[0])*60 + parseInt(time[1]);
            } 
        }  else {
          min = parseInt(time[0])*60 + parseInt(time[1]);
        }
        return Object.assign({},film,{duration:min}); 
    })
}

// Get the average of all rates with 2 decimals 

function ratesAverage(films) {
    var sum = films.reduce(function(acc, film) {
      if (film.rate === "") {
        film.rate = 0;
      }
  
      return acc + parseInt(film.rate);
    }, 0);
    return parseInt((sum / films.length).toFixed(2));
  }

// Get the average of Drama Movies

function dramaMoviesRate(films) {
    var dramaFilms = films.filter(function(movie) {
      return movie.genre.includes("Drama");
    });
  
    if (dramaFilms.length > 0) {
      return ratesAverage(dramaFilms);
    }
  }

// Order by time duration, in growing order
function orderByDuration(films) {
    films.sort(function(a, b) {
      if (a.duration === b.duration) {
        if (a.title > b.title) {
          return 1;
        } else return -1;
      }
      return a.duration - b.duration;
    });
    return films;
  }

// How many movies did STEVEN SPIELBERG

function howManyMovies(films) {
    
    if (films.length > 0) {
      
      var spielbergFilms = films.filter(function(film) {
        return (
          (film.director === "Steven Spielberg") && (film.genre.includes("Drama"))
        );
      });
      
      return (
        "Steven Spielberg directed " + spielbergFilms.length + " drama movies!"
      );
    }
  }

// Order by title and print the first 20 titles


// Best yearly rate average
