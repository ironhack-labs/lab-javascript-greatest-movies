
const movies = require('../src/data.js');
// turnHoursToMinutes(movies2);
//console.log( bestYearAvg(movies2));

function getAllDirectors(arr) 
{
  const AllDirectors = arr.map(function(element)
  {
  return element.director
  }
  ) 
  return AllDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const Dramas =  arr.filter(movie => {
    return movie.director === 'Steven Spielberg'&& movie.genre.includes
    ("Drama");
  })
  
    return Dramas.length;
  }


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0){return 0;};
  const scores = arr.reduce(function(accumulator, currentValue)
  {
    if(!currentValue.score){
      currentValue.score = 0;
    };
    return accumulator + currentValue.score
  },0);
  const scoreAverage = scores / arr.length;
  return Number(scoreAverage.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const dramaAvg = arr.filter(movie => {
    return movie.genre.includes('Drama');
  });
  return scoresAverage(dramaAvg);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//a.title.toLowerCase().localeCompare(b.title.toLowerCase())
function orderByYear(arr) {
  const sortMoviesByYear =[arr];
  sortMoviesByYear.sort((a,b)=>{
    if(a.year - b.year == 0){
      if(a.title.toLowerCase() < b.title.toLowerCase()) {return -1;}
      if(a.title.toLowerCase() > b.title.toLowerCase()) {return 1;}
      return 0;
    } 
    else return a.year - b.year;
  });
  return sortMoviesByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const titles = arr.map(function(element)
  {
  return element.title
  }
  ) 
  return titles.sort().slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(arr) {
  const n = arr.map( p =>
    p.title == p.title ? { ...p,duration:convert2min(p.duration.replace("h",":").replace("min",":0"))} : p
  );
  return n;
}

function convert2min(time){
  var a = time.split(":");
  var mins = (+a[0])*60
  let count = (time.match(/:/g) || []).length;
  if (count == 2) {mins = (+a[0])*60+(+a[1]);}
  return parseInt(mins);
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  if (arr.length == 0) return null
  //const n = arr.reduce((a,e) => a = a > e.score ? a : e.score,0);

  const years = arr.map(object => {
    return object.year;
  });
  
  let scores = arr.map(object => {
    return object.score;
  });
  

  const max = Math.max.apply(null, scores);
  var o = new Array();
  o.push("");
  return "The best year was "+years[scores.indexOf(max)]+ " with an average score of " + max;
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
