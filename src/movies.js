// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (arr){
const allDirectors = arr.map(elem=>elem.director)
const filteredDirectors = allDirectors.filter((elem, i)=>allDirectors.indexOf(elem)===i)
return filteredDirectors
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr){
const moviesSpielberg = arr.filter(elem=>elem.director === "Steven Spielberg" && elem.genre.includes("Drama"))
return moviesSpielberg.length
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr){

const avgRates = arr.reduce((accum, currVal)=> {return accum + currVal.rate;}, 0)/arr.length;
if (!arr.length) return 0;
else if (arr.rate===0) return parseFloat(avgRates.toFixed(2));
else return parseFloat(avgRates.toFixed(2))

  }
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
  const dramaMovies = arr.filter((elem=> elem.genre.includes("Drama")));
return ratesAverage(dramaMovies)
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
const releasYear =[...arr].sort((a,b)=>a.year-b.year);
let sameYear = releasYear.filter((elem, i)=>releasYear.indexOf(elem) === i).sort
const sortYear = [...sameYears].sort ((a,b)=>a.title.localeCompare(b.title))
return sameYears
}
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr){
const sortByName = [...arr].sort((a,b)=>a.title.localeCompare(b.title));
if (sortByName.length>20)
return (sortByName.slice(0, 3));
else return sortByName
}
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr){
let splitArr = arr.map(elem=>elem.duration.split(' '))
let replaceAndJoinArr = splitArr.map(elem=>elem[0].replace('h',' ')+elem[1].replace('min', ''));
let sumNumArr = replaceAndJoinArr.map(elem=>elem.split(' ')).map(elem=>Number(elem[0])*60+Number(elem[1]));
let finalArr = arr.map((elem,i)=>elem.duration=sumNumArr[i])
return arr
}
// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
