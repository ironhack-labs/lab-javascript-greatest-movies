// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?


let getAllDirectors = movies.map(function(movie){
  return movie.director;
});



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?


  let howManyMovies= movies.filter(function(movie){
    if (movie["genre"].includes("Drama") && movie["director"] === "Gary Trousdale")
       return movie;
   });



// Iteration 3: All rates average - Get the average of all rates with 2 decimals


let ratesTotal = movies.reduce(function(acc, movie){
  return acc + movie.rate
},0);

console.log((ratesTotal / movies.length).toFixed(2));



// Iteration 4: Drama movies - Get the average of Drama Movies


let dramaMovies= movies.filter(function(movie){
  if (movie["genre"].includes("Drama"))
     return movie;
 });
  

let ratesDrama = dramaMovies.reduce(function(acc, movie){
return acc + movie.rate
},0);

let dramaMoviesRate = (ratesDrama / dramaMovies.length).toFixed(2)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


let orderByYear = movies.sort(function(a, b){
  if (a.year < b.year){
  return -1;
} if (a.year > b.year){
  return 1;
} else {
  if (a.title < b.title){
  return -1;
  } if (a.title > b.title){
  return 1;
  };
}
});

console.log(orderByYear);



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


let alphabeticalOrder = movies.sort(function(a, b){
  if (a.title < b.title){
   return -1;
 } if (a.title > b.title){
   return 1;
 } else {
   return 0;
 }  
});


let twentyFirst = alphabeticalOrder.filter(function(movie){
 return alphabeticalOrder.indexOf(movie) < 20;
});

console.log(twentyFirst);

let orderAlphabetically = twentyFirst.forEach(function(movie){
 console.log(movie.title);
});


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes


let turnHoursToMinutes = movies.map(function(movie){
  if (movie["duration"].includes("h")){
    let newTime = movie["duration"].split("h ") // "2h 50min" => ["2"; "50min"]
    let minutes = newTime[1].split("min"); //["2"; "50"]
    let newMinutes = parseInt(minutes[0], 10)
    let hours = newTime[0] * 60
    let minutesDuration = hours + newMinutes
    movie["duration"] = minutesDuration
    ;    
  }
  return movie;
});


// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
