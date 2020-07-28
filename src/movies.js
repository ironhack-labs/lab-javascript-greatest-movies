// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
    const mappedArray = array.map(movie=>movie.director);
    let newmappedArray = []
    for(i=0; i<mappedArray.length; i++){
        if (i == mappedArray.indexOf(mappedArray[i])){
           newmappedArray.push(mappedArray[i]);
        }  
      }
  return newmappedArray
} 

//perguntar como fazer para remover duplicatas

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function isDrama(array) {
    const arrayDrama = array.filter(x=> x === "Drama");
    if (arrayDrama.length === 0) {
    return false
    }
    return true
}

// x => x === Drama
// function(x) {
//  return x === Drama   
//}

function howManyMovies(array) {
 let dramaMovies = array.filter(movie => movie.director === 'Steven Spielberg');
        dramaMovies = dramaMovies.filter(movie => isDrama(movie.genre));
    return dramaMovies.length
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function sum(array1) {
    let somaVal = 0;
    let tamanho = 0;
    if(array1.length === 0 ){
      return somaVal;
    }
    for (i=0; i< array1.length;i++){
      if (typeof array1[i] === "boolean"){
        if (array1[i]=== true){
          somaVal += 1;
        }
      } else if (typeof array1[i] === 'number' ){
        somaVal += array1[i];
      } else if (typeof array1[i] === 'string' ){
        tamanho = array1[i].length;
          somaVal += tamanho;
        }
      }
    
      return somaVal;
  }

  function averageNumbers(array) {
    if (array.length == 0){
      return 0
    }
    let varMedia = 0;
    varMedia = sum(array) / array.length;
    return varMedia;
  }

function ratesAverage(array) {
    let rateArray = array.map(movie => movie.rate);
    return (Math.round(averageNumbers(rateArray)*100))/100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){
let dramaMovies = array.filter(movie => isDrama(movie.genre));
return ratesAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)


function compareYear(a, b) {
    return a - b;
}
function orderByYear(array) {
    let newArray = array.slice(0,array.length);
    let orderByYearArray = newArray.sort((a,b) => {
      if (a.year === b.year) {
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      }
       else {
         return a.year - b.year;
       }
    });
        return orderByYearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(array) {

  const mappedArray = array.map(movie=>movie.title);
  let orderByTitle = mappedArray.sort((a,b) => {
    if (a < b) {
        return -1;
      }
        return 0;
    });
    return orderByTitle.slice(0,20);
  }
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
