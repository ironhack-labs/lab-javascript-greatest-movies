// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(listAll) {
  const allDirector = listAll.map(function(directores){
    return directores.director;
  });
  /* return allDirector.filter((value, index) => allDirector.indexOf(value) === index); */
  return [...new Set(allDirector)];
}
//console.log(getAllDirectors(movies));
//getAllDirectors(movies);

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(listSteven) {
  moviesWithSteven = listSteven.filter(steven => steven.director === 'Steven Spielberg');
  moviesDramaWith = moviesWithSteven.filter(drama => drama.genre.includes('Drama'));

  return moviesDramaWith.length;
}
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(listAll) {
  avrgScore = listAll.reduce((total,score) => total + score.score / listAll.length ,0)
  return parseFloat(avrgScore.toFixed(2));
};

//console.log(scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(listAll) {
  dramaMovies = listAll.filter(drama => drama.genre.includes('Drama'));
  scoreDrama = dramaMovies.reduce((total,score)=> total + score.score / dramaMovies.length , 0);
  return parseFloat(scoreDrama.toFixed(2));
};
//console.log(dramaMoviesScore(movies))

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(listAll) {
const abcOrder = JSON.parse(JSON.stringify(listAll));
abcOrder.sort(function (a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title  < b.title ) {
    return -1;
  }
  return 0;
});

return abcOrder.sort((a, b) => {
  return a.year - b.year;
});
}
//console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
// 1. colocar em ordem 2.imprimir apenas os 20 primeiros 3. apenas titulos desse array
function orderAlphabetically(listAll) {
  const abcOrder = JSON.parse(JSON.stringify(listAll));
  abcOrder.sort(function (a, b) {
    if (a.title > b.title) {
      return 1;
    }
    if (a.title  < b.title ) {
      return -1;
    }
    return 0;
  });
    if(abcOrder.length > 20){
   abcOrder.splice(20 , abcOrder.length);
  } 
    return abcOrder.map(a => a.title);  
}
/* {
  return {
      title: a.title }
    });  */
//console.log(orderAlphabetically(movies));

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
function countPositivesSumNegatives(arr) {
  if (arr.length < 1){
  return [];
}
  let result = [];
  let negative = 0;
  let positive = 0;
  
for (let i = 0; i < arr.length ; i++){
  if(arr[i] > 0){
  positive = positive + 1;
  }
  else{
   negative = arr[i] + negative;
  }
}
  result.push(negative);
  result.push(positive);
  return result;
  }

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

  console.log(countPositivesSumNegatives(numbers));