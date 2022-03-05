const movies = require("./data");

// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors() {
/*
  const directorMovies = [];
 movies.forEach((element) => {
   directorMovies.push(element.director);
 });
 return directorMovies;
};

console.log(getAllDirectors());
*/
let nuevaLista = [];                         //creo array vacio p guardar, hay q estar arriba p que no se reinice a cada vuelta
for (let i = 0; i < movies.length; i++) {   //recogo la lista de movies
 // console.log(movies[i].director);        // puedo pintar los directores con movies[i].director
  nuevaLista.push(movies[i].director);      //agrego los directores al nuevo array
}
console.log(nuevaLista);
}
getAllDirectors();

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
//function cleanDireDu(arrayOld){}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies() {
  const stevenSpil = [];
  for (let i = 0; i < movies.length; i++) {   //recogo la lista de movies
    if(movies[i].director === 'Steven Spielberg' && movies[i].genre.includes('Drama')) {  //comparo si dentro de los movies, el director es SS y genre Drama
      stevenSpil.push(movies[i]);                                                   //pongo la seleccion dentro nuevo array
    } 
  }
  console.log(stevenSpil);
}
howManyMovies(movies);


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage() {
  let scorePlus = 0;
  for (let i = 0; i < movies.length; i++) {
   scorePlus += movies[i].score;
  }
  let mediaScore = (scorePlus / movies.length).toFixed(2);  //toFixed para redondear
  console.log(mediaScore);
}
scoresAverage(movies);

console.log("----------------------------------");

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {
  let newDrama= [];
  let dramaCount = 0;
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].genre.includes('Drama')) {  
      newDrama.push(movies[i]);
    }
  
  let dramaAve = scoresAverage(newDrama);
   return dramaAve;
  }
}
dramaMoviesScore(movies);

/*
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
/*
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}*/ 