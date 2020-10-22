// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr){
  const directorsInArray = [];
  arr.map((giveMeAll)=>{
    directorsInArray.push(giveMeAll.director);
  });
  return directorsInArray;
}
/*
function getAllDirectors(arr){
  const directorsInArray = new Array();
  arr.forEach((giveMeAll) => {
    directorsInArray.push(giveMeAll.director);
  });
  return directorsInArray;
}
*/

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getRealNumberOfDirectors(arr){
  const allDirectorsInArray = [];
  arr.forEach((giveMeAll) => {
    allDirectorsInArray.push(giveMeAll.director);
  });
  directorsInArray = allDirectorsInArray.filter((name,index) => {
    return index === allDirectorsInArray.indexOf(name);
  });
  return directorsInArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function onlySpilbergDrama(arr){
  const onlyDramaMovies = [];
    arr.filter((movie) => {
    if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
      onlyDramaMovies.push(arr.director);
    }
  });
  return onlyDramaMovies.length;
}

function howManyMovies(arr){
  const onlySpilbergMovies = [];

  arr.filter((movie) => {
    if(movie.length === 0){
      return 0;
    }else if(movie.director !== "Steven Spielberg"){
      return 0;
    }else if(movie.director === "Steven Spielberg" && movie.genre.includes("Drama")){
      onlySpilbergMovies.push(movie.director);
    }
  });
  return onlySpilbergMovies.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
  if(arr.length === 0){
    return 0;
  }
  const allRates = [];
  arr.map((giveMeAll) => {
    if(giveMeAll.rate === undefined){
      allRates.splice();
    }else{
      allRates.push(giveMeAll.rate);
    }
  });
  const sumRate = allRates.reduce((acc,crv) => {
    return acc + crv;
  });
  const totalOfRates = arr.length;
  const result = sumRate / totalOfRates;
  const fixedResult = Math.round(result * 100)/100;
  return fixedResult;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
  const onlyOneGenre = [];
  const onlyDramaMovies = [];
  arr.filter((movie) => {
    if(movie.genre.length === 1){
      onlyOneGenre.push(movie);
    }
  });
  onlyOneGenre.filter((film) =>{
    if(film.genre == "Drama"){
      onlyDramaMovies.push(film.rate);
    }
  });
  if(onlyDramaMovies.length === 0){
    return 0;
  }else {
    const sumRate = onlyDramaMovies.reduce((acc,crv) => {
      return acc + crv;
    });
    const totalOfRates = onlyDramaMovies.length;
    const result = sumRate /totalOfRates;
    const fixedResult = Math.round(result * 100)/100;
    return fixedResult;
  }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
   const arrSorted = arr.sort((a,b) => {
    if(a.year > b.year) return 1;
    if (a.year < b.year) return -1;
    if(a.year === b.year){
      if(a.title > b.title) return 1;
      if(a.title < b.title) return -1;
      else return 0;
    } 
  });
  const newArr = [];
  arrSorted.forEach((movie) =>{
    newArr.push(movie);
  });
  return newArr;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
  const newArr = [];
  const limitedArr = [];
  arr.forEach((movie) =>{
    newArr.push(movie.title);
  });
  const newArrSorted = newArr.sort((a, b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    if(a === b) return 0;
  });
  if(newArrSorted.length < 20){
    return newArrSorted;
  }else{
    for(var i = 0; i < 20; i++){
      limitedArr.push(newArrSorted[i]);
    }
    return limitedArr;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes



// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
/*

*/