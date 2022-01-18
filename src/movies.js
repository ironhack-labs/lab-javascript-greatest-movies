// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const directors = movies.map((eachMovie)=>{
    console.log(eachMovie.director)
    return eachMovie.director;
  })
  return directors

}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
//filter () method
  const stevenMovies = movies.filter((eachMovie)=>{
   // movies[i]
    return eachMovie.director === 'Steven Spielberg' && eachMovie.genre.includes('Drama');
  })
  console.log(stevenMovies)

  return stevenMovies.length
}

//Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
// reduce () method
  if (movies.length === 0){
    return 0;
  } else {
    const sumScores= movies.reduce((acc, eachMovie)=>{
      if(eachMovie.score) {
      let result= acc + eachMovie.score;
      return result;
    } else {
      return acc;
    }
  },0);
    return Number((sumScores/movies.length).toFixed(2))
  };

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {

const dramaMovies = movies.filter((eachMovie)=>{
return eachMovie.genre.includes('Drama')
})
if (dramaMovies.length === 0){
return 0
}
const dramaMoviesAvg= dramaMovies.reduce((acc, eachDramaMovie)=>{
return acc + eachDramaMovie.score;
},0)
return Number(parseFloat(dramaMoviesAvg/ dramaMovies.length))
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {

const moviesCopy= JSON.parse(JSON.stringify(movies));
moviesCopy.sort(function (a, b) {

if (a.title > b.title)
{
return 1 }
if (a.title < b.title)
{
return -1 }
if (a.title === b.title)
{
return 0 }
})
moviesCopy.sort(function (a, b) {
if (a.year > b.year)
{
return 1 }
if (a.year < b.year)
{
return -1 }
if (a.year === b.year)
{
return 0 }
})
return moviesCopy
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(){
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
