/* eslint no-restricted-globals: 'off' */




// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies){
  const total = [...movies]
  
  total.sort((a,b) => {
  if(a.year > b.year){
    return 1;
  } else if (a.year < b.year){
    return -1;
  }else {
    if (a.title > b.title){
      return 1;
    } else if (a.title < b.title){
      return -1;   
  } else{
    return 0
  }
}
 } );
 return total
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Why this function is't working


 function howManyMovies(arr){
 const drama = arr.filter(function (value, index, originalArray) {
  return value.genre.includes("Drama");
});
 const sSdramaMovies = drama.filter(function (value, index, originalArray) {
  return value.director === "Steven Spielberg";
 });
if(sSdramaMovies === 0 ){
  return 0
}  
 return sSdramaMovies.length
};

/* or
function howManyMovies(arr) {
 

  let filteredMovies = arr.filter((arr) => {
      return arr.director === "Steven Spielberg" && arr.genre.includes("Drama");
  });

  return filteredMovies.length;
}
*/


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  let moviesList = arr.map( (arr) => {
    return arr.title;
  });
  const sortArr = moviesList.sort((a,b) => {
      if(a > b){
        return 1
      } else if(a < b){
        return -1
      } else {
        return 0
      }
    });
  
   return moviesList.slice(0,20)

};
// Iteration 4: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){
  if (arr.length === 0){
    return 0
  }else{

  const totalRates = arr.reduce((accumulator,value) => {
    if(!value.rate) { 
      return value.rate = 0; }
    
    return accumulator + value.rate;
  
},0);

return parseFloat((totalRates / arr.length).toFixed(2));
  }
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let dramaRates = arr.filter((value => {
    return value.genre.includes("Drama");
  }));

  return ratesAverage(dramaRates);
};
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
/*function turnHoursToMinutes(arr){
 const secondArr = arr

 function minutes(string){
  let minutesTime  = string.split("");
  let time = 0;
  minutesTime.forEach(element => {
    if(element.includes("h")) t
    
  });
 }
return // an array with the same thing but the value duracion in minutes
}*/

function turnHoursToMinutes(arr) {

  let moviesDurations = arr.map((movie) => {

    const newMovie = {...movie};

      let totalTime = 0;
      let time = movie.duration.split(" ");
      time.forEach((element) => {

        if ( element.includes("h") ) {
          totalTime += parseInt(element.replace('h','')) * 60;
        }

        if ( element.includes("min") ) {
          totalTime += parseInt(element);
        }

      });

      if ( totalTime > 0 ) { newMovie.duration = totalTime; }

   

    return newMovie;

  });

  return moviesDurations;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(arr){
  if (arr === undefined){
    return null
  }
  
}