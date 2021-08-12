// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  // para conseguir array de directores map
  let directorsArray = moviesArray.map( (movie) => {
    return (movie.director);})
  return directorsArray;
}

function getAllDirectorsWithoutDuplicates (moviesArray){
  let allDirectors = getAllDirectors(moviesArray);
  let allDirectorsWithoutDuplicates = allDirectors.filter((director,index) =>
  {
    return allDirectors.indexOf(director) === index;
  })
  return (allDirectorsWithoutDuplicates);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  //filtrar para conseguir todos las pelis de Spielberg
  let spielbergMovies = moviesArray.filter ((movie) => {
  return (movie.director.includes("Steven Spielberg")); })
  //filtrar para conseguir los dramas
  let dramaAndSpielberg = spielbergMovies.filter ( (movie) => {
  return movie.genre.includes("Drama") });
  return(dramaAndSpielberg.length);
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  //map para sacar todas las scores
  let allScoresArray =  moviesArray.map ( (element) => {
    if(!element.score) {
      return 0;
    }
    return element.score});
  let scoresNumber = allScoresArray.length;
  //reduce para sumar todas las scores
  let allScoresSum = allScoresArray.reduce((accumulator, currentValue) => { return accumulator + currentValue;});
  let average = allScoresSum / scoresNumber;
  //Math.round(resultado *100)/100 --> dos decimales
  return (Math.round (average * 100)/100);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  //filtrar para conseguir los dramas
  let dramaMovies = moviesArray.filter ( (movie) => {return movie.genre.includes("Drama") });
  if (dramaMovies.length === 0) {
    return 0;
  }
  let allDramaScores =  dramaMovies.map ( (element) => {
    if(!element.score) {
      return 0;
    }
    return element.score});
  let scoresNumber = allDramaScores.length;
  //reduce para sumar todas las scores
  let allDramaScoresSum = allDramaScores.reduce((accumulator, currentValue) => { return accumulator + currentValue;});
  //dividir por la longitud
  let average = allDramaScoresSum / scoresNumber;
  //Math.Round(resultado *100)/100 --> dos decimales
  return (Math.round (average * 100)/100);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function compareStrings(a, b) {
  if (a.localeCompare(b) < 0) {
    return -1;
  }
  else {
    return 1;
  }
}


function orderByYear(moviesArray) {
  let orderedArray = moviesArray.sort ((a, b) => {
  if (a.year === b.year)
  {return(compareStrings(a.title,b.title))}
  return a.year - b.year;
  });
  let solution = [...orderedArray];
  return (solution);
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    let newArray = [...moviesArray];
    let orderedArray = newArray.sort ((a, b) => {
    return(compareStrings(a.title,b.title))
    });
    let solution = orderedArray.map( (movie) => {return (movie.title)})
    //return only the first 20 elements
    return (solution.slice(0,20));
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  //clonar el array
  let newArray = [...moviesArray];
  //funcion transformar horas a minutos y mapear el array
  let solution = newArray.map ( (movie) => {
    //clonar el objeto
    let newMovie = JSON.parse(JSON.stringify(movie));
    let durationString = newMovie.duration;
    // horas es siempre el elemento antes de h
    let horas = durationString.split("h");
    //minutos es siempre el elemento 1 de horas
    let minutos;
    if (horas.includes("")){
      minutos = 0;
    } else { 
    minutos = horas[1].split("min");
    minutos = minutos[0];
    }
    horas = horas[0];
    //pasar de string a integer
    horas = parseInt(horas);
    minutos = parseInt (minutos);
    let horasAMinutos = horas * 60;
    let total = horasAMinutos + minutos;
    //asignar total al objeto
    newMovie.duration = total;
    return newMovie})
    return (solution);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function yearAverage(moviesArray,year) {
  //por cada año => sacar la media =>
  let newArray = [...moviesArray];
  let yearsMovies = newArray.filter((movie) => {
    return (movie.year === year)
  })
  let yearsScores = yearsMovies.map ((movie) => {
    return (movie.score);
  })
  let totalScore = yearsScores.reduce((accumulator, currentValue) => { 
    return accumulator + currentValue;
    });
  let average = totalScore / yearsScores.length;
  return (average)
}

function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return (null);
  }
//conseguir una lista de todos los años
let newArray = [...moviesArray];
let yearsArray = newArray.map ( (movie) => {
  return (movie.year);
} )
//eliminar duplicados
let uniqueYearsArray = yearsArray.filter((year,index) =>
  {
    return yearsArray.indexOf(year) === index;
  })
//crear una lista 
objectsArray = [];
//llenar la lista con años
for (i=0; i<uniqueYearsArray.length; i++){
  let year = {name: uniqueYearsArray[i],
              average: yearAverage(moviesArray, uniqueYearsArray[i])};
  objectsArray.push(year);
}
//ordenar la lista de objetos -> sort
const orderedYears = objectsArray.sort((yearA,yearB) => {
  if (yearB.average === yearA.average){
    return (yearA.name - yearB.name)
  }
  return (yearB.average - yearA.average) 
})
//devolver primera posicion, construir frase
return ("The best year was " + orderedYears[0].name + " with an average score of " + orderedYears[0].average);
}

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
