
/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)~


function orderByYear(array) {
  let sortedArray = array.slice().sort(function (a, b) {
    if (a["year"] === b["year"]) {
      return a["title"].localeCompare(b["title"]);
    }
    else
      return a["year"] - b["year"]
  });
  return sortedArray
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(array) {

  const dramaBySteven = array
    .filter(newArray => newArray.director === "Steven Spielberg" && newArray.genre.includes("Drama"));
  return dramaBySteven.length
};

/*
let spielScore = 0 
if (newArray.director.length === 1){
  spielScore =+2
}
else if (newArray.genre.length === 1) {
  spielScore =+1
} else {
  spielScore =+4
}
*/


// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array) {
  first20 = array.slice(0, 21);
  let alpMov = first20.sort((a, b) => a.title - b.title);
  return alpMov[title];
}
orderAlphabetically(movies);




// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
