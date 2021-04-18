// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(movieArray) {
  return movieArray.map((movie) => {
    return movie.director;
  });
}
//const getAllDirectors = (movies)=> movies.map(movie=>movie.director)//

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movieArray) {
  const filteredArray = movieArray.filter(
    (word) => word.director === "Steven Spielberg"&& word.genre.includes('Drama')
  );
  return filteredArray.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(movieArray) {
    if (movieArray.length===0) return 0;
  const sumOfRates = movieArray.reduce((a, movie) => {
    return (movie.rate===undefined ? a : a += movie.rate);
},0);
//console.log(sumOfRates);
//console.log (Number((sumOfRates/movieArray.length).toFixed(2)));
return (Number((sumOfRates/movieArray.length).toFixed(2)));
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(movieArray) {
  if (movieArray.length===0) return 0;
  const dramaMovies = movieArray.filter(
    (word) => word.genre.includes('Drama')
  );
  return ratesAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movieArray) {
    const arrayCopy =[...movieArray];
    const newArray= arrayCopy.sort(function (a, b) {
      if (a.year < b.year) return -1; // ordering ascending by year
      if (a.year > b.year) return 1; // ordering ascending by year
      if (a.title>b.title) return 1; // then ordering alphabetically by title (all that remains are same year movies)
      if (a.title<b.title) return -1; // 
    });
   return newArray;
  }
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieArray) {
  const arrayCopy =[...movieArray];//copy the original array to work on arrayCopy
  const map1 = arrayCopy.map(x => x.title);//create an array with just the movie titles
  map1.sort();//order alphabetically the map1 array
  if (map1.length>20){
  map1.splice(20,map1.length);
  } else {
  map1;
  }
  return map1;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {
  const arrayCopy =[...movieArray];//copy the original array to work on arrayCopy

}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg() {}