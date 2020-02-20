/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

//let moviesList= JSON.parse(JSON.stringify(movies))

/*
function orderByYear(array) {
  return [...array].sort(function(a, b) {
    if (a.year != b.year) {
      return a.year - b.year;
      } 
    else {
      return a.title - b.title;
    }
  });
}
*/

function orderByYear(array) {
  return [...array].sort(function(a, b) {
    if (a.year > b.year) {
      return 1;
    }
    if (a.year < b.year) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
  });
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {
  let Spielberg = array.filter(function(movie) {
    return (
      movie.director === "Steven Spielberg" &&
      movie.genre.indexOf("Drama") !== -1
    );
  });

  return Spielberg.length;
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(array){
  let newArray = orderByTitle(array);
  let title = []
   newArray.splice(20, newArray.length);
   for (let i=0; i<newArray.length; i++){
     title.push(newArray[i].title)
   }
  return title;
}

function orderByTitle(array) {
  return [...array].sort(function(a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title < b.title) {
      return -1;
    }
  });
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(array){
  if (array.length === 0 ){return 0}
  let rates = array.map((x)=> x.rate);
  rates = rates.filter(function(movie) {
    return (movie > 0)})
  //PREGUNTA: lo he hecho así, pero me gustaría haber podido sustituir NaN y "" por 0... existe alguna opción para mapear el array, identificar estos valors y cambiarlos por un valor deseado? O sería solamente liarse a "fors"
  let avgRate = rates.reduce((a, b)=>a+b);
  avgRate /= array.length
  return Math.round(avgRate*100)/100
}


// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
let dramaMovies= array.filter(movie=> (movie.genre.indexOf("Drama") != -1));
return ratesAverage(dramaMovies)
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


function turnHoursToMinutes(array){
  let correctArray = JSON.parse(JSON.stringify(array));
  let correctDurations = []
    correctDurations = correctArray.map(function(tiempo) { 
     if (tiempo.duration.includes("h") && tiempo.duration.includes("min")) {
      //console.log("calculando TODO")
       let hours = tiempo.duration.slice(0, (tiempo.duration.indexOf("h")))
       let minutes = tiempo.duration.slice((tiempo.duration.indexOf(" ")), (tiempo.duration.length-1))
       let result = (calculateHours(hours) + calculateMinutes(minutes)); 
       return result;  
     }
     else if (tiempo.duration.includes("h")) {
        //console.log("calculando HORAS")
       let result = calculateHours(tiempo.duration);
       return result;
      }
      else {
        //console.log("calculando MINUTOS")
        let result = calculateMinutes(tiempo.duration);
          return result;}
   })
   correctArray = updateArrayWithCorrectData(correctArray, correctDurations)
return correctArray
} 


function updateArrayWithCorrectData(arrayToCorrect, correctDurations){
  for (let i=0; i< arrayToCorrect.length; i++){
  arrayToCorrect[i].duration = parseInt(correctDurations[i])
  }
    return arrayToCorrect
}

function calculateHours(hoursString){
  let minutes = parseInt(hoursString)*60;
  return minutes;
}


function calculateMinutes(minutesString){
  let minutes = parseInt(minutesString);
  return minutes;
}



//Joaquim me ayudó con el splice, porque me estaba obcecando con buscar índices en arrays...



// BONUS Iteration: Best yearly rate average - Best yearly rate average*/
