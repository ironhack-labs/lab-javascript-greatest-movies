const movies = require("./data");
// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(obj) {
  let directores=[];
  obj.map((obj)=>{
      directores.push(obj.director)
  })
  return directores;
}
getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
let contadorSteven=0;
let numpelis= arr.filter((peli)=>
  peli.director==='Steven Spielberg' && peli.genre.includes('Drama'));
contadorSteven=numpelis.length
return contadorSteven
}

howManyMovies(movies);

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr){
if(arr.length==0){
  return 0;
}
let noEsta=0;

  let totalPoints=arr.reduce((acc,av)=>{
    let points= acc+=av.score
    if(arr.score!=true){
      noEsta+=1;
     
     }
  return points
    
  },0);
  let average=(totalPoints/(arr.length)).toFixed(2)
  return Number(average)
    } 
scoresAverage(movies)
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr){
  let drama=arr.filter((peli)=>
    peli.genre.includes('Drama'));
    if(drama.length==0){
      return 0
    }
  
  console.log('Este es el drama:',drama)
  let promedioDrama=drama.reduce((acc,av)=>{
    let points= acc+=av.score
  return points
    
  },0);
   let average=(promedioDrama/(drama.length)).toFixed(2)
   console.log('Promedio drama',average)
  return Number(average)
    } 
    dramaMoviesScore(movies);
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  //COPIAMOS EL ARRAY A UNA NUEVA VARIABLE PARA NO AFECTARLO
  let porFecha=[...arr]
  let porFechaAcomodado= porFecha.sort((a,b)=>{
   return a.year-b.year
 });
 let porAlfa=porFechaAcomodado.sort((a,b)=>{
  let ordenados=a.title.toLowerCase().localeCompare(b.title.toLowerCase());
  return ordenados
 });
 
 return porAlfa
 
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let newArr=[...arr]
  let titulos=[];
  let alphaOrder=newArr.sort((a,b)=>{
   let ordenados=a.title.toLowerCase().localeCompare(b.title.toLowerCase());
    return ordenados
  });
  console.log(alphaOrder);
  if(alphaOrder.length<=20){
   alphaOrder.forEach((arr)=>{
     console.log(arr.title)
    titulos.push(arr.title)
     //console.log('Estos son titulos',titulos)
     return titulos
   })
  return titulos
  } else if(alphaOrder.length>20){
    for(let i=0; i<=19;i++){
    titulos.push(alphaOrder[i].title)
    }
    return titulos
  }
 
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
