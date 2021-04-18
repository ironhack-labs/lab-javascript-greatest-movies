// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movieArray) {
  console.log(movieArray);
  return movieArray.map((movie) => {
    return movie.director;
  });
}

// (version clean==>) const getAllDirectors = (movies) => movies.map(movie => movie.director);
// mapper movieArray

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// function howManyMovies(movieArray){
// return 0;
// const spielbergMovie = movieArray.filter(function(movieArray))}

// function howManyMovies(movieArray){
// const filteredArray = movieArray.filter(word => word.director === "Steven Spielberg")
// return filteredArray.length;
// console.log(movie.genre.includes('Drama'));}

//exemple: Iteration 2
function howManyMovies(movieArray) {
  const filteredArray = movieArray.filter(
    (word) =>
      word.director === "Steven Spielberg" && word.genre.includes("Drama")
  );
  return filteredArray.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movieArray) {
  if (movieArray.length === 0) return 0;
  const sumOfRates = movieArray.reduce((a, movie) => {
    return movie.rate === undefined ? a : (a += movie.rate);
  }, 0);
  console.log(sumOfRates);
  console.log(Number((sumOfRates / movieArray.length).toFixed(2)));
  return Number((sumOfRates / movieArray.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movieArray) {
  if (movieArray.length === 0) return 0;
  //const sumOfDramaMoviesRates = movieArray.reduce((a, movie) => {
  //  return movie.genre.includes("Drama") && ratesAverage (movieArray);

  const dramaMovies = movieArray.filter((word) => word.genre.includes("Drama"));
  console.log(dramaMovies);
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// 1.compare movies by date (2bypairs)
// 2.use sort() on the years's movies (movie.year) to organise the array and return the array

// test:
// const compareArray = movieArray.sort.compare(a, b);{}
// console.log(compareArray);
// return a - b;

// comparer les dates des films dans le new ARRAY
// if date are equals, class the movie title by alphabetical order

// test OK:
function orderByYear(movieArray) {
  const arrayCopy = [...movieArray];
  const newArray = arrayCopy.sort(function (a, b) {
    if (a.year < b.year) return -1; // ordering ascendant 
    if (a.year > b.year) return 1; // ordering ascendant 
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  return newArray;
}

// test
// function yearCompare (a, b){
// if (a.year === b.year) newArray.sort(function(a,b){
// console.log(newArray);
// return a.title - b.title;
// test
// movieArray[] yearOrder = (movieArray[]) movieArray.clone(movie.year);
// movieArray.Sort(yearOrder);
// const arrayCopy = movie => movieArray.sort(movie.year);
// console.log(arrayCopy);
// return arrayCopy;
// {...movieArray.sort((word => year.includes());
// console.log(yearOrder);
// return arrayCopy();

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

//1. classer par ordre alphabetique l'array pour printer les titres des 20 premiers films (console.log)
//2. creer une function qui prend l'array et return
//3. return the title of each movie,

//test OK:

function orderAlphabetically(movieArray) {
  const arrayCopy = [...movieArray];
  const map1 = arrayCopy.map(x => x.title); //sort them alphabetically
  map1.sort();
  if (map1.length > 20){
    map1.splice(20,map1.length); // virer les titres après les 20 selectionnés
  } else {
map1;
}
return map1;
}
    
    
//test KO
// if (a.title > b.title) return 1;
// if (a.title < b.title) return -1;
// if (a.title === b.title) return 0;});
// return newArray;} 

// let title = newArray.map();
// console.log(newArray);
// return newArr.title;}

// print the title of the first 20
// return (newArray.title.length < 20) && newArray;
// return (movieArray[index]0) <= 20);



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movieArray){
  const movieTry = [...movieArray]; // return an array copy
  //const time = movieTry.Math.floor(x => x.duration);

  
  
const hours = parseInt(prompt(x => x.duration));
const mn = hours * 60;
console.log(mn + " Minutes");
 
return movieTry; 
} 

//test 
//const hour = movieArray.split(":")[0];
//const mn = movieArray.split(":")[1];
//return Math.floor(hour * 60) + parseInt(mn);}


//Math.movieDuration(movieArray.duration/60);
//const minutes = movieArray.duration % 60;
 
//console.log(turnHoursToMinutes());}
//return hours + ":" + minutes;
 





// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

