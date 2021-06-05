
// Iteration 1: All directors? - Get the array of all directors.

//how it was written first, but live test isnt constructed to test codes written in this way
//const directorList = movies.map(function getAllDirectors(element) {
  //return element.director
//});
//console.log(directorList);

//re-written for the live tests
function getAllDirectors(arr) {
  const directors = arr.map(function (element) {
  return element.director
  });
  return directors
};

//console.log(getAllDirectors(movies));


// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?





// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
//const moviesSteven = movies.filter(function howManyMovies(name) {
  //if (name.director === "Steven Spielberg" && name.genre.includes("Drama")) {
    //return true
  //}
//});
//console.log(moviesSteven);

function howManyMovies(arr2) {
  const stevenDramaList = arr2.filter(function (name) {
    return name.director === "Steven Spielberg" && name.genre.includes("Drama");
    });
    return stevenDramaList.length;
  }
  
//console.log(howManyMovies(movies));


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage (arr3) {
  if (arr3.length === 0) {
    return 0;
  }
  const sum = arr3.reduce(function scoresAverage (acc, val){
    return acc + val.score
  }, 0);
  return Number((sum / arr3.length).toFixed(2));
}

//const sum = movies.reduce(function scoresAverage (acc, val) {
  //return acc + val.score
//}, 0);
//const avg = Number((sum / movies.length).toFixed(2));
//console.log(avg);

// Iteration 4: Drama movies - Get the average of Drama Movies
//first creating a drama only list
function dramaMoviesScore (arr4) {
  const dramaMoviesOnly = arr4.filter(function (name) {
    if (name.genre.includes("Drama")) {
      return true;
    }
  });
  if (dramaMoviesOnly.length === 0) {
    return 0;
  }
  const sum = dramaMoviesOnly.reduce(function (acc, val){
    return acc + val.score
  }, 0);
  return Number((sum / dramaMoviesOnly.length).toFixed(2));
  }

//console.log(scoresAverage(movies))



//const dramaMovies = movies.filter(function howManyDramaMovies(type) {
  //if (type.genre.includes("Drama")) {
    //return true
  //}
//});
//console.log(dramaMovies);
//now getting the sum
//const sumDrama = dramaMovies.reduce(function dramaMoviesScore (acc, val) {
  //return acc + val.score
//}, 0);
//calculating the average
//const avgDrama = Number((sumDrama / dramaMovies.length).toFixed(2));
//console.log(avgDrama);

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//in order not to mutate the original, a copy is created first
//when year is the same, order by alphabetical by order

function orderByYear(arr5) {
  const copyMovies = JSON.parse(JSON.stringify(arr5));
  const sortedName = copyMovies.sort((a,b) => a.title.localeCompare(b.title));
  const sortedYearAsc = sortedName.sort(function(a, b){
    return a.year - b.year
  })
  return sortedYearAsc
}
//console.log(orderByYear(movies))


//const copyMovies = JSON.parse(JSON.stringify(movies));
//pre-sort by name
//const sortedName = copyMovies.sort();
//const sortedYearAsc = sortedName.sort(function orderByYear(a, b) {
  //return a.year - b.year
//})
//console.log(sortedYearAsc)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles


function orderAlphabetically(arr6) {
  const copyMovies2 = JSON.parse(JSON.stringify(arr6));
  const titles = copyMovies2.sort((a,b) => a.title.localeCompare(b.title));
  const titles20 = titles.map(function(name) {
    return name.title
  });
  return titles20.slice(0,20)
}
//console.log(orderAlphabetically(movies));


//const copyMovies2 = JSON.parse(JSON.stringify(movies));

//const sortedName2 = copyMovies2.sort(function orderAlphabetically(a, b) {
  //return a.title - b.title
//});

//const titles = sortedName2.map(function(name) {
  //return name.title
//});
//console.log(titles.slice(0,20));
//try use localecompare

//problem: here I am getting desc, not asc; when changing the order of a & b, it does not make a difference

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
//function turnHoursToMinutes() {}

function turnHoursToMinutes (){}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
//function bestYearAvg() {}

function     bestYearAvg (){}


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





