// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arr) {
  const dirArray = arr.map((elem) => {
    return elem.director
  })
  console.log()
  
  
  let seen = {};
      return dirArray.filter(function(item) {
          return seen.hasOwnProperty(item) ? false : (seen[item] = true);
      });
  
  return seen;
  
    }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(pelis) {
  return arr.filter(mov => mov.director === 'Steven Spielberg' && mov.genre.includes('Drama')).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (!arr.length) {
    return 0
  }   
  const promedioTotal = arr.reduce((acc, valorActual) => {
  return acc + valorActual.score
  }, 0)
  return Number((promedioTotal/arr.length).toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  if (!arr.length) {
    return  0
  }
  const promedioTotal = arr.reduce((acc, valorActual) => {
    if (valorActual.genre.includes('Drama'))
  return acc + valorActual.score
  }, 0)
  return Number((promedioTotal/arr.length).toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  const newSortedArray = arr.slice().sort((a,b)=>{
      return a-b !== 0 ? a.year-b.year : a.title-b.title
  })
    return newSortedArray
}


//todavía no ordena por título, pero debería

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let titles = [];
  arr.forEach(elem => titles.push(elem.title))
  const newSortedArray = titles.sort();
  let titlesArray = newSortedArray.slice(0, 20);
  
    return titlesArray
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  if (!arr.length) {
    return  0
  }

let newArray = [];
arr.forEach(function (horas) {
newArray.push(horas);
})

newArray.forEach(function (minutos) {
minutos.duration = Number(minutos.duration[0])*60 + Number(minutos.duration[3] + minutos.duration[4]) + " minutes";
})
}

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
