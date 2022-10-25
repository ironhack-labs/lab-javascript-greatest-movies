// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)
// const moviesArray = require("./data.js");
// console.log(moviesArray);
let moviesArray = [
  {
    title: "The Godfather: Part II",
    year: 2005,
    director: "Francis Ford Coppola",
    duration: "0h 31min",
    genre: ["Crime", "Drama"],
    score: 8,
  },
  {
    title: "The Godfather",
    year: 1972,
    director: "Francis Ford Coppola",
    duration: "2h 55min",
    genre: ["Crime", "Drama"],
    score: 9.2,
  },
  {
    title: "The Dark Knight",
    year: 2008,
    director: "Christopher Nolan",
    duration: "2h 32min",
    genre: ["Action", "Crime", "Drama", "Thriller"],
    score: 9,
  },
  {
    title: "12 Angry Men",
    year: 2008,
    director: "Sidney Lumet",
    duration: "1h 36min",
    genre: ["Crime", "Drama"],
    score: 8.9,
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2008,
    director: "Peter Jackson",
    duration: "3h 21min",
    genre: ["Adventure", "Drama", "Fantasy"],
    score: 8.9,
  },
  {
    title: 'Schindler"s List',
    year: 1972,
    director: "Steven Spielberg",
    duration: "5h 41min",
    genre: ["Biography", "Drama", "History"],
    score: 8,
  },
  {
    title: "Saving Private Ryan",
    year: 1998,
    director: "Steven Spielberg",
    duration: "2h",
    genre: ["War"],
    score: 8.6,
  },
  {
    title: "AA tale",
    year: 1998,
    director: "Steven Spielberg",
    duration: "2h 49min",
    genre: ["War"],
    score: 8.6,
  },
];
function getAllDirectors(moviesArray) {
  let directorArray = moviesArray.map((elm) => elm.director);
  return directorArray;
}
//console.log(getAllDirectors(moviesArray));

//Iteration 1: Bonus to get unique Directors values
function getAllDirectorsUnique(moviesArray){
return  [...new Set(getAllDirectors(moviesArray))]

}
//console.log(getAllDirectorsUnique(moviesArray));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let count = 0;
  dramaMovies = moviesArray.filter((elm) => {
    if (elm.director == "Steven Spielberg" && elm.genre.includes("Drama"))
      count++;
  });
  return count;
}
//console.log(howManyMovies(moviesArray))

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) return 0;
  let sum = moviesArray.reduce(
    (prev, initial) => prev + (initial.score || 0),
    0
  );
  let avg = (sum / moviesArray.length).toFixed(2);
  return Number(avg);
}
//console.log(scoresAverage(moviesArray))

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  newArr = moviesArray.filter((elm) => {
    return elm.genre.includes("Drama");
  });
  return scoresAverage(newArr)
}
//console.log(dramaMoviesScore(moviesArray));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newArr = moviesArray.map((elm) => elm);
  newArr.sort(function (a, b) {
    if (a.year === b.year) return a.title.localeCompare(b.title);
    else return a.year - b.year;
  });

  return newArr;
}
//console.log(orderByYear(moviesArray));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newArr = moviesArray.map((elm) => elm.title);
  return newArr
    .sort(function (a, b) {
      return a.localeCompare(b);
    })
    .slice(0, 20);
}
//console.log(orderAlphabetically(moviesArray1));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // let newArr = moviesArray.map((elm) => elm);
  let newArr = [...moviesArray];
  return newArr.map((elm) => {
    let minDuration = 0;
    let index = elm.duration.indexOf(" ");
    if (index != -1)
      minDuration =
        Number(elm.duration[0] * 60) +
        Number(elm.duration[index + 1] * 10) +
        Number(elm.duration[index + 2]);
    else minDuration = Number(elm.duration[0] * 60);
    return { ...elm, duration: minDuration };
  });
}
//console.log(turnHoursToMinutes(moviesArray));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
//   //{2009:[scores],2010:[scores]}
//   let yearScoresMapping = {};
//   moviesArray.forEach((element) => {
//     if (!yearScoresMapping[element.year]) {
//       yearScoresMapping[element.year] = [];
//     }
//     yearScoresMapping[element.year].push(element.score);
//   });

//   return yearScoresMapping;
// }
// console.log(bestYearAvg(moviesArray));


// use new set to get array of yrs
// const yrs =[...new Set(moviesArray.mmap(elm=> elm.year))]
// yrs.forEach(yr =>{
//     scoresByYear.push({year,score: scoresAverage})
//})