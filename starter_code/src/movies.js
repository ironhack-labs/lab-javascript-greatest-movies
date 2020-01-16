/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies){

    let filmsByYear = [...movies]
    filmsByYear.sort(function(a, b){
      if (a.year < b.year) {
        return -1
      }
      else if (a.year > b.year) {
        return 1;
      } 
      else if(a.year === b.year) {
          if (a.title < b.title) {
            return -1; 
      } 
      else if(a.title > b.title){
          return 1;
      }
      else {
        return 0;
      }
      }
    });
    return filmsByYear;
  }

  orderByYear(movies);


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(movies){
   let selectedFilms = movies.filter(function(element){
        return element.director === "Steven Spielberg" && element.genre.includes("Drama");
    })
    return selectedFilms.length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    let mappedTitles = [...movies].map(function(e){
        return e.title;
    })
    let slicedTitles = mappedTitles.sort();
    return slicedTitles.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){    
    if (movies.length ===0){
        return 0;
    }
    else
    {
      const rate = movies.filter(function(elements){
        return elements.rate > 0;
            });
    
        let totalRate =rate.reduce(function(accumulator, sum){
            let total = accumulator + sum.rate;       
        return total;
    }, 0);

    return parseFloat((totalRate/movies.length).toFixed(2));
    }

}

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    let drama = movies.filter(function(e){
        return e.genre.includes("Drama");
      })
    return ratesAverage(drama);
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies){
  let hoursToMinutes = [...movies];
  let duration = hoursToMinutes.map(function (e){
    return e.duration;
  }); 

  for(var i=0;i<hoursToMinutes.length; i++){
    if(duration[i].includes(" ")){
      var hoursMinuteArray = duration[i].split(" ");
      var minutes = parseInt(hoursMinuteArray[0].replace("h",""))*60 + parseInt(hoursMinuteArray[1].replace("min",""));
      hoursToMinutes[i].duration = minutes;
    }
    else{
      if (duration[i].includes("h")){
        var minutes = parseInt(duration[i].replace("h",""))*60;
        hoursToMinutes[i].duration = minutes;
      }
      else{
        var minutes = parseInt(duration[i].replace("min",""));
        hoursToMinutes[i].duration = minutes;
      }
    }
  }
  return hoursToMinutes;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
