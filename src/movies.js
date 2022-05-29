// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {

  return moviesArr.map(movie => movie.director)

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }
  const moviesSteven = movies.filter(element =>
    element.director === "Steven Spielberg");
  const dramaMoviesSteve = moviesSteven.filter(element => element.genre.includes("Drama"))
  return dramaMoviesSteve.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  const scoreArr = [];
  if (movies.length === 0) {
    return 0;
  }
  movies.forEach(element => {
    if (element.score === "") {
      scoreArr.push(0)
    } else if (typeof (element.score) === "number") {
      scoreArr.push(element.score)
    } else {
      scoreArr.push(0)
    }
  });
  const reduceValue = scoreArr.reduce((accumulator, currentValue) => {
    return (accumulator + currentValue)
  }, 0);

  return Number((reduceValue / movies.length).toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let scoreArr = [];
  const dramaMovies = movies.filter(element => element.genre.includes("Drama"))
  dramaMovies.forEach(element => {
    scoreArr.push(element.score);
  })
  const averageDramaMovies = scoreArr.reduce((acc, currentValue) => {
    return acc + currentValue
  }, 0);

  return Number((averageDramaMovies / movies.length).toFixed(2))
}





// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {

  const newMoviesArr = movies.map(element => element);
  
  const orderByYearArray = newMoviesArr.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (a.year < b.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      } else {
        return 0;
      }
    }
  })
  const justYear = orderByYearArray.map(element => element.year)
  const justTitle= orderByYearArray.map(element => element.title)
  return orderByYearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  const newMoviesArr = movies.map(element => element);

  const newOrderArr = newMoviesArr.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else if (a.title < b.title) {
      return -1;
    } else {
      return 0;
    }
  })
  const justTitle= [];
  newOrderArr.forEach(element=> justTitle.push(element.title))
  return newOrderArr.slice(0, 20),justTitle.slice(0,20);
}

/*
// el array a ordenar
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// array temporal contiene objetos con posición y valor de ordenamiento
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// ordenando el array mapeado que contiene los valores reducidos
mapped.sort(function(a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// contenedor para el orden resultante
var result = mapped.map(function(el){
  return list[el.index];
});
*/









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