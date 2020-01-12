/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)



function orderByYear(arr) {
  let newArr = [...arr];
  newArr.sort(function(a, b){ 
    if (a.year - b.year !== 0) {
      return a.year - b.year;
      }
    else  {
      if (a.title > b.title) {return 1}
      else if (a.title < b.title) {return -1}
      else {return 0};
      }
  });
  return newArr;
}
orderByYear(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(arr) {
  let newArr = arr.filter(function(element){
    return (element.director === "Steven Spielberg") && (element.genre.indexOf("Drama")) != -1
  });
  return newArr.length;
}



// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr){
  let newArr = [...arr];
  newArr.sort(function(a, b){
    if (a.title > b.title) {return 1}
    else if (a.title < b.title) {return -1}
    else {return 0};
   });
  newArr = newArr.slice(0, 20);
  newArr = newArr.map(function(arr){
    return arr.title;
  });
  return newArr
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
  const newArr = [...arr];
  if (newArr.length === 0) {return 0};
  let sum = newArr.reduce(function(accumulator, currentValue) {
    if (typeof currentValue.rate !== "number") {currentValue.rate = 0};
    return accumulator + currentValue.rate
  }, 0);
  let average = sum / newArr.length;
  return Number(average.toFixed(2));
};

// Iteration 5: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(arr) {
  let newArr = arr.filter(function(element) {return element.genre.indexOf("Drama") !=-1})
  if (newArr.length === 0) {return 0};
  let sum = newArr.reduce(function(accumulator, currentValue) {
    if (typeof currentValue.rate !== "number") {currentValue.rate = 0};
    return accumulator + currentValue.rate
  }, 0);
  let average = sum / newArr.length;
  return Number(average.toFixed(2));
}

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes


function functionST(duration) {
  if (duration.indexOf("h") === -1) {return Number(duration.slice(0, duration.indexOf("m")));}
  else {
  return Number(duration.slice(0, duration.indexOf("h"))) * 60 + Number(duration.slice(duration.indexOf("h")+2, duration.indexOf("m")))};
};

function turnHoursToMinutes(arr) {
 let newArr = [...arr];
 newArr.duration = newArr.map(function(arr){
   return arr.duration = functionST(arr.duration);
 }
 );
 return newArr;
}

// BONUS Iteration: Best yearly rate average - Best yearly rate average
