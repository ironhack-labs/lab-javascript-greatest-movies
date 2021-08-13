// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {

  const allDirectors =  movies.map((element) =>  element.director )

  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  

const pelisSpielberg = movies.filter(function (element) {
 return element.director === `Steven Spielberg` && element.genre.includes(`Drama`)})

 return pelisSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

if (movies.length === 0) {return 0};

const pelisMap = movies.map((element) =>  { if (!element.score)  {return 0 }   return  element.score })


const sumaScores = pelisMap.reduce( function (accu, elemento) { return accu + elemento })


const averageRate = sumaScores / movies.length;

const averageDecimales = (Math.round( (averageRate) * 100) / 100) 

return averageDecimales
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

 

  const peliDrama = movies.filter ( (element) =>  element.genre.includes("Drama") )

   if (peliDrama.length === 0) {return 0};

const pelisMap = peliDrama.map((element) =>  { if (!element.score)  {return 0 }   return  element.score })

const sumaScores = pelisMap.reduce( function (accu, elemento) { return accu + elemento })

const averageRate = sumaScores / peliDrama.length;

const averageDecimales = (Math.round( (averageRate) * 100) / 100) 

return averageDecimales
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

 function compareTitle (a, b) {

  if (a.localeCompare(b) < 0) { 
    return -1 } 
    else {return 1}
}

const byYear = movies.sort(function (peli1, peli2)
{
  const pelicula1 = peli1.year
  const pelicula2 = peli2.year

    if(pelicula1 === pelicula2){
    return compareTitle(peli1.title, peli2.title)
  } else if(pelicula1 < pelicula2){
    return -1
  }else {
    return 1
  }
  
});

  const cloneByYear = [...byYear]

return cloneByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
  function orderAlphabetically(movies) {

  const cloneOrderAlphabetically = [...movies]

  function compareTitle (a, b) {

  if (a.localeCompare(b) < 0) { 
    return -1 } 
    else {return 1}
}


  const ordenarTitulo = cloneOrderAlphabetically.sort(function (title1, title2)
{
  const titulo1 = title1.title
  const titulo2 = title2.title

    if(titulo1 === titulo2){
    return compareTitle(title1.title, title2.title)
  } else if(titulo1 < titulo2){
    return -1
  }else {
    return 1
  }
  })

  const pelis20 = ordenarTitulo.slice(0, 20);

  const onlyTitle =  pelis20.map((element) =>  element.title )

  return onlyTitle
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
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
}
