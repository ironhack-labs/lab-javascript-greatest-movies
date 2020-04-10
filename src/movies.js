/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(peliculas){

    let copiaPeliculas = JSON.parse(JSON.stringify(peliculas));

       return copiaPeliculas.sort((a,b) => {
        if (a.year === b.year){
            return a.title.localeCompare(b.title)
        }
        else {
            return a.year - b.year
        }
    })
  };


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
    if(arr.length === 0)
    return 0;

    let dramaMovie = true;

    let peliculasFiltradas = arr.filter(function(peliculas){
        return peliculas.director === "Steven Spielberg" && peliculas.genre.includes("Drama") === dramaMovie;
    });
return peliculasFiltradas.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

/*function orderAlphabetically (arrDePeliculas){
    let copiaAlfabeticas = JSON.parse(JSON.stringify(arrDePeliculas));
        return copiaAlfabeticas.sort((a,b) => {
            a.title - b.title
        })
}; */

function orderAlphabetically(arrDePeliculas){
    let orderedArray = arrDePeliculas.map(arrDePeliculas=>arrDePeliculas.title);
    return orderedArray.sort().filter((arrDePeliculas,idx)=>idx<20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage (arr){
    if (arr.length === 0) {
          return 0;
      }
    let moviesRatesuma = arr.reduce(function(a,b){
        if(b.rate) {
            return a + b.rate
           }
           return a  
      let sum = a + b.rate
      return sum
    },0)
    let promedio = moviesRatesuma / arr.length
    return parseFloat(promedio.toFixed(2));
  };


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(peliculasDrama){
       let dramaFiltro = peliculasDrama.filter(function(element){
           return element.genre.includes("Drama")
       })

       return ratesAverage(dramaFiltro)
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieArr) {
    // create a copy using JSON
    let copyMovies = JSON.parse(JSON.stringify(movieArr));
    // create a minutes array with conversion h-min format to min
    /*copyMovies.forEach(function(movie){
      let newVar = movie.duration*60+movie.duration;
      movie.duration = newVar;
    })*/
    copyMovies.forEach(function(movie){
      let hourIndex = movie.duration.indexOf("h");
      let minIndex = movie.duration.indexOf("min");
      let minutesHour = 0;
      if (hourIndex === -1) {
        minutesHour = 0;
      } else {
        minutesHour = parseInt(movie.duration[hourIndex-1])*60;
      }
      let minutes = 0;
      if (minIndex === -1) {
        minutes = 0;
      } else {
        minutes = parseInt(movie.duration[minIndex-2] + movie.duration[minIndex-1]);
      }
      movie.duration = minutesHour + minutes;
    })

    /*let minutesArray = movieArr.map(function(movie) {
        let hourIndex = movie.duration.indexOf("h");
        let minIndex = movie.duration.indexOf("min");
        let minutesHour = 0;
        if (hourIndex === -1) {
          minutesHour = 0;
        } else {
          minutesHour = parseInt(movie.duration[hourIndex-1])*60;
        }
        let minutes = 0;
        if (minIndex === -1) {
          minutes = 0;
        } else {
          minutes = parseInt(movie.duration[minIndex-2] + movie.duration[minIndex-1]);
        }
        return minutesHour + minutes;
    });
    // change the duration format to a new min format
    for (let i=0; i<copyMovies.length; i++) {
        copyMovies[i].duration = minutesArray[i];
    }*/
    return copyMovies;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average

function bestYearAvg(movieYear){
    if(movieYear.length === 0 ){
        return null;
    } 

};
