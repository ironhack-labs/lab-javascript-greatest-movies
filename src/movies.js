// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(array) {
const directors = array.map(eachFilm => eachFilm.director);
return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// let total = 0
// function howManyMovies(array) {
//   let newarray = array.map(eachFilm => {
//    if(eachFilm.director === 'Steven Spielberg') {
//      let film = eachFilm.genre.filter(drama => drama === "Drama")
//      if(film.length === 1) {
//        total++
//        return total;
//      } else {
//        total = film.length
//        return total;
//      }
//   }
//   })
//   return total
// }

let total = 0
function howManyMovies(array) {
  if(array.length === 0) {return 0;}
  array.forEach(eachFilm => {
    if(eachFilm.director === 'Steven Spielberg') {
       let film = eachFilm.genre.filter(drama => drama === "Drama") 
      //  si film.length === 1 total ++ else, return film.length
         total+= film.length 
        return total;
    } else {
    return 0
  }
  })
  return total
}

// ESTA FUNCIONA :
// let total = 0
// function howManyMovies(array) {
//   array.forEach(eachFilm => {
//     console.log(eachFilm.director)
//     if(eachFilm.director === 'Steven Spielberg') {
//        let film = eachFilm.genre.filter(drama => drama === "Drama")
//        total+= film.length
//        return total
//     } else {
//     return total
//   }
//   })
//   return total
// }



// MIS APUNTES:
// let total = ""
// function howManyMovies(array) {
//   let newarray = array.map(eachFilm => {
//    if(eachFilm.director === 'Steven Spielberg') {
//        let film = eachFilm.genre.filter(drama => drama === "Drama")
//          total += film
//          return {
//            director: eachFilm.director,
//            genre: total,
//          }
//     } else {
//     return 0
//   }
//   })
//   return newarray
// }

// howManyMovies(movies);
// console.log --> [ 0, 0, 0, 0, 0, { director: 'Steven Spielberg', genre: 'Drama' }, 0 ]



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(array) {
  if(array.length === 0) {return 0;}
let total = array.reduce((sum, eachscore) => {
 return (sum + eachscore.score);
}, 0);
total = total/array.length;
return total.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// let total = 0;
// function dramaMoviesScore(arr) {
// if(arr.forEach(film => {
//   film.genre.forEach(genero => {genero === "Drama")}

//   let drama = film.genre.filter(eachgenre => eachgenre === "Drama");
//   d
// })
// return total;
// }

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const comparator = (a, b) => {
  if (a.year > b.year) {
    return 1;
  }
  if (a.year < b.year) {
    return -1;
  }
  return a.title.localeCompare(b.title);
};


function orderByYear(array) {
  const neworder = JSON.parse(JSON.stringify(array));
  neworder.sort(comparator)
  return neworder;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const comparator2 = (a, b) => {
  return a.title.localeCompare(b.title);
}


function orderAlphabetically(array) {
  const neworder = JSON.parse(JSON.stringify(array));
  neworder.sort(comparator2)
  const thefirst20 = neworder.map(title => title.title)
  return thefirst20.slice(0,20);
}


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
