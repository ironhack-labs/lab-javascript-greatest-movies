// Iteration 1: All directors? - Get the array of all directors.

// version 1
// function getAllDirectors(movies) {
//   return movies.map((movies) => movies.director)
// }

// version 2
//const getAllDirectors = (movies) => [...movies].map(movie => movie.director);


// _Bonus_: How could you "clean" a bit this array and make it unified (without duplicates)?

// BONUS version 1
// function getAllDirectors(movies) {
//   const directorArr = movies.map( movie => movie.director)
//   const filteredDirectorArr = directorArr.filter(director,index){
//     return directorArr.indexOf(director) === 1
//   })
//   return filteredDirectorArr.length
// }



// BONUS version 2
function getAllDirectors(movies) {
  const directorArr = movies.map( movie => movie.director);

  return filteredDirectorArr = directorArr.filter((dir, index) =>  directorArr.indexOf(dir) === index);
}



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const SSmoviesDrama = movies.filter(movie => 
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
  return SSmoviesDrama.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (!movies.length) return 0;
  const sum = movies.reduce((counter, movie) =>{
    if (typeof movie.score !== "number"){movie.score = 0;}
    return counter + movie.score;
    },0);
  return Number((sum/movies.length).toFixed(2));
}



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore (movies) {
  const dramaMovie = movies.filter(movie => movie.genre.includes("Drama"));
  return scoresAverage(dramaMovie);
}

// const dramaMoviesScore = (movies) => {
//   return scoresAverage(movies.filter(movie => {
//     return movie.genre.includes("Drama")
//   }))
// }



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const yearArray = movies.map(movie => movie);
  return yearArray.sort((a,b) => {
    if (a.year === b.year){
      return a.title < b.title ? -1 : 1; 
    } else {
      return a.year < b.year ? -1 : 1;
    }
  });
}




// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (movies) => [...movies].map(m => m.title).sort().slice(0, 20)




// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {
  const moviesCopy = [...movies];
  return moviesCopy.map(m => {
    let hours = m.duration.split("h")[0] * 60;
    let minutes = m.duration.split(" ")[1];
    if (minutes){
      minutes = Number(minutes.slice(0, -3));
    } else {
      minutes = 0;
    }
    m.duration = Number(hours) + Number(minutes);
    return m;
  });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average

function bestYearAvg(movies) {
  if (!movies.length) return null;
  let bestYear = 0;
  let avg = 0;
  const arrAllYears = movies.map(movie => movie.year);

  arrAllYears.forEach(year => {
    let arrOneYear = movies.filter(movie => movie.year === year);

    avg1 = scoresAverage(arrOneYear);
    if (avg1 > avg){ 
      avg = avg1;
      bestYear = year;
    } else if (avg1 === avg){
      avg = avg1;
      bestYear = year;
    }
  })
  return `The best year was ${bestYear} with an average score of ${avg}`;
}











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
